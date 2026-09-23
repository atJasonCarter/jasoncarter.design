import React, { useEffect, useState } from 'react'

const STORAGE_KEY = 'theme'

function getSystemPrefersDark() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function useTheme() {
  const [explicit, setExplicit] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored === 'light' || stored === 'dark' ? stored : null
    } catch {
      return null
    }
  })
  const [systemDark, setSystemDark] = useState(getSystemPrefersDark)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e) => setSystemDark(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (explicit) {
      root.setAttribute('data-theme', explicit)
      try {
        localStorage.setItem(STORAGE_KEY, explicit)
      } catch {}
    } else {
      root.removeAttribute('data-theme')
      try {
        localStorage.removeItem(STORAGE_KEY)
      } catch {}
    }
  }, [explicit])

  const effective = explicit ?? (systemDark ? 'dark' : 'light')
  const toggle = () => setExplicit(effective === 'dark' ? 'light' : 'dark')

  return [effective, toggle]
}

export default function ThemeToggle() {
  const [theme, toggle] = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="M4.93 4.93l1.41 1.41" />
          <path d="M17.66 17.66l1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="M6.34 17.66l-1.41 1.41" />
          <path d="M19.07 4.93l-1.41 1.41" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  )
}
