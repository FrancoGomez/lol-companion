import { el, append } from '../utilities/utilities.js'
import { t } from '../data/i18n.js'
import { getVersion } from '../data/data-service.js'
import { CHAMPION_IMG } from '../data/constants.js'

export async function renderHistory(container, logs) {
  if (!logs || logs.length === 0) {
    append(container, el('p', { cls: 'empty-state', text: t('noGames') }))
    return
  }

  const version = await getVersion()
  const list = el('div', { cls: 'game-history-list' })

  logs.forEach(game => {
    const isWin = game.result === 'win'
    const kda = `${game.kills || 0}/${game.deaths || 0}/${game.assists || 0}`
    const kdaRatio = game.deaths === 0
      ? (game.kills + game.assists).toFixed(1)
      : ((game.kills + game.assists) / game.deaths).toFixed(1)

    const card = el('div', {
      cls: ['history-card', isWin ? 'history-win' : 'history-loss'],
      children: [
        el('img', {
          cls: 'history-champ-img',
          attrs: { src: CHAMPION_IMG(version, game.champion_id), alt: game.champion_id, loading: 'lazy' }
        }),
        el('div', { cls: 'history-info', children: [
          el('div', { cls: 'history-top-row', children: [
            el('span', { cls: 'history-champ-name', text: game.champion_id }),
            el('span', {
              cls: ['history-result', isWin ? 'win' : 'loss'],
              text: isWin ? t('win') : t('loss')
            }),
          ]}),
          el('div', { cls: 'history-stats-row', children: [
            el('span', { cls: 'history-kda', text: kda }),
            el('span', { cls: 'history-kda-ratio', text: `${kdaRatio} KDA` }),
            game.cs ? el('span', { cls: 'history-cs', text: `${game.cs} CS` }) : null,
            game.game_duration_minutes
              ? el('span', { cls: 'history-duration', text: `${Math.round(game.game_duration_minutes)}min` })
              : null,
          ].filter(Boolean) }),
          game.first_clear_time != null
            ? el('span', { cls: 'history-clear', text: `Clear: ${formatTime(game.first_clear_time)}` })
            : null,
        ].filter(Boolean) }),
        el('span', { cls: 'history-date', text: formatDate(game.played_at) }),
      ]
    })

    if (game.notes) {
      append(card, el('p', { cls: 'history-notes', text: game.notes }))
    }

    append(list, card)
  })

  append(container, list)
}

function formatTime(seconds) {
  if (seconds == null) return ''
  const m = Math.floor(seconds / 60)
  const s = Math.round(seconds % 60)
  return `${m}:${String(s).padStart(2, '0')}`
}

function formatDate(dateStr) {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  const now = new Date()
  const diffDays = Math.floor((now - d) / (1000 * 60 * 60 * 24))
  if (diffDays === 0) return t('today')
  if (diffDays === 1) return t('yesterday')
  if (diffDays < 7) return `${diffDays}d`
  return d.toLocaleDateString()
}
