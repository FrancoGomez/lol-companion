import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || ''
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

/** @type {import('@supabase/supabase-js').SupabaseClient | null} */
let supabase = null

export function getSupabase() {
  if (!supabase && SUPABASE_URL && SUPABASE_ANON_KEY) {
    supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  }
  return supabase
}

export function isSupabaseConfigured() {
  return !!(SUPABASE_URL && SUPABASE_ANON_KEY)
}

// --- Auth helpers ---

export async function signInWithGitHub() {
  const sb = getSupabase()
  if (!sb) return { error: { message: 'Supabase not configured' } }
  return sb.auth.signInWithOAuth({
    provider: 'github',
    options: { redirectTo: window.location.origin + window.location.pathname }
  })
}

export async function signOut() {
  const sb = getSupabase()
  if (!sb) return
  return sb.auth.signOut()
}

export async function getUser() {
  const sb = getSupabase()
  if (!sb) return null
  const { data: { user } } = await sb.auth.getUser()
  return user
}

export function onAuthChange(callback) {
  const sb = getSupabase()
  if (!sb) return { data: { subscription: { unsubscribe() {} } } }
  return sb.auth.onAuthStateChange((_event, session) => {
    callback(session?.user || null)
  })
}

// --- Profile ---

export async function getProfile() {
  const sb = getSupabase()
  if (!sb) return null
  const user = await getUser()
  if (!user) return null
  const { data } = await sb.from('user_profiles').select('*').eq('id', user.id).single()
  return data
}

export async function updateProfile(updates) {
  const sb = getSupabase()
  if (!sb) return null
  const user = await getUser()
  if (!user) return null
  const { data } = await sb.from('user_profiles').update(updates).eq('id', user.id).select().single()
  return data
}

// --- Game Logs ---

export async function saveGameLog(log) {
  const sb = getSupabase()
  if (!sb) return null
  const user = await getUser()
  if (!user) return null
  const { data } = await sb.from('game_logs')
    .insert({ ...log, user_id: user.id })
    .select()
    .single()
  return data
}

export async function getGameLogs(limit = 50) {
  const sb = getSupabase()
  if (!sb) return []
  const user = await getUser()
  if (!user) return []
  const { data } = await sb.from('game_logs')
    .select('*')
    .eq('user_id', user.id)
    .order('played_at', { ascending: false })
    .limit(limit)
  return data || []
}

export async function getUserStats() {
  const sb = getSupabase()
  if (!sb) return []
  const user = await getUser()
  if (!user) return []
  const { data } = await sb.from('user_stats')
    .select('*')
    .eq('user_id', user.id)
  return data || []
}

// --- Favorites ---

export async function getFavoriteChampions() {
  const sb = getSupabase()
  if (!sb) return []
  const user = await getUser()
  if (!user) return []
  const { data } = await sb.from('favorite_champions')
    .select('*')
    .eq('user_id', user.id)
  return data || []
}

export async function addFavoriteChampion(championId, role) {
  const sb = getSupabase()
  if (!sb) return null
  const user = await getUser()
  if (!user) return null
  const { data } = await sb.from('favorite_champions')
    .upsert({ user_id: user.id, champion_id: championId, role }, { onConflict: 'user_id,champion_id,role' })
    .select()
    .single()
  return data
}

export async function removeFavoriteChampion(id) {
  const sb = getSupabase()
  if (!sb) return
  await sb.from('favorite_champions').delete().eq('id', id)
}

// --- Saved Builds ---

export async function getSavedBuilds(championId) {
  const sb = getSupabase()
  if (!sb) return []
  const user = await getUser()
  if (!user) return []
  let q = sb.from('saved_builds').select('*').eq('user_id', user.id)
  if (championId) q = q.eq('champion_id', championId)
  const { data } = await q.order('created_at', { ascending: false })
  return data || []
}

export async function saveBuild(build) {
  const sb = getSupabase()
  if (!sb) return null
  const user = await getUser()
  if (!user) return null
  const { data } = await sb.from('saved_builds')
    .insert({ ...build, user_id: user.id })
    .select()
    .single()
  return data
}

// --- Goals ---

export async function getGoals() {
  const sb = getSupabase()
  if (!sb) return []
  const user = await getUser()
  if (!user) return []
  const { data } = await sb.from('personal_goals')
    .select('*')
    .eq('user_id', user.id)
  return data || []
}

export async function upsertGoal(goal) {
  const sb = getSupabase()
  if (!sb) return null
  const user = await getUser()
  if (!user) return null
  const { data } = await sb.from('personal_goals')
    .upsert({ ...goal, user_id: user.id })
    .select()
    .single()
  return data
}
