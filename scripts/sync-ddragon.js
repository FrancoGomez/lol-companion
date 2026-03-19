#!/usr/bin/env node
/**
 * DDragon Data Sync Script
 * Downloads all champion data, item data, and images from DDragon
 * and saves them as static files in public/data/ for Vercel serving.
 *
 * Usage: node scripts/sync-ddragon.js [--patch 16.6.1] [--locale es_AR]
 */

import { writeFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const DATA_DIR = join(ROOT, 'public', 'data')

const DDRAGON = 'https://ddragon.leagueoflegends.com'
const LOCALES = ['es_AR', 'en_US']

// --- Helpers ---

async function fetchJSON(url) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`)
  return res.json()
}

async function downloadImage(url, dest) {
  if (existsSync(dest)) return // skip if already downloaded
  const res = await fetch(url)
  if (!res.ok) { console.warn(`  SKIP image ${url} (${res.status})`); return }
  const buffer = Buffer.from(await res.arrayBuffer())
  await ensureDir(dirname(dest))
  await writeFile(dest, buffer)
}

async function ensureDir(dir) {
  if (!existsSync(dir)) await mkdir(dir, { recursive: true })
}

async function writeJSON(path, data) {
  await ensureDir(dirname(path))
  await writeFile(path, JSON.stringify(data, null, 0))
}

// --- Main ---

async function main() {
  // Parse args
  const args = process.argv.slice(2)
  let patchOverride = null
  let localeOverride = null
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--patch' && args[i + 1]) patchOverride = args[++i]
    if (args[i] === '--locale' && args[i + 1]) localeOverride = args[++i]
  }

  const locales = localeOverride ? [localeOverride] : LOCALES

  // 1. Get patch version
  console.log('Fetching patch version...')
  const versions = await fetchJSON(`${DDRAGON}/api/versions.json`)
  const patch = patchOverride || versions[0]
  console.log(`Patch: ${patch}`)

  await writeJSON(join(DATA_DIR, 'version.json'), { patch, synced_at: new Date().toISOString() })

  // 2. Champions per locale
  for (const locale of locales) {
    console.log(`\n=== Champions [${locale}] ===`)
    const champListRaw = await fetchJSON(`${DDRAGON}/cdn/${patch}/data/${locale}/champion.json`)
    const champList = champListRaw.data

    // Save champion list
    await writeJSON(join(DATA_DIR, locale, 'champions.json'), champList)
    console.log(`  ${Object.keys(champList).length} champions`)

    // Download each champion detail + images
    const champIds = Object.keys(champList)
    let count = 0
    for (const id of champIds) {
      count++
      process.stdout.write(`  [${count}/${champIds.length}] ${id}...`)

      // Detail JSON
      const detailPath = join(DATA_DIR, locale, 'champion', `${id}.json`)
      if (!existsSync(detailPath)) {
        try {
          const detailRaw = await fetchJSON(`${DDRAGON}/cdn/${patch}/data/${locale}/champion/${id}.json`)
          const detail = detailRaw.data[id]
          await writeJSON(detailPath, detail)
        } catch (e) {
          console.warn(` FAIL detail: ${e.message}`)
        }
      }

      // Champion square icon
      await downloadImage(
        `${DDRAGON}/cdn/${patch}/img/champion/${id}.png`,
        join(DATA_DIR, 'img', 'champion', `${id}.png`)
      )

      // Loading screen art (for splash cards)
      await downloadImage(
        `${DDRAGON}/cdn/img/champion/loading/${id}_0.jpg`,
        join(DATA_DIR, 'img', 'champion', 'loading', `${id}_0.jpg`)
      )

      // Spell icons (from detail if available)
      if (locale === locales[0]) {
        try {
          const detailRaw = await fetchJSON(`${DDRAGON}/cdn/${patch}/data/${locale}/champion/${id}.json`)
          const detail = detailRaw.data[id]

          // Passive icon
          if (detail.passive?.image?.full) {
            await downloadImage(
              `${DDRAGON}/cdn/${patch}/img/passive/${detail.passive.image.full}`,
              join(DATA_DIR, 'img', 'passive', detail.passive.image.full)
            )
          }

          // Spell icons
          for (const spell of (detail.spells || [])) {
            if (spell.image?.full) {
              await downloadImage(
                `${DDRAGON}/cdn/${patch}/img/spell/${spell.image.full}`,
                join(DATA_DIR, 'img', 'spell', spell.image.full)
              )
            }
          }
        } catch { /* detail already fetched above, skip on error */ }
      }

      console.log(' OK')
    }
  }

  // 3. Items per locale
  for (const locale of locales) {
    console.log(`\n=== Items [${locale}] ===`)
    const itemsRaw = await fetchJSON(`${DDRAGON}/cdn/${patch}/data/${locale}/item.json`)
    const items = itemsRaw.data

    await writeJSON(join(DATA_DIR, locale, 'items.json'), items)
    console.log(`  ${Object.keys(items).length} items`)

    // Download item images (only once, same across locales)
    if (locale === locales[0]) {
      const itemIds = Object.keys(items)
      let count = 0
      for (const id of itemIds) {
        count++
        if (count % 50 === 0) console.log(`  Images: ${count}/${itemIds.length}...`)
        await downloadImage(
          `${DDRAGON}/cdn/${patch}/img/item/${id}.png`,
          join(DATA_DIR, 'img', 'item', `${id}.png`)
        )
      }
      console.log(`  ${itemIds.length} item images done`)
    }
  }

  console.log('\n=== Sync complete! ===')
  console.log(`Data saved to: ${DATA_DIR}`)
  console.log(`Patch: ${patch}`)
  console.log(`Locales: ${locales.join(', ')}`)
}

main().catch(err => {
  console.error('Sync failed:', err)
  process.exit(1)
})
