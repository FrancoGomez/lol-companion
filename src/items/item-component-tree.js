import { el, append, formatGold } from '../utilities/utilities.js'
import { t } from '../data/i18n.js'
import { ITEM_IMG } from '../data/constants.js'

/**
 * Render a visual component tree for an item.
 * @param {Object} item - the target item
 * @param {Object} allItems - all items map
 * @param {string} version - patch version
 * @returns {HTMLElement}
 */
export function renderComponentTree(item, allItems, version) {
  const container = el('div', { cls: 'component-tree' })

  if (!item.buildsFrom || item.buildsFrom.length === 0) {
    append(container, el('p', { cls: 'empty-state', text: t('noComponents') }))
    return container
  }

  // Root item
  const root = renderTreeNode(item, version, true)
  append(container, root)

  // Arrow
  append(container, el('div', { cls: 'tree-arrow', text: '\u2191' }))

  // Components row
  const componentsRow = el('div', { cls: 'tree-components' })
  item.buildsFrom.forEach(compId => {
    const comp = allItems[compId]
    if (!comp) return

    const compCol = el('div', { cls: 'tree-component-col' })
    append(compCol, renderTreeNode(comp, version, false))

    // Sub-components
    if (comp.buildsFrom && comp.buildsFrom.length > 0) {
      append(compCol, el('div', { cls: 'tree-arrow-sm', text: '\u2191' }))
      const subRow = el('div', { cls: 'tree-sub-components' })
      comp.buildsFrom.forEach(subId => {
        const sub = allItems[subId]
        if (sub) append(subRow, renderTreeNode(sub, version, false))
      })
      append(compCol, subRow)
    }

    append(componentsRow, compCol)
  })

  append(container, componentsRow)

  // Total cost
  const totalCost = item.shop?.prices?.total || 0
  append(container, el('div', { cls: 'tree-total', text: `${t('goldTotal')}: ${formatGold(totalCost)}` }))

  return container
}

function renderTreeNode(item, version, isRoot) {
  return el('div', {
    cls: ['tree-node', isRoot ? 'tree-root' : ''],
    children: [
      el('img', {
        cls: 'tree-node-img',
        attrs: { src: ITEM_IMG(version, item.id), alt: item.name }
      }),
      el('span', { cls: 'tree-node-name', text: item.name }),
      el('span', { cls: 'tree-node-cost', text: `${formatGold(item.shop?.prices?.total || 0)}g` }),
    ]
  })
}
