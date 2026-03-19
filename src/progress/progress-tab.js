import { el, append, clear } from '../utilities/utilities.js'
import { t } from '../data/i18n.js'
import { getGameLogs, getUserStats, isSupabaseConfigured } from '../data/supabase.js'
import { getCurrentUser } from '../auth/auth-ui.js'
import { generateInsights } from './insights-engine.js'
import { renderHistory } from './game-history.js'

let initialized = false

export function reset() { initialized = false }

export async function init() {
  if (initialized) return
  initialized = true

  const section = document.getElementById('tab-progress')
  if (!section) return

  clear(section)
  const container = el('div', { cls: 'progress-container' })

  // Load data
  let logs = []
  let stats = []

  if (getCurrentUser() && isSupabaseConfigured()) {
    try {
      [logs, stats] = await Promise.all([getGameLogs(100), getUserStats()])
    } catch { /* fallback */ }
  }

  // Fallback to localStorage
  if (logs.length === 0) {
    const localLogs = JSON.parse(localStorage.getItem('lol-game-logs') || '[]')
    logs = localLogs
  }

  if (logs.length === 0) {
    append(container, el('div', { cls: 'empty-state', children: [
      el('p', { text: t('noGamesYet') }),
      el('p', { cls: 'empty-hint', text: t('noGamesHint') }),
    ]}))
    append(section, container)
    return
  }

  // Overview stats
  append(container, renderOverview(logs))

  // Insights
  const insights = generateInsights(logs, stats)
  if (insights.length > 0) {
    append(container, renderInsights(insights))
  }

  // Champion breakdown
  append(container, renderChampBreakdown(logs))

  // Recent games
  const historySection = el('div', { cls: 'progress-section' })
  append(historySection, el('h3', { cls: 'progress-section-title', text: t('recentGames') }))
  await renderHistory(historySection, logs.slice(0, 20))
  append(container, historySection)

  append(section, container)
}

function renderOverview(logs) {
  const section = el('div', { cls: 'progress-section overview-section' })
  append(section, el('h3', { cls: 'progress-section-title', text: t('overview') }))

  const total = logs.length
  const wins = logs.filter(g => g.result === 'win').length
  const losses = total - wins
  const wr = total > 0 ? Math.round((wins / total) * 100) : 0

  const avgK = avg(logs, 'kills')
  const avgD = avg(logs, 'deaths')
  const avgA = avg(logs, 'assists')
  const kda = avgD === 0 ? avgK + avgA : (avgK + avgA) / avgD

  const grid = el('div', { cls: 'overview-grid' })

  // Winrate circle (SVG)
  const wrCard = el('div', { cls: 'overview-card wr-card' })
  const circumference = 2 * Math.PI * 40
  const dashOffset = circumference - (wr / 100) * circumference
  wrCard.innerHTML = `
    <svg class="wr-circle" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="40" fill="none" stroke="var(--border)" stroke-width="8"/>
      <circle cx="50" cy="50" r="40" fill="none" stroke="${wr >= 50 ? 'var(--green)' : 'var(--red)'}"
        stroke-width="8" stroke-linecap="round"
        stroke-dasharray="${circumference}" stroke-dashoffset="${dashOffset}"
        transform="rotate(-90 50 50)"/>
      <text x="50" y="46" text-anchor="middle" fill="var(--text-primary)" font-size="16" font-weight="700">${wr}%</text>
      <text x="50" y="60" text-anchor="middle" fill="var(--text-secondary)" font-size="8">Win Rate</text>
    </svg>
    <div class="wr-detail">${wins}W ${losses}L</div>
  `
  append(grid, wrCard)

  // KDA
  const kdaCard = el('div', { cls: 'overview-card' })
  append(kdaCard,
    el('div', { cls: 'overview-big-number', text: kda.toFixed(2) }),
    el('div', { cls: 'overview-label', text: 'KDA' }),
    el('div', { cls: 'overview-detail', text: `${avgK.toFixed(1)} / ${avgD.toFixed(1)} / ${avgA.toFixed(1)}` })
  )
  append(grid, kdaCard)

  // Games played
  const gamesCard = el('div', { cls: 'overview-card' })
  append(gamesCard,
    el('div', { cls: 'overview-big-number', text: String(total) }),
    el('div', { cls: 'overview-label', text: t('gamesPlayed') })
  )
  append(grid, gamesCard)

  // Best clear
  const clearTimes = logs.filter(g => g.first_clear_time != null).map(g => g.first_clear_time)
  if (clearTimes.length > 0) {
    const bestClear = Math.min(...clearTimes)
    const clearCard = el('div', { cls: 'overview-card' })
    append(clearCard,
      el('div', { cls: 'overview-big-number', text: formatTime(bestClear) }),
      el('div', { cls: 'overview-label', text: t('bestClear') })
    )
    append(grid, clearCard)
  }

  append(section, grid)
  return section
}

function renderInsights(insights) {
  const section = el('div', { cls: 'progress-section' })
  append(section, el('h3', { cls: 'progress-section-title', text: t('insights') }))

  const list = el('div', { cls: 'insights-list' })
  insights.forEach(insight => {
    const card = el('div', {
      cls: ['insight-card', `insight-${insight.type}`],
      children: [
        el('span', { cls: 'insight-icon', text: insight.type === 'positive' ? '\u2713' : insight.type === 'warning' ? '\u26A0' : '\u2717' }),
        el('span', { cls: 'insight-text', text: insight.message })
      ]
    })
    append(list, card)
  })
  append(section, list)
  return section
}

function renderChampBreakdown(logs) {
  const section = el('div', { cls: 'progress-section' })
  append(section, el('h3', { cls: 'progress-section-title', text: t('champBreakdown') }))

  // Aggregate by champion
  const byChamp = {}
  logs.forEach(g => {
    if (!byChamp[g.champion_id]) byChamp[g.champion_id] = { wins: 0, total: 0, kills: 0, deaths: 0, assists: 0 }
    const c = byChamp[g.champion_id]
    c.total++
    if (g.result === 'win') c.wins++
    c.kills += g.kills || 0
    c.deaths += g.deaths || 0
    c.assists += g.assists || 0
  })

  const sorted = Object.entries(byChamp).sort((a, b) => b[1].total - a[1].total)
  const bars = el('div', { cls: 'champ-breakdown-list' })

  sorted.slice(0, 10).forEach(([champ, data]) => {
    const wr = Math.round((data.wins / data.total) * 100)
    const kda = data.deaths === 0 ? data.kills + data.assists : ((data.kills + data.assists) / data.deaths).toFixed(1)

    const row = el('div', { cls: 'champ-bar-row' })
    append(row,
      el('span', { cls: 'champ-bar-name', text: champ }),
      el('div', { cls: 'champ-bar-bg', children: [
        el('div', { cls: 'champ-bar-fill', style: { width: `${wr}%`, background: wr >= 50 ? 'var(--green)' : 'var(--red)' } })
      ]}),
      el('span', { cls: 'champ-bar-wr', text: `${wr}%` }),
      el('span', { cls: 'champ-bar-games', text: `${data.total}g` }),
      el('span', { cls: 'champ-bar-kda', text: `${kda} KDA` })
    )
    append(bars, row)
  })

  append(section, bars)
  return section
}

function avg(arr, key) {
  if (arr.length === 0) return 0
  return arr.reduce((sum, g) => sum + (g[key] || 0), 0) / arr.length
}

function formatTime(seconds) {
  if (seconds == null) return '--:--'
  const m = Math.floor(seconds / 60)
  const s = Math.round(seconds % 60)
  return `${m}:${String(s).padStart(2, '0')}`
}
