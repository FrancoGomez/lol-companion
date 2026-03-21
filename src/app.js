import './app.css'
import { getVersion } from './data/data-service.js'
import { t, getLang, setLang } from './data/i18n.js'
import { initGlobalSearch, updatePlaceholder } from './global-search.js'
import { initAuth } from './auth/auth-ui.js'

const tabs = {}
const tabInited = {}
let activeTab = 'champions'
const VALID_TABS = ['champions', 'items', 'academy', 'tracker']

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
    case 'academy': {
      // Academy combines: fundamentals + coaching + elo goals
      const m = await import('./coaching/academy-tab.js')
      tabs[name] = m
      break
    }
    case 'tracker': {
      // Tracker combines: live game + progress
      const m = await import('./tracker/tracker-tab.js')
      tabs[name] = m
      break
    }
  }
  return tabs[name]
}

export function switchTab(name) {
  activeTab = name
  window.history.pushState(null, '', `#${name}`)
  switchTabSilent(name)
}

function switchTabSilent(name) {
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

export function openModal(renderFn, hashPath) {
  if (hashPath) window.history.pushState(null, '', `#${hashPath}`)
  const content = document.getElementById('modal-content')
  content.innerHTML = ''
  renderFn(content)
  document.getElementById('modal-overlay').classList.remove('hidden')
  document.body.style.overflow = 'hidden'
}

export function closeModal() {
  const overlay = document.getElementById('modal-overlay')
  if (overlay.classList.contains('hidden')) return
  // Go back in history if we pushed a modal hash (contains '/')
  if (window.location.hash.includes('/')) {
    window.history.back()
  }
  overlay.classList.add('hidden')
  document.body.style.overflow = ''
}

function closeModalSilent() {
  const overlay = document.getElementById('modal-overlay')
  if (overlay.classList.contains('hidden')) return
  overlay.classList.add('hidden')
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
  document.querySelector('[data-tab="champions"]').textContent = t('tabChampions')
  document.querySelector('[data-tab="items"]').textContent = t('tabItems')
  document.querySelector('[data-tab="academy"]').textContent = t('tabAcademy')
  document.querySelector('[data-tab="tracker"]').textContent = t('tabTracker')
  updatePlaceholder()
}

function reloadActiveTab() {
  Object.keys(tabs).forEach(name => {
    if (tabs[name]?.reset) tabs[name].reset()
  })
  loadTab(activeTab).then(m => {
    if (m.reset) m.reset()
    m.init?.()
  })
}

// Back/forward button support
window.addEventListener('popstate', () => {
  const hash = window.location.hash.slice(1)

  if (!hash || VALID_TABS.includes(hash)) {
    // Close modal if open (without pushing history)
    closeModalSilent()
    if (hash) {
      switchTabSilent(hash)
    }
  } else if (hash.startsWith('champion/')) {
    const champId = hash.split('/')[1]
    if (champId) {
      // Lazy-load and open champion modal without pushing another hash
      import('./champions/champion-grid.js').then(m => {
        if (m.openChampionById) m.openChampionById(champId)
      })
    }
  }
})

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
  initAuth()

  // Route based on initial hash
  const initialHash = window.location.hash.slice(1)
  const initialTab = VALID_TABS.includes(initialHash) ? initialHash : 'champions'
  // Use silent switch on initial load to avoid pushing duplicate history entry
  switchTabSilent(initialTab)
  // Replace current history entry with the correct hash
  window.history.replaceState(null, '', `#${initialTab}`)

  // If initial hash is a champion route, open the modal after tab loads
  if (initialHash.startsWith('champion/')) {
    const champId = initialHash.split('/')[1]
    if (champId) {
      switchTabSilent('champions')
      window.history.replaceState(null, '', `#${initialHash}`)
      import('./champions/champion-grid.js').then(m => {
        if (m.openChampionById) m.openChampionById(champId)
      })
    }
  }
}

init()
