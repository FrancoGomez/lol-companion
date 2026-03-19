import { CHAMPION_IMG } from '../data/constants.js'
import { t } from '../data/i18n.js'
import { el, append, clear, statAtLevel } from '../utilities/utilities.js'

/**
 * Creates a damage calculator panel
 * Shows DPS and time-to-kill vs each enemy
 */
export function createDamageCalculator() {
  const panel = el('div', { cls: 'reco-panel' })
  append(panel, el('h3', { text: t('damageVsEnemies') }))
  const content = el('div')
  const alertsContainer = el('div')
  append(panel, alertsContainer, content)

  let version = ''

  async function update(ctx) {
    const { base, bonus, enemies, enemyData, level } = ctx

    clear(content)
    clear(alertsContainer)

    if (!base || enemies.length === 0) {
      append(content, el('div', { cls: 'empty-state', text: t('addEnemies') }))
      return
    }

    const { getVersion } = await import('../data/data-service.js')
    if (!version) version = await getVersion()

    // Calculate own offensive stats
    const totalAD = (base.attackDamage || 0) + (bonus.attackDamage || 0)
    const baseAS = base.attackSpeed || 0.625
    const bonusAS = bonus.attackSpeed || 0
    const totalAS = Math.min(baseAS * (1 + bonusAS), 2.5)
    const critChance = Math.min(bonus.criticalStrikeChance || 0, 1)
    const critDmg = 1.75
    const lethality = bonus.lethality || 0
    const armorPenPercent = bonus.percentArmorPenetration || 0

    enemies.forEach(enemy => {
      if (!enemy) return

      // Estimate enemy armor at level
      const enemyArmor = estimateEnemyArmor(enemy, level)

      // Apply pen
      const armorAfterPercent = enemyArmor * (1 - armorPenPercent)
      const effectiveArmor = Math.max(0, armorAfterPercent - lethality)

      // Damage multiplier
      const dmgMultiplier = 100 / (100 + effectiveArmor)

      // DPS
      const avgAuto = totalAD * (1 - critChance) + (totalAD * critDmg) * critChance
      const physDPS = avgAuto * totalAS * dmgMultiplier

      // Estimated enemy HP at level
      const enemyHP = estimateEnemyHP(enemy, level)
      const timeToKill = enemyHP / physDPS

      const row = el('div', { cls: 'dmg-row' })
      const img = el('img', { attrs: { src: CHAMPION_IMG(version, enemy.id), alt: enemy.name } })
      const name = el('span', { cls: 'dmg-name', text: enemy.name })
      const dpsEl = el('span', { cls: 'dmg-value', text: `${Math.round(physDPS)} DPS` })
      const ttkEl = el('span', {
        style: { fontSize: '0.7rem', color: 'var(--text-secondary)', minWidth: '60px', textAlign: 'right' },
        text: `~${timeToKill.toFixed(1)}s`
      })

      append(row, img, name, dpsEl, ttkEl)
      append(content, row)
    })

    // Alerts
    const avgArmor = enemies.reduce((sum, e) => sum + estimateEnemyArmor(e, level), 0) / enemies.length
    if (avgArmor > 150 && !armorPenPercent && !lethality) {
      append(alertsContainer, el('div', {
        cls: 'alert-badge danger',
        text: t('highArmorWarning'),
        style: { display: 'block', marginBottom: '8px' }
      }))
    }
  }

  return { element: panel, update }
}

function estimateEnemyArmor(enemy, level) {
  // Base estimates by class
  const tags = enemy.tags || []
  let base = 30
  let perLvl = 4.2
  if (tags.includes('Tank')) { base = 40; perLvl = 5 }
  if (tags.includes('Fighter')) { base = 35; perLvl = 4.5 }
  if (tags.includes('Mage') || tags.includes('Support')) { base = 25; perLvl = 3.8 }
  if (tags.includes('Marksman')) { base = 24; perLvl = 3.5 }
  return statAtLevel(base, perLvl, level)
}

function estimateEnemyHP(enemy, level) {
  const tags = enemy.tags || []
  let base = 600
  let perLvl = 95
  if (tags.includes('Tank')) { base = 650; perLvl = 110 }
  if (tags.includes('Fighter')) { base = 620; perLvl = 100 }
  if (tags.includes('Marksman') || tags.includes('Mage')) { base = 560; perLvl = 90 }
  return statAtLevel(base, perLvl, level)
}
