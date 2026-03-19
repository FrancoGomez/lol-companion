import { el, append, clear } from '../utilities/utilities.js'
import { t } from '../data/i18n.js'
import { getChampions, getVersion } from '../data/data-service.js'
import { CHAMPION_IMG } from '../data/constants.js'
import { getState, setState } from './live-game-state.js'
import { getFavoriteChampions } from '../data/supabase.js'
import { getCurrentUser } from '../auth/auth-ui.js'

export async function render(container) {
  clear(container)
  const state = getState()

  const wrapper = el('div', { cls: 'setup-wizard' })

  // Role selection
  const roleSection = el('div', { cls: 'setup-section' })
  append(roleSection, el('h3', { cls: 'setup-label', text: t('selectRole') }))
  const roleRow = el('div', { cls: 'role-buttons' })
  const roles = [
    { id: 'top', icon: '\u{1F5E1}\u{FE0F}', label: 'Top' },
    { id: 'jungle', icon: '\u{1F332}', label: 'Jungle' },
    { id: 'mid', icon: '\u{1F52E}', label: 'Mid' },
    { id: 'adc', icon: '\u{1F3F9}', label: 'ADC' },
    { id: 'support', icon: '\u{1F6E1}\u{FE0F}', label: 'Support' },
  ]
  roles.forEach(r => {
    const btn = el('button', {
      cls: ['role-big-btn', state.role === r.id ? 'active' : ''],
      children: [
        el('span', { cls: 'role-big-icon', text: r.icon }),
        el('span', { cls: 'role-big-label', text: r.label })
      ],
      on: {
        click: () => {
          setState({ role: r.id })
          render(container)
        }
      }
    })
    append(roleRow, btn)
  })
  append(roleSection, roleRow)
  append(wrapper, roleSection)

  // Champion selection (show after role is picked)
  if (state.role) {
    const champSection = el('div', { cls: 'setup-section' })
    append(champSection, el('h3', { cls: 'setup-label', text: t('selectChampion') }))

    const version = await getVersion()
    const allChamps = await getChampions()
    const champList = Object.values(allChamps)

    // Show favorites first if logged in
    let favorites = []
    if (getCurrentUser()) {
      try {
        const favs = await getFavoriteChampions()
        favorites = favs.filter(f => f.role === state.role).map(f => f.champion_id)
      } catch { /* no-op */ }
    }

    const favChamps = champList.filter(c => favorites.includes(c.id))
    const otherChamps = champList.filter(c => !favorites.includes(c.id))

    // Favorites section
    if (favChamps.length > 0) {
      append(champSection, el('p', { cls: 'setup-hint', text: t('favorites') }))
      const favGrid = el('div', { cls: 'champ-select-grid' })
      favChamps.forEach(c => {
        append(favGrid, makeChampBtn(c, version, state))
      })
      append(champSection, favGrid)
      append(champSection, el('p', { cls: 'setup-hint', text: t('allChampions') }))
    }

    // Search
    const search = el('input', {
      cls: 'search-bar',
      attrs: { type: 'text', placeholder: t('searchChampion') },
      on: {
        input: (e) => {
          const q = e.target.value.toLowerCase()
          allGrid.querySelectorAll('.champ-select-btn').forEach(btn => {
            const name = btn.dataset.name.toLowerCase()
            btn.style.display = name.includes(q) ? '' : 'none'
          })
        }
      }
    })
    append(champSection, search)

    const allGrid = el('div', { cls: 'champ-select-grid' })
    const sorted = otherChamps.sort((a, b) => a.name.localeCompare(b.name))
    sorted.forEach(c => {
      append(allGrid, makeChampBtn(c, version, state))
    })
    append(champSection, allGrid)
    append(wrapper, champSection)
  }

  // Side selection (show after champion is picked)
  if (state.myChampion) {
    const sideSection = el('div', { cls: 'setup-section' })
    append(sideSection, el('h3', { cls: 'setup-label', text: t('selectSide') }))
    const sideRow = el('div', { cls: 'role-buttons' })
    ;['blue', 'red'].forEach(side => {
      const btn = el('button', {
        cls: ['side-btn', `side-${side}`, state.side === side ? 'active' : ''],
        text: side === 'blue' ? t('blueSide') : t('redSide'),
        on: {
          click: () => {
            setState({ side })
            render(container)
          }
        }
      })
      append(sideRow, btn)
    })
    append(sideSection, sideRow)
    append(wrapper, sideSection)
  }

  // Next button
  if (state.role && state.myChampion && state.side) {
    const nextBtn = el('button', {
      cls: 'wizard-next-btn',
      text: t('nextDraft'),
      on: {
        click: () => {
          // Place my champion in the right team
          const team = state.side === 'blue' ? [...state.blueTeam] : [...state.redTeam]
          team[0] = state.myChampion
          if (state.side === 'blue') setState({ blueTeam: team })
          else setState({ redTeam: team })
          setState({ phase: 'draft' })
        }
      }
    })
    append(wrapper, nextBtn)
  }

  append(container, wrapper)
}

function makeChampBtn(champ, version, state) {
  const isSelected = state.myChampion?.id === champ.id
  return el('button', {
    cls: ['champ-select-btn', isSelected ? 'selected' : ''],
    dataset: { name: champ.name },
    children: [
      el('img', {
        cls: 'champ-select-img',
        attrs: { src: CHAMPION_IMG(version, champ.id), alt: champ.name, loading: 'lazy' }
      }),
      el('span', { cls: 'champ-select-name', text: champ.name })
    ],
    on: {
      click: () => {
        setState({ myChampion: { id: champ.id, name: champ.name, tags: champ.tags } })
        // Re-render handled by parent
        const container = document.getElementById('live-game-content')
        if (container) render(container)
      }
    }
  })
}
