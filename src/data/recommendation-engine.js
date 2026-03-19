import { GOLD_VALUES, SYNERGY_GROUPS } from './constants.js'
import { t } from './i18n.js'

/**
 * Score and rank item candidates for the current build context.
 *
 * @param {Object} ctx - { champion, merakiData, currentItems, enemies, enemyItems, allItems }
 * @returns {Array<{ item, score, reasons }>} sorted descending by score
 */
export function getRecommendations(ctx) {
  const { champion, currentItems = [], enemies = [], allItems = {} } = ctx

  const candidates = Object.entries(allItems)
    .map(([id, item]) => ({ id, ...item }))
    .filter(item =>
      !item.removed &&
      !item.requiredChampion &&
      item.inStore !== false &&
      (item.shop?.prices?.total || 0) >= 1000 && // Only completed items
      !currentItems.some(ci => ci.id === item.id || ci.id === id) // Not already owned
    )

  const currentStatProfile = buildStatProfile(currentItems)
  const champScalings = getChampScalings(champion)
  const enemyProfile = buildEnemyProfile(enemies)

  const scored = candidates.map(item => {
    const reasons = []
    let score = 0

    // 1. Gold efficiency (15%)
    const eff = calcGoldEfficiency(item)
    const effScore = Math.min(eff / 100, 1.5) * 15
    score += effScore
    if (eff >= 120) reasons.push(t('highGoldEff')(Math.round(eff)))

    // 2. Champion synergy (30%)
    const synScore = calcChampSynergy(item, champScalings) * 30
    score += synScore
    if (synScore > 15) reasons.push(getSynergyReason(item, champScalings))

    // 3. Build synergy (25%)
    const buildSyn = calcBuildSynergy(item, currentStatProfile) * 25
    score += buildSyn
    if (buildSyn > 12) reasons.push(getBuildSynergyReason(item, currentStatProfile))

    // 4. Counter-building (25%)
    const counter = calcCounterScore(item, enemyProfile) * 25
    score += counter
    if (counter > 10) reasons.push(getCounterReason(item, enemyProfile))

    // 5. Diminishing returns penalty (-5%)
    const dimPenalty = calcDiminishingPenalty(item, currentStatProfile) * 5
    score -= dimPenalty

    return { item, score: Math.max(0, score), reasons: reasons.filter(Boolean) }
  })

  return scored.sort((a, b) => b.score - a.score).slice(0, 10)
}

/**
 * Calculate power spike: DPS delta when adding an item
 */
export function calculatePowerSpike(base, bonus, newItem, level) {
  const dpsBefore = calcDPS(base, bonus)
  const newBonus = { ...bonus }
  if (newItem?.stats) {
    Object.entries(newItem.stats).forEach(([k, v]) => {
      if (v) newBonus[k] = (newBonus[k] || 0) + v
    })
  }
  const dpsAfter = calcDPS(base, newBonus)
  const delta = dpsBefore > 0 ? ((dpsAfter - dpsBefore) / dpsBefore) * 100 : 0
  return { dpsBefore, dpsAfter, delta }
}

function calcDPS(base, bonus) {
  const ad = (base.attackDamage || 0) + (bonus.attackDamage || 0)
  const baseAS = base.attackSpeed || 0.625
  const bonusAS = bonus.attackSpeed || 0
  const totalAS = Math.min(baseAS * (1 + bonusAS), 2.5)
  const critChance = Math.min((bonus.criticalStrikeChance || 0), 1)
  const critDmg = 1.75 // Default crit multiplier

  const avgAuto = ad * (1 - critChance) + (ad * critDmg) * critChance
  return avgAuto * totalAS
}

function calcGoldEfficiency(item) {
  const stats = item.stats || {}
  const cost = item.shop?.prices?.total || 1
  let value = 0
  Object.entries(stats).forEach(([key, val]) => {
    if (!val) return
    const goldPer = GOLD_VALUES[key] || 0
    if (goldPer <= 0) return
    const isPercent = ['attackSpeed', 'criticalStrikeChance', 'lifeSteal', 'omnivamp', 'percentMovespeed'].includes(key)
    value += Math.abs(isPercent ? val * 100 : val) * goldPer
  })
  return (value / cost) * 100
}

function getChampScalings(champion) {
  const scalings = { ad: 0, ap: 0, as: 0, tank: 0 }
  if (!champion?.tags) return scalings

  const tags = champion.tags
  // Derive scaling profile from champion tags
  if (tags.includes('Marksman')) { scalings.ad = 0.6; scalings.as = 0.3 }
  if (tags.includes('Assassin')) { scalings.ad = Math.max(scalings.ad, 0.5) }
  if (tags.includes('Fighter')) { scalings.ad = Math.max(scalings.ad, 0.4); scalings.tank = 0.2 }
  if (tags.includes('Mage')) { scalings.ap = 0.7 }
  if (tags.includes('Support')) { scalings.ap = Math.max(scalings.ap, 0.3) }
  if (tags.includes('Tank')) { scalings.tank = 0.6; scalings.ad = Math.max(scalings.ad, 0.1) }

  // Normalize
  const total = scalings.ad + scalings.ap + scalings.as + scalings.tank + 0.01
  scalings.ad /= total
  scalings.ap /= total
  scalings.as /= total
  scalings.tank /= total

  return scalings
}

function calcChampSynergy(item, scalings) {
  const stats = item.stats || {}
  let score = 0
  if (stats.attackDamage && scalings.ad > 0.2) score += scalings.ad * 0.6
  if (stats.abilityPower && scalings.ap > 0.2) score += scalings.ap * 0.6
  if (stats.attackSpeed && (scalings.ad > 0.2 || scalings.as > 0.1)) score += 0.3
  if (stats.criticalStrikeChance && scalings.ad > 0.3) score += 0.4
  if (stats.lethality && scalings.ad > 0.3) score += 0.3
  if (stats.flatMagicPenetration && scalings.ap > 0.2) score += 0.3
  if ((stats.health || stats.armor || stats.magicResistance) && scalings.tank > 0.2) score += scalings.tank * 0.5
  return Math.min(score, 1)
}

function getSynergyReason(item, scalings) {
  const stats = item.stats || {}
  if (stats.abilityPower && scalings.ap > 0.3) return t('synergyAP')
  if (stats.attackDamage && scalings.ad > 0.3) return t('synergyAD')
  if (stats.criticalStrikeChance) return t('synergyAuto')
  return t('synergyCampeon')
}

function buildStatProfile(items) {
  const profile = { groups: {}, stats: {} }
  items.forEach(item => {
    if (!item?.stats) return
    Object.entries(item.stats).forEach(([k, v]) => {
      if (v) profile.stats[k] = (profile.stats[k] || 0) + v
    })
  })

  // Determine active synergy groups
  Object.entries(SYNERGY_GROUPS).forEach(([groupKey, group]) => {
    const matching = group.stats.filter(s => (profile.stats[s] || 0) > 0)
    if (matching.length >= 2) profile.groups[groupKey] = true
  })

  return profile
}

function calcBuildSynergy(item, profile) {
  const stats = item.stats || {}
  let score = 0

  Object.entries(SYNERGY_GROUPS).forEach(([groupKey, group]) => {
    if (!profile.groups[groupKey]) return
    const itemContributes = group.stats.some(s => stats[s] > 0)
    if (itemContributes) score += 0.3
  })

  return Math.min(score, 1)
}

function getBuildSynergyReason(item, profile) {
  const stats = item.stats || {}
  const groupLabelKeys = { crit: 'groupCrit', lethality: 'groupLethality', apBurst: 'groupAPBurst', tank: 'groupTank', bruiser: 'groupBruiser', onHit: 'groupOnHit', enchanter: 'groupEnchanter' }
  for (const [groupKey, group] of Object.entries(SYNERGY_GROUPS)) {
    if (!profile.groups[groupKey]) continue
    if (group.stats.some(s => stats[s] > 0)) {
      return t('synergyBuild')(t(groupLabelKeys[groupKey]) || group.label)
    }
  }
  return t('complementBuild')
}

function buildEnemyProfile(enemies) {
  const profile = { tanks: 0, squishies: 0, ap: 0, ad: 0, healers: 0, count: enemies.length }
  enemies.forEach(e => {
    if (!e?.tags) return
    if (e.tags.includes('Tank') || e.tags.includes('Fighter')) profile.tanks++
    if (e.tags.includes('Assassin') || e.tags.includes('Marksman')) profile.squishies++
    if (e.tags.includes('Mage') || e.tags.includes('Support')) profile.ap++
    if (e.tags.includes('Fighter') || e.tags.includes('Assassin') || e.tags.includes('Marksman')) profile.ad++
    if (e.tags.includes('Support')) profile.healers++
  })
  return profile
}

function calcCounterScore(item, enemyProfile) {
  if (enemyProfile.count === 0) return 0
  const stats = item.stats || {}
  let score = 0

  // Armor pen vs tanks
  if ((stats.percentArmorPenetration || stats.lethality) && enemyProfile.tanks > 0) {
    score += 0.3 * (enemyProfile.tanks / enemyProfile.count)
  }
  // Magic pen vs AP heavy
  if (stats.flatMagicPenetration && enemyProfile.tanks > 0) {
    score += 0.2
  }
  // Armor vs AD enemies
  if (stats.armor && enemyProfile.ad > 2) {
    score += 0.3
  }
  // MR vs AP enemies
  if (stats.magicResistance && enemyProfile.ap > 1) {
    score += 0.3
  }
  // HP vs mixed damage
  if (stats.health && enemyProfile.count > 3) {
    score += 0.15
  }

  return Math.min(score, 1)
}

function getCounterReason(item, enemyProfile) {
  const stats = item.stats || {}
  if ((stats.percentArmorPenetration || stats.lethality) && enemyProfile.tanks > 0)
    return t('penVsTanks')(enemyProfile.tanks)
  if (stats.armor && enemyProfile.ad > 2)
    return t('armorVsAD')(enemyProfile.ad)
  if (stats.magicResistance && enemyProfile.ap > 1)
    return t('mrVsAP')(enemyProfile.ap)
  return t('counterComp')
}

function calcDiminishingPenalty(item, profile) {
  const stats = item.stats || {}
  let penalty = 0

  // Penalty for stacking same stats too high
  Object.entries(stats).forEach(([key, val]) => {
    if (!val) return
    const existing = profile.stats[key] || 0
    // If already have a lot of this stat, penalty
    if (key === 'criticalStrikeChance' && existing >= 0.75) penalty += 0.5
    if (key === 'attackSpeed' && existing >= 0.8) penalty += 0.3
    if (key === 'abilityHaste' && existing >= 80) penalty += 0.3
  })

  return Math.min(penalty, 1)
}

/**
 * Get anti-synergy warnings
 */
export function getAntiSynergies(items) {
  const warnings = []
  const stats = {}
  items.forEach(item => {
    if (!item?.stats) return
    Object.entries(item.stats).forEach(([k, v]) => {
      if (v) stats[k] = (stats[k] || 0) + v
    })
  })

  if (stats.lethality > 0 && stats.criticalStrikeChance > 0.2) {
    warnings.push(t('antiSynergyLethCrit'))
  }
  if (stats.attackDamage > 30 && stats.abilityPower > 50) {
    warnings.push(t('antiSynergyADAPMix'))
  }

  return warnings
}
