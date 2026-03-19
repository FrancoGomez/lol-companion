/** Reactive state for the current live game session */

const state = {
  phase: 'setup', // setup | draft | ingame | log
  role: null,       // 'jungle' | 'support'
  side: null,       // 'blue' | 'red'
  myChampion: null,  // { id, name, tags, ... }
  blueTeam: [null, null, null, null, null],
  redTeam: [null, null, null, null, null],
  // In-game timers (seconds from start)
  timerRunning: false,
  timerStart: null,
  timerElapsed: 0,
  // Objective timestamps (game time in seconds when achieved)
  objectives: {
    firstClear: null,
    firstScuttle: null,
    firstGank: null,
    firstDragon: null,
    firstHerald: null,
    firstBaron: null,
    firstTower: null,
  },
  // Items
  currentGold: 0,
  itemsBought: [], // item IDs in order
  // Log
  result: null, // 'win' | 'loss'
  kills: 0,
  deaths: 0,
  assists: 0,
  cs: 0,
  notes: '',
}

const listeners = new Set()

export function getState() { return state }

export function setState(updates) {
  Object.assign(state, updates)
  listeners.forEach(fn => fn(state))
}

export function subscribe(fn) {
  listeners.add(fn)
  return () => listeners.delete(fn)
}

export function resetState() {
  Object.assign(state, {
    phase: 'setup',
    role: null,
    side: null,
    myChampion: null,
    blueTeam: [null, null, null, null, null],
    redTeam: [null, null, null, null, null],
    timerRunning: false,
    timerStart: null,
    timerElapsed: 0,
    objectives: {
      firstClear: null, firstScuttle: null, firstGank: null,
      firstDragon: null, firstHerald: null, firstBaron: null, firstTower: null,
    },
    currentGold: 0,
    itemsBought: [],
    result: null,
    kills: 0, deaths: 0, assists: 0, cs: 0,
    notes: '',
  })
  listeners.forEach(fn => fn(state))
}
