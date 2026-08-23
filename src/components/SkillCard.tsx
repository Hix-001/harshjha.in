import type { LucideIcon } from 'lucide-react'
import {
  Braces,
  Code2,
  Component,
  Database,
  Figma,
  FileCode2,
  GitBranch,
  Github,
  Layers,
  Network,
  Palette,
  Server,
  Terminal,
  Webhook,
  Wind,
} from 'lucide-react'
import type { SkillLevel, SkillCategory } from '../data/content'

const icons: Record<string, LucideIcon> = {
  cpp: FileCode2,
  python: Terminal,
  js: Braces,
  ts: Code2,
  html: Layers,
  css: Palette,
  react: Component,
  tailwind: Wind,
  git: GitBranch,
  github: Github,
  vscode: Code2,
  figma: Figma,
  node: Server,
  db: Database,
  api: Webhook,
  design: Network,
}

const levelBadgeStyle: Record<SkillLevel, { text: string; bg: string; border: string }> = {
  COMFORTABLE: {
    text: 'text-[#a3ff12]',
    bg: 'bg-[#a3ff12]/10',
    border: 'border-[#a3ff12]/30',
  },
  LEARNING: {
    text: 'text-[#5eead4]',
    bg: 'bg-[#5eead4]/10',
    border: 'border-[#5eead4]/30',
  },
  EXPLORING: {
    text: 'text-[#a1a1aa]',
    bg: 'bg-[#27272a]/50',
    border: 'border-[#27272a]',
  },
}

type SkillCardProps = {
  name: string
  category: SkillCategory
  level: SkillLevel
  icon: string
  description?: string
}

export function SkillCard({ name, category, level, icon, description }: SkillCardProps) {
  const Icon = icons[icon] ?? Code2
  const badge = levelBadgeStyle[level]

  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#27272a] bg-[#121212] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#a3ff12]/50 hover:shadow-[0_10px_30px_rgba(163,255,18,0.06)]">
      {/* Background glow on hover */}
      <div className="pointer-events-none absolute -right-12 -top-12 size-24 rounded-full bg-[#a3ff12]/5 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />

      <div>
        <div className="flex items-start justify-between gap-2">
          <div className="flex size-11 items-center justify-center rounded-xl border border-[#27272a] bg-[#171717] text-[#a3ff12] transition-all duration-300 group-hover:border-[#a3ff12]/40 group-hover:scale-105">
            <Icon size={20} aria-hidden />
          </div>
          <span
            className={`rounded-full border px-2.5 py-0.5 font-mono text-[9px] font-medium tracking-wider ${badge.text} ${badge.bg} ${badge.border}`}
          >
            {level}
          </span>
        </div>

        <h3 className="mt-4 font-mono text-sm font-semibold text-[#f5f5f5] group-hover:text-white">
          {name}
        </h3>
        <p className="mt-0.5 font-mono text-[10px] tracking-wide text-[#71717a]">{category}</p>

        {description && (
          <p className="mt-2.5 text-xs leading-relaxed text-[#a1a1aa] line-clamp-2">
            {description}
          </p>
        )}
      </div>

      <div className="mt-4 pt-3 border-t border-[#27272a]/50 flex items-center justify-between text-[10px] font-mono text-[#71717a]">
        <span>Competency</span>
        <span className={badge.text}>
          {level === 'COMFORTABLE' ? '●●●' : level === 'LEARNING' ? '●●○' : '●○○'}
        </span>
      </div>
    </article>
  )
}
