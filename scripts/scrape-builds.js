#!/usr/bin/env node
/**
 * Scrape champion build data from lolalytics.com
 * Downloads builds, runes, skill order, counters, and items for each champion.
 * Saves to public/data/builds/{championId}.json
 *
 * Usage: node scripts/scrape-builds.js [--champion Nocturne] [--position jungle]
 */

import { chromium } from 'playwright'
import { writeFile, readFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const BUILDS_DIR = join(ROOT, 'public', 'data', 'builds')

// Champion ID -> lolalytics slug
function toLolalyticsSlug(champId) {
  return champId.toLowerCase().replace(/'/g, '')
}

const POSITIONS = ['jungle', 'top', 'middle', 'bottom', 'support']
const POS_MAP = { jungle: 'jungle', top: 'top', middle: 'mid', bottom: 'adc', support: 'support' }

// Parse args
const args = process.argv.slice(2)
let filterChampion = null
let filterPosition = null
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--champion' && args[i + 1]) filterChampion = args[++i]
  if (args[i] === '--position' && args[i + 1]) filterPosition = args[++i]
}

async function getChampionList() {
  const champsFile = join(ROOT, 'public', 'data', 'en_US', 'champions.json')
  if (existsSync(champsFile)) {
    return Object.keys(JSON.parse(await readFile(champsFile, 'utf-8')))
  }
  return []
}

async function scrapeChampionBuild(page, champId, position) {
  const slug = toLolalyticsSlug(champId)
  const url = `https://lolalytics.com/lol/${slug}/build/?lane=${position}`

  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 })
    await page.waitForTimeout(2000)
    // Scroll to load lazy content
    for (let i = 0; i < 8; i++) {
      await page.evaluate(() => window.scrollBy(0, 600))
      await page.waitForTimeout(300)
    }
    await page.waitForTimeout(1500)

    const data = await page.evaluate((posKey) => {
      const result = {
        tier: null,
        winRate: null,
        pickRate: null,
        banRate: null,
        matches: null,
        skillPriority: [],
        skillOrder: [],
        items: { starting: [], core: [], boots: [], fourth: [], fifth: [], sixth: [] },
        runes: { keystone: null, primary: [], secondary: [], shards: [] },
        summoners: [],
        counters: [],
      }

      const body = document.body.innerText
      const allImgs = [...document.querySelectorAll('img')]

      // --- Win Rate & Pick Rate ---
      const wrMatch = body.match(/(\d+\.\d+)%\s*Win Rate/i)
      if (wrMatch) result.winRate = wrMatch[1] + '%'
      const prMatch = body.match(/(\d+\.\d+)%\s*Pick Rate/i)
      if (prMatch) result.pickRate = prMatch[1] + '%'
      const brMatch = body.match(/(\d+\.\d+)%\s*Ban Rate/i)
      if (brMatch) result.banRate = brMatch[1] + '%'

      // --- Tier ---
      const tierMatch = body.match(/([SABCDF][+-]?)\n\d+%/)
      if (tierMatch) result.tier = tierMatch[1]

      // --- Items: extract from img src with item64/ pattern ---
      const itemImgs = allImgs
        .filter(i => i.src.includes('/item'))
        .map(i => ({
          id: i.src.match(/\/(\d{4,5})\./)?.[1],
          name: i.alt || '',
          w: i.width
        }))
        .filter(i => i.id)

      // Group items by page position (the first items shown are the recommended build)
      // Lolalytics shows: Starting Items, then Most Common/Highest WR core builds
      if (itemImgs.length > 0) {
        // Starting items are usually the first 2-3 (jungle pet + potion)
        const startItems = itemImgs.filter(i =>
          ['1101', '1102', '1103', '2003', '2031', '2033', '3850', '3854', '3858', '3862', '1055', '1054', '1056', '1083'].includes(i.id)
        )
        result.items.starting = [...new Set(startItems.map(i => i.id))].slice(0, 3)

        // Boots
        const bootIds = ['3006', '3009', '3020', '3047', '3111', '3117', '3158']
        const boots = itemImgs.filter(i => bootIds.includes(i.id))
        result.items.boots = [...new Set(boots.map(i => i.id))].slice(0, 3)

        // Completed items (cost > 2000, not boots/starting)
        const completedItems = itemImgs
          .filter(i => !startItems.some(s => s.id === i.id) && !bootIds.includes(i.id) && parseInt(i.id) > 2000)
          .map(i => i.id)
        const uniqueCompleted = [...new Set(completedItems)]

        // First few unique completed items are the core build
        result.items.core = uniqueCompleted.slice(0, 3)
        result.items.fourth = uniqueCompleted.slice(3, 6)
        result.items.fifth = uniqueCompleted.slice(6, 9)
        result.items.sixth = uniqueCompleted.slice(9, 12)
      }

      // --- Runes ---
      const runeImgs = allImgs
        .filter(i => i.src.includes('/rune'))
        .map(i => ({
          id: i.src.match(/\/(\d{4,5})\./)?.[1],
          name: i.alt || ''
        }))
        .filter(i => i.id && i.name)

      // First rune with a keystone name is the keystone
      const keystoneNames = ['Press the Attack', 'Lethal Tempo', 'Fleet Footwork', 'Conqueror',
        'Electrocute', 'Dark Harvest', 'Hail of Blades',
        'Summon Aery', 'Arcane Comet', 'Phase Rush',
        'Grasp of the Undying', 'Aftershock', 'Guardian',
        'Glacial Augment', 'Unsealed Spellbook', 'First Strike']
      for (const r of runeImgs) {
        if (keystoneNames.includes(r.name)) {
          result.runes.keystone = { id: r.id, name: r.name }
          break
        }
      }
      // All runes
      result.runes.primary = runeImgs.filter(r => !r.name.includes('statmod')).slice(0, 8).map(r => ({ id: r.id, name: r.name }))

      // --- Summoner Spells ---
      const spellImgs = allImgs
        .filter(i => i.src.includes('/spell'))
        .map(i => i.alt)
        .filter(Boolean)
      result.summoners = [...new Set(spellImgs)].slice(0, 2)

      // --- Skill Priority ---
      const skillImgs = allImgs
        .filter(i => i.alt && /[QWER] Skill/.test(i.alt))
        .map(i => i.alt.match(/([QWER]) Skill/)?.[1])
        .filter(Boolean)
      // The skill priority section shows 3 skills in order (excluding R)
      const seenSkills = new Set()
      for (const s of skillImgs) {
        if (!seenSkills.has(s) && s !== 'P') {
          seenSkills.add(s)
        }
      }
      result.skillPriority = [...seenSkills].filter(s => s !== 'R').slice(0, 3)

      // --- Counters ---
      // Lolalytics shows counters as champion images with names
      const champImgs = allImgs
        .filter(i => i.src.includes('/champ') && i.alt && i.alt.length > 2 && i.alt.length < 20 && i.width < 50)
        .map(i => i.alt)
      // Last ~10 champion images are usually counters
      if (champImgs.length > 5) {
        result.counters = champImgs.slice(-10).map(name => ({ name }))
      }

      return result
    })

    return data
  } catch (err) {
    console.warn(`  FAIL: ${err.message}`)
    return null
  }
}

async function main() {
  if (!existsSync(BUILDS_DIR)) await mkdir(BUILDS_DIR, { recursive: true })

  const champions = await getChampionList()
  const champList = filterChampion
    ? champions.filter(c => c.toLowerCase() === filterChampion.toLowerCase())
    : champions

  if (champList.length === 0) {
    console.error('No champions found. Run npm run sync first.')
    process.exit(1)
  }

  const positions = filterPosition ? [filterPosition] : POSITIONS

  console.log(`Scraping builds for ${champList.length} champions × ${positions.length} positions...`)
  console.log(`Estimated time: ~${Math.round(champList.length * positions.length * 6 / 60)} minutes\n`)

  const browser = await chromium.launch({
    headless: true,
    executablePath: '/usr/bin/brave-browser',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  })

  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    viewport: { width: 1280, height: 900 }
  })

  const page = await context.newPage()

  // Block heavy resources
  await page.route('**/*.{woff,woff2,ttf}', route => route.abort())
  await page.route('**/ads/**', route => route.abort())
  await page.route('**/googletag**', route => route.abort())
  await page.route('**/doubleclick**', route => route.abort())

  let count = 0
  const total = champList.length

  for (const champId of champList) {
    count++
    const champData = {}
    let hasData = false

    for (const pos of positions) {
      const posLabel = POS_MAP[pos] || pos
      process.stdout.write(`  [${count}/${total}] ${champId} (${posLabel})...`)

      const data = await scrapeChampionBuild(page, champId, pos)

      if (data && data.winRate) {
        champData[posLabel] = data
        hasData = true
        console.log(` ${data.tier || '?'} ${data.winRate} | ${data.items.core.length} items`)
      } else {
        console.log(' skip')
      }
    }

    if (hasData) {
      const outFile = join(BUILDS_DIR, `${champId}.json`)
      await writeFile(outFile, JSON.stringify(champData, null, 0))
    }
  }

  await browser.close()

  console.log('\n=== Scrape complete! ===')
  console.log(`Data saved to: ${BUILDS_DIR}`)
}

main().catch(err => {
  console.error('Scrape failed:', err)
  process.exit(1)
})
