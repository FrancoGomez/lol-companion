import { getDDragonChampionDetail, getVersion } from '../data/data-service.js'
import { ITEM_IMG } from '../data/constants.js'
import { t } from '../data/i18n.js'
import { el, append, clear, statAtLevel } from '../utilities/utilities.js'
import { openItemPicker } from './item-picker.js'

/**
 * Creates an item builder section for the given champion
 */
export function createItemBuilder(opts = {}) {
  const { onStatsChange } = opts
  let champion = null
  let champStats = null // DDragon stats object
  let items = [null, null, null, null, null, null]
  let level = 11

  const section = el('div', { cls: 'item-builder-section' })
  const header = el('div', { cls: 'section-header' })
  append(header, el('h3', { text: t('build'), style: { color: 'var(--gold)' } }))
  append(section, header)

  // Level selector
  const levelRow = el('div', { cls: 'level-slider-container' })
  const levelLabel = el('label', { text: t('level') })
  const levelDisplay = el('span', { cls: 'level-display', text: String(level) })
  const levelSlider = el('input', {
    cls: 'level-slider',
    attrs: { type: 'range', min: '1', max: '18', value: String(level) },
    on: { input: () => { level = parseInt(levelSlider.value); levelDisplay.textContent = level; recalcStats() } }
  })
  append(levelRow, levelLabel, levelSlider, levelDisplay)
  append(section, levelRow)

  // Item slots
  const slotsRow = el('div', { cls: 'item-slots' })
  const slotElements = []

  for (let i = 0; i < 6; i++) {
    const slot = el('div', { cls: 'item-slot empty', html: '+' })
    slot.addEventListener('click', () => {
      if (items[i]) return
      openItemPicker({ onSelect: (item) => setItem(i, item) })
    })
    slotElements.push(slot)
    append(slotsRow, slot)
  }
  append(section, slotsRow)

  // Gold total
  const goldRow = el('div', {
    style: { fontSize: '0.8rem', color: 'var(--gold)', marginTop: '8px', fontWeight: '600' }
  })
  append(section, goldRow)

  // Live stats panel
  const statsPanel = el('div', { cls: 'live-stats' })
  append(section, statsPanel)

  function setItem(index, item) {
    items[index] = item
    renderSlot(index)
    recalcStats()
  }

  function removeItem(index) {
    items[index] = null
    renderSlot(index)
    recalcStats()
  }

  function renderSlot(index) {
    const slot = slotElements[index]
    const item = items[index]
    clear(slot)
    slot.className = item ? 'item-slot filled' : 'item-slot empty'

    if (item) {
      getVersion().then(v => {
        const img = el('img', { attrs: { src: ITEM_IMG(v, item.id), alt: item.name || '' } })
        append(slot, img)
        const removeBtn = el('button', {
          cls: 'remove-btn',
          text: 'x',
          on: { click: (e) => { e.stopPropagation(); removeItem(index) } }
        })
        append(slot, removeBtn)
      })
    } else {
      slot.innerHTML = '+'
      slot.addEventListener('click', () => {
        if (!items[index]) {
          openItemPicker({ onSelect: (item) => setItem(index, item) })
        }
      }, { once: true })
    }
  }

  function getBaseStats() {
    if (!champStats) return {}
    const s = champStats
    const base = {}

    // DDragon stat keys
    base.health = statAtLevel(s.hp, s.hpperlevel || 0, level)
    base.mana = statAtLevel(s.mp, s.mpperlevel || 0, level)
    base.armor = statAtLevel(s.armor, s.armorperlevel || 0, level)
    base.magicResistance = statAtLevel(s.spellblock, s.spellblockperlevel || 0, level)
    base.attackDamage = statAtLevel(s.attackdamage, s.attackdamageperlevel || 0, level)
    // Attack speed: base * (1 + bonus%/100 * growthFactor)
    const asGrowth = (level - 1) * (0.7025 + 0.0175 * (level - 1))
    base.attackSpeed = s.attackspeed * (1 + ((s.attackspeedperlevel || 0) / 100) * asGrowth)
    base.movespeed = s.movespeed
    base.attackRange = s.attackrange

    return base
  }

  function getItemBonuses() {
    const bonus = {}
    items.forEach(item => {
      if (!item?.stats) return
      Object.entries(item.stats).forEach(([key, val]) => {
        if (!val) return
        bonus[key] = (bonus[key] || 0) + val
      })
    })
    return bonus
  }

  function recalcStats() {
    const base = getBaseStats()
    const bonus = getItemBonuses()

    // Gold total
    const totalGold = items.reduce((sum, item) => sum + (item?.shop?.prices?.total || 0), 0)
    goldRow.textContent = totalGold > 0 ? `${t('goldTotal')}: ${totalGold}` : ''

    // Render live stats
    clear(statsPanel)

    if (!champion) {
      append(statsPanel, el('div', {
        cls: 'empty-state',
        text: t('selectChampion'),
        style: { gridColumn: '1/-1' }
      }))
      return
    }

    const displayStats = [
      { key: 'health', label: t('statHealth') },
      { key: 'mana', label: t('statMana') },
      { key: 'attackDamage', label: t('shortAD') },
      { key: 'abilityPower', label: t('shortAP'), baseVal: 0 },
      { key: 'attackSpeed', label: t('shortAS'), isAS: true },
      { key: 'armor', label: t('shortArmor') },
      { key: 'magicResistance', label: t('shortMR') },
      { key: 'abilityHaste', label: t('shortAH'), baseVal: 0 },
      { key: 'criticalStrikeChance', label: t('shortCrit'), isPercent: true, baseVal: 0 },
      { key: 'lethality', label: t('shortLethality'), baseVal: 0 },
      { key: 'flatMagicPenetration', label: t('shortMagicPen'), baseVal: 0 },
      { key: 'movespeed', label: t('shortMS') },
    ]

    displayStats.forEach(({ key, label, isPercent, isAS, baseVal }) => {
      const baseRaw = baseVal !== undefined ? baseVal : (base[key] || 0)
      const bonusRaw = bonus[key] || 0

      if (isAS) {
        const baseAS = base.attackSpeed || 0.625
        const bonusAS = bonusRaw // stored as decimal like 0.35
        const total = baseAS * (1 + bonusAS)
        renderLiveStat(label, fmtAS(baseAS), bonusAS > 0 ? `+${fmtAS(total - baseAS)}` : '', fmtAS(total))
        return
      }

      if (isPercent) {
        const baseP = Math.round(baseRaw * 100)
        const bonusP = Math.round(bonusRaw * 100)
        renderLiveStat(label, `${baseP}%`, bonusP > 0 ? `+${bonusP}%` : '', `${baseP + bonusP}%`)
      } else {
        const b = Math.round(baseRaw)
        const bn = Math.round(bonusRaw)
        renderLiveStat(label, String(b), bn > 0 ? `+${bn}` : '', String(b + bn))
      }
    })

    // HP efectiva
    const totalHP = (base.health || 0) + (bonus.health || 0)
    const totalArmor = (base.armor || 0) + (bonus.armor || 0)
    const totalMR = (base.magicResistance || 0) + (bonus.magicResistance || 0)
    const ehpPhys = Math.round(totalHP * (1 + totalArmor / 100))
    const ehpMagic = Math.round(totalHP * (1 + totalMR / 100))

    append(statsPanel, el('div', {
      cls: 'live-stat',
      style: { gridColumn: '1/-1', borderTop: '1px solid var(--border)', paddingTop: '8px', marginTop: '4px' },
      children: [
        el('span', { cls: 'live-stat-name', text: t('ehpPhysical') }),
        el('span', { cls: 'live-stat-total', text: String(ehpPhys) })
      ]
    }))
    append(statsPanel, el('div', {
      cls: 'live-stat',
      style: { gridColumn: '1/-1' },
      children: [
        el('span', { cls: 'live-stat-name', text: t('ehpMagical') }),
        el('span', { cls: 'live-stat-total', text: String(ehpMagic) })
      ]
    }))

    onStatsChange?.({ base, bonus, level, items: items.filter(Boolean), totalGold })
  }

  function renderLiveStat(label, baseStr, bonusStr, totalStr) {
    const stat = el('div', { cls: 'live-stat' })
    append(stat, el('span', { cls: 'live-stat-name', text: label }))
    const valueContainer = el('span')
    append(valueContainer, el('span', { cls: 'live-stat-base', text: baseStr }))
    if (bonusStr) {
      append(valueContainer, el('span', { cls: 'live-stat-bonus', text: ` ${bonusStr}` }))
    }
    append(valueContainer, el('span', { cls: 'live-stat-total', text: ` = ${totalStr}` }))
    append(stat, valueContainer)
    append(statsPanel, stat)
  }

  function fmtAS(val) { return val.toFixed(2) }

  async function setChampion(champ) {
    champion = champ
    if (champ) {
      try {
        const detail = await getDDragonChampionDetail(champ.id)
        champStats = detail?.stats || null
      } catch {
        champStats = null
      }
    } else {
      champStats = null
    }
    recalcStats()
  }

  function getItems() { return items.filter(Boolean) }
  function getLevel() { return level }
  function getChampion() { return champion }

  recalcStats()

  return {
    element: section,
    setChampion,
    getItems,
    getLevel,
    getChampion,
    getBaseStats,
    getItemBonuses,
    recalcStats
  }
}
