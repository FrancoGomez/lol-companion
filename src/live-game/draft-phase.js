import { el, append, clear } from '../utilities/utilities.js'
import { t } from '../data/i18n.js'
import { getChampions, getVersion } from '../data/data-service.js'
import { CHAMPION_IMG } from '../data/constants.js'
import { getState, setState } from './live-game-state.js'

let pickingSlot = null // { team: 'blue'|'red', index: 0-4 }

export async function render(container) {
  clear(container)
  const state = getState()
  const version = await getVersion()

  const wrapper = el('div', { cls: 'draft-container' })

  // Blue team
  append(wrapper, renderTeam('blue', state.blueTeam, version))
  // VS divider
  append(wrapper, el('div', { cls: 'draft-vs', text: 'VS' }))
  // Red team
  append(wrapper, renderTeam('red', state.redTeam, version))

  // Next button
  const nextBtn = el('button', {
    cls: 'wizard-next-btn',
    text: t('startGame'),
    on: {
      click: () => setState({ phase: 'ingame' })
    }
  })
  append(wrapper, nextBtn)

  append(container, wrapper)
}

function renderTeam(team, slots, version) {
  const section = el('div', { cls: ['draft-team', `draft-team-${team}`] })
  const label = team === 'blue' ? t('blueSide') : t('redSide')
  append(section, el('h3', { cls: `draft-team-label team-${team}-text`, text: label }))

  const slotsRow = el('div', { cls: 'draft-slots' })
  slots.forEach((champ, i) => {
    const slot = el('div', {
      cls: ['draft-slot', champ ? 'filled' : 'empty'],
      on: {
        click: () => openChampPicker(team, i)
      }
    })

    if (champ) {
      append(slot,
        el('img', {
          cls: 'draft-slot-img',
          attrs: { src: CHAMPION_IMG(version, champ.id), alt: champ.name }
        }),
        el('span', { cls: 'draft-slot-name', text: champ.name })
      )
      // Remove button (not for my champion in slot 0)
      const state = getState()
      const isMyChamp = (team === state.side && i === 0)
      if (!isMyChamp) {
        const removeBtn = el('button', {
          cls: 'remove-btn',
          text: '\u00D7',
          on: {
            click: (e) => {
              e.stopPropagation()
              const teamArr = team === 'blue' ? [...state.blueTeam] : [...state.redTeam]
              teamArr[i] = null
              if (team === 'blue') setState({ blueTeam: teamArr })
              else setState({ redTeam: teamArr })
              const container = document.getElementById('live-game-content')
              if (container) render(container)
            }
          }
        })
        append(slot, removeBtn)
      }
    } else {
      append(slot, el('span', { cls: 'draft-slot-plus', text: '+' }))
    }

    append(slotsRow, slot)
  })

  append(section, slotsRow)
  return section
}

async function openChampPicker(team, index) {
  pickingSlot = { team, index }
  const state = getState()

  // Get already picked champions
  const picked = new Set()
  state.blueTeam.forEach(c => { if (c) picked.add(c.id) })
  state.redTeam.forEach(c => { if (c) picked.add(c.id) })

  const version = await getVersion()
  const allChamps = await getChampions()

  // Use the existing picker overlay
  const overlay = document.getElementById('picker-overlay')
  const grid = document.getElementById('picker-grid')
  const search = document.getElementById('picker-search')
  const filters = document.getElementById('picker-filters')

  grid.innerHTML = ''
  filters.innerHTML = ''
  search.value = ''

  const sorted = Object.values(allChamps).sort((a, b) => a.name.localeCompare(b.name))

  function renderPicker(query = '') {
    grid.innerHTML = ''
    sorted.forEach(c => {
      if (query && !c.name.toLowerCase().includes(query)) return
      const disabled = picked.has(c.id)
      const item = el('div', {
        cls: ['picker-item', disabled ? 'disabled' : ''],
        children: [
          el('img', { attrs: { src: CHAMPION_IMG(version, c.id), alt: c.name } }),
          el('span', { text: c.name })
        ],
        on: {
          click: () => {
            if (disabled) return
            selectChampion(c)
            overlay.classList.add('hidden')
            document.body.style.overflow = ''
          }
        }
      })
      append(grid, item)
    })
  }

  renderPicker()
  search.oninput = (e) => renderPicker(e.target.value.toLowerCase())

  overlay.classList.remove('hidden')
  document.body.style.overflow = 'hidden'
  search.focus()
}

function selectChampion(champ) {
  if (!pickingSlot) return
  const state = getState()
  const { team, index } = pickingSlot
  const teamArr = team === 'blue' ? [...state.blueTeam] : [...state.redTeam]
  teamArr[index] = { id: champ.id, name: champ.name, tags: champ.tags }
  if (team === 'blue') setState({ blueTeam: teamArr })
  else setState({ redTeam: teamArr })
  pickingSlot = null

  const container = document.getElementById('live-game-content')
  if (container) render(container)
}
