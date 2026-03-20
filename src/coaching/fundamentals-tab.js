import { el, append, clear } from '../utilities/utilities.js'
import { t, getLang } from '../data/i18n.js'
import { FUNDAMENTALS } from './fundamentals-data.js'

let initialized = false

export function reset() { initialized = false }

export async function init() {
  if (initialized) return
  initialized = true

  const section = document.getElementById('tab-academy')
  if (!section) return

  clear(section)
  const lang = getLang()

  const container = el('div', { cls: 'fundamentals-container' })

  // Section nav (left sidebar on desktop, horizontal scroll on mobile)
  const nav = el('nav', { cls: 'fundamentals-nav' })
  const content = el('div', { cls: 'fundamentals-content', attrs: { id: 'fundamentals-content' } })

  FUNDAMENTALS.forEach((section, i) => {
    const btn = el('button', {
      cls: ['fundamentals-nav-btn', i === 0 ? 'active' : ''],
      children: [
        el('span', { cls: 'fundamentals-nav-icon', text: section.icon }),
        el('span', { cls: 'fundamentals-nav-label', text: section.title[lang] || section.title.en })
      ],
      on: {
        click: () => {
          nav.querySelectorAll('.fundamentals-nav-btn').forEach(b => b.classList.remove('active'))
          btn.classList.add('active')
          renderSection(content, section, lang)
        }
      }
    })
    append(nav, btn)
  })

  append(container, nav, content)
  append(document.getElementById('tab-academy'), container)

  // Render first section
  if (FUNDAMENTALS.length > 0) {
    renderSection(content, FUNDAMENTALS[0], lang)
  }
}

function renderSection(container, section, lang) {
  clear(container)

  append(container, el('h2', { cls: 'fundamentals-title', text: `${section.icon} ${section.title[lang] || section.title.en}` }))

  section.topics.forEach(topic => {
    const card = el('div', { cls: 'fundamentals-topic' })

    const header = el('button', {
      cls: 'fundamentals-topic-header',
      children: [
        el('span', { text: topic.title[lang] || topic.title.en }),
        el('span', { cls: 'fundamentals-topic-arrow', text: '▼' })
      ],
      on: {
        click: () => {
          const body = card.querySelector('.fundamentals-topic-body')
          const arrow = header.querySelector('.fundamentals-topic-arrow')
          if (body.classList.contains('hidden')) {
            body.classList.remove('hidden')
            arrow.textContent = '▲'
          } else {
            body.classList.add('hidden')
            arrow.textContent = '▼'
          }
        }
      }
    })

    const body = el('div', {
      cls: 'fundamentals-topic-body',
      html: topic.content[lang] || topic.content.en
    })

    append(card, header, body)
    append(container, card)
  })
}
