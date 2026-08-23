import { useState, useEffect } from 'react'
import { useDynamicFavicon } from './hooks/useDynamicFavicon'
import { Navbar } from './components/Navbar'
import { Dock } from './components/Dock'
import { CommandPalette } from './components/CommandPalette'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { TechStack } from './sections/TechStack'
import { Marquee } from './sections/Marquee'
import { Projects } from './sections/Projects'
import { Journey } from './sections/Journey'
import { Highlights } from './sections/Highlights'
import { GitHubCta } from './sections/GitHubCta'
import { Contact } from './sections/Contact'

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  // Dynamically update favicon and tab title
  useDynamicFavicon()

  // Listen for Cmd+K / Ctrl+K shortcut globally
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setIsSearchOpen((prev) => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Ensure fresh page load starts cleanly at the top hero section if no hash is present
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0)
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-[#070707] text-[#f5f5f5] selection:bg-[#a3ff12]/30 selection:text-[#a3ff12]">
      {/* Background Ambience & Noise */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-[#a3ff12]/3 blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[450px] w-[450px] rounded-full bg-[#5eead4]/3 blur-[140px]" />
      </div>

      <div className="relative z-10">
        <Navbar onOpenSearch={() => setIsSearchOpen(true)} />
        
        <main>
          <Hero />
          <About />
          <TechStack />
          <Marquee />
          <Projects />
          <Journey />
          <Highlights />
          <GitHubCta />
          <Contact />
        </main>

        <Footer />
        
        {/* Floating Quick Actions Dock */}
        <Dock onOpenSearch={() => setIsSearchOpen(true)} />

        {/* Global Cmd+K Command Palette */}
        <CommandPalette isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      </div>
    </div>
  )
}
