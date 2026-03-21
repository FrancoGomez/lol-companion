import { getItems, getVersion } from '../data/data-service.js'
import { ITEM_IMG, ITEM_CATEGORIES, STAT_NAMES } from '../data/constants.js'
import { el, append, clear, debounce } from '../utilities/utilities.js'
import { openPicker, closePicker } from '../app.js'

let allItems = []
let version = ''
let onSelectCallback = null

export async function openItemPicker(opts = {}) {
  const { onSelect } = opts
  onSelectCallback = onSelect

  if (allItems.length === 0) {
    version = await getVersion()
    const raw = await getItems()
    const rawList = Object.entries(raw)
      .map(([id, item]) => ({ id, ...item }))
      .filter(item => !item.removed && !item.requiredChampion && item.inStore !== false && (item.shop?.prices?.total || 0) > 0)
      .sort((a, b) => (a.name || '').localeCompare(b.name || ''))

    // Deduplicate by name — keep highest cost version
    const seen = new Map()
    for (const item of rawList) {
      const existing = seen.get(item.name)
      if (!existing || (item.shop?.prices?.total || 0) > (existing.shop?.prices?.total || 0)) {
        seen.set(item.name, item)
      }
    }
    allItems = [...seen.values()].sort((a, b) => (a.name || '').localeCompare(b.name || ''))
  }

  openPicker()
  setupPicker()
}

function setupPicker() {
  const searchInput = document.getElementById('picker-search')
  const filtersContainer = document.getElementById('picker-filters')
  const grid = document.getElementById('picker-grid')

  clear(filtersContainer)
  let activeFilter = null

  const allBtn = el('button', {
    cls: 'filter-btn active',
    text: 'Todos',
    on: { click: () => { activeFilter = null; setActiveBtn(allBtn); renderPickerGrid() } }
  })
  append(filtersContainer, allBtn)

  ITEM_CATEGORIES.slice(0, 10).forEach(cat => {
    const btn = el('button', {
      cls: 'filter-btn',
      text: cat.label,
      on: { click: () => { activeFilter = cat.key; setActiveBtn(btn); renderPickerGrid() } }
    })
    append(filtersContainer, btn)
  })

  function setActiveBtn(active) {
    filtersContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'))
    active.classList.add('active')
  }

  function matchesCategory(item, category) {
    const stats = item.stats || {}
    switch (category) {
      case 'damage': return stats.attackDamage > 0
      case 'criticalStrike': return stats.criticalStrikeChance > 0
      case 'attackSpeed': return stats.attackSpeed > 0
      case 'armorPenetration': return stats.lethality > 0 || stats.percentArmorPenetration > 0
      case 'spellDamage': return stats.abilityPower > 0
      case 'magicPenetration': return stats.flatMagicPenetration > 0 || stats.percentMagicPenetration > 0
      case 'mana': return stats.mana > 0
      case 'health': return stats.health > 0
      case 'armor': return stats.armor > 0
      case 'magicResistance': return stats.magicResistance > 0
      default: return true
    }
  }

  function renderPickerGrid() {
    const query = searchInput.value.toLowerCase().trim()
    const filtered = allItems.filter(item => {
      const matchName = (item.name || '').toLowerCase().includes(query)
      const matchCat = !activeFilter || matchesCategory(item, activeFilter)
      return matchName && matchCat
    })

    clear(grid)
    filtered.forEach(item => {
      const pickerItem = el('div', {
        cls: 'picker-item',
        on: {
          click: () => {
            onSelectCallback?.(item)
            closePicker()
          }
        }
      })

      const img = el('img', {
        attrs: { src: ITEM_IMG(version, item.id), alt: item.name || '', loading: 'lazy' },
        style: { borderRadius: '4px' }
      })
      const name = el('span', { text: item.name || '' })
      append(pickerItem, img, name)
      append(grid, pickerItem)
    })
  }

  // Reset search value and attach listener
  searchInput.value = ''
  searchInput._handler && searchInput.removeEventListener('input', searchInput._handler)
  searchInput._handler = debounce(renderPickerGrid, 200)
  searchInput.addEventListener('input', searchInput._handler)
  searchInput.focus()

  renderPickerGrid()
}
