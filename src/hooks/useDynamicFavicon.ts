import { useEffect, useRef } from 'react'

/**
 * Generates an interactive dynamic SVG data URL favicon
 * based on cyber-minimalist dark theme, active tab visibility, and beacon pulse.
 */
function createFaviconSvg(isVisible: boolean, pulse: boolean): string {
  const bg = '#070707'
  const border = '#27272a'
  const primary = '#a3ff12'
  const secondary = '#5eead4'
  const beaconColor = isVisible ? primary : '#f59e0b'
  const pulseOpacity = pulse ? '0.9' : '0.3'

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${primary}" />
      <stop offset="100%" stop-color="${secondary}" />
    </linearGradient>
  </defs>
  <rect width="32" height="32" rx="8" fill="${bg}" stroke="${border}" stroke-width="1.5" />
  <path d="M7 10 L14 16 L7 22" fill="none" stroke="url(#g)" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" />
  <rect x="17" y="20" width="7.5" height="2.4" rx="1.2" fill="${primary}" />
  <circle cx="25" cy="7" r="2.2" fill="${beaconColor}" />
  <circle cx="25" cy="7" r="4" fill="none" stroke="${beaconColor}" stroke-width="0.8" opacity="${pulseOpacity}" />
</svg>`

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

export function useDynamicFavicon() {
  const isTabVisibleRef = useRef(true)

  useEffect(() => {
    let pulseState = false
    const originalTitle = 'Harsh Jha — CSE Student & Developer'
    const awayTitle = '⚡ Harsh Jha — Come back!'

    const updateFavicon = () => {
      let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement | null
      if (!link) {
        link = document.createElement('link')
        link.rel = 'icon'
        document.head.appendChild(link)
      }
      link.type = 'image/svg+xml'
      link.href = createFaviconSvg(isTabVisibleRef.current, pulseState)
    }

    const handleVisibilityChange = () => {
      const isVisible = !document.hidden
      isTabVisibleRef.current = isVisible
      document.title = isVisible ? originalTitle : awayTitle
      updateFavicon()
    }

    // Interval to toggle subtle beacon pulse on the favicon
    const intervalId = setInterval(() => {
      pulseState = !pulseState
      updateFavicon()
    }, 2000)

    document.addEventListener('visibilitychange', handleVisibilityChange)
    updateFavicon()

    return () => {
      clearInterval(intervalId)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])
}
