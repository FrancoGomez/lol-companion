import { t, getLang } from '../data/i18n.js'
import { getVersion } from '../data/data-service.js'
import { CHAMPION_IMG } from '../data/constants.js'
import { el, append, clear } from '../utilities/utilities.js'
import {
  CHAMPION_POOLS,
  CLEAR_ROUTES,
  OBJECTIVES,
  OBJECTIVE_DECISIONS,
  JUNGLE_GAMEPLAN,
  SUPPORT_WARDING,
  SUPPORT_ROAMING,
  SUPPORT_DECISIONS,
  CLIMBING_TIPS,
  COACHING_I18N,
  ELO_BRACKETS,
  ROLE_OPTIONS,
} from './coaching-data.js'
import { ELO_GOALS } from './elo-goals-data.js'

let initialized = false
let version = ''

// State
let selectedRole = 'jungle'
let selectedElo = 'iron-bronze'
let mainChampion = null // champion id

const container = document.getElementById('tab-coaching')

/** Get a coaching-specific i18n string */
function ct(key) {
  const lang = getLang()
  return COACHING_I18N[lang]?.[key] ?? COACHING_I18N.es[key] ?? key
}

/** Get a localized field from an object with {es, en} */
function loc(obj) {
  if (!obj) return ''
  const lang = getLang()
  return obj[lang] ?? obj.es ?? ''
}

/** Get localized array from an object with {es: [], en: []} */
function locArr(obj) {
  if (!obj) return []
  const lang = getLang()
  return obj[lang] ?? obj.es ?? []
}

export function reset() { initialized = false }

export async function init() {
  if (initialized) return
  initialized = true

  try {
    version = await getVersion()
  } catch {
    version = ''
  }

  render()
}

// ─── Main Render ────────────────────────────────────────────────────────────

function render() {
  clear(container)

  const wrapper = el('div', { cls: 'coaching-container' })

  // Role selector
  append(wrapper, buildRoleSelector())

  // Elo selector
  append(wrapper, buildEloSelector())

  // Elo Goals
  append(wrapper, buildEloGoals())

  // Champion pool
  append(wrapper, buildChampionPool())

  // Role-specific sections
  if (selectedRole === 'jungle') {
    append(wrapper, buildClearRoutes())
    append(wrapper, buildObjectives())
    append(wrapper, buildJungleGameplan())
  } else if (selectedRole === 'support') {
    append(wrapper, buildSupportGameplan())
    append(wrapper, buildObjectives())
  } else {
    // Top, Mid, ADC — show objectives (useful for all roles)
    append(wrapper, buildObjectives())
  }

  // Climbing tips (always shown)
  append(wrapper, buildClimbingTips())

  append(container, wrapper)
}

// ─── Role Selector ──────────────────────────────────────────────────────────

function buildRoleSelector() {
  const section = el('div', { cls: 'coaching-section' })
  append(section, el('h3', { text: ct('selectRole') }))

  const bar = el('div', { cls: 'role-selector' })

  ROLE_OPTIONS.forEach(opt => {
    const btn = el('button', {
      cls: `selector-btn ${selectedRole === opt.key ? 'active' : ''}`,
      text: ct(opt.labelKey),
      on: {
        click: () => {
          selectedRole = opt.key
          mainChampion = null
          rerender()
        },
      },
    })
    append(bar, btn)
  })

  append(section, bar)
  return section
}

// ─── Elo Selector ───────────────────────────────────────────────────────────

function buildEloSelector() {
  const section = el('div', { cls: 'coaching-section' })
  append(section, el('h3', { text: ct('selectElo') }))

  const bar = el('div', { cls: 'elo-selector' })

  ELO_BRACKETS.forEach(elo => {
    const btn = el('button', {
      cls: `selector-btn ${selectedElo === elo.key ? 'active' : ''}`,
      text: ct(elo.labelKey),
      on: {
        click: () => {
          selectedElo = elo.key
          mainChampion = null
          rerender()
        },
      },
    })
    append(bar, btn)
  })

  append(section, bar)
  return section
}

// ─── Elo Goals ──────────────────────────────────────────────────────────────

/** Map the 4 elo-selector brackets to which elo-goal cards should auto-open */
const ELO_TO_GOALS = {
  'iron-bronze':   ['iron-bronze', 'bronze-silver'],
  'silver-gold':   ['silver-gold', 'gold-platinum'],
  'plat-emerald':  ['platinum-emerald', 'emerald-diamond'],
  'diamond-plus':  ['diamond-master'],
}

function buildEloGoals() {
  const section = el('div', { cls: 'coaching-section' })
  append(section, el('h3', { text: ct('eloGoalsTitle') }))

  const autoOpen = ELO_TO_GOALS[selectedElo] || []

  ELO_GOALS.forEach(goal => {
    const isOpen = autoOpen.includes(goal.id)
    const card = el('div', { cls: `elo-goal-card ${isOpen ? 'open' : ''}` })

    // Header (clickable)
    const header = el('div', { cls: 'elo-goal-header', on: {
      click: () => {
        card.classList.toggle('open')
      },
    }})

    const tierText = `${goal.icon} ${loc(goal.from)} → ${loc(goal.to)}`
    append(header, el('span', { cls: 'elo-goal-tier', text: tierText }))
    append(header, el('span', { cls: 'elo-goal-focus', text: loc(goal.focus) }))
    append(header, el('span', { cls: 'elo-goal-chevron', text: '▾' }))

    append(card, header)

    // Collapsible body
    const body = el('div', { cls: 'elo-goal-body' })

    // Description
    append(body, el('p', { cls: 'elo-goal-desc', text: loc(goal.description) }))

    // Key Insight (quote)
    const insight = el('blockquote', { cls: 'elo-goal-insight' })
    append(insight, el('span', { text: loc(goal.keyInsight) }))
    append(body, insight)

    // Tasks checklist
    const taskList = el('ul', { cls: 'elo-goal-tasks' })
    goal.tasks.forEach(task => {
      append(taskList, el('li', { text: loc(task) }))
    })
    append(body, taskList)

    // Metric
    const metric = el('div', { cls: 'elo-goal-metric' })
    append(metric, el('span', { cls: 'elo-goal-metric-label', text: `📊 ${ct('eloGoalsMetric')}: ` }))
    append(metric, el('span', { text: loc(goal.metric) }))
    append(body, metric)

    append(card, body)
    append(section, card)
  })

  return section
}

// ─── Champion Pool ──────────────────────────────────────────────────────────

function buildChampionPool() {
  const section = el('div', { cls: 'coaching-section' })
  append(section, el('h3', { text: ct('champPoolTitle') }))

  const pool = CHAMPION_POOLS[selectedRole]?.[selectedElo] || []
  const grid = el('div', { cls: 'champ-pool-grid' })

  pool.forEach(champ => {
    const card = el('div', { cls: `champ-pool-card ${mainChampion === champ.id ? 'selected' : ''}` })

    // Champion icon
    const imgSrc = version ? CHAMPION_IMG(version, champ.id) : ''
    if (imgSrc) {
      const img = el('img', { cls: 'champ-pool-img', attrs: { src: imgSrc, alt: champ.name, loading: 'lazy' } })
      append(card, img)
    }

    // Name
    append(card, el('div', { cls: 'champ-pool-name', text: champ.name }))

    // Difficulty stars
    const starsContainer = el('div', { cls: 'difficulty-stars' })
    const label = el('span', { cls: 'difficulty-label', text: ct('difficultyLabel') + ': ' })
    const stars = el('span', { text: '\u2605'.repeat(champ.difficulty) + '\u2606'.repeat(3 - champ.difficulty) })
    append(starsContainer, label, stars)
    append(card, starsContainer)

    // Reason
    append(card, el('div', { cls: 'champ-pool-reason', text: loc(champ.reason) }))

    // Select as Main button
    const isMain = mainChampion === champ.id
    const btn = el('button', {
      cls: `main-btn ${isMain ? 'active' : ''}`,
      text: isMain ? ct('selectedMain') : ct('selectAsMain'),
      on: {
        click: (e) => {
          e.stopPropagation()
          mainChampion = isMain ? null : champ.id
          rerender()
        },
      },
    })
    append(card, btn)

    append(grid, card)
  })

  append(section, grid)
  return section
}

// ─── Jungle Clear Routes ────────────────────────────────────────────────────

function buildClearRoutes() {
  const section = el('div', { cls: 'coaching-section' })
  append(section, el('h3', { text: ct('clearRoutesTitle') }))

  // Show routes for each recommended champion that has routes
  const pool = CHAMPION_POOLS[selectedRole]?.[selectedElo] || []
  let hasRoutes = false

  pool.forEach(champ => {
    const routes = CLEAR_ROUTES[champ.id]
    if (!routes) return
    hasRoutes = true

    const champHeader = el('div', { cls: 'clear-route-champ' })
    if (version) {
      append(champHeader, el('img', {
        cls: 'clear-route-icon',
        attrs: { src: CHAMPION_IMG(version, champ.id), alt: champ.name },
      }))
    }
    append(champHeader, el('span', { cls: 'clear-route-champ-name', text: champ.name }))
    append(section, champHeader)

    routes.forEach(route => {
      const routeEl = el('div', { cls: 'clear-route' })
      append(routeEl, el('div', { cls: 'clear-route-name', text: loc(route.name) }))

      const timeline = el('div', { cls: 'route-timeline' })

      // Horizontal visual bar
      const bar = el('div', { cls: 'route-bar' })
      const totalSteps = route.steps.length
      route.steps.forEach((step, idx) => {
        const dot = el('div', {
          cls: 'route-dot',
          style: { left: `${(idx / Math.max(totalSteps - 1, 1)) * 100}%` },
          attrs: { title: `${step.time} - ${loc(step.camp)}` },
        })
        append(bar, dot)
      })
      append(timeline, bar)

      // Step list
      const stepList = el('div', { cls: 'route-steps' })
      route.steps.forEach((step, idx) => {
        const stepEl = el('div', { cls: 'route-step' })
        const connector = el('div', { cls: `route-connector ${idx === route.steps.length - 1 ? 'last' : ''}` })
        const content = el('div', { cls: 'route-step-content' })
        append(content, el('span', { cls: 'route-time', text: step.time }))
        append(content, el('span', { cls: 'route-camp', text: loc(step.camp) }))
        append(stepEl, connector, content)
        append(stepList, stepEl)
      })
      append(routeEl, timeline, stepList)
      append(section, routeEl)
    })
  })

  if (!hasRoutes) {
    append(section, el('div', { cls: 'empty-state', text: ct('noRoutesAvailable') }))
  }

  return section
}

// ─── Objectives ─────────────────────────────────────────────────────────────

function buildObjectives() {
  const section = el('div', { cls: 'coaching-section' })
  append(section, el('h3', { text: ct('objectivesTitle') }))

  // Table
  const table = el('table', { cls: 'objective-table' })
  const thead = el('thead')
  const headerRow = el('tr')
  ;[ct('objectiveName'), ct('objectiveSpawn'), ct('objectiveRespawn'), ct('objectivePriority')].forEach(h => {
    append(headerRow, el('th', { text: h }))
  })
  append(thead, headerRow)
  append(table, thead)

  const tbody = el('tbody')
  OBJECTIVES.forEach(obj => {
    const row = el('tr')
    append(row, el('td', { text: loc(obj.name) }))
    append(row, el('td', { text: obj.spawn }))
    append(row, el('td', { text: obj.respawn }))
    append(row, el('td', { text: loc(obj.priority) }))
    append(tbody, row)
  })
  append(table, tbody)
  append(section, table)

  // Decision flowchart
  append(section, el('h4', { cls: 'coaching-sub-header', text: ct('decisionFlowTitle') }))
  const decisions = locArr(OBJECTIVE_DECISIONS)
  const decList = el('ul', { cls: 'decision-list' })
  decisions.forEach(d => {
    append(decList, el('li', { text: d }))
  })
  append(section, decList)

  return section
}

// ─── Jungle Gameplan ────────────────────────────────────────────────────────

function buildJungleGameplan() {
  const section = el('div', { cls: 'coaching-section' })
  append(section, el('h3', { text: ct('gameplanTitle') }))

  const timeline = el('div', { cls: 'gameplan-timeline' })

  JUNGLE_GAMEPLAN.forEach(step => {
    const stepEl = el('div', { cls: 'gameplan-step' })
    const dot = el('div', { cls: 'gameplan-dot' })
    const content = el('div', { cls: 'gameplan-content' })
    append(content, el('span', { cls: 'gameplan-time', text: step.time }))
    append(content, el('span', { cls: 'gameplan-action', text: loc(step.action) }))
    append(stepEl, dot, content)
    append(timeline, stepEl)
  })

  append(section, timeline)
  return section
}

// ─── Support Gameplan ───────────────────────────────────────────────────────

function buildSupportGameplan() {
  const section = el('div', { cls: 'coaching-section' })
  append(section, el('h3', { text: ct('supportGameplanTitle') }))

  // Warding spots
  const wardSection = el('div', { cls: 'coaching-subsection' })
  append(wardSection, el('h4', { cls: 'coaching-sub-header', text: ct('wardingTitle') }))

  SUPPORT_WARDING.forEach(phase => {
    const phaseEl = el('div', { cls: 'ward-phase' })
    append(phaseEl, el('div', { cls: 'ward-phase-name', text: loc(phase.phase) }))
    const spots = locArr(phase.spots)
    const list = el('ul', { cls: 'ward-list' })
    spots.forEach(s => append(list, el('li', { text: s })))
    append(phaseEl, list)
    append(wardSection, phaseEl)
  })
  append(section, wardSection)

  // Roaming timers
  const roamSection = el('div', { cls: 'coaching-subsection' })
  append(roamSection, el('h4', { cls: 'coaching-sub-header', text: ct('roamingTitle') }))
  const roamTips = locArr(SUPPORT_ROAMING)
  const roamList = el('ul', { cls: 'tip-list' })
  roamTips.forEach(tip => append(roamList, el('li', { text: tip })))
  append(roamSection, roamList)
  append(section, roamSection)

  // Engage vs Peel
  const engageSection = el('div', { cls: 'coaching-subsection' })
  append(engageSection, el('h4', { cls: 'coaching-sub-header', text: ct('engagePeelTitle') }))
  const decisions = locArr(SUPPORT_DECISIONS)
  const decList = el('ul', { cls: 'tip-list' })
  decisions.forEach(d => append(decList, el('li', { text: d })))
  append(engageSection, decList)
  append(section, engageSection)

  return section
}

// ─── Climbing Tips ──────────────────────────────────────────────────────────

function buildClimbingTips() {
  const section = el('div', { cls: 'coaching-section' })
  append(section, el('h3', { text: ct('climbingTipsTitle') }))

  const tips = CLIMBING_TIPS[selectedElo]
  const tipArr = tips ? locArr(tips) : []

  if (tipArr.length === 0) return section

  const tipContainer = el('div', { cls: 'tip-cards' })

  tipArr.forEach(tip => {
    const card = el('div', { cls: 'tip-card' })
    append(card, el('span', { text: tip }))
    append(tipContainer, card)
  })

  append(section, tipContainer)
  return section
}

// ─── Rerender (called when role/elo changes) ────────────────────────────────

function rerender() {
  render()
}
