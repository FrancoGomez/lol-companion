import { getItems, getVersion } from '../data/data-service.js'
import { ITEM_IMG, ITEM_CATEGORIES, GOLD_VALUES, STAT_NAMES } from '../data/constants.js'
import { t } from '../data/i18n.js'
import { el, append, clear, spinner, formatGold } from '../utilities/utilities.js'
import { openItemModal } from './item-modal.js'

let initialized = false
let allItems = []
let itemsMap = {}
let version = ''
let activeCategoryFilter = null

const container = document.getElementById('tab-items')

export function reset() { initialized = false }

export async function init() {
  if (initialized) return
  initialized = true

  clear(container)
  append(container, spinner())

  try {
    version = await getVersion()
    itemsMap = await getItems()
    allItems = Object.values(itemsMap)
      .filter(item => item.inStore && !item.requiredChampion && (item.shop?.prices?.total || 0) > 0)
      .sort((a, b) => (a.name || '').localeCompare(b.name || ''))

    // Deduplicate by name — keep highest cost version
    const seen = new Map()
    allItems = allItems.filter(item => {
      const existing = seen.get(item.name)
      if (!existing || (item.shop?.prices?.total || 0) > (existing.shop?.prices?.total || 0)) {
        seen.set(item.name, item)
        return true
      }
      return false
    })
    // Re-filter to keep only the winners
    const winners = new Set([...seen.values()].map(i => i.id))
    allItems = allItems.filter(i => winners.has(i.id))

    render()
  } catch (err) {
    clear(container)
    append(container, el('div', { cls: 'empty-state', text: `${t('errorItems')}: ${err.message}` }))
  }
}

function render() {
  clear(container)

  const filterBar = el('div', { cls: 'filter-bar' })
  const catLabels = ['catDamage','catCrit','catAS','catOnHit','catArmorPen','catAP','catMagicPen','catMana','catHealth','catArmor','catMR','catLifeSteal','catCDR','catMS','catBoots']
  const allBtn = el('button', { cls: 'filter-btn active', text: t('filterAll'), on: { click: () => setFilter(null, allBtn) } })
  append(filterBar, allBtn)

  ITEM_CATEGORIES.forEach((cat, idx) => {
    const btn = el('button', {
      cls: 'filter-btn',
      text: t(catLabels[idx]) || cat.label,
      on: { click: () => setFilter(cat.key, btn) }
    })
    append(filterBar, btn)
  })

  const grid = el('div', { cls: 'card-grid' })

  append(container, filterBar, grid)

  function setFilter(cat, btn) {
    activeCategoryFilter = cat
    filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'))
    btn.classList.add('active')
    renderGrid()
  }

  const renderGrid = () => {
    const filtered = allItems.filter(item => {
      const matchCat = !activeCategoryFilter || matchesCategory(item, activeCategoryFilter)
      return matchCat
    })

    clear(grid)
    if (filtered.length === 0) {
      append(grid, el('div', { cls: 'no-results', text: t('noItems') }))
      return
    }

    filtered.forEach(item => {
      const card = el('div', {
        cls: 'card',
        on: { click: () => openItemModal(item, version, itemsMap) }
      })

      const img = el('img', {
        cls: 'card-img',
        attrs: { src: ITEM_IMG(version, item.id), alt: item.name || '', loading: 'lazy' },
        style: { borderRadius: '8px' }
      })

      const name = el('div', { cls: 'card-name', text: item.name || 'Unknown' })
      const cost = el('div', { cls: 'card-cost', text: `${item.shop?.prices?.total || 0} ${t('gold')}` })

      const statsPreview = el('div', { cls: 'card-stats-preview' })
      const topStats = getTopStats(item, 3)
      topStats.forEach(s => {
        append(statsPreview, el('div', { text: s }))
      })

      append(card, img, name, cost, statsPreview)
      append(grid, card)
    })
  }

  renderGrid()
}

function matchesCategory(item, category) {
  const stats = item.stats || {}
  const tags = item.shop?.tags || []
  const name = (item.name || '').toLowerCase()

  switch (category) {
    case 'damage': return stats.attackDamage > 0
    case 'criticalStrike': return stats.criticalStrikeChance > 0
    case 'attackSpeed': return stats.attackSpeed > 0
    case 'onHit': return tags.includes('OnHit') || name.includes('on-hit')
    case 'armorPenetration': return stats.lethality > 0 || stats.percentArmorPenetration > 0
    case 'spellDamage': return stats.abilityPower > 0
    case 'magicPenetration': return stats.flatMagicPenetration > 0 || stats.percentMagicPenetration > 0
    case 'mana': return stats.mana > 0
    case 'health': return stats.health > 0
    case 'armor': return stats.armor > 0
    case 'magicResistance': return stats.magicResistance > 0
    case 'lifeSteal': return stats.lifeSteal > 0 || stats.omnivamp > 0
    case 'cooldownReduction': return stats.abilityHaste > 0
    case 'movementSpeed': return stats.movespeed > 0 || stats.percentMovespeed > 0
    case 'boots': return tags.includes('Boots') || name.includes('bota') || name.includes('boot')
    default: return true
  }
}

function getTopStats(item, count) {
  const stats = item.stats || {}
  const result = []
  const priority = ['attackDamage', 'abilityPower', 'health', 'armor', 'magicResistance',
    'attackSpeed', 'criticalStrikeChance', 'abilityHaste', 'lethality', 'mana', 'movespeed']

  for (const key of priority) {
    if (result.length >= count) break
    const val = stats[key]
    if (val && val !== 0) {
      const name = STAT_NAMES[key] || key
      const isPercent = ['attackSpeed', 'criticalStrikeChance', 'percentMovespeed', 'lifeSteal', 'omnivamp'].includes(key)
      const display = isPercent
        ? `+${Math.round(val * 100)}% ${name}`
        : `+${Math.round(val)} ${name}`
      result.push(display)
    }
  }
  return result
}

export function calculateGoldEfficiency(item) {
  const stats = item.stats || {}
  const totalCost = item.shop?.prices?.total || 0
  if (totalCost <= 0) return 0

  let statValue = 0
  Object.entries(stats).forEach(([key, val]) => {
    if (!val) return
    const goldPer = GOLD_VALUES[key] || 0
    if (goldPer <= 0) return
    const isPercent = ['attackSpeed', 'criticalStrikeChance', 'lifeSteal', 'omnivamp', 'percentMovespeed'].includes(key)
    statValue += Math.abs(isPercent ? val * 100 : val) * goldPer
  })

  return (statValue / totalCost) * 100
}
