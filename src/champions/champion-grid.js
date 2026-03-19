import { getChampions, getVersion } from '../data/data-service.js'
import { ROLES, ROLE_LIST, CHAMPION_IMG } from '../data/constants.js'
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
        cls: 'card',
        on: { click: () => openChampionModal(champ, version) }
      })

      const img = el('img', {
        cls: 'card-img',
        attrs: { src: CHAMPION_IMG(version, champ.id), alt: champ.name, loading: 'lazy' }
      })

      const name = el('div', { cls: 'card-name', text: champ.name })
      const title = el('div', { cls: 'card-subtitle', text: champ.title })

      const tags = el('div', { cls: 'card-tags' })
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

      append(card, img, name, title, tags)
      append(grid, card)
    })
  }

  renderGrid()
}
