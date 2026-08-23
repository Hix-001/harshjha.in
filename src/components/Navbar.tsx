import { Menu, X, Search, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { navLinks, SITE } from '../data/content'
import { useScrolled } from '../hooks/useScrolled'
import { Button } from './Button'

export function Navbar({ onOpenSearch }: { onOpenSearch?: () => void }) {
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-[#27272a]/80 bg-[#070707]/85 backdrop-blur-md shadow-lg shadow-black/20'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 md:px-8" aria-label="Primary">
        {/* Brand Logo */}
        <a href="#home" className="focus-ring group flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-xl border border-[#27272a] bg-[#121212] font-display text-lg font-bold tracking-tight text-[#f5f5f5] transition-all duration-300 group-hover:border-[#a3ff12] group-hover:text-[#a3ff12]">
            {SITE.shortName}
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-xs font-semibold tracking-wider text-[#f5f5f5] group-hover:text-white">
              HARSH JHA
            </span>
            <span className="mt-1 font-mono text-[9px] tracking-widest text-[#a3ff12]">
              {SITE.year}
            </span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs font-medium text-[#a1a1aa] transition-colors hover:text-[#a3ff12] focus-ring"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          {/* Quick Cmd+K Search Trigger */}
          {onOpenSearch && (
            <button
              type="button"
              onClick={onOpenSearch}
              aria-label="Open Command Palette"
              className="focus-ring hidden sm:inline-flex items-center gap-2 rounded-full border border-[#27272a] bg-[#121212]/90 px-3 py-1.5 font-mono text-xs text-[#a1a1aa] transition-all hover:border-[#a3ff12]/50 hover:text-white"
            >
              <Search size={13} className="text-[#a3ff12]" />
              <span>Search...</span>
              <kbd className="rounded border border-[#27272a] bg-[#171717] px-1.5 py-0.5 text-[9px] text-[#71717a]">
                ⌘K
              </kbd>
            </button>
          )}

          <div className="hidden sm:block">
            <Button href="#contact" className="!px-4 !py-2 !text-xs">
              <Sparkles size={12} />
              Let's Connect
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="focus-ring inline-flex size-9 items-center justify-center rounded-xl border border-[#27272a] bg-[#121212] text-white lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {open ? (
        <div className="border-b border-[#27272a] bg-[#0d0d0d]/95 px-5 py-5 backdrop-blur-xl lg:hidden fade-in-up">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-[#f5f5f5] hover:bg-[#171717] hover:text-[#a3ff12] focus-ring font-mono"
                  onClick={() => setOpen(false)}
                >
                  <span>{link.label}</span>
                  <span className="text-[#71717a] text-xs">→</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-2.5 pt-3 border-t border-[#27272a]">
            {onOpenSearch && (
              <button
                type="button"
                onClick={() => {
                  setOpen(false)
                  onOpenSearch()
                }}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-[#27272a] bg-[#171717] py-2.5 font-mono text-xs text-[#a1a1aa]"
              >
                <Search size={14} className="text-[#a3ff12]" />
                <span>Search & Commands (Cmd+K)</span>
              </button>
            )}
            <Button href="#contact" className="w-full justify-center !py-2.5 !text-xs" onClick={() => setOpen(false)}>
              Let's Connect
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  )
}
