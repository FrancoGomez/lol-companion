/** Create DOM element with options */
export function el(tag, opts = {}) {
  const elem = document.createElement(tag)
  if (opts.cls) {
    const classes = Array.isArray(opts.cls) ? opts.cls : opts.cls.split(' ')
    elem.classList.add(...classes.filter(Boolean))
  }
  if (opts.text) elem.textContent = opts.text
  if (opts.html) elem.innerHTML = opts.html
  if (opts.attrs) Object.entries(opts.attrs).forEach(([k, v]) => elem.setAttribute(k, v))
  if (opts.dataset) Object.entries(opts.dataset).forEach(([k, v]) => elem.dataset[k] = v)
  if (opts.style) Object.assign(elem.style, opts.style)
  if (opts.on) Object.entries(opts.on).forEach(([ev, fn]) => elem.addEventListener(ev, fn))
  if (opts.children) opts.children.forEach(c => { if (c) elem.appendChild(c) })
  return elem
}

export function append(parent, ...children) {
  children.flat().forEach(c => { if (c) parent.appendChild(c) })
  return parent
}

export function clear(elem) {
  elem.innerHTML = ''
  return elem
}

export function show(elem) { elem.classList.remove('hidden') }
export function hide(elem) { elem.classList.add('hidden') }

export function debounce(fn, ms = 300) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), ms)
  }
}

export function formatGold(n) {
  return n >= 1000 ? `${(n / 1000).toFixed(1).replace('.0', '')}k` : String(n)
}

export function formatPercent(n) {
  return `${Math.round(n)}%`
}

export function formatStat(n) {
  return Number.isInteger(n) ? String(n) : n.toFixed(1)
}

/** Clamp number between min and max */
export function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val))
}

/** Calculate stat at level using LoL growth formula */
export function statAtLevel(base, perLevel, level) {
  return base + perLevel * (level - 1) * (0.7025 + 0.0175 * (level - 1))
}

/** Simple loading spinner element */
export function spinner() {
  return el('div', { cls: 'spinner' })
}
