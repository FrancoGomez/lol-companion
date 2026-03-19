import './app.css'
import { getVersion } from './data/data-service.js'
import { t, getLang, setLang } from './data/i18n.js'
import { initGlobalSearch, updatePlaceholder } from './global-search.js'

const tabs = {}
const tabInited = {}
let activeTab = 'champions'

// Lazy-load tab modules
async function loadTab(name) {
  if (tabs[name]) return tabs[name]
  switch (name) {
    case 'champions': {
      const m = await import('./champions/champion-grid.js')
      tabs[name] = m
      break
    }
    case 'items': {
      const m = await import('./items/item-grid.js')
      tabs[name] = m
      break
    }
    case 'matchup': {
      const m = await import('./matchup/team-builder.js')
      tabs[name] = m
      break
    }
  }
  return tabs[name]
}

function switchTab(name) {
  activeTab = name
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === name)
  })
  document.querySelectorAll('.tab-content').forEach(sec => {
    sec.classList.toggle('active', sec.id === `tab-${name}`)
  })
  loadTab(name).then(m => m.init?.())
}

// Tab click handlers
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => switchTab(btn.dataset.tab))
})

// Modal close
document.getElementById('modal-close').addEventListener('click', closeModal)
document.getElementById('modal-overlay').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeModal()
})

export function openModal(renderFn) {
  const content = document.getElementById('modal-content')
  content.innerHTML = ''
  renderFn(content)
  document.getElementById('modal-overlay').classList.remove('hidden')
  document.body.style.overflow = 'hidden'
}

export function closeModal() {
  document.getElementById('modal-overlay').classList.add('hidden')
  document.body.style.overflow = ''
}

// Picker close
document.getElementById('picker-close').addEventListener('click', closePicker)

export function openPicker() {
  document.getElementById('picker-overlay').classList.remove('hidden')
  document.getElementById('picker-search').value = ''
  document.getElementById('picker-search').focus()
  document.body.style.overflow = 'hidden'
}

export function closePicker() {
  document.getElementById('picker-overlay').classList.add('hidden')
  document.body.style.overflow = ''
}

// Keyboard: Escape closes modal/picker
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (!document.getElementById('picker-overlay').classList.contains('hidden')) {
      closePicker()
    } else if (!document.getElementById('modal-overlay').classList.contains('hidden')) {
      closeModal()
    }
  }
})

// Language toggle
function setupLangToggle() {
  const btn = document.getElementById('lang-toggle')
  updateLangButton(btn)
  btn.addEventListener('click', () => {
    const newLang = getLang() === 'es' ? 'en' : 'es'
    setLang(newLang)
    updateLangButton(btn)
    updateUIStrings()
    reloadActiveTab()
  })
}

function updateLangButton(btn) {
  btn.textContent = getLang() === 'es' ? 'EN' : 'ES'
  btn.title = getLang() === 'es' ? 'Switch to English' : 'Cambiar a Español'
}

function updateUIStrings() {
  // Update tab buttons
  document.querySelector('[data-tab="champions"]').textContent = t('tabChampions')
  document.querySelector('[data-tab="items"]').textContent = t('tabItems')
  document.querySelector('[data-tab="matchup"]').textContent = t('tabMatchup')
  updatePlaceholder()
}

function reloadActiveTab() {
  // Reset init flags so tabs re-render with new language data
  Object.keys(tabs).forEach(name => {
    if (tabs[name]?.reset) tabs[name].reset()
  })
  // Re-init active tab
  loadTab(activeTab).then(m => {
    if (m.reset) m.reset()
    m.init?.()
  })
}

// Init
async function init() {
  try {
    const version = await getVersion()
    document.getElementById('patch-version').textContent = `${t('patchPrefix')} ${version}`
  } catch {
    document.getElementById('patch-version').textContent = t('offline')
  }
  updateUIStrings()
  setupLangToggle()
  initGlobalSearch()
  switchTab('champions')
}

init()
