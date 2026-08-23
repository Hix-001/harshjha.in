import { useState, useEffect } from 'react'
import { ThemeProvider, useTheme } from './hooks/useTheme'
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

function MainContent() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { theme } = useTheme()

  // Dynamically update favicon based on theme & tab activity
  useDynamicFavicon(theme)

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

  return (
    <div className="relative min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] selection:bg-[#a3ff12]/30 selection:text-[#a3ff12]">
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

export default function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  )
}
