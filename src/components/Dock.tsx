import { useState, type ReactNode } from 'react'
import { Github, Home, Linkedin, Moon, Sun, Search, Mail, Code2, FolderGit2 } from 'lucide-react'
import { SITE } from '../data/content'
import { useTheme } from '../hooks/useTheme'

interface IconButtonProps {
  label: string
  children: ReactNode
  href?: string
  onClick?: () => void
  active?: boolean
}

function IconButton({ label, children, href, onClick, active }: IconButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const content = (
    <div className="relative flex items-center justify-center">
      {/* Tooltip */}
      {isHovered && (
        <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-[#27272a] bg-[#121212] px-2 py-0.5 font-mono text-[10px] tracking-wide text-[#f5f5f5] shadow-lg">
          {label}
        </span>
      )}
      <div
        className={`focus-ring flex size-9 sm:size-10 items-center justify-center rounded-full text-[#f5f5f5] transition-all duration-200 hover:scale-110 hover:bg-white/10 active:scale-95 ${
          active ? 'bg-[#a3ff12]/15 text-[#a3ff12]' : ''
        }`}
      >
        {children}
      </div>
    </div>
  )

  if (href) {
    const external = href.startsWith('http') || href.startsWith('mailto:')
    return (
      <a
        href={href}
        aria-label={label}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {content}
    </button>
  )
}

function Divider() {
  return <span className="mx-1 h-5 w-px bg-white/15" aria-hidden />
}

function LeetCodeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden>
      <path
        d="M15.2 3.4 8.1 10.5a3.2 3.2 0 0 0 0 4.5l7.1 7.1"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      <path d="M10.2 12.8h10.2" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
      <path
        d="M8.4 6.2 5.3 9.3a6 6 0 0 0 0 8.5l3.1 3.1"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Dock({ onOpenSearch }: { onOpenSearch?: () => void }) {
  const { theme, toggleTheme } = useTheme()

  return (
    <aside aria-label="Quick Actions Dock" className="fixed bottom-4 sm:bottom-6 left-1/2 z-40 -translate-x-1/2">
      <nav
        aria-label="Quick navigation"
        className="glass-panel flex items-center gap-0.5 rounded-full px-2.5 py-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.55)] transition-all"
      >
        <IconButton href="#home" label="Home">
          <Home size={17} strokeWidth={1.8} />
        </IconButton>
        <IconButton href="#projects" label="Projects">
          <FolderGit2 size={17} strokeWidth={1.8} />
        </IconButton>
        <IconButton href="#skills" label="Skills">
          <Code2 size={17} strokeWidth={1.8} />
        </IconButton>
        <IconButton href="#contact" label="Contact">
          <Mail size={17} strokeWidth={1.8} />
        </IconButton>

        <Divider />

        <IconButton href={SITE.github} label="GitHub">
          <Github size={17} strokeWidth={1.8} />
        </IconButton>
        <IconButton href={SITE.linkedin} label="LinkedIn">
          <Linkedin size={17} strokeWidth={1.8} />
        </IconButton>
        <IconButton href={SITE.leetcode} label="LeetCode">
          <LeetCodeIcon />
        </IconButton>

        <Divider />

        {onOpenSearch && (
          <IconButton label="Search & Commands (Cmd+K)" onClick={onOpenSearch}>
            <Search size={17} strokeWidth={1.8} />
          </IconButton>
        )}

        <IconButton
          label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          onClick={toggleTheme}
        >
          {theme === 'dark' ? (
            <Sun size={17} strokeWidth={1.8} className="text-[#a3ff12]" />
          ) : (
            <Moon size={17} strokeWidth={1.8} className="text-amber-500" />
          )}
        </IconButton>
      </nav>
    </aside>
  )
}
