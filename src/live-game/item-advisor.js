import { el, append, clear, formatGold } from '../utilities/utilities.js'
import { t } from '../data/i18n.js'
import { getItems, getVersion } from '../data/data-service.js'
import { ITEM_IMG } from '../data/constants.js'
import { getState, setState } from './live-game-state.js'
import { getStepByStepRecommendation } from '../data/recommendation-engine.js'

let timerInterval = null

export async function render(container) {
  clear(container)
  const state = getState()
  const version = await getVersion()
  const allItems = await getItems()

  const wrapper = el('div', { cls: 'ingame-container' })

  // Timer bar
  append(wrapper, renderTimer(state))

  // Item advisor
  append(wrapper, await renderItemAdvisor(state, allItems, version))

  // Objective buttons
  append(wrapper, renderObjectives(state))

  // Map toggle
  append(wrapper, renderMapSection())

  append(container, wrapper)
}

function renderTimer(state) {
  const section = el('div', { cls: 'timer-bar' })

  const timeDisplay = el('span', {
    cls: 'timer-display',
    attrs: { id: 'game-timer' },
    text: formatTime(state.timerElapsed)
  })

  const toggleBtn = el('button', {
    cls: ['timer-btn', state.timerRunning ? 'running' : ''],
    text: state.timerRunning ? t('pause') : t('start'),
    on: {
      click: () => {
        if (state.timerRunning) {
          pauseTimer()
        } else {
          startTimer()
        }
        toggleBtn.textContent = state.timerRunning ? t('pause') : t('start')
        toggleBtn.classList.toggle('running', state.timerRunning)
      }
    }
  })

  const resetBtn = el('button', {
    cls: 'timer-btn timer-reset',
    text: t('reset'),
    on: {
      click: () => {
        pauseTimer()
        setState({ timerElapsed: 0, timerStart: null })
        timeDisplay.textContent = formatTime(0)
        toggleBtn.textContent = t('start')
        toggleBtn.classList.remove('running')
      }
    }
  })

  append(section, el('span', { cls: 'timer-label', text: t('gameTime') }), timeDisplay, toggleBtn, resetBtn)
  return section
}

function startTimer() {
  const state = getState()
  setState({
    timerRunning: true,
    timerStart: Date.now() - (state.timerElapsed * 1000)
  })

  if (timerInterval) clearInterval(timerInterval)
  timerInterval = setInterval(() => {
    const s = getState()
    if (!s.timerRunning) return
    const elapsed = Math.floor((Date.now() - s.timerStart) / 1000)
    s.timerElapsed = elapsed
    const display = document.getElementById('game-timer')
    if (display) display.textContent = formatTime(elapsed)
  }, 1000)
}

function pauseTimer() {
  setState({ timerRunning: false })
  if (timerInterval) {
    clearInterval(timerInterval)
    timerInterval = null
  }
}

async function renderItemAdvisor(state, allItems, version) {
  const section = el('div', { cls: 'item-advisor-section' })
  append(section, el('h3', { cls: 'ingame-section-title', text: t('itemAdvisor') }))

  // Gold input
  const goldRow = el('div', { cls: 'gold-input-row' })
  const goldInput = el('input', {
    cls: 'gold-input',
    attrs: { type: 'number', placeholder: t('currentGold'), min: '0', step: '100', value: state.currentGold || '' },
    on: {
      input: (e) => {
        setState({ currentGold: parseInt(e.target.value) || 0 })
        updateItemHighlights(parseInt(e.target.value) || 0)
      }
    }
  })
  append(goldRow, el('span', { cls: 'gold-label', text: t('gold') + ':' }), goldInput)
  append(section, goldRow)

  // Get recommendation based on champion + items bought
  const reco = getStepByStepRecommendation(state.myChampion, state.currentGold, allItems, state.itemsBought)

  if (reco && reco.nextItem) {
    // Current target item
    const targetCard = el('div', { cls: 'target-item-card' })
    const targetImg = el('img', {
      cls: 'target-item-img',
      attrs: { src: ITEM_IMG(version, reco.nextItem.id), alt: reco.nextItem.name }
    })
    const targetInfo = el('div', { cls: 'target-item-info' })
    append(targetInfo,
      el('span', { cls: 'target-item-label', text: t('building') }),
      el('span', { cls: 'target-item-name', text: reco.nextItem.name }),
      el('span', { cls: 'target-item-cost', text: `${formatGold(reco.nextItem.shop?.prices?.total || 0)} ${t('gold')}` })
    )
    append(targetCard, targetImg, targetInfo)
    append(section, targetCard)

    // Component steps
    if (reco.steps && reco.steps.length > 0) {
      const stepsContainer = el('div', { cls: 'item-steps' })
      reco.steps.forEach((step, i) => {
        const item = allItems[step.id] || step
        const canBuy = state.currentGold >= (item.shop?.prices?.total || step.cost || 0)
        const isBought = state.itemsBought.includes(step.id)

        const stepEl = el('div', {
          cls: ['item-step', canBuy ? 'can-buy' : '', isBought ? 'bought' : ''],
          dataset: { itemId: step.id, cost: String(item.shop?.prices?.total || step.cost || 0) },
          children: [
            el('img', {
              cls: 'item-step-img',
              attrs: { src: ITEM_IMG(version, step.id), alt: item.name || step.name }
            }),
            el('div', { cls: 'item-step-info', children: [
              el('span', { cls: 'item-step-name', text: item.name || step.name }),
              el('span', { cls: 'item-step-cost', text: `${formatGold(item.shop?.prices?.total || step.cost || 0)}g` })
            ]}),
            el('button', {
              cls: ['item-bought-btn', isBought ? 'active' : ''],
              text: isBought ? '\u2713' : t('bought'),
              on: {
                click: (e) => {
                  e.stopPropagation()
                  const bought = [...state.itemsBought]
                  if (isBought) {
                    const idx = bought.indexOf(step.id)
                    if (idx !== -1) bought.splice(idx, 1)
                  } else {
                    bought.push(step.id)
                  }
                  setState({ itemsBought: bought })
                  const cont = document.getElementById('live-game-content')
                  if (cont) render(cont)
                }
              }
            })
          ]
        })
        append(stepsContainer, stepEl)
      })
      append(section, stepsContainer)
    }
  } else {
    append(section, el('p', { cls: 'empty-state', text: t('noItemReco') }))
  }

  return section
}

function updateItemHighlights(gold) {
  document.querySelectorAll('.item-step').forEach(step => {
    const cost = parseInt(step.dataset.cost) || 0
    step.classList.toggle('can-buy', gold >= cost)
  })
}

function renderObjectives(state) {
  const section = el('div', { cls: 'objectives-section' })
  append(section, el('h3', { cls: 'ingame-section-title', text: t('objectives') }))

  const grid = el('div', { cls: 'objective-grid' })

  const objectives = [
    { key: 'firstClear', label: t('objClear'), icon: '\u{1F332}' },
    { key: 'firstScuttle', label: t('objScuttle'), icon: '\u{1F980}' },
    { key: 'firstGank', label: t('objGank'), icon: '\u2694\uFE0F' },
    { key: 'firstDragon', label: t('objDragon'), icon: '\u{1F409}' },
    { key: 'firstHerald', label: t('objHerald'), icon: '\u{1F47E}' },
    { key: 'firstBaron', label: 'Baron', icon: '\u{1F7E3}' },
    { key: 'firstTower', label: t('objTower'), icon: '\u{1F3F0}' },
  ]

  objectives.forEach(obj => {
    const time = state.objectives[obj.key]
    const btn = el('button', {
      cls: ['objective-btn', time !== null ? 'done' : ''],
      children: [
        el('span', { cls: 'obj-icon', text: obj.icon }),
        el('span', { cls: 'obj-label', text: obj.label }),
        el('span', {
          cls: 'obj-time',
          text: time !== null ? formatTime(time) : '--:--'
        })
      ],
      on: {
        click: () => {
          const s = getState()
          const objectives = { ...s.objectives }
          if (objectives[obj.key] !== null) {
            // Toggle off
            objectives[obj.key] = null
          } else {
            objectives[obj.key] = s.timerElapsed
          }
          setState({ objectives })
          // Update just this button
          btn.classList.toggle('done', objectives[obj.key] !== null)
          const timeEl = btn.querySelector('.obj-time')
          if (timeEl) {
            timeEl.textContent = objectives[obj.key] !== null ? formatTime(objectives[obj.key]) : '--:--'
          }
        }
      }
    })
    append(grid, btn)
  })

  append(section, grid)
  return section
}

function renderMapSection() {
  const section = el('div', { cls: 'map-section' })
  const toggle = el('button', {
    cls: 'map-toggle-btn',
    text: t('showMap'),
    on: {
      click: () => {
        const mapEl = section.querySelector('.map-container')
        if (mapEl) {
          mapEl.classList.toggle('hidden')
          toggle.textContent = mapEl.classList.contains('hidden') ? t('showMap') : t('hideMap')
        }
      }
    }
  })
  append(section, toggle)

  const mapContainer = el('div', { cls: 'map-container hidden' })
  // Inline SVG map of SR with ward spots
  mapContainer.innerHTML = getSRMapSVG()
  append(section, mapContainer)

  return section
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

function getSRMapSVG() {
  return `<svg viewBox="0 0 400 400" class="sr-map-svg" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="400" height="400" fill="#1a2e1a" rx="12"/>

  <!-- River -->
  <path d="M 0 400 Q 200 200 400 0" stroke="#2a4a6a" stroke-width="40" fill="none" opacity="0.4"/>

  <!-- Lanes -->
  <line x1="40" y1="360" x2="40" y2="40" stroke="#3a3a3a" stroke-width="6" opacity="0.5"/>
  <line x1="40" y1="40" x2="360" y2="40" stroke="#3a3a3a" stroke-width="6" opacity="0.5"/>
  <line x1="360" y1="40" x2="360" y2="360" stroke="#3a3a3a" stroke-width="6" opacity="0.5"/>
  <line x1="40" y1="360" x2="360" y2="360" stroke="#3a3a3a" stroke-width="6" opacity="0.5"/>
  <line x1="40" y1="360" x2="360" y2="40" stroke="#3a3a3a" stroke-width="4" opacity="0.3"/>

  <!-- Blue base -->
  <rect x="10" y="340" width="50" height="50" fill="#1a3a6a" rx="6" opacity="0.6"/>
  <text x="35" y="370" text-anchor="middle" fill="#4e7ab5" font-size="10" font-weight="bold">BLUE</text>

  <!-- Red base -->
  <rect x="340" y="10" width="50" height="50" fill="#6a1a1a" rx="6" opacity="0.6"/>
  <text x="365" y="40" text-anchor="middle" fill="#b54e4e" font-size="10" font-weight="bold">RED</text>

  <!-- Dragon pit -->
  <circle cx="280" cy="300" r="20" fill="#4a2a0a" stroke="#C8AA6E" stroke-width="1.5" opacity="0.7"/>
  <text x="280" y="304" text-anchor="middle" fill="#C8AA6E" font-size="10">D</text>

  <!-- Baron pit -->
  <circle cx="120" cy="100" r="20" fill="#2a0a4a" stroke="#9c27b0" stroke-width="1.5" opacity="0.7"/>
  <text x="120" y="104" text-anchor="middle" fill="#9c27b0" font-size="10">B</text>

  <!-- Ward spots (yellow dots) -->
  <circle cx="160" cy="260" r="6" fill="#ffeb3b" opacity="0.8"><title>Tri-bush ward</title></circle>
  <circle cx="240" cy="140" r="6" fill="#ffeb3b" opacity="0.8"><title>Tri-bush ward</title></circle>
  <circle cx="200" cy="200" r="6" fill="#ffeb3b" opacity="0.8"><title>River pixel brush</title></circle>
  <circle cx="230" cy="260" r="6" fill="#ffeb3b" opacity="0.8"><title>Dragon ward</title></circle>
  <circle cx="170" cy="140" r="6" fill="#ffeb3b" opacity="0.8"><title>Baron ward</title></circle>
  <circle cx="100" cy="200" r="6" fill="#ffeb3b" opacity="0.8"><title>Blue buff ward</title></circle>
  <circle cx="300" cy="200" r="6" fill="#ffeb3b" opacity="0.8"><title>Red buff ward</title></circle>

  <!-- Jungle camps (small circles) -->
  <circle cx="100" cy="280" r="8" fill="#3a5a3a" stroke="#5a7a5a" stroke-width="1"><title>Blue buff</title></circle>
  <circle cx="80" cy="240" r="6" fill="#3a4a3a" stroke="#5a6a5a" stroke-width="1"><title>Gromp</title></circle>
  <circle cx="140" cy="310" r="6" fill="#3a4a3a" stroke="#5a6a5a" stroke-width="1"><title>Wolves</title></circle>
  <circle cx="100" cy="340" r="6" fill="#3a4a3a" stroke="#5a6a5a" stroke-width="1"><title>Raptors</title></circle>
  <circle cx="180" cy="340" r="8" fill="#5a3a3a" stroke="#7a5a5a" stroke-width="1"><title>Red buff</title></circle>
  <circle cx="220" cy="360" r="6" fill="#3a4a3a" stroke="#5a6a5a" stroke-width="1"><title>Krugs</title></circle>

  <circle cx="300" cy="120" r="8" fill="#5a3a3a" stroke="#7a5a5a" stroke-width="1"><title>Red buff</title></circle>
  <circle cx="320" cy="160" r="6" fill="#3a4a3a" stroke="#5a6a5a" stroke-width="1"><title>Gromp</title></circle>
  <circle cx="260" cy="90" r="6" fill="#3a4a3a" stroke="#5a6a5a" stroke-width="1"><title>Wolves</title></circle>
  <circle cx="300" cy="60" r="6" fill="#3a4a3a" stroke="#5a6a5a" stroke-width="1"><title>Raptors</title></circle>
  <circle cx="220" cy="60" r="8" fill="#3a5a3a" stroke="#5a7a5a" stroke-width="1"><title>Blue buff</title></circle>
  <circle cx="180" cy="40" r="6" fill="#3a4a3a" stroke="#5a6a5a" stroke-width="1"><title>Krugs</title></circle>

  <!-- Scuttle crab areas -->
  <circle cx="240" cy="230" r="8" fill="none" stroke="#4eabb5" stroke-width="1.5" stroke-dasharray="3"><title>Scuttle</title></circle>
  <circle cx="160" cy="170" r="8" fill="none" stroke="#4eabb5" stroke-width="1.5" stroke-dasharray="3"><title>Scuttle</title></circle>
</svg>`
}

export function cleanup() {
  if (timerInterval) {
    clearInterval(timerInterval)
    timerInterval = null
  }
}
