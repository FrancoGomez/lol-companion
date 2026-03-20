import { getDDragonChampionDetail, getVersion, getItems } from '../data/data-service.js'
import { CHAMPION_IMG, SPELL_IMG, PASSIVE_IMG, ITEM_IMG, ROLES, STAT_COLORS } from '../data/constants.js'
import { t, getLang } from '../data/i18n.js'
import { el, append, clear, spinner, statAtLevel, formatStat } from '../utilities/utilities.js'
import { openModal } from '../app.js'
import { openItemPicker } from '../matchup/item-picker.js'

export async function openChampionModal(champ, version) {
  openModal((content) => {
    append(content, spinner())
    loadChampionData(champ, version, content)
  })
}

async function loadChampionData(champ, version, content) {
  try {
    const dd = await getDDragonChampionDetail(champ.id)
    clear(content)
    renderModal(content, champ, version, dd)
  } catch {
    clear(content)
    append(content, el('div', { cls: 'empty-state', text: t('errorChampion') }))
  }
}

const POS_LABELS = {
  jungle: { es: 'Jungla', en: 'Jungle' },
  top: { es: 'Top', en: 'Top' },
  mid: { es: 'Mid', en: 'Mid' },
  adc: { es: 'ADC', en: 'ADC' },
  support: { es: 'Soporte', en: 'Support' },
}

/** Fetch lolalytics build data for a champion */
async function fetchBuildData(champId) {
  const LOCAL_DATA = import.meta.env.BASE_URL + 'data'
  try {
    const res = await fetch(`${LOCAL_DATA}/builds/${champId}.json`)
    if (!res.ok) return null
    return await res.json()
  } catch { return null }
}

function renderModal(content, champ, version, dd) {
  // Header
  const header = el('div', { cls: 'modal-header' })
  const img = el('img', { attrs: { src: CHAMPION_IMG(version, champ.id), alt: champ.name } })
  const info = el('div', { cls: 'modal-header-info' })
  append(info, el('h2', { text: dd?.name || champ.name }))
  append(info, el('p', { text: dd?.title || champ.title }))

  const badges = el('div', { cls: 'champion-info-badges' })
  ;(dd?.tags || champ.tags).forEach(tag => {
    const role = ROLES[tag]
    if (role) {
      append(badges, el('span', { cls: 'role-badge', text: t(tag), style: { background: role.color } }))
    }
  })
  append(info, badges)
  append(header, img, info)

  // Tabs
  const tabsContainer = el('div', { cls: 'modal-tabs' })
  const tabNames = [t('modalAbilities'), t('modalStats'), t('modalBuilds')]
  if (dd?.lore) tabNames.push(t('modalAbout'))

  const tabContents = {}

  tabNames.forEach((name, i) => {
    const btn = el('button', {
      cls: `modal-tab${i === 0 ? ' active' : ''}`,
      text: name,
      on: {
        click: () => {
          tabsContainer.querySelectorAll('.modal-tab').forEach(b => b.classList.remove('active'))
          btn.classList.add('active')
          Object.values(tabContents).forEach(c => c.classList.remove('active'))
          tabContents[name].classList.add('active')
        }
      }
    })
    append(tabsContainer, btn)
  })

  append(content, header, tabsContainer)

  tabNames.forEach((name, i) => {
    const div = el('div', { cls: `modal-tab-content${i === 0 ? ' active' : ''}` })
    tabContents[name] = div

    if (name === t('modalAbout')) renderAbout(div, dd)
    else if (name === t('modalAbilities')) renderAbilities(div, dd, version)
    else if (name === t('modalStats')) renderStats(div, dd, version)
    else if (name === t('modalBuilds')) renderBuilds(div, champ, version)

    append(content, div)
  })
}

function renderAbout(container, dd) {
  if (!dd) return
  append(container, el('p', { cls: 'lore-text', text: dd.lore }))
}

function renderAbilities(container, dd, version) {
  if (!dd) {
    append(container, el('div', { cls: 'empty-state', text: t('abilitiesNA') }))
    return
  }

  if (dd.passive) {
    const row = el('div', { cls: 'ability-row' })
    const icon = el('img', {
      cls: 'ability-icon',
      attrs: { src: PASSIVE_IMG(version, dd.passive.image.full), alt: dd.passive.name }
    })
    const info = el('div')
    append(info, el('div', { cls: 'ability-key', text: t('passive') }))
    append(info, el('div', { cls: 'ability-name', text: dd.passive.name }))
    append(info, el('div', { cls: 'ability-desc', html: cleanDescription(dd.passive.description) }))
    append(row, icon, info)
    append(container, row)
  }

  const keys = ['Q', 'W', 'E', 'R']
  dd.spells.forEach((spell, i) => {
    const row = el('div', { cls: 'ability-row' })
    const icon = el('img', {
      cls: 'ability-icon',
      attrs: { src: SPELL_IMG(version, spell.image.full), alt: spell.name }
    })

    const info = el('div')
    append(info, el('div', { cls: 'ability-key', text: keys[i] }))
    append(info, el('div', { cls: 'ability-name', text: spell.name }))
    // Use tooltip if it resolves well, otherwise fall back to description + scaling data
    const tooltipText = spell.tooltip ? cleanTooltip(spell.tooltip, spell) : ''
    const unresolvedCount = (tooltipText.match(/font-style:italic/g) || []).length
    if (unresolvedCount === 0 && spell.tooltip) {
      append(info, el('div', { cls: 'ability-desc', html: tooltipText }))
    } else {
      // Show clean description + raw scaling data
      append(info, el('div', { cls: 'ability-desc', html: cleanDescription(spell.description) }))
      // Add scaling info from effectBurn and vars
      const scalingInfo = buildScalingInfo(spell)
      if (scalingInfo) {
        append(info, el('div', { cls: 'ability-scaling', html: scalingInfo }))
      }
    }

    const meta = el('div', { cls: 'ability-meta' })
    if (spell.cooldownBurn && spell.cooldownBurn !== '0') {
      append(meta, el('span', { cls: 'ability-cd', text: `${t('cd')}: ${spell.cooldownBurn}s` }))
    }
    if (spell.costBurn && spell.costBurn !== '0') {
      append(meta, el('span', { cls: 'ability-cost', text: `${t('cost')}: ${spell.costBurn}` }))
    }
    if (spell.rangeBurn && spell.rangeBurn !== 'self') {
      append(meta, el('span', { cls: 'ability-range', text: `${t('range')}: ${spell.rangeBurn}` }))
    }
    append(info, meta)

    append(row, icon, info)
    append(container, row)
  })
}

function cleanDescription(html) {
  if (!html) return ''
  return html.replace(/<br\s*\/?>/gi, '<br>').replace(/<\/?font[^>]*>/gi, '')
}

function cleanTooltip(html, spell) {
  if (!html) return ''
  let text = html
  // Remove spellmodifierdescriptionappend placeholders entirely
  text = text.replace(/\{\{\s*spellmodifierdescriptionappend\s*\}\}/gi, '')

  // Build a lookup map from spell.vars (key -> display value)
  const varsMap = {}
  if (spell?.vars) {
    for (const v of spell.vars) {
      if (v.key && v.values && v.values.length > 0) {
        // Join all rank values like "80/120/160/200/240"
        const display = v.values.filter(val => val !== 0).join('/')
        varsMap[v.key.toLowerCase()] = display || String(v.values[0])
      }
    }
  }

  // Replace {{ eN }} patterns with effectBurn[N] if available
  // Also replace {{ aN }}, {{ fN }} and other known patterns using vars
  text = text.replace(/\{\{\s*([^}]*?)\s*\}\}/g, (match, varName) => {
    const key = varName.trim().toLowerCase()

    // Try effectBurn for e0, e1, e2... patterns
    const effectMatch = key.match(/^e(\d+)$/)
    if (effectMatch && spell?.effectBurn) {
      const idx = parseInt(effectMatch[1])
      if (spell.effectBurn[idx] && spell.effectBurn[idx] !== 'null') {
        return `<span style="font-weight:600">${spell.effectBurn[idx]}</span>`
      }
    }

    // Try spell.vars lookup
    if (varsMap[key]) {
      return `<span style="font-weight:600">${varsMap[key]}</span>`
    }

    // Last resort: show "?"
    return '<span style="color:var(--text-muted);font-style:italic">?</span>'
  })
  // Convert damage/effect type tags to styled spans
  text = text.replace(/<magicDamage>/gi, '<span style="color:#4e7ab5;font-weight:600">')
  text = text.replace(/<\/magicDamage>/gi, '</span>')
  text = text.replace(/<physicalDamage>/gi, '<span style="color:#c97e2a;font-weight:600">')
  text = text.replace(/<\/physicalDamage>/gi, '</span>')
  text = text.replace(/<trueDamage>/gi, '<span style="color:#f0f0f0;font-weight:600">')
  text = text.replace(/<\/trueDamage>/gi, '</span>')
  text = text.replace(/<attackSpeed>/gi, '<span style="color:#ffeb3b;font-weight:600">')
  text = text.replace(/<\/attackSpeed>/gi, '</span>')
  text = text.replace(/<healing>/gi, '<span style="color:#4caf50;font-weight:600">')
  text = text.replace(/<\/healing>/gi, '</span>')
  text = text.replace(/<shield>/gi, '<span style="color:#aaaaaa;font-weight:600">')
  text = text.replace(/<\/shield>/gi, '</span>')
  text = text.replace(/<keywordMajor>/gi, '<strong>')
  text = text.replace(/<\/keywordMajor>/gi, '</strong>')
  // Apply existing cleanDescription logic
  text = text.replace(/<br\s*\/?>/gi, '<br>').replace(/<\/?font[^>]*>/gi, '')
  return text
}

function buildScalingInfo(spell) {
  const parts = []

  // Effect values (damage/healing/shield per rank)
  if (spell.effectBurn) {
    spell.effectBurn.forEach((val, i) => {
      if (i === 0 || !val || val === 'null' || val === '0') return
      // Only show non-trivial values
      const nums = val.split('/')
      if (nums.length >= 3 && nums.some(n => parseFloat(n) > 0)) {
        parts.push(`<span class="scaling-values">${val}</span>`)
      }
    })
  }

  // Scaling ratios from vars
  if (spell.vars && spell.vars.length > 0) {
    spell.vars.forEach(v => {
      if (!v.coeff || !v.link) return
      const coeff = Array.isArray(v.coeff) ? v.coeff[0] : v.coeff
      if (!coeff || coeff === 0) return
      const pct = Math.round(coeff * 100)
      const linkLabel = v.link === 'spelldamage' ? 'AP'
        : v.link === 'attackdamage' ? 'AD'
        : v.link === 'bonusattackdamage' ? 'AD bonus'
        : v.link === 'bonushealth' ? 'HP bonus'
        : v.link === 'armor' ? 'Armadura'
        : v.link === 'spelldamage' ? 'AP'
        : v.link
      const color = linkLabel.includes('AP') ? '#4e7ab5' : '#c97e2a'
      parts.push(`<span class="scaling-ratio" style="color:${color}">(+${pct}% ${linkLabel})</span>`)
    })
  }

  if (parts.length === 0) return null
  return parts.join(' ')
}

function renderStats(container, dd, version) {
  const stats = dd?.stats
  if (!stats) {
    append(container, el('div', { cls: 'empty-state', text: t('statsNA') }))
    return
  }

  const sliderContainer = el('div', { cls: 'level-slider-container' })
  const label = el('label', { text: t('level') })
  const display = el('span', { cls: 'level-display', text: '1' })
  const slider = el('input', {
    cls: 'level-slider',
    attrs: { type: 'range', min: '1', max: '18', value: '1' }
  })
  append(sliderContainer, label, slider, display)
  append(container, sliderContainer)

  const statsContainer = el('div')
  append(container, statsContainer)

  // Item builder section
  const itemsSection = el('div', { cls: 'stats-items-section' })
  append(itemsSection, el('h3', { cls: 'stats-items-title', text: 'Items' }))
  const itemSlotsContainer = el('div', { cls: 'stats-item-slots' })
  append(itemsSection, itemSlotsContainer)
  append(container, itemsSection)

  const selectedItems = [null, null, null, null, null, null]
  let currentVersion = version

  // Load version if not provided
  if (!currentVersion) {
    getVersion().then(v => { currentVersion = v })
  }

  const statConfig = [
    { key: 'hp', perLvl: 'hpperlevel', label: t('statHealth'), max: 3000, color: STAT_COLORS.health, itemStat: 'health' },
    { key: 'mp', perLvl: 'mpperlevel', label: t('statMana'), max: 2000, color: STAT_COLORS.mana, itemStat: 'mana' },
    { key: 'attackdamage', perLvl: 'attackdamageperlevel', label: t('statAD'), max: 180, color: STAT_COLORS.attackDamage, itemStat: 'attackDamage' },
    { key: 'armor', perLvl: 'armorperlevel', label: t('statArmor'), max: 150, color: STAT_COLORS.armor, itemStat: 'armor' },
    { key: 'spellblock', perLvl: 'spellblockperlevel', label: t('statMR'), max: 100, color: STAT_COLORS.magicResistance, itemStat: 'magicResistance' },
    { key: 'attackspeed', perLvl: 'attackspeedperlevel', label: t('statAS'), max: 1.2, color: STAT_COLORS.attackSpeed, isAS: true, itemStat: 'attackSpeed' },
    { key: 'movespeed', perLvl: null, label: t('statMS'), max: 400, color: STAT_COLORS.movespeed, itemStat: 'movespeed' },
    { key: 'attackrange', perLvl: null, label: t('statRange'), max: 650, color: STAT_COLORS.attackRange, itemStat: null },
  ]

  function getItemBonuses() {
    const bonuses = {}
    for (const item of selectedItems) {
      if (!item?.stats) continue
      for (const [statKey, val] of Object.entries(item.stats)) {
        if (val) bonuses[statKey] = (bonuses[statKey] || 0) + val
      }
    }
    return bonuses
  }

  function updateStats() {
    const level = parseInt(slider.value)
    display.textContent = level
    clear(statsContainer)

    const itemBonuses = getItemBonuses()

    statConfig.forEach(({ key, perLvl, label, max, color, isAS, itemStat }) => {
      const base = stats[key]
      if (base === undefined) return

      let baseValue
      if (!perLvl) {
        baseValue = base
      } else if (isAS) {
        const bonusPercent = stats[perLvl] || 0
        const growthFactor = (level - 1) * (0.7025 + 0.0175 * (level - 1))
        baseValue = base * (1 + (bonusPercent / 100) * growthFactor)
      } else {
        baseValue = statAtLevel(base, stats[perLvl] || 0, level)
      }

      // Calculate item bonus for this stat
      let itemBonus = 0
      if (itemStat && itemBonuses[itemStat]) {
        if (isAS) {
          // Attack speed items give % bonus AS
          itemBonus = base * itemBonuses[itemStat]
        } else {
          itemBonus = itemBonuses[itemStat]
        }
      }

      const totalValue = baseValue + itemBonus
      const baseDisplay = isAS ? baseValue.toFixed(3) : formatStat(Math.round(baseValue * 10) / 10)

      const row = el('div', { cls: 'stat-row' })
      append(row, el('span', { cls: 'stat-label', text: label }))
      const barBg = el('div', { cls: 'stat-bar-bg' })
      // Bar shows total value
      const adjustedMax = itemBonus > 0 ? Math.max(max, totalValue * 1.1) : max
      append(barBg, el('div', {
        cls: 'stat-bar-fill',
        style: { width: `${Math.min((totalValue / adjustedMax) * 100, 100)}%`, background: color || '#666' }
      }))
      append(row, barBg)

      // Value display: base (+bonus) = total
      const valueContainer = el('span', { cls: 'stat-value' })
      if (itemBonus > 0) {
        const bonusDisplay = isAS ? itemBonus.toFixed(3) : formatStat(Math.round(itemBonus * 10) / 10)
        const totalDisplay = isAS ? totalValue.toFixed(3) : formatStat(Math.round(totalValue * 10) / 10)
        valueContainer.innerHTML = `${baseDisplay} <span style="color:#4caf50">+${bonusDisplay}</span> = ${totalDisplay}`
      } else {
        valueContainer.textContent = baseDisplay
      }
      append(row, valueContainer)

      append(statsContainer, row)
    })
  }

  function renderItemSlots() {
    clear(itemSlotsContainer)
    selectedItems.forEach((item, idx) => {
      const slot = el('div', {
        cls: `stats-item-slot${item ? ' filled' : ''}`,
        on: {
          click: () => {
            if (item) {
              // Remove item on click if filled
              selectedItems[idx] = null
              renderItemSlots()
              updateStats()
            } else {
              // Open item picker
              openItemPicker({
                onSelect: (picked) => {
                  selectedItems[idx] = picked
                  renderItemSlots()
                  updateStats()
                }
              })
            }
          }
        }
      })

      if (item) {
        const v = currentVersion || ''
        append(slot, el('img', {
          cls: 'stats-item-img',
          attrs: { src: ITEM_IMG(v, item.id), alt: item.name || '', title: item.name || '' }
        }))
      } else {
        append(slot, el('span', { cls: 'stats-item-plus', text: '+' }))
      }

      append(itemSlotsContainer, slot)
    })
  }

  slider.addEventListener('input', updateStats)
  renderItemSlots()
  updateStats()
}

async function renderBuilds(container, champ, version) {
  append(container, spinner())
  try {
    const [itemsMap, buildData] = await Promise.all([getItems(), fetchBuildData(champ.id)])
    const lang = getLang()
    clear(container)

    if (!buildData || Object.keys(buildData).length === 0) {
      append(container, el('div', { cls: 'empty-state', text: t('noRecommendations') }))
      return
    }

    // Sort positions by pick rate (most played first)
    const positions = Object.entries(buildData)
      .filter(([_, d]) => d.winRate && d.pickRate)
      .sort((a, b) => {
        const prA = parseFloat(a[1].pickRate) || 0
        const prB = parseFloat(b[1].pickRate) || 0
        return prB - prA
      })

    if (positions.length === 0) {
      append(container, el('div', { cls: 'empty-state', text: t('noRecommendations') }))
      return
    }

    positions.forEach(([pos, data]) => {
      const posLabel = POS_LABELS[pos]?.[lang] || POS_LABELS[pos]?.en || pos

      // Position header with tier + stats
      const section = el('div', { cls: 'build-section' })
      const header = el('div', { cls: 'build-section-header' })
      const tierColor = { S: '#ff7f7f', A: '#ffbf7f', B: '#ffdf7f', C: '#bfff7f', D: '#7fbfff' }
      const tierLetter = (data.tier || '?').charAt(0)
      append(header,
        el('span', { cls: 'build-section-name', children: [
          el('span', {
            text: data.tier || '?',
            style: { background: tierColor[tierLetter] || '#888', color: '#000', padding: '1px 6px', borderRadius: '4px', fontWeight: '800', marginRight: '8px', fontSize: '0.75rem' }
          }),
          el('span', { text: posLabel })
        ]}),
        el('span', { cls: 'build-section-gold', text: `${data.winRate} WR · ${data.pickRate} PR` })
      )
      append(section, header)

      // Keystone rune
      if (data.runes?.keystone?.name) {
        append(section, el('div', {
          cls: 'build-rune-info',
          text: `${data.runes.keystone.name} · ${data.summoners?.join(' + ') || ''}`,
        }))
      }

      // Skill priority
      if (data.skillPriority?.length >= 3) {
        append(section, el('div', {
          cls: 'build-skill-order',
          text: `${lang === 'es' ? 'Subir' : 'Max'}: ${data.skillPriority.join(' > ')}`,
        }))
      }

      // Items in order: starting → boots → core → 4th → 5th → 6th
      const itemSections = [
        { key: 'starting', label: lang === 'es' ? 'Inicio' : 'Start' },
        { key: 'boots', label: lang === 'es' ? 'Botas' : 'Boots' },
        { key: 'core', label: 'Core' },
        { key: 'fourth', label: '4th' },
        { key: 'fifth', label: '5th' },
        { key: 'sixth', label: '6th' },
      ]

      itemSections.forEach(({ key, label }) => {
        const ids = data.items?.[key]
        if (!ids || ids.length === 0) return

        const row = el('div', { cls: 'build-item-row' })
        append(row, el('span', { cls: 'build-item-label', text: label }))

        const itemsContainer = el('div', { cls: 'build-path' })
        ids.forEach(id => {
          const item = itemsMap[id]
          const itemEl = el('div', {
            cls: 'build-path-item',
            on: {
              click: async () => {
                if (item) {
                  const { openItemModal } = await import('../items/item-modal.js')
                  openItemModal(item, version, itemsMap)
                }
              }
            }
          })
          append(itemEl, el('img', { attrs: { src: ITEM_IMG(version, id), alt: item?.name || id } }))
          append(itemEl, el('span', { text: item?.name || id }))
          append(itemsContainer, itemEl)
        })
        append(row, itemsContainer)
        append(section, row)
      })

      // Counters
      if (data.counters?.length > 0) {
        const uniqueCounters = [...new Set(data.counters.map(c => c.name))].slice(0, 5)
        append(section, el('div', {
          cls: 'build-counters',
          text: `${lang === 'es' ? 'Counters' : 'Counters'}: ${uniqueCounters.join(', ')}`,
        }))
      }

      append(container, section)
    })
  } catch (err) {
    clear(container)
    append(container, el('div', { cls: 'empty-state', text: t('errorItems') }))
  }
}
