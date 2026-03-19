import { getChampions, getItems, getVersion } from './data/data-service.js'
import { CHAMPION_IMG, ITEM_IMG } from './data/constants.js'
import { t } from './data/i18n.js'
import { debounce } from './utilities/utilities.js'

let championsData = null
let itemsData = null
let version = ''

const input = document.getElementById('global-search')
const resultsEl = document.getElementById('global-search-results')

export function initGlobalSearch() {
  updatePlaceholder()
  input.addEventListener('input', debounce(onSearch, 250))
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') hideResults()
  })
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#global-search-wrapper')) hideResults()
  })
}

export function updatePlaceholder() {
  input.placeholder = t('globalSearch')
}

async function ensureData() {
  if (!version) version = await getVersion()
  if (!championsData) championsData = await getChampions()
  if (!itemsData) itemsData = await getItems()
}

async function onSearch() {
  const query = input.value.toLowerCase().trim()
  if (!query) {
    hideResults()
    return
  }

  await ensureData()

  const champResults = Object.values(championsData)
    .filter(c => c.name.toLowerCase().includes(query) || c.id.toLowerCase().includes(query))
    .slice(0, 5)

  const itemResults = Object.values(itemsData)
    .filter(i => i.inStore && !i.requiredChampion && (i.shop?.prices?.total || 0) > 0 && (i.name || '').toLowerCase().includes(query))
    .slice(0, 5)

  if (champResults.length === 0 && itemResults.length === 0) {
    hideResults()
    return
  }

  resultsEl.innerHTML = ''

  if (champResults.length > 0) {
    const label = document.createElement('div')
    label.className = 'search-group-label'
    label.textContent = t('tabChampions')
    resultsEl.appendChild(label)

    champResults.forEach(champ => {
      const row = document.createElement('div')
      row.className = 'search-result'
      row.innerHTML = `
        <img src="${CHAMPION_IMG(version, champ.id)}" alt="${champ.name}" />
        <div class="search-result-info">
          <div class="search-result-name">${champ.name}</div>
          <div class="search-result-sub">${champ.title || ''}</div>
        </div>
      `
      row.addEventListener('click', async () => {
        hideResults()
        input.value = ''
        // Switch to champions tab
        document.querySelector('[data-tab="champions"]').click()
        // Open champion modal
        const { openChampionModal } = await import('./champions/champion-modal.js')
        openChampionModal(champ, version)
      })
      resultsEl.appendChild(row)
    })
  }

  if (itemResults.length > 0) {
    const label = document.createElement('div')
    label.className = 'search-group-label'
    label.textContent = t('tabItems')
    resultsEl.appendChild(label)

    itemResults.forEach(item => {
      const row = document.createElement('div')
      row.className = 'search-result'
      row.innerHTML = `
        <img src="${ITEM_IMG(version, item.id)}" alt="${item.name || ''}" style="border-radius:4px" />
        <div class="search-result-info">
          <div class="search-result-name">${item.name || 'Unknown'}</div>
          <div class="search-result-sub">${item.shop?.prices?.total || 0} ${t('gold')}</div>
        </div>
      `
      row.addEventListener('click', async () => {
        hideResults()
        input.value = ''
        // Switch to items tab
        document.querySelector('[data-tab="items"]').click()
        // Open item modal
        const { openItemModal } = await import('./items/item-modal.js')
        openItemModal(item, version, itemsData)
      })
      resultsEl.appendChild(row)
    })
  }

  resultsEl.classList.remove('hidden')
}

function hideResults() {
  resultsEl.classList.add('hidden')
  resultsEl.innerHTML = ''
}
