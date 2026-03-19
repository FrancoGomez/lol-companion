import { t } from '../data/i18n.js'

/**
 * Analyze game logs and return actionable insights.
 * @param {Array} logs - game_logs rows
 * @param {Array} stats - user_stats rows (aggregated)
 * @returns {Array<{type: 'positive'|'warning'|'critical', message: string}>}
 */
export function generateInsights(logs, stats) {
  if (!logs || logs.length === 0) return []

  const insights = []
  const recent = logs.slice(0, 20) // Last 20 games
  const last5 = logs.slice(0, 5)

  // 1. Overall winrate
  const wins = recent.filter(g => g.result === 'win').length
  const wr = Math.round((wins / recent.length) * 100)
  if (wr >= 60) {
    insights.push({ type: 'positive', message: t('insightWinrateGood')(wr, recent.length) })
  } else if (wr < 45 && recent.length >= 10) {
    insights.push({ type: 'critical', message: t('insightWinrateBad')(wr, recent.length) })
  }

  // 2. Average deaths
  const avgDeaths = avg(recent, 'deaths')
  if (avgDeaths > 6) {
    insights.push({ type: 'critical', message: t('insightDeathsHigh')(avgDeaths.toFixed(1)) })
  } else if (avgDeaths > 4) {
    insights.push({ type: 'warning', message: t('insightDeathsMed')(avgDeaths.toFixed(1)) })
  } else if (avgDeaths <= 3 && recent.length >= 5) {
    insights.push({ type: 'positive', message: t('insightDeathsGood')(avgDeaths.toFixed(1)) })
  }

  // 3. Clear time improvement (jungle specific)
  const clearTimes = logs.filter(g => g.first_clear_time != null).map(g => g.first_clear_time)
  if (clearTimes.length >= 5) {
    const recentClears = clearTimes.slice(0, 5)
    const olderClears = clearTimes.slice(5, 10)
    if (olderClears.length > 0) {
      const recentAvg = recentClears.reduce((a, b) => a + b, 0) / recentClears.length
      const olderAvg = olderClears.reduce((a, b) => a + b, 0) / olderClears.length
      const diff = Math.round(olderAvg - recentAvg)
      if (diff > 5) {
        insights.push({ type: 'positive', message: t('insightClearImproved')(diff) })
      } else if (diff < -5) {
        insights.push({ type: 'warning', message: t('insightClearSlower')(Math.abs(diff)) })
      }
    }
    const bestClear = Math.min(...clearTimes)
    insights.push({ type: 'positive', message: t('insightBestClear')(formatSeconds(bestClear)) })
  }

  // 4. Champion winrate per champ
  const champStats = {}
  recent.forEach(g => {
    if (!champStats[g.champion_id]) champStats[g.champion_id] = { wins: 0, total: 0 }
    champStats[g.champion_id].total++
    if (g.result === 'win') champStats[g.champion_id].wins++
  })
  Object.entries(champStats).forEach(([champ, s]) => {
    if (s.total >= 5) {
      const champWr = Math.round((s.wins / s.total) * 100)
      if (champWr < 40) {
        insights.push({ type: 'critical', message: t('insightChampBad')(champ, champWr, s.total) })
      } else if (champWr >= 65) {
        insights.push({ type: 'positive', message: t('insightChampGood')(champ, champWr, s.total) })
      }
    }
  })

  // 5. KDA trend
  const kda5 = calcKDA(last5)
  if (kda5 < 2 && last5.length >= 3) {
    insights.push({ type: 'warning', message: t('insightKDALow')(kda5.toFixed(1)) })
  } else if (kda5 >= 4) {
    insights.push({ type: 'positive', message: t('insightKDAHigh')(kda5.toFixed(1)) })
  }

  // 6. Losing streak
  let streak = 0
  for (const g of recent) {
    if (g.result === 'loss') streak++
    else break
  }
  if (streak >= 3) {
    insights.push({ type: 'critical', message: t('insightLoseStreak')(streak) })
  }

  // 7. Winning streak
  let winStreak = 0
  for (const g of recent) {
    if (g.result === 'win') winStreak++
    else break
  }
  if (winStreak >= 3) {
    insights.push({ type: 'positive', message: t('insightWinStreak')(winStreak) })
  }

  // 8. Objective control (dragon/herald timing)
  const dragonTimes = logs.filter(g => g.first_dragon_time != null).map(g => g.first_dragon_time)
  if (dragonTimes.length >= 3) {
    const avgDragon = dragonTimes.reduce((a, b) => a + b, 0) / dragonTimes.length
    if (avgDragon > 10) {
      insights.push({ type: 'warning', message: t('insightDragonLate')(avgDragon.toFixed(1)) })
    }
  }

  // 9. CS comparison
  const avgCS = avg(recent.filter(g => g.cs != null && g.game_duration_minutes), 'cs')
  const avgDuration = avg(recent.filter(g => g.game_duration_minutes != null), 'game_duration_minutes')
  if (avgCS > 0 && avgDuration > 0) {
    const csPerMin = avgCS / avgDuration
    if (csPerMin < 5 && recent[0]?.role === 'jungle') {
      insights.push({ type: 'warning', message: t('insightCSLow')(csPerMin.toFixed(1)) })
    }
  }

  // 10. Game duration insight
  if (avgDuration > 0) {
    const longGames = recent.filter(g => (g.game_duration_minutes || 0) > 35).length
    if (longGames > recent.length * 0.5) {
      insights.push({ type: 'warning', message: t('insightGamesLong') })
    }
  }

  return insights
}

function avg(arr, key) {
  if (arr.length === 0) return 0
  return arr.reduce((sum, g) => sum + (g[key] || 0), 0) / arr.length
}

function calcKDA(games) {
  const k = games.reduce((s, g) => s + (g.kills || 0), 0)
  const d = games.reduce((s, g) => s + (g.deaths || 0), 0)
  const a = games.reduce((s, g) => s + (g.assists || 0), 0)
  return d === 0 ? k + a : (k + a) / d
}

function formatSeconds(s) {
  const m = Math.floor(s / 60)
  const sec = Math.round(s % 60)
  return `${m}:${String(sec).padStart(2, '0')}`
}
