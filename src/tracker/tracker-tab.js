import { el, append, clear } from '../utilities/utilities.js'
import { getLang } from '../data/i18n.js'

let initialized = false

export function reset() { initialized = false }

export async function init() {
  if (initialized) return
  initialized = true

  const section = document.getElementById('tab-tracker')
  if (!section) return

  clear(section)
  const lang = getLang()

  const container = el('div', { cls: 'academy-container' })

  // Sub-nav: Live Game | Progreso
  const subNav = el('nav', { cls: 'academy-subnav' })
  const tabs = [
    { id: 'live', label: 'Live Game', icon: '⚔️' },
    { id: 'progress', label: lang === 'es' ? 'Progreso' : 'Progress', icon: '📊' },
  ]

  const contentArea = el('div', { cls: 'academy-content', attrs: { id: 'tracker-content' } })

  tabs.forEach((tab, i) => {
    const btn = el('button', {
      cls: ['academy-subnav-btn', i === 0 ? 'active' : ''],
      children: [
        el('span', { text: tab.icon }),
        el('span', { text: tab.label })
      ],
      on: {
        click: () => {
          subNav.querySelectorAll('.academy-subnav-btn').forEach(b => b.classList.remove('active'))
          btn.classList.add('active')
          loadSubTab(contentArea, tab.id)
        }
      }
    })
    append(subNav, btn)
  })

  append(container, subNav, contentArea)
  append(section, container)

  loadSubTab(contentArea, 'live')
}

async function loadSubTab(container, id) {
  clear(container)

  switch (id) {
    case 'live': {
      const m = await import('../live-game/live-game-tab.js')
      const section = el('div', { attrs: { id: 'tab-live' }, cls: 'tab-content active' })
      append(container, section)
      m.reset()
      m.init()
      break
    }
    case 'progress': {
      const m = await import('../progress/progress-tab.js')
      const section = el('div', { attrs: { id: 'tab-progress' }, cls: 'tab-content active' })
      append(container, section)
      m.reset()
      m.init()
      break
    }
  }
}
