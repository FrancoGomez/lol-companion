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

  const filterBar = el('div', { cls: 'filter-bar' })
  const allBtn = el('button', { cls: 'filter-btn active', text: t('filterAll'), on: { click: () => setFilter(null, allBtn) } })
  append(filterBar, allBtn)

  POSITIONS.forEach(pos => {
    const btn = el('button', {
      cls: 'filter-btn',
      text: `${pos.icon} ${pos.label}`,
      on: { click: () => setFilter(pos.id, btn) }
    })
    append(filterBar, btn)
  })

  const grid = el('div', { cls: 'card-grid' })

  append(container, filterBar, grid)

  function setFilter(position, btn) {
    activePositionFilter = position
    filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'))
    btn.classList.add('active')
    renderGrid()
  }

  const renderGrid = () => {
    let filtered

    if (!activePositionFilter) {
      // "Todos" selected: all champions alphabetically
      filtered = [...allChampions].sort((a, b) => a.name.localeCompare(b.name))
    } else {
      // Position selected: get champions with tier data, sort by tier
      filtered = allChampions
        .map(c => {
          const tierData = getChampionTier(c.id, activePositionFilter)
          return { ...c, _tier: tierData?.tier || null }
        })
        .filter(c => c._tier !== null)
        .sort((a, b) => {
          const tierDiff = TIER_ORDER.indexOf(a._tier) - TIER_ORDER.indexOf(b._tier)
          if (tierDiff !== 0) return tierDiff
          return a.name.localeCompare(b.name)
        })
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

      // Splash art background (loading screen image)
      const splash = el('div', { cls: 'champ-card-splash' })
      const img = el('img', {
        cls: 'champ-card-img',
        attrs: { src: CHAMPION_LOADING(champ.id, 0), alt: champ.name, loading: 'lazy' }
      })
      // Gradient overlay
      const overlay = el('div', { cls: 'champ-card-overlay' })
      append(splash, img, overlay)

      // Info bar at bottom
      const info = el('div', { cls: 'champ-card-info' })
      const name = el('div', { cls: 'champ-card-name', text: champ.name })

      // Tier badge (only when a position filter is active)
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
