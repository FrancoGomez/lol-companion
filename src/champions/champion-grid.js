import { getChampions, getVersion } from '../data/data-service.js'
import { ROLES, ROLE_LIST, CHAMPION_IMG, CHAMPION_LOADING } from '../data/constants.js'
import { t } from '../data/i18n.js'
import { el, append, clear, spinner } from '../utilities/utilities.js'
import { openChampionModal } from './champion-modal.js'

let initialized = false
let allChampions = []
let version = ''
let activeRoleFilter = null

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
  activeRoleFilter = null

  const filterBar = el('div', { cls: 'filter-bar' })
  const allBtn = el('button', { cls: 'filter-btn active', text: t('filterAll'), on: { click: () => setFilter(null, allBtn) } })
  append(filterBar, allBtn)

  ROLE_LIST.forEach(role => {
    const btn = el('button', {
      cls: 'filter-btn',
      text: t(role),
      on: { click: () => setFilter(role, btn) }
    })
    append(filterBar, btn)
  })

  const grid = el('div', { cls: 'card-grid' })

  append(container, filterBar, grid)

  function setFilter(role, btn) {
    activeRoleFilter = role
    filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'))
    btn.classList.add('active')
    renderGrid()
  }

  const renderGrid = () => {
    const filtered = allChampions.filter(c => {
      const matchRole = !activeRoleFilter || c.tags.includes(activeRoleFilter)
      return matchRole
    })

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
