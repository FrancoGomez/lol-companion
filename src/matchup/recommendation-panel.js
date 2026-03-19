import { getRecommendations, calculatePowerSpike, getAntiSynergies } from '../data/recommendation-engine.js'
import { getItems, getVersion } from '../data/data-service.js'
import { ITEM_IMG } from '../data/constants.js'
import { t } from '../data/i18n.js'
import { el, append, clear, formatPercent } from '../utilities/utilities.js'

export function createRecommendationPanel(opts = {}) {
  const { onItemSelect } = opts

  const panel = el('div', { cls: 'reco-panel' })
  append(panel, el('h3', { text: t('recommendations') }))
  const listContainer = el('div')
  const warningsContainer = el('div')
  const spikesContainer = el('div')
  append(panel, warningsContainer, listContainer, spikesContainer)

  let version = ''

  async function update(ctx) {
    const { champion, merakiData, currentItems, enemies, base, bonus, level } = ctx

    if (!champion) {
      clear(listContainer)
      append(listContainer, el('div', { cls: 'empty-state', text: t('selectChampionReco') }))
      clear(warningsContainer)
      clear(spikesContainer)
      return
    }

    if (!version) version = await getVersion()

    // Anti-synergies
    clear(warningsContainer)
    const warnings = getAntiSynergies(currentItems)
    warnings.forEach(w => {
      append(warningsContainer, el('div', {
        cls: 'alert-badge warning',
        text: w,
        style: { display: 'block', marginBottom: '8px' }
      }))
    })

    // Get recommendations
    let allItems
    try {
      allItems = await getItems()
    } catch {
      clear(listContainer)
      append(listContainer, el('div', { cls: 'empty-state', text: t('errorItems') }))
      return
    }

    const recos = getRecommendations({
      champion,
      merakiData,
      currentItems,
      enemies,
      allItems
    })

    clear(listContainer)
    if (recos.length === 0) {
      append(listContainer, el('div', { cls: 'empty-state', text: t('noRecommendations') }))
      return
    }

    recos.forEach(({ item, score, reasons }) => {
      const row = el('div', {
        cls: 'reco-item',
        on: { click: () => onItemSelect?.(item) }
      })

      const img = el('img', { attrs: { src: ITEM_IMG(version, item.id), alt: item.name || '' } })

      const info = el('div', { cls: 'reco-info' })
      append(info, el('div', { cls: 'reco-name', text: item.name || '' }))
      const reasonText = reasons.length > 0 ? reasons[0] : `${item.shop?.prices?.total || 0} ${t('gold')}`
      append(info, el('div', { cls: 'reco-reason', text: reasonText }))

      const scoreEl = el('div', { cls: 'reco-score', text: Math.round(score) })

      append(row, img, info, scoreEl)
      append(listContainer, row)
    })

    // Power spikes for top recommendations
    clear(spikesContainer)
    if (base && recos.length > 0) {
      append(spikesContainer, el('h4', {
        text: t('powerSpikes'),
        style: { color: 'var(--gold)', fontSize: '0.8rem', margin: '16px 0 8px' }
      }))

      recos.slice(0, 5).forEach(({ item }) => {
        const spike = calculatePowerSpike(base, bonus, item, level)
        const cls = spike.delta > 30 ? 'high' : spike.delta > 15 ? 'mid' : 'low'
        const bar = el('div', { cls: 'spike-bar' })
        append(bar, el('span', { cls: 'spike-label', text: item.name || '' }))
        append(bar, el('span', { cls: `spike-delta ${cls}`, text: `+${formatPercent(spike.delta)} DPS` }))
        append(spikesContainer, bar)
      })
    }
  }

  return { element: panel, update }
}
