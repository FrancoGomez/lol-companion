import { getChampions, getVersion } from '../data/data-service.js'
import { ROLES, ROLE_LIST, CHAMPION_IMG, CHAMPION_LOADING } from '../data/constants.js'
import { POSITIONS, getChampionTier, TIER_COLORS, TIER_ORDER } from '../data/champion-tiers.js'
import { t } from '../data/i18n.js'
import { el, append, clear, spinner } from '../utilities/utilities.js'
import { openChampionModal } from './champion-modal.js'

let initialized = false
let allChampions = []
let version = ''
let activePositionFilter = null
let activeClassFilter = null

const container = document.getElementById('tab-champions')

export function reset() { initialized = false }

export async function init() {
  if (initialized) return
  initialized = true

  clear(container)
  append(container, spinner())

  try {
    version = await getVersion()
    const data = await getChampions()
    allChampions = Object.values(data).sort((a, b) => a.name.localeCompare(b.name))
    render()
  } catch (err) {
    clear(container)
    append(container, el('div', { cls: 'empty-state', text: `${t('errorChampion')}: ${err.message}` }))
  }
}

function render() {
  clear(container)
  activePositionFilter = null
  activeClassFilter = null

  // Position filter bar (Top, Jungle, Mid, ADC, Support)
  const posBar = el('div', { cls: 'filter-bar' })
  const allPosBtn = el('button', { cls: 'filter-btn active', text: t('filterAll'), on: { click: () => setPositionFilter(null, allPosBtn) } })
  append(posBar, allPosBtn)

  POSITIONS.forEach(pos => {
    const btn = el('button', {
      cls: 'filter-btn',
      text: `${pos.icon} ${pos.label}`,
      on: { click: () => setPositionFilter(pos.id, btn) }
    })
    append(posBar, btn)
  })

  // Class filter bar (Fighter, Tank, Mage, Assassin, Marksman, Support)
  const classBar = el('div', { cls: 'filter-bar filter-bar-secondary' })
  const allClassBtn = el('button', { cls: 'filter-btn active', text: t('filterAll'), on: { click: () => setClassFilter(null, allClassBtn) } })
  append(classBar, allClassBtn)

  ROLE_LIST.forEach(role => {
    const btn = el('button', {
      cls: 'filter-btn',
      text: t(role),
      style: { borderColor: ROLES[role].color + '66' },
      on: { click: () => setClassFilter(role, btn) }
    })
    append(classBar, btn)
  })

  const grid = el('div', { cls: 'card-grid' })

  append(container, posBar, classBar, grid)

  function setPositionFilter(position, btn) {
    activePositionFilter = position
    posBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'))
    btn.classList.add('active')
    renderGrid()
  }

  function setClassFilter(cls, btn) {
    activeClassFilter = cls
    classBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'))
    btn.classList.add('active')
    renderGrid()
  }

  const renderGrid = () => {
    let filtered

    if (!activePositionFilter) {
      filtered = [...allChampions]
    } else {
      filtered = allChampions
        .map(c => {
          const tierData = getChampionTier(c.id, activePositionFilter)
          return { ...c, _tier: tierData?.tier || null }
        })
        .filter(c => c._tier !== null)
    }

    // Apply class filter
    if (activeClassFilter) {
      filtered = filtered.filter(c => c.tags?.includes(activeClassFilter))
    }

    // Sort
    if (activePositionFilter) {
      filtered.sort((a, b) => {
        const tierDiff = TIER_ORDER.indexOf(a._tier) - TIER_ORDER.indexOf(b._tier)
        if (tierDiff !== 0) return tierDiff
        return a.name.localeCompare(b.name)
      })
    } else {
      filtered.sort((a, b) => a.name.localeCompare(b.name))
    }

    clear(grid)
    if (filtered.length === 0) {
      append(grid, el('div', { cls: 'no-results', text: t('noChampions') }))
      return
    }

    filtered.forEach(champ => {
      const card = el('div', {
        cls: 'champ-card',
        on: { click: () => openChampionModal(champ, version) }
      })

      const splash = el('div', { cls: 'champ-card-splash' })
      const img = el('img', {
        cls: 'champ-card-img',
        attrs: { src: CHAMPION_LOADING(champ.id, 0), alt: champ.name, loading: 'lazy' }
      })
      const overlay = el('div', { cls: 'champ-card-overlay' })
      append(splash, img, overlay)

      const info = el('div', { cls: 'champ-card-info' })
      const name = el('div', { cls: 'champ-card-name', text: champ.name })

      // Tier badge
      if (activePositionFilter && champ._tier) {
        const tierBadge = el('span', {
          cls: 'champ-tier-badge',
          text: champ._tier,
          style: { background: TIER_COLORS[champ._tier] }
        })
        append(info, tierBadge)
      }

      // Role badges
      const tags = el('div', { cls: 'champ-card-tags' })
      champ.tags.forEach(tag => {
        const role = ROLES[tag]
        if (role) {
          append(tags, el('span', {
            cls: 'role-badge',
            text: t(tag),
            style: { background: role.color }
          }))
        }
      })

      append(info, name, tags)
      append(card, splash, info)
      append(grid, card)
    })
  }

  renderGrid()
}
