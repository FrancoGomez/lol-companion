import { el, append } from '../utilities/utilities.js'
import { t } from '../data/i18n.js'
import {
  isSupabaseConfigured, signInWithGitHub, signOut,
  getUser, onAuthChange, getProfile
} from '../data/supabase.js'

let currentUser = null
let authContainer = null

export function getCurrentUser() { return currentUser }

export async function initAuth() {
  authContainer = document.getElementById('auth-container')
  if (!authContainer) return

  if (!isSupabaseConfigured()) {
    authContainer.classList.add('hidden')
    return
  }

  // Check current session
  currentUser = await getUser()
  renderAuthButton()

  // Listen for changes
  onAuthChange((user) => {
    currentUser = user
    renderAuthButton()
  })
}

function renderAuthButton() {
  authContainer.innerHTML = ''

  if (currentUser) {
    const avatar = currentUser.user_metadata?.avatar_url
    const name = currentUser.user_metadata?.user_name || currentUser.email?.split('@')[0] || ''

    const btn = el('button', {
      cls: 'auth-btn auth-logged',
      children: [
        avatar
          ? el('img', { cls: 'auth-avatar', attrs: { src: avatar, alt: name } })
          : el('span', { cls: 'auth-avatar-placeholder', text: name[0]?.toUpperCase() || '?' }),
        el('span', { cls: 'auth-name', text: name })
      ],
      on: { click: toggleMenu }
    })

    const menu = el('div', {
      cls: 'auth-menu hidden',
      attrs: { id: 'auth-menu' },
      children: [
        el('button', {
          cls: 'auth-menu-item',
          text: t('logout'),
          on: { click: handleLogout }
        })
      ]
    })

    append(authContainer, btn, menu)
  } else {
    const btn = el('button', {
      cls: 'auth-btn',
      children: [
        el('span', { text: t('loginGitHub') })
      ],
      on: { click: handleLogin }
    })
    append(authContainer, btn)
  }
}

function toggleMenu() {
  const menu = document.getElementById('auth-menu')
  if (menu) menu.classList.toggle('hidden')
}

async function handleLogin() {
  await signInWithGitHub()
}

async function handleLogout() {
  await signOut()
  currentUser = null
  renderAuthButton()
}

// Close menu on outside click
document.addEventListener('click', (e) => {
  const menu = document.getElementById('auth-menu')
  if (menu && !menu.classList.contains('hidden')) {
    if (!e.target.closest('.auth-btn') && !e.target.closest('.auth-menu')) {
      menu.classList.add('hidden')
    }
  }
})
