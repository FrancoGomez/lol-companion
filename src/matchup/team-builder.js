import { getVersion } from '../data/data-service.js'
import { CHAMPION_IMG } from '../data/constants.js'
import { t } from '../data/i18n.js'
import { el, append, clear } from '../utilities/utilities.js'
import { openChampionPicker } from './champion-picker.js'
import { createItemBuilder } from './item-builder.js'
import { createRecommendationPanel } from './recommendation-panel.js'
import { createDamageCalculator } from './damage-calculator.js'

let initialized = false
let version = ''

// State
let myTeam = [null, null, null, null, null]
let enemyTeam = [null, null, null, null, null]
let myChampionIndex = 0 // Which slot is "my champion"

const container = document.getElementById('tab-matchup')

export function reset() { initialized = false }

export async function init() {
  if (initialized) return
  initialized = true

  version = await getVersion().catch(() => '')
  render()
}

function render() {
  clear(container)

  const wrapper = el('div', { cls: 'matchup-container' })

  // === My Team ===
  const mySection = el('div', { cls: 'team-section team-blue' })
  append(mySection, el('h3', { text: t('myTeam') }))
  const mySlots = el('div', { cls: 'team-slots' })

  const mySlotElements = []
  for (let i = 0; i < 5; i++) {
    const slot = createTeamSlot(i, 'blue')
    mySlotElements.push(slot)
    append(mySlots, slot)
  }
  append(mySection, mySlots)

  // === Enemy Team ===
  const enemySection = el('div', { cls: 'team-section team-red' })
  append(enemySection, el('h3', { text: t('enemyTeam') }))
  const enemySlots = el('div', { cls: 'team-slots' })

  const enemySlotElements = []
  for (let i = 0; i < 5; i++) {
    const slot = createTeamSlot(i, 'red')
    enemySlotElements.push(slot)
    append(enemySlots, slot)
  }
  append(enemySection, enemySlots)

  // === Item Builder ===
  const itemBuilder = createItemBuilder({
    onStatsChange: (stats) => {
      recoPanel.update({
        champion: myTeam[myChampionIndex],
        merakiData: null,
        currentItems: itemBuilder.getItems(),
        enemies: enemyTeam.filter(Boolean),
        base: stats.base,
        bonus: stats.bonus,
        level: stats.level
      })
      damageCalc.update({
        base: stats.base,
        bonus: stats.bonus,
        enemies: enemyTeam.filter(Boolean),
        level: itemBuilder.getLevel()
      })
    }
  })

  // === Recommendation Panel ===
  const recoPanel = createRecommendationPanel({
    onItemSelect: (item) => {
      // Add to first empty slot
      const items = itemBuilder.getItems()
      if (items.length < 6) {
        // Trigger rebuild internally - we'll need to find the empty slot
        // For now, user clicks on the slot
      }
    }
  })

  // === Damage Calculator ===
  const damageCalc = createDamageCalculator()

  // Layout: teams on top, then builder + recos side by side on wider screens
  const bottomRow = el('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '16px'
    }
  })
  append(bottomRow, itemBuilder.element, recoPanel.element, damageCalc.element)

  append(wrapper, mySection, enemySection, bottomRow)
  append(container, wrapper)

  // --- Slot logic ---
  function getAllSelected() {
    return [...myTeam, ...enemyTeam].filter(Boolean).map(c => c.id)
  }

  function getCounterTips() {
    const tips = {}
    const enemies = enemyTeam.filter(Boolean)
    if (enemies.length === 0) return tips

    const hasTank = enemies.some(e => e.tags?.includes('Tank'))
    const hasHealer = enemies.some(e => e.tags?.includes('Support'))
    const hasAssassin = enemies.some(e => e.tags?.includes('Assassin'))

    // Simple counter-pick hints
    if (hasTank) {
      // Champions good vs tanks: marksmen, sustained damage
      ;['Vayne', 'KogMaw', 'Fiora', 'Gwen'].forEach(name => { tips[name] = 'Bueno vs tanques' })
    }
    if (hasAssassin) {
      ;['Lulu', 'Janna', 'Lissandra', 'Malphite'].forEach(name => { tips[name] = 'CC vs assassins' })
    }
    if (hasHealer) {
      // Could use anti-heal champs
    }
    return tips
  }

  function createTeamSlot(index, team) {
    const isBlue = team === 'blue'
    const champions = isBlue ? myTeam : enemyTeam

    const slot = el('div', { cls: 'team-slot empty' })
    slot.innerHTML = '+'

    function updateSlot() {
      const champ = champions[index]
      clear(slot)

      if (champ) {
        slot.className = 'team-slot filled'
        const img = el('img', { attrs: { src: CHAMPION_IMG(version, champ.id), alt: champ.name } })
        const name = el('span', { cls: 'slot-name', text: champ.name })
        append(slot, img, name)

        // Star for "my champion"
        if (isBlue && index === myChampionIndex) {
          append(slot, el('span', { cls: 'star-indicator', html: '&#9733;' }))
        }

        // Remove button
        const removeBtn = el('button', {
          cls: 'remove-btn',
          text: 'x',
          on: {
            click: (e) => {
              e.stopPropagation()
              champions[index] = null
              updateSlot()
              if (isBlue && index === myChampionIndex) {
                itemBuilder.setChampion(null)
              }
              if (!isBlue) {
                triggerRecalc()
              }
            }
          }
        })
        append(slot, removeBtn)

        // Click to set as "my champion" (blue only)
        slot.onclick = () => {
          if (isBlue && index !== myChampionIndex) {
            myChampionIndex = index
            refreshAllSlots()
            itemBuilder.setChampion(myTeam[myChampionIndex])
          }
        }
      } else {
        slot.className = 'team-slot empty'
        slot.innerHTML = '+'
        slot.onclick = () => {
          openChampionPicker({
            disabled: getAllSelected(),
            counters: isBlue ? getCounterTips() : {},
            onSelect: (champ) => {
              champions[index] = champ
              updateSlot()
              if (isBlue && index === myChampionIndex) {
                itemBuilder.setChampion(champ)
              }
              if (!isBlue) {
                triggerRecalc()
              }
            }
          })
        }
      }
    }

    slot._update = updateSlot
    updateSlot()
    return slot
  }

  function refreshAllSlots() {
    mySlotElements.forEach(s => s._update?.())
    enemySlotElements.forEach(s => s._update?.())
  }

  function triggerRecalc() {
    itemBuilder.recalcStats()
  }
}
