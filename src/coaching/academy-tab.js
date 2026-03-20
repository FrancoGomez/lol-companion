import { el, append, clear } from '../utilities/utilities.js'
import { t, getLang } from '../data/i18n.js'

let initialized = false

export function reset() { initialized = false }

export async function init() {
  if (initialized) return
  initialized = true

  const section = document.getElementById('tab-academy')
  if (!section) return

  clear(section)
  const lang = getLang()

  const container = el('div', { cls: 'academy-container' })

  // Sub-nav: Fundamentos | Coaching | Metas por Elo
  const subNav = el('nav', { cls: 'academy-subnav' })
  const tabs = [
    { id: 'fundamentals', label: lang === 'es' ? 'Fundamentos' : 'Fundamentals', icon: '📚' },
    { id: 'coaching', label: 'Coaching', icon: '🎯' },
    { id: 'elo-goals', label: lang === 'es' ? 'Subir de Elo' : 'Climb Ranks', icon: '📈' },
  ]

  const contentArea = el('div', { cls: 'academy-content', attrs: { id: 'academy-content' } })

  tabs.forEach((tab, i) => {
    const btn = el('button', {
      cls: ['academy-subnav-btn', i === 0 ? 'active' : ''],
      children: [
        el('span', { text: tab.icon }),
        el('span', { text: tab.label })
      ],
      on: {
        click: () => {
          subNav.querySelectorAll('.academy-subnav-btn').forEach(b => b.classList.remove('active'))
          btn.classList.add('active')
          loadSubTab(contentArea, tab.id)
        }
      }
    })
    append(subNav, btn)
  })

  append(container, subNav, contentArea)
  append(section, container)

  // Load first sub-tab
  loadSubTab(contentArea, 'fundamentals')
}

async function loadSubTab(container, id) {
  clear(container)

  switch (id) {
    case 'fundamentals': {
      const m = await import('./fundamentals-tab.js')
      // Re-render fundamentals into this container
      const section = el('div', { attrs: { id: 'tab-academy-inner' } })
      append(container, section)
      // Manually init fundamentals into our container
      const { FUNDAMENTALS } = await import('./fundamentals-data.js')
      const lang = getLang()
      renderFundamentals(container, FUNDAMENTALS, lang)
      break
    }
    case 'coaching': {
      const m = await import('./coaching-tab.js')
      const section = el('div', { attrs: { id: 'tab-coaching' }, cls: 'tab-content active' })
      append(container, section)
      m.reset()
      m.init()
      break
    }
    case 'elo-goals': {
      const { ELO_GOALS } = await import('./elo-goals-data.js')
      const lang = getLang()
      renderEloGoals(container, ELO_GOALS, lang)
      break
    }
  }
}

function renderFundamentals(container, sections, lang) {
  const nav = el('nav', { cls: 'fundamentals-nav' })
  const content = el('div', { cls: 'fundamentals-content' })

  sections.forEach((section, i) => {
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
          renderFundamentalsSection(content, section, lang)
        }
      }
    })
    append(nav, btn)
  })

  const wrapper = el('div', { cls: 'fundamentals-container' })
  append(wrapper, nav, content)
  append(container, wrapper)

  if (sections.length > 0) {
    renderFundamentalsSection(content, sections[0], lang)
  }
}

function renderFundamentalsSection(container, section, lang) {
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
          body.classList.toggle('hidden')
          arrow.textContent = body.classList.contains('hidden') ? '▼' : '▲'
        }
      }
    })
    const body = el('div', { cls: 'fundamentals-topic-body', html: topic.content[lang] || topic.content.en })
    append(card, header, body)
    append(container, card)
  })
}

function renderEloGoals(container, goals, lang) {
  append(container, el('h2', { cls: 'fundamentals-title', text: lang === 'es' ? '📈 Cómo Subir de Elo' : '📈 How to Climb' }))

  goals.forEach(goal => {
    const card = el('div', { cls: 'fundamentals-topic' })
    const tierLabel = `${goal.from[lang]} → ${goal.to[lang]}`
    const header = el('button', {
      cls: 'fundamentals-topic-header',
      children: [
        el('span', { children: [
          el('span', { text: `${goal.icon} ${tierLabel} — ` }),
          el('strong', { text: goal.focus[lang], style: { color: 'var(--gold)' } })
        ]}),
        el('span', { cls: 'fundamentals-topic-arrow', text: '▼' })
      ],
      on: {
        click: () => {
          const body = card.querySelector('.fundamentals-topic-body')
          const arrow = header.querySelector('.fundamentals-topic-arrow')
          body.classList.toggle('hidden')
          arrow.textContent = body.classList.contains('hidden') ? '▼' : '▲'
        }
      }
    })

    const bodyContent = []
    bodyContent.push(`<p><em>"${goal.keyInsight[lang]}"</em></p>`)
    bodyContent.push(`<p>${goal.description[lang]}</p>`)
    bodyContent.push('<ul>')
    goal.tasks.forEach(task => {
      bodyContent.push(`<li>${task[lang]}</li>`)
    })
    bodyContent.push('</ul>')
    bodyContent.push(`<p><strong>${lang === 'es' ? 'Métrica' : 'Metric'}:</strong> ${goal.metric[lang]}</p>`)

    const body = el('div', { cls: 'fundamentals-topic-body hidden', html: bodyContent.join('') })
    append(card, header, body)
    append(container, card)
  })
}
