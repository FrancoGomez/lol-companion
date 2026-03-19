import { el, append, clear } from '../utilities/utilities.js'
import { t } from '../data/i18n.js'
import { getState, setState, resetState } from './live-game-state.js'
import { saveGameLog, getUser } from '../data/supabase.js'
import { getCurrentUser } from '../auth/auth-ui.js'
import { getVersion } from '../data/data-service.js'

export async function render(container) {
  clear(container)
  const state = getState()
  const version = await getVersion()

  const wrapper = el('div', { cls: 'log-container' })

  append(wrapper, el('h3', { cls: 'log-title', text: t('logGame') }))

  // Result buttons
  const resultRow = el('div', { cls: 'result-buttons' })
  const winBtn = el('button', {
    cls: ['result-btn', 'result-win', state.result === 'win' ? 'active' : ''],
    text: t('win'),
    on: {
      click: () => {
        setState({ result: 'win' })
        winBtn.classList.add('active')
        lossBtn.classList.remove('active')
      }
    }
  })
  const lossBtn = el('button', {
    cls: ['result-btn', 'result-loss', state.result === 'loss' ? 'active' : ''],
    text: t('loss'),
    on: {
      click: () => {
        setState({ result: 'loss' })
        lossBtn.classList.add('active')
        winBtn.classList.remove('active')
      }
    }
  })
  append(resultRow, winBtn, lossBtn)
  append(wrapper, resultRow)

  // KDA inputs
  const kdaRow = el('div', { cls: 'kda-row' })
  const fields = [
    { key: 'kills', label: 'K' },
    { key: 'deaths', label: 'D' },
    { key: 'assists', label: 'A' },
    { key: 'cs', label: 'CS' },
  ]
  fields.forEach(f => {
    const group = el('div', { cls: 'kda-group' })
    append(group,
      el('label', { cls: 'kda-label', text: f.label }),
      el('input', {
        cls: 'kda-input',
        attrs: { type: 'number', min: '0', value: String(state[f.key] || 0) },
        on: {
          input: (e) => setState({ [f.key]: parseInt(e.target.value) || 0 })
        }
      })
    )
    append(kdaRow, group)
  })
  append(wrapper, kdaRow)

  // Game duration
  const durationRow = el('div', { cls: 'log-field' })
  const durationMinutes = state.timerElapsed > 0 ? Math.round(state.timerElapsed / 60) : ''
  append(durationRow,
    el('label', { cls: 'log-field-label', text: t('gameDuration') }),
    el('input', {
      cls: 'log-input',
      attrs: { type: 'number', min: '1', max: '90', placeholder: 'min', value: String(durationMinutes) },
      on: {
        input: (e) => {
          const mins = parseInt(e.target.value) || 0
          setState({ timerElapsed: mins * 60 })
        }
      }
    })
  )
  append(wrapper, durationRow)

  // Objectives summary
  const objSummary = el('div', { cls: 'log-objectives-summary' })
  append(objSummary, el('h4', { cls: 'log-subtitle', text: t('objectiveTimes') }))
  const objList = el('div', { cls: 'obj-summary-list' })
  const objKeys = [
    { key: 'firstClear', label: t('objClear') },
    { key: 'firstScuttle', label: t('objScuttle') },
    { key: 'firstGank', label: t('objGank') },
    { key: 'firstDragon', label: t('objDragon') },
    { key: 'firstHerald', label: t('objHerald') },
  ]
  objKeys.forEach(o => {
    const time = state.objectives[o.key]
    if (time !== null) {
      append(objList, el('div', { cls: 'obj-summary-item', children: [
        el('span', { text: o.label }),
        el('span', { cls: 'obj-summary-time', text: formatTime(time) })
      ]}))
    }
  })
  append(objSummary, objList)
  append(wrapper, objSummary)

  // Notes
  const notesRow = el('div', { cls: 'log-field' })
  append(notesRow,
    el('label', { cls: 'log-field-label', text: t('notes') }),
    el('textarea', {
      cls: 'log-textarea',
      attrs: { rows: '3', placeholder: t('notesPlaceholder') },
      text: state.notes,
      on: { input: (e) => setState({ notes: e.target.value }) }
    })
  )
  append(wrapper, notesRow)

  // Save button
  const saveRow = el('div', { cls: 'log-actions' })
  const saveBtn = el('button', {
    cls: 'save-log-btn',
    text: getCurrentUser() ? t('saveGame') : t('saveLocal'),
    on: {
      click: async () => {
        if (!state.result) {
          alert(t('selectResult'))
          return
        }
        await handleSave(saveBtn)
      }
    }
  })
  append(saveRow, saveBtn)

  // New game button
  const newBtn = el('button', {
    cls: 'new-game-btn',
    text: t('newGame'),
    on: {
      click: () => {
        resetState()
        const cont = document.getElementById('live-game-content')
        if (cont) {
          // Trigger re-render via tab
          import('./live-game-tab.js').then(m => m.init())
        }
      }
    }
  })
  append(saveRow, newBtn)
  append(wrapper, saveRow)

  append(container, wrapper)
}

async function handleSave(btn) {
  const state = getState()
  btn.disabled = true
  btn.textContent = t('saving')

  const log = {
    champion_id: state.myChampion?.id || 'unknown',
    role: state.role || 'jungle',
    result: state.result,
    side: state.side,
    first_clear_time: state.objectives.firstClear,
    first_scuttle_time: state.objectives.firstScuttle,
    first_gank_time: state.objectives.firstGank,
    first_dragon_time: state.objectives.firstDragon ? state.objectives.firstDragon / 60 : null,
    first_herald_time: state.objectives.firstHerald ? state.objectives.firstHerald / 60 : null,
    kills: state.kills,
    deaths: state.deaths,
    assists: state.assists,
    cs: state.cs,
    items_built: state.itemsBought,
    game_duration_minutes: state.timerElapsed > 0 ? Math.round(state.timerElapsed / 60 * 10) / 10 : null,
    notes: state.notes || null,
    patch_version: null,
  }

  try {
    const { getVersion } = await import('../data/data-service.js')
    log.patch_version = await getVersion()
  } catch { /* no-op */ }

  // Try Supabase first
  if (getCurrentUser()) {
    try {
      await saveGameLog(log)
      btn.textContent = t('saved')
      btn.classList.add('success')
      return
    } catch (err) {
      console.error('Supabase save failed, saving locally', err)
    }
  }

  // Fallback: save to localStorage
  const localLogs = JSON.parse(localStorage.getItem('lol-game-logs') || '[]')
  localLogs.unshift({ ...log, played_at: new Date().toISOString() })
  localStorage.setItem('lol-game-logs', JSON.stringify(localLogs.slice(0, 200)))
  btn.textContent = t('saved')
  btn.classList.add('success')
}

function formatTime(seconds) {
  if (seconds === null) return '--:--'
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}
