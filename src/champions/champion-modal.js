import { getDDragonChampionDetail, getVersion, getItems } from '../data/data-service.js'
import { CHAMPION_IMG, CHAMPION_LOADING, SPELL_IMG, PASSIVE_IMG, ITEM_IMG, ROLES, STAT_COLORS } from '../data/constants.js'
import { t, getLang } from '../data/i18n.js'
import { el, append, clear, spinner, statAtLevel, formatStat } from '../utilities/utilities.js'
import { openModal } from '../app.js'

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

const ARCHETYPE_BUILDS = {
  Marksman: [
    {
      name: { es: 'ADC Critico', en: 'Crit ADC' },
      items: ['Infinity Edge', 'Phantom Dancer', 'Bloodthirster', "Lord Dominik's Regards", 'Guardian Angel', "Berserker's Greaves"]
    },
    {
      name: { es: 'On-Hit', en: 'On-Hit' },
      items: ['Blade of the Ruined King', "Guinsoo's Rageblade", "Wit's End", "Runaan's Hurricane", 'Guardian Angel', "Berserker's Greaves"]
    }
  ],
  Mage: [
    {
      name: { es: 'Burst', en: 'Burst' },
      items: ["Luden's Tempest", 'Shadowflame', "Rabadon's Deathcap", 'Void Staff', "Zhonya's Hourglass", "Sorcerer's Shoes"]
    },
    {
      name: { es: 'Utilidad', en: 'Utility' },
      items: ['Rod of Ages', "Archangel's Staff", "Zhonya's Hourglass", "Banshee's Veil", "Rabadon's Deathcap", "Sorcerer's Shoes"]
    }
  ],
  Assassin: [
    {
      name: { es: 'Letalidad', en: 'Lethality' },
      items: ["Youmuu's Ghostblade", 'Edge of Night', "Serpent's Fang", 'Opportunity', 'Guardian Angel', 'Boots of Lucidity']
    }
  ],
  Tank: [
    {
      name: { es: 'Full Tanque', en: 'Full Tank' },
      items: ['Heartsteel', "Jak'Sho", 'Thornmail', 'Force of Nature', "Warmog's Armor", 'Plated Steelcaps']
    },
    {
      name: { es: 'Engage', en: 'Engage' },
      items: ['Sunfire Aegis', 'Thornmail', "Randuin's Omen", 'Spirit Visage', 'Gargoyle Stoneplate', "Mercury's Treads"]
    }
  ],
  Fighter: [
    {
      name: { es: 'Bruiser', en: 'Bruiser' },
      items: ['Trinity Force', "Sterak's Gage", "Dead Man's Plate", 'Spirit Visage', 'Guardian Angel', 'Plated Steelcaps']
    },
    {
      name: { es: 'Daño', en: 'Damage' },
      items: ['Black Cleaver', "Death's Dance", 'Maw of Malmortius', "Sterak's Gage", 'Guardian Angel', 'Plated Steelcaps']
    }
  ],
  Support: [
    {
      name: { es: 'Encantador', en: 'Enchanter' },
      items: ['Moonstone Renewer', 'Ardent Censer', 'Staff of Flowing Water', 'Redemption', "Mikael's Blessing", 'Boots of Lucidity']
    },
    {
      name: { es: 'Tanque Soporte', en: 'Tank Support' },
      items: ['Locket of the Iron Solari', "Knight's Vow", "Zeke's Convergence", 'Redemption', 'Wardstone', 'Boots of Lucidity']
    }
  ]
}

function findItemByName(name, itemsMap) {
  const lower = name.toLowerCase()
  for (const item of Object.values(itemsMap)) {
    if ((item.name || '').toLowerCase() === lower) return item
  }
  // Partial match fallback
  for (const item of Object.values(itemsMap)) {
    if ((item.name || '').toLowerCase().includes(lower)) return item
  }
  return null
}

function getRecommendedBuilds(champion, itemsMap, lang) {
  const tags = champion.tags || []
  const builds = []
  const seenNames = new Set()

  for (const tag of tags) {
    const archetypes = ARCHETYPE_BUILDS[tag]
    if (!archetypes) continue
    for (const arch of archetypes) {
      const buildName = arch.name[lang] || arch.name.en
      if (seenNames.has(buildName)) continue
      seenNames.add(buildName)

      const resolvedItems = []
      let totalGold = 0
      for (const itemName of arch.items) {
        const found = findItemByName(itemName, itemsMap)
        if (found) {
          resolvedItems.push(found)
          totalGold += found.shop?.prices?.total || 0
        }
      }
      if (resolvedItems.length > 0) {
        builds.push({ name: buildName, items: resolvedItems, totalGold })
      }
    }
  }
  return builds
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
  const tabNames = [t('modalAbilities'), t('modalStats'), t('modalBuilds'), t('modalSkins')]
  if (dd?.lore) tabNames.unshift(t('modalAbout'))

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
    else if (name === t('modalStats')) renderStats(div, dd)
    else if (name === t('modalBuilds')) renderBuilds(div, champ, version)
    else if (name === t('modalSkins')) renderSkins(div, dd, champ)

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
    append(info, el('div', { cls: 'ability-desc', html: cleanTooltip(spell.tooltip || spell.description) }))

    const meta = el('div', { cls: 'ability-meta' })
    if (spell.cooldownBurn && spell.cooldownBurn !== '0') {
      append(meta, el('span', { text: `${t('cd')}: ${spell.cooldownBurn}s` }))
    }
    if (spell.costBurn && spell.costBurn !== '0') {
      append(meta, el('span', { text: `${t('cost')}: ${spell.costBurn}` }))
    }
    if (spell.rangeBurn && spell.rangeBurn !== 'self') {
      append(meta, el('span', { text: `${t('range')}: ${spell.rangeBurn}` }))
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

function cleanTooltip(html) {
  if (!html) return ''
  let text = html
  // Remove spellmodifierdescriptionappend placeholders entirely
  text = text.replace(/\{\{\s*spellmodifierdescriptionappend\s*\}\}/gi, '')
  // Replace {{ ... }} variable placeholders with styled "?"
  text = text.replace(/\{\{[^}]*\}\}/g, '<span style="color:var(--text-muted);font-style:italic">?</span>')
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

function renderStats(container, dd) {
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

  const statConfig = [
    { key: 'hp', perLvl: 'hpperlevel', label: t('statHealth'), max: 3000, color: STAT_COLORS.health },
    { key: 'mp', perLvl: 'mpperlevel', label: t('statMana'), max: 2000, color: STAT_COLORS.mana },
    { key: 'attackdamage', perLvl: 'attackdamageperlevel', label: t('statAD'), max: 180, color: STAT_COLORS.attackDamage },
    { key: 'armor', perLvl: 'armorperlevel', label: t('statArmor'), max: 150, color: STAT_COLORS.armor },
    { key: 'spellblock', perLvl: 'spellblockperlevel', label: t('statMR'), max: 100, color: STAT_COLORS.magicResistance },
    { key: 'attackspeed', perLvl: 'attackspeedperlevel', label: t('statAS'), max: 1.2, color: STAT_COLORS.attackSpeed, isAS: true },
    { key: 'movespeed', perLvl: null, label: t('statMS'), max: 400, color: STAT_COLORS.movespeed },
    { key: 'attackrange', perLvl: null, label: t('statRange'), max: 650, color: STAT_COLORS.attackRange },
  ]

  function updateStats() {
    const level = parseInt(slider.value)
    display.textContent = level
    clear(statsContainer)

    statConfig.forEach(({ key, perLvl, label, max, color, isAS }) => {
      const base = stats[key]
      if (base === undefined) return

      let value
      if (!perLvl) {
        value = base
      } else if (isAS) {
        const bonusPercent = stats[perLvl] || 0
        const growthFactor = (level - 1) * (0.7025 + 0.0175 * (level - 1))
        value = base * (1 + (bonusPercent / 100) * growthFactor)
      } else {
        value = statAtLevel(base, stats[perLvl] || 0, level)
      }

      const displayValue = isAS ? value.toFixed(3) : formatStat(Math.round(value * 10) / 10)

      const row = el('div', { cls: 'stat-row' })
      append(row, el('span', { cls: 'stat-label', text: label }))
      const barBg = el('div', { cls: 'stat-bar-bg' })
      append(barBg, el('div', {
        cls: 'stat-bar-fill',
        style: { width: `${Math.min((value / max) * 100, 100)}%`, background: color || '#666' }
      }))
      append(row, barBg, el('span', { cls: 'stat-value', text: displayValue }))
      append(statsContainer, row)
    })
  }

  slider.addEventListener('input', updateStats)
  updateStats()
}

async function renderBuilds(container, champ, version) {
  append(container, spinner())
  try {
    const itemsMap = await getItems()
    const lang = getLang()
    const builds = getRecommendedBuilds(champ, itemsMap, lang)
    clear(container)

    if (builds.length === 0) {
      append(container, el('div', { cls: 'empty-state', text: t('noRecommendations') }))
      return
    }

    builds.forEach(build => {
      const section = el('div', { cls: 'build-section' })
      const header = el('div', { cls: 'build-section-header' })
      append(header, el('span', { cls: 'build-section-name', text: build.name }))
      append(header, el('span', { cls: 'build-section-gold', text: `${build.totalGold} ${t('gold')}` }))
      append(section, header)

      const itemsRow = el('div', { cls: 'build-path' })
      build.items.forEach(item => {
        const itemEl = el('div', {
          cls: 'build-path-item',
          on: {
            click: async () => {
              const { openItemModal } = await import('../items/item-modal.js')
              openItemModal(item, version, itemsMap)
            }
          }
        })
        append(itemEl, el('img', { attrs: { src: ITEM_IMG(version, item.id), alt: item.name || '' } }))
        append(itemEl, el('span', { text: item.name || '' }))
        append(itemsRow, itemEl)
      })
      append(section, itemsRow)
      append(container, section)
    })
  } catch {
    clear(container)
    append(container, el('div', { cls: 'empty-state', text: t('errorItems') }))
  }
}

function renderSkins(container, dd, champ) {
  if (!dd?.skins) {
    append(container, el('div', { cls: 'empty-state', text: t('skinsNA') }))
    return
  }

  const gallery = el('div', { cls: 'skins-gallery' })

  dd.skins.forEach(skin => {
    const card = el('div', { cls: 'skin-card' })
    append(card, el('img', {
      attrs: {
        src: CHAMPION_LOADING(champ.id, skin.num),
        alt: skin.name === 'default' ? champ.name : skin.name,
        loading: 'lazy'
      }
    }))
    append(card, el('p', { text: skin.name === 'default' ? t('skinDefault') : skin.name }))
    append(gallery, card)
  })

  append(container, gallery)
}
