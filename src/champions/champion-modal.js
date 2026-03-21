import { getDDragonChampionDetail, getVersion, getItems } from '../data/data-service.js'
import { CHAMPION_IMG, SPELL_IMG, PASSIVE_IMG, ITEM_IMG, ROLES, STAT_COLORS } from '../data/constants.js'
import { t, getLang } from '../data/i18n.js'
import { el, append, clear, spinner, statAtLevel, formatStat } from '../utilities/utilities.js'
import { openModal } from '../app.js'
import { openItemPicker } from '../matchup/item-picker.js'

// Shared state for "Copy build to Stats" feature
let sharedBuildItems = []
let switchToStatsTab = null

const SHARD_OPTIONS = [
  // Row 1 (Offense)
  [
    { id: 'adaptive1', label: '+9 AD / +14 AP', stat: 'adaptive', value: 9 },
    { id: 'as', label: '+10% AS', stat: 'attackSpeed', value: 0.10 },
    { id: 'ah', label: '+8 AH', stat: 'abilityHaste', value: 8 },
  ],
  // Row 2 (Flex)
  [
    { id: 'adaptive2', label: '+9 AD / +14 AP', stat: 'adaptive', value: 9 },
    { id: 'ms', label: '+2% MS', stat: 'percentMovespeed', value: 0.02 },
    { id: 'hpscale', label: '+10-180 HP', stat: 'healthScaling', value: 10 },
  ],
  // Row 3 (Defense)
  [
    { id: 'hp', label: '+65 HP', stat: 'health', value: 65 },
    { id: 'tenacity', label: '+10% Tenacity', stat: 'tenacity', value: 10 },
    { id: 'hpscale2', label: '+10-180 HP', stat: 'healthScaling', value: 10 },
  ],
]

const AD_TAGS = ['Fighter', 'Assassin', 'Marksman']

export async function openChampionModal(champ, version, { silent = false } = {}) {
  openModal((content) => {
    append(content, spinner())
    loadChampionData(champ, version, content)
  }, silent ? null : `champion/${champ.id}`)
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

async function renderModal(content, champ, version, dd) {
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

  // Load identity data
  let champIdentity = null
  try {
    const { CHAMPION_IDENTITIES } = await import('../data/champion-identities.js')
    champIdentity = CHAMPION_IDENTITIES[champ.id] || null
  } catch { /* no identity data */ }

  // Tabs: Habilidades, Stats, Builds, Identidad
  const tabsContainer = el('div', { cls: 'modal-tabs' })
  const lang = getLang()
  const tabDefs = [
    { key: 'abilities', label: t('modalAbilities') },
    { key: 'stats', label: t('modalStats') },
    { key: 'builds', label: t('modalBuilds') },
    { key: 'identity', label: lang === 'es' ? 'Identidad' : 'Identity' },
  ]

  const tabContents = {}

  const tabButtons = {}
  tabDefs.forEach((tab, i) => {
    const btn = el('button', {
      cls: `modal-tab${i === 0 ? ' active' : ''}`,
      text: tab.label,
      on: {
        click: () => {
          tabsContainer.querySelectorAll('.modal-tab').forEach(b => b.classList.remove('active'))
          btn.classList.add('active')
          Object.values(tabContents).forEach(c => c.classList.remove('active'))
          tabContents[tab.key].classList.add('active')
        }
      }
    })
    tabButtons[tab.key] = btn
    append(tabsContainer, btn)
  })

  // Wire up the module-level tab switch so Builds can trigger Stats tab
  switchToStatsTab = () => {
    tabsContainer.querySelectorAll('.modal-tab').forEach(b => b.classList.remove('active'))
    tabButtons.stats.classList.add('active')
    Object.values(tabContents).forEach(c => c.classList.remove('active'))
    tabContents.stats.classList.add('active')
  }

  append(content, header, tabsContainer)

  tabDefs.forEach((tab, i) => {
    const div = el('div', { cls: `modal-tab-content${i === 0 ? ' active' : ''}` })
    tabContents[tab.key] = div

    switch (tab.key) {
      case 'abilities': renderAbilities(div, dd, version, champIdentity, lang); break
      case 'stats': renderStats(div, dd, version); break
      case 'builds': renderBuilds(div, champ, version, champIdentity, lang); break
      case 'identity': renderIdentity(div, champIdentity, lang, dd); break
    }

    append(content, div)
  })
}

function renderAbout(container, dd) {
  if (!dd) return
  append(container, el('p', { cls: 'lore-text', text: dd.lore }))
}

/**
 * Generate skill leveling path from priority order + early levels.
 * @param {string} order - e.g. "Q > E > W" (max order)
 * @param {string[]} [earlyLevels] - e.g. ['Q','E','W'] for levels 1,2,3
 */
function generateSkillPath(order, earlyLevels) {
  if (!order) return []
  const skills = order.split('>').map(s => s.trim().toUpperCase())
  if (skills.length < 3) return []

  const path = new Array(18).fill(null)
  path[5] = 'R'; path[10] = 'R'; path[15] = 'R'

  // Early levels: use explicit order for 1-3 if provided
  const early = earlyLevels || [skills[0], skills[1], skills[2]]
  path[0] = early[0]
  path[1] = early[1]
  path[2] = early[2]

  // Count points already spent per skill
  const counts = {}
  for (const s of skills) counts[s] = 0
  counts['R'] = 0
  for (let i = 0; i < 18; i++) {
    if (path[i]) counts[path[i]] = (counts[path[i]] || 0) + 1
  }

  // Fill remaining: max each skill to 5 in priority order
  for (const skill of skills) {
    for (let i = 0; i < 18 && counts[skill] < 5; i++) {
      if (path[i] === null) {
        path[i] = skill
        counts[skill]++
      }
    }
  }

  return path.map((skill, i) => ({ level: i + 1, skill }))
}

function renderAbilities(container, dd, version, identity, lang) {
  if (!dd) {
    append(container, el('div', { cls: 'empty-state', text: t('abilitiesNA') }))
    return
  }

  const layout = el('div', { cls: 'abilities-layout' })
  const leftCol = el('div', { cls: 'abilities-left' })
  const rightCol = el('div', { cls: 'abilities-right' })

  // === LEFT COLUMN: Ability rows (P, Q, W, E, R) ===
  if (dd.passive) {
    const row = el('div', { cls: 'ability-row', attrs: { 'data-key': 'P' } })
    const icon = el('img', {
      cls: 'ability-icon',
      attrs: { src: PASSIVE_IMG(version, dd.passive.image.full), alt: dd.passive.name }
    })
    const info = el('div')
    append(info, el('div', { cls: 'ability-key', text: t('passive') }))
    append(info, el('div', { cls: 'ability-name', text: dd.passive.name }))
    append(info, el('div', { cls: 'ability-desc', html: cleanDescription(dd.passive.description) }))
    append(row, icon, info)
    append(leftCol, row)
  }

  const keys = ['Q', 'W', 'E', 'R']
  dd.spells.forEach((spell, i) => {
    const row = el('div', { cls: 'ability-row', attrs: { 'data-key': keys[i] } })
    const icon = el('img', {
      cls: 'ability-icon',
      attrs: { src: SPELL_IMG(version, spell.image.full), alt: spell.name }
    })

    const info = el('div')
    append(info, el('div', { cls: 'ability-key', text: keys[i] }))
    append(info, el('div', { cls: 'ability-name', text: spell.name }))
    const tooltipText = spell.tooltip ? cleanTooltip(spell.tooltip, spell) : ''
    const unresolvedCount = (tooltipText.match(/font-style:italic/g) || []).length
    if (unresolvedCount === 0 && spell.tooltip) {
      append(info, el('div', { cls: 'ability-desc', html: tooltipText }))
    } else {
      append(info, el('div', { cls: 'ability-desc', html: cleanDescription(spell.description) }))
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
    append(leftCol, row)
  })

  // === RIGHT COLUMN: Combos + Skill order grid + Reasoning ===

  // Helper: highlight ability rows on combo hover
  function highlightAbilities(keysStr, highlight) {
    if (!keysStr) return
    const mentioned = new Set()
    const upper = keysStr.toUpperCase()
    ;['Q', 'W', 'E', 'R', 'P'].forEach(k => {
      if (upper.includes(k)) mentioned.add(k)
    })
    leftCol.querySelectorAll('.ability-row[data-key]').forEach(row => {
      const key = row.getAttribute('data-key')
      if (mentioned.has(key)) {
        if (highlight) row.classList.add('ability-highlight')
        else row.classList.remove('ability-highlight')
      }
    })
  }

  // Combos section
  if (identity?.combo) {
    const comboSection = el('div', { cls: 'combo-section' })
    append(comboSection, el('h3', { cls: 'combo-title', text: 'Combos' }))

    if (identity.combo.basic) {
      const basic = el('div', {
        cls: 'combo-card',
        on: {
          mouseenter: () => highlightAbilities(identity.combo.basic.keys, true),
          mouseleave: () => highlightAbilities(identity.combo.basic.keys, false),
        }
      })
      append(basic, el('div', { cls: 'combo-label', text: lang === 'es' ? 'Combo b\u00e1sico' : 'Basic combo' }))
      append(basic, el('div', { cls: 'combo-keys', text: identity.combo.basic.keys }))
      append(basic, el('div', { cls: 'combo-explain', text: identity.combo.basic[lang] || identity.combo.basic.en }))
      append(comboSection, basic)
    }

    if (identity.combo.advanced) {
      const adv = el('div', {
        cls: 'combo-card',
        on: {
          mouseenter: () => highlightAbilities(identity.combo.advanced.keys, true),
          mouseleave: () => highlightAbilities(identity.combo.advanced.keys, false),
        }
      })
      append(adv, el('div', { cls: 'combo-label', text: lang === 'es' ? 'Combo avanzado' : 'Advanced combo' }))
      append(adv, el('div', { cls: 'combo-keys', text: identity.combo.advanced.keys }))
      append(adv, el('div', { cls: 'combo-explain', text: identity.combo.advanced[lang] || identity.combo.advanced.en }))
      append(comboSection, adv)
    }

    append(rightCol, comboSection)
  }

  // Skill order grid
  if (identity?.skillOrder) {
    const skillPath = generateSkillPath(identity.skillOrder.order, identity.skillOrder.earlyLevels)

    if (skillPath.length === 18) {
      const gridWrapper = el('div', { cls: 'skill-grid-wrapper' })
      append(gridWrapper, el('h3', { cls: 'combo-title', text: lang === 'es' ? 'Orden de habilidades' : 'Skill Order' }))

      const grid = el('div', { cls: 'skill-grid' })

      // Header row: empty corner + levels 1-18
      append(grid, el('div', { cls: 'skill-grid-header', text: '' }))
      for (let lvl = 1; lvl <= 18; lvl++) {
        append(grid, el('div', { cls: 'skill-grid-header', text: String(lvl) }))
      }

      // One row per skill: Q, W, E, R
      const skillColors = { Q: 'active-q', W: 'active-w', E: 'active-e', R: 'active-r' }
      ;['Q', 'W', 'E', 'R'].forEach(skill => {
        append(grid, el('div', { cls: 'skill-grid-label', text: skill }))
        for (let lvl = 1; lvl <= 18; lvl++) {
          const entry = skillPath[lvl - 1]
          const isActive = entry.skill === skill
          const cls = isActive
            ? `skill-grid-cell active ${skillColors[skill]}`
            : 'skill-grid-cell'
          append(grid, el('div', { cls, text: isActive ? lvl.toString() : '' }))
        }
      })

      append(gridWrapper, grid)
      append(rightCol, gridWrapper)
    }

    // Skill order reasoning text
    const skillSection = el('div', { cls: 'skill-order-section' })
    append(skillSection, el('span', { cls: 'skill-order-label', text: lang === 'es' ? 'Orden de maxeo: ' : 'Skill max: ' }))
    append(skillSection, el('strong', { cls: 'skill-order-value', text: identity.skillOrder.order }))
    append(skillSection, el('span', { cls: 'skill-order-reason', text: ' \u2014 ' + (identity.skillOrder[lang] || identity.skillOrder.en) }))
    append(rightCol, skillSection)
  }

  append(layout, leftCol, rightCol)
  append(container, layout)
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

  // Determine if champion is AD-oriented (for adaptive force shards)
  const tags = dd?.tags || []
  const isAD = tags.some(tag => AD_TAGS.includes(tag))

  // Shard selections: default to first option in each row
  const selectedShards = [0, 0, 0]

  // Shard selector section
  const shardSection = el('div', { cls: 'shard-section' })
  const lang = getLang()
  append(shardSection, el('div', { cls: 'shard-title', text: lang === 'es' ? 'Runas (fragmentos)' : 'Rune Shards' }))

  const shardRowEls = []
  SHARD_OPTIONS.forEach((row, rowIdx) => {
    const rowEl = el('div', { cls: 'shard-row' })
    const btns = []
    row.forEach((shard, colIdx) => {
      const btn = el('button', {
        cls: `shard-btn${colIdx === 0 ? ' active' : ''}`,
        text: shard.label,
        on: {
          click: () => {
            selectedShards[rowIdx] = colIdx
            btns.forEach(b => b.classList.remove('active'))
            btn.classList.add('active')
            updateStats()
          }
        }
      })
      btns.push(btn)
      append(rowEl, btn)
    })
    shardRowEls.push(btns)
    append(shardSection, rowEl)
  })
  append(container, shardSection)

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

  function getShardBonuses(level) {
    const bonuses = { health: 0, attackDamage: 0, abilityPower: 0, attackSpeed: 0, abilityHaste: 0, percentMovespeed: 0, tenacity: 0 }
    selectedShards.forEach((colIdx, rowIdx) => {
      const shard = SHARD_OPTIONS[rowIdx][colIdx]
      switch (shard.stat) {
        case 'adaptive':
          if (isAD) bonuses.attackDamage += shard.value
          else bonuses.abilityPower += shard.value
          break
        case 'attackSpeed':
          bonuses.attackSpeed += shard.value
          break
        case 'abilityHaste':
          bonuses.abilityHaste += shard.value
          break
        case 'percentMovespeed':
          bonuses.percentMovespeed += shard.value
          break
        case 'healthScaling':
          bonuses.health += Math.round(10 + (170 * (level - 1) / 17))
          break
        case 'health':
          bonuses.health += shard.value
          break
        case 'tenacity':
          bonuses.tenacity += shard.value
          break
      }
    })
    return bonuses
  }

  function updateStats() {
    const level = parseInt(slider.value)
    display.textContent = level
    clear(statsContainer)

    const itemBonuses = getItemBonuses()
    const shardBonuses = getShardBonuses(level)

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
          itemBonus = base * itemBonuses[itemStat]
        } else {
          itemBonus = itemBonuses[itemStat]
        }
      }

      // Calculate shard bonus for this stat
      let shardBonus = 0
      if (itemStat === 'health') shardBonus += shardBonuses.health
      if (itemStat === 'attackDamage') shardBonus += shardBonuses.attackDamage
      if (isAS && shardBonuses.attackSpeed > 0) shardBonus += base * shardBonuses.attackSpeed
      if (itemStat === 'movespeed' && shardBonuses.percentMovespeed > 0) shardBonus += base * shardBonuses.percentMovespeed

      const totalBonus = itemBonus + shardBonus
      const totalValue = baseValue + totalBonus
      const baseDisplay = isAS ? baseValue.toFixed(3) : formatStat(Math.round(baseValue * 10) / 10)

      const row = el('div', { cls: 'stat-row' })
      append(row, el('span', { cls: 'stat-label', text: label }))
      const barBg = el('div', { cls: 'stat-bar-bg' })
      const adjustedMax = totalBonus > 0 ? Math.max(max, totalValue * 1.1) : max
      append(barBg, el('div', {
        cls: 'stat-bar-fill',
        style: { width: `${Math.min((totalValue / adjustedMax) * 100, 100)}%`, background: color || '#666' }
      }))
      append(row, barBg)

      // Value display: base (+bonus) = total
      const valueContainer = el('span', { cls: 'stat-value' })
      if (totalBonus > 0) {
        const bonusDisplay = isAS ? totalBonus.toFixed(3) : formatStat(Math.round(totalBonus * 10) / 10)
        const totalDisplay = isAS ? totalValue.toFixed(3) : formatStat(Math.round(totalValue * 10) / 10)
        valueContainer.innerHTML = `${baseDisplay} <span style="color:#4caf50">+${bonusDisplay}</span> = ${totalDisplay}`
      } else {
        valueContainer.textContent = baseDisplay
      }
      append(row, valueContainer)

      append(statsContainer, row)
    })

    // Show shard-only bonuses that don't map to stat bars (AH, AP, tenacity)
    const extraLines = []
    if (shardBonuses.abilityHaste > 0) extraLines.push(`+${shardBonuses.abilityHaste} Ability Haste`)
    if (shardBonuses.abilityPower > 0) extraLines.push(`+${shardBonuses.abilityPower} AP`)
    if (shardBonuses.tenacity > 0) extraLines.push(`+${shardBonuses.tenacity}% Tenacity`)
    if (extraLines.length > 0) {
      const extraEl = el('div', { cls: 'shard-extra-stats', text: lang === 'es' ? 'Runas: ' : 'Shards: ' })
      extraEl.innerHTML += `<span style="color:var(--gold)">${extraLines.join(' · ')}</span>`
      append(statsContainer, extraEl)
    }
  }

  function renderItemSlots() {
    clear(itemSlotsContainer)
    selectedItems.forEach((item, idx) => {
      const slot = el('div', {
        cls: `stats-item-slot${item ? ' filled' : ''}`,
        on: {
          click: () => {
            if (item) {
              selectedItems[idx] = null
              renderItemSlots()
              updateStats()
            } else {
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

  // Check for shared build items (from "Copy to Stats" button)
  async function applySharedBuild() {
    if (sharedBuildItems.length === 0) return
    const itemsMap = await getItems()
    sharedBuildItems.forEach((id, idx) => {
      if (idx < selectedItems.length && id && itemsMap[id]) {
        selectedItems[idx] = { id, ...itemsMap[id] }
      }
    })
    sharedBuildItems = []
    renderItemSlots()
    updateStats()
  }

  slider.addEventListener('input', updateStats)
  renderItemSlots()
  updateStats()

  // Apply shared build if present, or set up observer for future switches
  applySharedBuild()

  // Observe when tab becomes visible to check for shared items
  const observer = new MutationObserver(() => {
    if (container.classList.contains('active') && sharedBuildItems.length > 0) {
      applySharedBuild()
    }
  })
  observer.observe(container, { attributes: true, attributeFilter: ['class'] })
}

async function renderBuilds(container, champ, version, identity, lang) {
  append(container, spinner())
  try {
    const [itemsMap, buildData] = await Promise.all([getItems(), fetchBuildData(champ.id)])
    clear(container)

    // Build reasoning from identity data
    if (identity?.buildReasoning) {
      const reasonSection = el('div', { cls: 'build-reasoning' })
      append(reasonSection, el('h4', { cls: 'build-reasoning-title', text: lang === 'es' ? '¿Por qué estos items?' : 'Why these items?' }))
      append(reasonSection, el('p', { cls: 'build-reasoning-text', text: identity.buildReasoning[lang] || identity.buildReasoning.en }))
      append(container, reasonSection)
    }

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
        ids.forEach(entry => {
          // Support both string IDs and {id, wr} objects
          const id = typeof entry === 'object' ? entry.id : entry
          const wr = typeof entry === 'object' ? entry.wr : null
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
          if (wr) append(itemEl, el('span', { cls: 'build-item-wr', text: wr }))
          append(itemsContainer, itemEl)
        })
        append(row, itemsContainer)
        append(section, row)
      })

      // Counters
      if (data.counters?.length > 0) {
        const weak = data.counters.filter(c => c.type === 'weak').map(c => c.name).slice(0, 3)
        const strong = data.counters.filter(c => c.type === 'strong').map(c => c.name).slice(0, 3)
        const counterParts = []
        if (weak.length) counterParts.push(`${lang === 'es' ? 'Pierde vs' : 'Weak vs'}: ${weak.join(', ')}`)
        if (strong.length) counterParts.push(`${lang === 'es' ? 'Gana vs' : 'Strong vs'}: ${strong.join(', ')}`)
        if (counterParts.length > 0) {
          append(section, el('div', { cls: 'build-counters', html: counterParts.join(' · ') }))
        }
      }

      // "Copy to Stats" button
      const copyBtn = el('button', {
        cls: 'copy-build-btn',
        text: lang === 'es' ? 'Copiar a Stats' : 'Copy to Stats',
        on: {
          click: () => {
            // Collect core items (3) + first boot option
            const buildItemIds = []
            const boots = data.items?.boots
            if (boots?.length > 0) {
              const bootEntry = boots[0]
              buildItemIds.push(typeof bootEntry === 'object' ? bootEntry.id : bootEntry)
            }
            const core = data.items?.core
            if (core) {
              core.forEach(entry => {
                buildItemIds.push(typeof entry === 'object' ? entry.id : entry)
              })
            }
            sharedBuildItems = buildItemIds.slice(0, 6)
            if (switchToStatsTab) switchToStatsTab()
          }
        }
      })
      append(section, copyBtn)

      append(container, section)
    })
  } catch (err) {
    clear(container)
    append(container, el('div', { cls: 'empty-state', text: t('errorItems') }))
  }
}

function renderIdentity(container, identity, lang, dd) {
  if (!identity) {
    append(container, el('div', { cls: 'empty-state', text: lang === 'es' ? 'Identidad no disponible para este campeón' : 'Identity not available for this champion' }))
    return
  }

  // Identity summary
  const summary = el('div', { cls: 'identity-summary' })
  const spikeLabels = { early: 'Early Game', mid: 'Mid Game', late: 'Late Game' }
  append(summary,
    el('div', { cls: 'identity-text', text: identity.identity[lang] || identity.identity.en }),
    el('div', { cls: 'identity-meta', children: [
      el('span', { cls: 'identity-badge', text: identity.playstyle[lang] || identity.playstyle.en }),
      el('span', { cls: 'identity-badge identity-spike', text: '⚡ ' + (spikeLabels[identity.powerSpike] || identity.powerSpike) }),
    ]})
  )
  append(container, summary)

  // Gameplan by phase
  if (identity.gameplan) {
    const phases = [
      { key: 'early', label: 'Early Game (1-14 min)', icon: '🌱' },
      { key: 'mid', label: 'Mid Game (14-25 min)', icon: '⚔️' },
      { key: 'late', label: 'Late Game (25+ min)', icon: '🏆' },
    ]

    phases.forEach(phase => {
      const text = identity.gameplan[phase.key]
      if (!text) return

      const card = el('div', { cls: 'identity-phase' })
      append(card,
        el('div', { cls: 'identity-phase-header', text: `${phase.icon} ${phase.label}` }),
        el('div', { cls: 'identity-phase-text', text: text[lang] || text.en })
      )
      append(container, card)
    })
  }

  // Lore (collapsed)
  if (dd?.lore) {
    const loreSection = el('div', { cls: 'identity-lore' })
    const loreBtn = el('button', {
      cls: 'identity-lore-toggle',
      text: lang === 'es' ? '📜 Historia' : '📜 Lore',
      on: {
        click: () => {
          const body = loreSection.querySelector('.identity-lore-text')
          body.classList.toggle('hidden')
        }
      }
    })
    append(loreSection, loreBtn)
    append(loreSection, el('p', { cls: 'identity-lore-text hidden', text: dd.lore }))
    append(container, loreSection)
  }
}
