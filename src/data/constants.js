// API base URLs
export const DDRAGON_BASE = 'https://ddragon.leagueoflegends.com'
export const DDRAGON_CDN = (version) => `${DDRAGON_BASE}/cdn/${version}`
export const MERAKI_BASE = 'https://cdn.merakianalytics.com/riot/lol/resources/latest/en-US'
export const CDRAGON_BASE = 'https://raw.communitydragon.org/latest'

// API endpoints
export const VERSIONS_URL = `${DDRAGON_BASE}/api/versions.json`
export const CHAMPIONS_URL = (v, locale = 'es_AR') => `${DDRAGON_CDN(v)}/data/${locale}/champion.json`
export const CHAMPION_DETAIL_URL = (v, id, locale = 'es_AR') => `${DDRAGON_CDN(v)}/data/${locale}/champion/${id}.json`
export const CHAMPION_IMG = (v, id) => `${DDRAGON_CDN(v)}/img/champion/${id}.png`
export const CHAMPION_SPLASH = (id, num) => `${DDRAGON_BASE}/cdn/img/champion/splash/${id}_${num}.jpg`
export const CHAMPION_LOADING = (id, num) => `${DDRAGON_BASE}/cdn/img/champion/loading/${id}_${num}.jpg`
export const SPELL_IMG = (v, img) => `${DDRAGON_CDN(v)}/img/spell/${img}`
export const PASSIVE_IMG = (v, img) => `${DDRAGON_CDN(v)}/img/passive/${img}`
export const ITEM_IMG = (v, id) => `${DDRAGON_CDN(v)}/img/item/${id}.png`

export const DDRAGON_ITEMS_URL = (v, locale = 'es_AR') => `${DDRAGON_CDN(v)}/data/${locale}/item.json`

// DDragon stat key → our normalized key mapping
export const DDRAGON_STAT_MAP = {
  FlatHPPoolMod: 'health',
  FlatMPPoolMod: 'mana',
  FlatPhysicalDamageMod: 'attackDamage',
  FlatMagicDamageMod: 'abilityPower',
  FlatArmorMod: 'armor',
  FlatSpellBlockMod: 'magicResistance',
  PercentAttackSpeedMod: 'attackSpeed',
  FlatCritChanceMod: 'criticalStrikeChance',
  FlatMovementSpeedMod: 'movespeed',
  PercentMovementSpeedMod: 'percentMovespeed',
}

// DDragon champion stat keys → our keys
export const DDRAGON_CHAMPION_STAT_MAP = {
  hp: { key: 'health', perLevel: 'hpperlevel' },
  mp: { key: 'mana', perLevel: 'mpperlevel' },
  armor: { key: 'armor', perLevel: 'armorperlevel' },
  spellblock: { key: 'magicResistance', perLevel: 'spellblockperlevel' },
  attackdamage: { key: 'attackDamage', perLevel: 'attackdamageperlevel' },
  attackspeed: { key: 'attackSpeed', perLevel: 'attackspeedperlevel' },
  movespeed: { key: 'movespeed', perLevel: null },
  attackrange: { key: 'attackRange', perLevel: null },
}

// Stat names for parsing item description HTML (matches both ES and EN)
export const DESC_STAT_PATTERNS = [
  { pattern: /(\d+)\s*(?:de\s+)?(?:Aceleración de [Hh]abilidad|Ability Haste)/i, key: 'abilityHaste' },
  { pattern: /(\d+)\s*(?:de\s+)?(?:Letalidad|Lethality)/i, key: 'lethality' },
  { pattern: /(\d+)\s*(?:de\s+)?(?:Penetración [Mm]ágica|Magic Penetration)/i, key: 'flatMagicPenetration' },
  { pattern: /(\d+)%?\s*(?:de\s+)?(?:Robo de [Vv]ida|Life Steal)/i, key: 'lifeSteal', percent: true },
  { pattern: /(\d+)%?\s*(?:de\s+)?(?:Omnivamp)/i, key: 'omnivamp', percent: true },
  { pattern: /(\d+)%?\s*(?:de\s+)?(?:Penetración de [Aa]rmadura|Armor Penetration)/i, key: 'percentArmorPenetration', percent: true },
]

// Role mappings
export const ROLES = {
  Fighter: { label: 'Luchador', color: '#c97e2a' },
  Tank: { label: 'Tanque', color: '#5b8c3e' },
  Mage: { label: 'Mago', color: '#4e7ab5' },
  Assassin: { label: 'Asesino', color: '#b54e6f' },
  Marksman: { label: 'Tirador', color: '#b5534e' },
  Support: { label: 'Soporte', color: '#4eabb5' }
}

export const ROLE_LIST = Object.keys(ROLES)

// Gold values per stat point (for efficiency calculation)
export const GOLD_VALUES = {
  health: 2.67,
  mana: 1.4,
  armor: 20,
  magicResistance: 18,
  attackDamage: 35,
  abilityPower: 21.75,
  attackSpeed: 25, // per 1% AS
  criticalStrikeChance: 40, // per 1% crit
  lifeSteal: 37.5, // per 1%
  abilityHaste: 26.67,
  lethality: 5, // per 1 lethality (Serrated Dirk value)
  flatMagicPenetration: 31.11,
  percentArmorPenetration: 0, // hard to value
  percentMagicPenetration: 0,
  healthRegen: 3, // per 1 base regen
  manaRegen: 5, // per 1 base regen
  movespeed: 12,
  percentMovespeed: 0, // hard to value
  omnivamp: 37.33, // per 1%
}

// Synergy groups for recommendation engine
export const SYNERGY_GROUPS = {
  crit: { label: 'Critico', stats: ['criticalStrikeChance', 'attackSpeed', 'attackDamage'] },
  lethality: { label: 'Letalidad', stats: ['lethality', 'attackDamage', 'abilityHaste'] },
  apBurst: { label: 'AP Burst', stats: ['abilityPower', 'flatMagicPenetration', 'abilityHaste'] },
  tank: { label: 'Tanque', stats: ['health', 'armor', 'magicResistance'] },
  bruiser: { label: 'Bruiser', stats: ['health', 'attackDamage', 'abilityHaste'] },
  onHit: { label: 'On-Hit', stats: ['attackSpeed', 'attackDamage'] },
  enchanter: { label: 'Encantador', stats: ['abilityPower', 'abilityHaste', 'mana', 'manaRegen'] }
}

// Stat display names
export const STAT_NAMES = {
  health: 'Vida',
  mana: 'Mana',
  armor: 'Armadura',
  magicResistance: 'Resist. Magica',
  attackDamage: 'Daño de Ataque',
  abilityPower: 'Poder de Habilidad',
  attackSpeed: 'Vel. de Ataque',
  criticalStrikeChance: 'Prob. de Critico',
  abilityHaste: 'Aceleracion de Hab.',
  lethality: 'Letalidad',
  flatMagicPenetration: 'Pen. Magica',
  percentArmorPenetration: '% Pen. Armadura',
  percentMagicPenetration: '% Pen. Magica',
  lifeSteal: 'Robo de Vida',
  omnivamp: 'Omnivamp',
  movespeed: 'Vel. de Movimiento',
  healthRegen: 'Regen. de Vida',
  manaRegen: 'Regen. de Mana',
  attackRange: 'Rango de Ataque',
  movespeedFlat: 'Vel. de Movimiento'
}

// Stat bar colors for champion modal
export const STAT_COLORS = {
  health: '#4caf50',
  mana: '#2196f3',
  armor: '#ff9800',
  magicResistance: '#9c27b0',
  attackDamage: '#f44336',
  attackSpeed: '#ffeb3b',
  attackRange: '#8bc34a',
  movespeed: '#00bcd4'
}

// Item categories for filtering
export const ITEM_CATEGORIES = [
  { key: 'damage', label: 'Daño' },
  { key: 'criticalStrike', label: 'Critico' },
  { key: 'attackSpeed', label: 'Vel. Ataque' },
  { key: 'onHit', label: 'On-Hit' },
  { key: 'armorPenetration', label: 'Pen. Armadura' },
  { key: 'spellDamage', label: 'Poder Hab.' },
  { key: 'magicPenetration', label: 'Pen. Magica' },
  { key: 'mana', label: 'Mana' },
  { key: 'health', label: 'Vida' },
  { key: 'armor', label: 'Armadura' },
  { key: 'magicResistance', label: 'Resist. Magica' },
  { key: 'lifeSteal', label: 'Robo de Vida' },
  { key: 'cooldownReduction', label: 'Aceleracion Hab.' },
  { key: 'movementSpeed', label: 'Velocidad' },
  { key: 'boots', label: 'Botas' }
]
