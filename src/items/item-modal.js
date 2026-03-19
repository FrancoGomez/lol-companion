import { ITEM_IMG, STAT_NAMES } from '../data/constants.js'
import { t } from '../data/i18n.js'
import { el, append, clear, formatPercent } from '../utilities/utilities.js'
import { openModal } from '../app.js'
import { calculateGoldEfficiency } from './item-grid.js'

export function openItemModal(item, version, itemsMap) {
  openModal((content) => renderItemModal(content, item, version, itemsMap))
}

function renderItemModal(content, item, version, itemsMap) {
  // Header
  const header = el('div', { cls: 'modal-header' })
  const img = el('img', {
    attrs: { src: ITEM_IMG(version, item.id), alt: item.name || '' },
    style: { borderRadius: '8px' }
  })
  const info = el('div', { cls: 'modal-header-info' })
  append(info, el('h2', { text: item.name || 'Unknown' }))
  append(info, el('p', { text: `${item.shop?.prices?.total || 0} ${t('gold')}` }))
  append(header, img, info)
  append(content, header)

  // Gold efficiency
  const efficiency = calculateGoldEfficiency(item)
  if (efficiency > 0) {
    const effClass = efficiency >= 100 ? 'good' : efficiency >= 80 ? 'ok' : 'bad'
    append(content, el('div', {
      style: { padding: '0 24px' },
      children: [el('span', {
        cls: `gold-efficiency ${effClass}`,
        text: `${t('goldEfficiency')}: ${formatPercent(efficiency)}`
      })]
    }))
  }

  // Stats
  const statsSection = el('div', { style: { padding: '0 24px 16px' } })
  const stats = item.stats || {}
  const hasStats = Object.values(stats).some(v => v !== 0)

  if (hasStats) {
    Object.entries(stats).forEach(([key, val]) => {
      if (!val) return
      const name = STAT_NAMES[key] || key
      const isPercent = ['attackSpeed', 'criticalStrikeChance', 'lifeSteal', 'omnivamp',
        'percentMovespeed', 'percentArmorPenetration', 'percentMagicPenetration'].includes(key)
      const display = isPercent ? `+${Math.round(val * 100)}%` : `+${Math.round(val)}`

      const row = el('div', { cls: 'item-stat-row' })
      append(row, el('span', { cls: 'item-stat-name', text: name }))
      append(row, el('span', { cls: 'item-stat-value', text: display }))
      append(statsSection, row)
    })
  }
  append(content, statsSection)

  // Description (from DDragon HTML)
  if (item.description) {
    const descSection = el('div', { style: { padding: '0 24px 16px' } })
    const descDiv = el('div', { cls: 'item-description', html: cleanItemDescription(item.description) })
    append(descSection, descDiv)
    append(content, descSection)
  }

  // Build path
  const buildFrom = item.buildsFrom || []
  const buildInto = item.buildsInto || []

  if (buildFrom.length > 0 || buildInto.length > 0) {
    const pathSection = el('div', { style: { padding: '0 24px 24px' } })

    if (buildFrom.length > 0) {
      const section = el('div', { cls: 'build-path-section' })
      append(section, el('h4', { text: t('buildsFrom') }))
      const path = el('div', { cls: 'build-path' })

      buildFrom.forEach(compId => {
        const comp = itemsMap[compId]
        if (!comp) return

        const pathItem = el('div', {
          cls: 'build-path-item',
          on: { click: () => openItemModal(comp, version, itemsMap) }
        })
        append(pathItem, el('img', { attrs: { src: ITEM_IMG(version, compId), alt: comp.name || '' } }))
        append(pathItem, el('span', { text: comp.name || compId }))
        append(path, pathItem)
      })

      append(section, path)
      append(pathSection, section)
    }

    if (buildInto.length > 0) {
      const section = el('div', { cls: 'build-path-section' })
      append(section, el('h4', { text: t('buildsInto') }))
      const path = el('div', { cls: 'build-path' })

      buildInto.forEach(upId => {
        const up = itemsMap[upId]
        if (!up) return

        const pathItem = el('div', {
          cls: 'build-path-item',
          on: { click: () => openItemModal(up, version, itemsMap) }
        })
        append(pathItem, el('img', { attrs: { src: ITEM_IMG(version, upId), alt: up.name || '' } }))
        append(pathItem, el('span', { text: up.name || upId }))
        append(path, pathItem)
      })

      append(section, path)
      append(pathSection, section)
    }

    append(content, pathSection)
  }
}

function cleanItemDescription(html) {
  if (!html) return ''
  // Clean up DDragon item HTML: remove mainText/stats wrappers, keep content
  return html
    .replace(/<mainText>/gi, '')
    .replace(/<\/mainText>/gi, '')
    .replace(/<stats>/gi, '<div style="margin-bottom:8px">')
    .replace(/<\/stats>/gi, '</div>')
    .replace(/<attention>/gi, '<strong style="color:var(--gold)">')
    .replace(/<\/attention>/gi, '</strong>')
    .replace(/<unique>/gi, '<strong style="color:var(--gold)">')
    .replace(/<\/unique>/gi, '</strong>')
    .replace(/<active>/gi, '<strong style="color:var(--blue)">')
    .replace(/<\/active>/gi, '</strong>')
    .replace(/<passive>/gi, '<strong style="color:var(--gold-dim)">')
    .replace(/<\/passive>/gi, '</strong>')
    .replace(/<rarityMythic>/gi, '<strong style="color:#ff8c00">')
    .replace(/<\/rarityMythic>/gi, '</strong>')
    .replace(/<rarityLegendary>/gi, '<strong style="color:#e34d4d">')
    .replace(/<\/rarityLegendary>/gi, '</strong>')
    .replace(/<keywordMajor>/gi, '<strong>')
    .replace(/<\/keywordMajor>/gi, '</strong>')
    .replace(/<keywordStealth>/gi, '<em>')
    .replace(/<\/keywordStealth>/gi, '</em>')
    .replace(/<li>/gi, '<br>• ')
    .replace(/<\/li>/gi, '')
    .replace(/<flavorText>/gi, '<em style="color:var(--text-muted)">')
    .replace(/<\/flavorText>/gi, '</em>')
    .replace(/<rules>/gi, '<div style="margin-top:4px;font-size:0.7rem;color:var(--text-muted)">')
    .replace(/<\/rules>/gi, '</div>')
}
