import { el, append, clear } from '../utilities/utilities.js'
import { t } from '../data/i18n.js'
import { getState, setState, subscribe } from './live-game-state.js'
import * as roleSelector from './role-selector.js'
import * as draftPhase from './draft-phase.js'
import * as itemAdvisor from './item-advisor.js'
import * as gameLogger from './game-logger.js'

let initialized = false

const phases = [
  { id: 'setup', label: () => t('phaseSetup'), icon: '\u2699\uFE0F' },
  { id: 'draft', label: () => t('phaseDraft'), icon: '\u{1F3AF}' },
  { id: 'ingame', label: () => t('phaseInGame'), icon: '\u2694\uFE0F' },
  { id: 'log', label: () => t('phaseLog'), icon: '\u{1F4CA}' },
]

export function reset() { initialized = false }

export async function init() {
  if (initialized) return
  initialized = true

  const section = document.getElementById('tab-live')
  if (!section) return

  clear(section)

  // Phase nav (bottom nav for this tab)
  const phaseNav = el('nav', { cls: 'phase-nav', attrs: { id: 'phase-nav' } })
  renderPhaseNav(phaseNav)
  section.appendChild(phaseNav)

  // Content area
  const content = el('div', { cls: 'live-game-content', attrs: { id: 'live-game-content' } })
  section.appendChild(content)

  // Subscribe to state changes for nav + content updates
  let lastPhase = getState().phase
  subscribe((state) => {
    renderPhaseNav(phaseNav)
    if (state.phase !== lastPhase) {
      lastPhase = state.phase
      renderPhase()
    }
  })

  // Render current phase
  await renderPhase()
}

function renderPhaseNav(nav) {
  nav.innerHTML = ''
  const state = getState()

  phases.forEach(phase => {
    const btn = el('button', {
      cls: ['phase-btn', state.phase === phase.id ? 'active' : ''],
      children: [
        el('span', { cls: 'phase-icon', text: phase.icon }),
        el('span', { cls: 'phase-label', text: phase.label() })
      ],
      on: {
        click: () => {
          setState({ phase: phase.id })
        }
      }
    })
    append(nav, btn)
  })
}

async function renderPhase() {
  const content = document.getElementById('live-game-content')
  if (!content) return

  const state = getState()

  // Cleanup previous phase
  if (state.phase !== 'ingame') {
    itemAdvisor.cleanup()
  }

  switch (state.phase) {
    case 'setup':
      await roleSelector.render(content)
      break
    case 'draft':
      await draftPhase.render(content)
      break
    case 'ingame':
      await itemAdvisor.render(content)
      break
    case 'log':
      await gameLogger.render(content)
      break
  }
}
