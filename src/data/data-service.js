import { dbGet, dbSet } from './storage.js'
import {
  VERSIONS_URL, CHAMPIONS_URL, CHAMPION_DETAIL_URL,
  DDRAGON_ITEMS_URL, DDRAGON_STAT_MAP, DESC_STAT_PATTERNS
} from './constants.js'
import { getDDragonLocale } from './i18n.js'

// In-memory cache — keyed by locale
const cache = {
  version: null,
  champions: {},     // { es_AR: data, en_US: data }
  ddragonDetails: {}, // { 'es_AR_Ahri': data }
  items: {}           // { es_AR: data, en_US: data }
}

const MAX_RETRIES = 3

// Base path for local data (synced by scripts/sync-ddragon.js)
const LOCAL_DATA = import.meta.env.BASE_URL + 'data'

async function fetchJSON(url) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return res.json()
}

async function fetchWithRetry(url, retries = MAX_RETRIES) {
  for (let i = 0; i < retries; i++) {
    try {
      return await fetchJSON(url)
    } catch (err) {
      if (i === retries - 1) throw err
      await new Promise(r => setTimeout(r, 1000 * (i + 1)))
    }
  }
}

/**
 * Try local data first, then DDragon, then IndexedDB cache.
 */
async function smartFetch(storeName, key, localUrl, remoteUrl, memoryKey = null) {
  if (memoryKey && cache[memoryKey]) return cache[memoryKey]

  // 1. Try local (synced data in /data/)
  try {
    const data = await fetchJSON(localUrl)
    if (memoryKey) cache[memoryKey] = data
    await dbSet(storeName, key, { data }).catch(() => {})
    return data
  } catch { /* local not available, try remote */ }

  // 2. Try DDragon remote
  try {
    const data = await fetchWithRetry(remoteUrl)
    if (memoryKey) cache[memoryKey] = data
    await dbSet(storeName, key, { data }).catch(() => {})
    return data
  } catch { /* remote failed, try IndexedDB */ }

  // 3. Try IndexedDB cache (offline)
  const stored = await dbGet(storeName, key)
  if (stored?.data) {
    if (memoryKey) cache[memoryKey] = stored.data
    return stored.data
  }

  throw new Error(`No data available for ${key} (offline and no cache)`)
}

/** Get current patch version */
export async function getVersion() {
  if (cache.version) return cache.version
  try {
    // Try local version.json first
    const local = await fetchJSON(`${LOCAL_DATA}/version.json`)
    if (local?.patch) {
      cache.version = local.patch
      return cache.version
    }
  } catch { /* no local */ }

  try {
    const versions = await fetchWithRetry(VERSIONS_URL)
    cache.version = versions[0]
    await dbSet('meta', 'version', { data: cache.version }).catch(() => {})
    return cache.version
  } catch {
    const stored = await dbGet('meta', 'version')
    if (stored?.data) {
      cache.version = stored.data
      return cache.version
    }
    throw new Error('Cannot determine patch version')
  }
}

/** Get champion list in current locale */
export async function getChampions() {
  const locale = getDDragonLocale()
  if (cache.champions[locale]) return cache.champions[locale]
  const v = await getVersion()

  const data = await smartFetch(
    'champions', `list_${locale}`,
    `${LOCAL_DATA}/${locale}/champions.json`,
    CHAMPIONS_URL(v, locale)
  )
  const champions = data.data || data
  cache.champions[locale] = champions
  return champions
}

/** Get champion detail in current locale */
export async function getDDragonChampionDetail(championId) {
  const locale = getDDragonLocale()
  const detailKey = `${locale}_${championId}`
  if (cache.ddragonDetails[detailKey]) return cache.ddragonDetails[detailKey]
  const v = await getVersion()

  const raw = await smartFetch(
    'champions', `ddragon_${detailKey}`,
    `${LOCAL_DATA}/${locale}/champion/${championId}.json`,
    CHAMPION_DETAIL_URL(v, championId, locale)
  )
  // Local data is already the detail object; remote wraps it in data[id]
  const detail = raw.data?.[championId] || raw
  cache.ddragonDetails[detailKey] = detail
  return detail
}

/** Get items in current locale, normalized */
export async function getItems() {
  const locale = getDDragonLocale()
  if (cache.items[locale]) return cache.items[locale]
  const v = await getVersion()

  const raw = await smartFetch(
    'items', `all_${locale}`,
    `${LOCAL_DATA}/${locale}/items.json`,
    DDRAGON_ITEMS_URL(v, locale)
  )
  const data = raw.data || raw
  cache.items[locale] = normalizeItems(data, v)
  return cache.items[locale]
}

/** Clear locale-specific caches (called on language switch) */
export function clearLocaleCache() {
  // Don't clear — we keep both locales cached for fast switching
}

/**
 * Get local image URL if data is synced, otherwise DDragon URL.
 * Used by constants.js image helpers as a potential override.
 */
export function getLocalImageBase() {
  return `${LOCAL_DATA}/img`
}

/** Normalize DDragon items to a consistent format */
function normalizeItems(rawItems, version) {
  const normalized = {}
  for (const [id, item] of Object.entries(rawItems)) {
    if (item.maps && !item.maps['11']) continue

    const stats = {}
    if (item.stats) {
      for (const [ddKey, val] of Object.entries(item.stats)) {
        const ourKey = DDRAGON_STAT_MAP[ddKey]
        if (ourKey && val) stats[ourKey] = val
      }
    }

    if (item.description) {
      const text = item.description.replace(/<[^>]+>/g, ' ')
      for (const { pattern, key, percent } of DESC_STAT_PATTERNS) {
        if (stats[key]) continue
        const match = text.match(pattern)
        if (match) {
          stats[key] = percent ? parseFloat(match[1]) / 100 : parseFloat(match[1])
        }
      }
    }

    normalized[id] = {
      id,
      name: item.name,
      description: item.description || '',
      plaintext: item.plaintext || '',
      stats,
      shop: {
        prices: {
          total: item.gold?.total || 0,
          base: item.gold?.base || 0,
          sell: item.gold?.sell || 0,
        },
        purchasable: item.gold?.purchasable ?? true,
        tags: item.tags || [],
      },
      buildsFrom: item.from || [],
      buildsInto: item.into || [],
      removed: false,
      inStore: item.gold?.purchasable ?? true,
      requiredChampion: item.requiredChampion || null,
      image: item.image?.full || `${id}.png`,
    }
  }
  return normalized
}

export { cache }
