import { useState, useEffect, useRef, useMemo } from 'react'
import {
  Search,
  Code2,
  FolderGit2,
  Sparkles,
  Mail,
  Github,
  Linkedin,
  Sun,
  Moon,
  ExternalLink,
  ArrowRight,
  X,
  Compass,
  FileCode,
} from 'lucide-react'
import { SITE, navLinks } from '../data/content'
import { useTheme } from '../hooks/useTheme'

interface CommandItem {
  id: string
  title: string
  subtitle?: string
  category: 'Navigation' | 'Actions' | 'Socials'
  icon: React.ElementType
  action: () => void
  external?: boolean
}

export function CommandPalette({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [copied, setCopied] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const { theme, toggleTheme } = useTheme()

  const copyEmail = () => {
    navigator.clipboard.writeText(SITE.email)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
      onClose()
    }, 1200)
  }

  const navigateTo = (href: string) => {
    onClose()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const allItems: CommandItem[] = useMemo(() => [
    ...navLinks.map((link) => ({
      id: `nav-${link.href}`,
      title: `Jump to ${link.label}`,
      subtitle: `Scroll to ${link.href} section`,
      category: 'Navigation' as const,
      icon: link.label === 'Projects' ? FolderGit2 : link.label === 'Skills' ? Code2 : link.label === 'About' ? Compass : Sparkles,
      action: () => navigateTo(link.href),
    })),
    {
      id: 'action-copy-email',
      title: copied ? 'Email Copied!' : 'Copy Email Address',
      subtitle: SITE.email,
      category: 'Actions' as const,
      icon: Mail,
      action: copyEmail,
    },
    {
      id: 'action-toggle-theme',
      title: `Toggle Theme (${theme === 'dark' ? 'Light Mode' : 'Dark Mode'})`,
      subtitle: `Switch current theme to ${theme === 'dark' ? 'light' : 'dark'}`,
      category: 'Actions' as const,
      icon: theme === 'dark' ? Sun : Moon,
      action: () => {
        toggleTheme()
        onClose()
      },
    },
    {
      id: 'social-github',
      title: 'Open GitHub Profile',
      subtitle: 'github.com/Hix-001',
      category: 'Socials' as const,
      icon: Github,
      action: () => {
        window.open(SITE.github, '_blank', 'noopener,noreferrer')
        onClose()
      },
      external: true,
    },
    {
      id: 'social-linkedin',
      title: 'Open LinkedIn Profile',
      subtitle: 'linkedin.com/in/harsh-developerxy',
      category: 'Socials' as const,
      icon: Linkedin,
      action: () => {
        window.open(SITE.linkedin, '_blank', 'noopener,noreferrer')
        onClose()
      },
      external: true,
    },
    {
      id: 'social-leetcode',
      title: 'Open LeetCode Profile',
      subtitle: 'leetcode.com/u/hixanly',
      category: 'Socials' as const,
      icon: FileCode,
      action: () => {
        window.open(SITE.leetcode, '_blank', 'noopener,noreferrer')
        onClose()
      },
      external: true,
    },
  ], [theme, copied])

  const filteredItems = useMemo(() => {
    if (!query.trim()) return allItems
    const q = query.toLowerCase()
    return allItems.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        (item.subtitle && item.subtitle.toLowerCase().includes(q)) ||
        item.category.toLowerCase().includes(q)
    )
  }, [query, allItems])

  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50)
    } else {
      setQuery('')
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex((prev) => (prev - 1 + (filteredItems.length || 1)) % (filteredItems.length || 1))
      } else if (e.key === 'Enter') {
        e.preventDefault()
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, filteredItems, selectedIndex, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center p-4 pt-16 sm:pt-24 bg-black/65 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
    >
      <div
        className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-[#27272a] bg-[#121212] text-[#f5f5f5] shadow-2xl shadow-black/80"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 border-b border-[#27272a] px-4 py-3.5">
          <Search size={18} className="text-[#a3ff12]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command, jump to section, or search..."
            className="w-full bg-transparent font-mono text-sm text-[#f5f5f5] placeholder-[#71717a] outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-[#71717a] hover:text-[#f5f5f5]"
              aria-label="Clear search"
            >
              <X size={16} />
            </button>
          )}
          <kbd className="hidden sm:inline-block rounded border border-[#27272a] bg-[#171717] px-1.5 py-0.5 font-mono text-[10px] text-[#a1a1aa]">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-[360px] overflow-y-auto p-2">
          {filteredItems.length === 0 ? (
            <div className="py-10 text-center font-mono text-xs text-[#71717a]">
              No matching commands found for "{query}"
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const Icon = item.icon
              const isSelected = index === selectedIndex
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex w-full items-center justify-between gap-3 rounded-xl px-3.5 py-2.5 text-left transition-colors ${
                    isSelected ? 'bg-[#1e1e24] text-white' : 'text-[#a1a1aa] hover:bg-[#171717]'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`flex size-8 shrink-0 items-center justify-center rounded-lg border ${
                        isSelected
                          ? 'border-[#a3ff12]/40 bg-[#a3ff12]/10 text-[#a3ff12]'
                          : 'border-[#27272a] bg-[#171717] text-[#a1a1aa]'
                      }`}
                    >
                      <Icon size={16} />
                    </div>
                    <div className="min-w-0 truncate">
                      <div className="font-mono text-xs font-medium text-[#f5f5f5] truncate">
                        {item.title}
                      </div>
                      {item.subtitle && (
                        <div className="font-mono text-[10px] text-[#71717a] truncate">
                          {item.subtitle}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="rounded bg-[#171717] border border-[#27272a] px-1.5 py-0.5 font-mono text-[9px] text-[#71717a]">
                      {item.category}
                    </span>
                    {item.external ? (
                      <ExternalLink size={12} className="text-[#71717a]" />
                    ) : (
                      <ArrowRight size={12} className={isSelected ? 'text-[#a3ff12]' : 'text-transparent'} />
                    )}
                  </div>
                </button>
              )
            })
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-[#27272a] bg-[#0d0d0d] px-4 py-2 font-mono text-[10px] text-[#71717a]">
          <div className="flex items-center gap-2">
            <span>Navigate:</span>
            <kbd className="rounded border border-[#27272a] bg-[#171717] px-1">↑</kbd>
            <kbd className="rounded border border-[#27272a] bg-[#171717] px-1">↓</kbd>
            <span>Select:</span>
            <kbd className="rounded border border-[#27272a] bg-[#171717] px-1">↵</kbd>
          </div>
          <div>Harsh Jha Command Center</div>
        </div>
      </div>
    </div>
  )
}
