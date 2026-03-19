import { getChampions, getVersion } from '../data/data-service.js'
import { CHAMPION_IMG, ROLES, ROLE_LIST } from '../data/constants.js'
import { el, append, clear, debounce } from '../utilities/utilities.js'
import { openPicker, closePicker } from '../app.js'

let allChampions = []
let version = ''
let onSelectCallback = null
let disabledIds = new Set()
let counterTips = {}

export async function openChampionPicker(opts = {}) {
  const { onSelect, disabled = [], counters = {} } = opts
  onSelectCallback = onSelect
  disabledIds = new Set(disabled)
  counterTips = counters

  if (allChampions.length === 0) {
    version = await getVersion()
    const data = await getChampions()
    allChampions = Object.values(data).sort((a, b) => a.name.localeCompare(b.name))
  }

  openPicker()
  setupPicker()
}

function setupPicker() {
  const searchInput = document.getElementById('picker-search')
  const filtersContainer = document.getElementById('picker-filters')
  const grid = document.getElementById('picker-grid')

  // Filters
  clear(filtersContainer)
  let activeFilter = null

  const allBtn = el('button', {
    cls: 'filter-btn active',
    text: 'Todos',
    on: { click: () => { activeFilter = null; setActiveBtn(allBtn); renderPickerGrid() } }
  })
  append(filtersContainer, allBtn)

  ROLE_LIST.forEach(role => {
    const btn = el('button', {
      cls: 'filter-btn',
      text: ROLES[role].label,
      on: { click: () => { activeFilter = role; setActiveBtn(btn); renderPickerGrid() } }
    })
    append(filtersContainer, btn)
  })

  function setActiveBtn(active) {
    filtersContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'))
    active.classList.add('active')
  }

  function renderPickerGrid() {
    const query = searchInput.value.toLowerCase().trim()
    const filtered = allChampions.filter(c => {
      const matchName = c.name.toLowerCase().includes(query) || c.id.toLowerCase().includes(query)
      const matchRole = !activeFilter || c.tags.includes(activeFilter)
      return matchName && matchRole
    })

    clear(grid)
    filtered.forEach(champ => {
      const isDisabled = disabledIds.has(champ.id)
      const item = el('div', {
        cls: `picker-item${isDisabled ? ' disabled' : ''}`,
        on: {
          click: () => {
            if (isDisabled) return
            onSelectCallback?.(champ)
            closePicker()
          }
        }
      })

      const img = el('img', {
        attrs: { src: CHAMPION_IMG(version, champ.id), alt: champ.name, loading: 'lazy' }
      })
      const name = el('span', { text: champ.name })
      append(item, img, name)

      // Counter badge
      if (counterTips[champ.id]) {
        append(item, el('span', { cls: 'counter-badge', text: counterTips[champ.id] }))
      }

      append(grid, item)
    })
  }

  // Remove old listener and add new
  const newSearch = searchInput.cloneNode(true)
  searchInput.parentNode.replaceChild(newSearch, searchInput)
  newSearch.addEventListener('input', debounce(renderPickerGrid, 200))
  newSearch.focus()

  renderPickerGrid()
}
