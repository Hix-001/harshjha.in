import type { CSSProperties } from 'react'
import { Calendar, CheckCircle2, Milestone } from 'lucide-react'

type TimelineItemProps = {
  stage: string
  title: string
  timeframe?: string
  description?: string
  items: string[]
  last?: boolean
  className?: string
  style?: CSSProperties
}

export function TimelineItem({
  stage,
  title,
  timeframe,
  description,
  items,
  last = false,
  className = '',
  style,
}: TimelineItemProps) {
  return (
    <li
      className={`relative grid gap-4 pl-10 md:grid-cols-[160px_1fr] md:gap-10 md:pl-12 ${className}`}
      style={style}
    >
      {/* Indicator Node */}
      <span
        className="absolute left-0 top-2 size-3.5 rounded-full border-2 border-[#a3ff12] bg-[#070707] glow-pulse"
        aria-hidden
      />
      {!last ? (
        <span
          className="absolute left-[6px] top-6 h-[calc(100%+1.5rem)] w-px bg-gradient-to-b from-[#a3ff12]/40 via-[#27272a] to-[#27272a]"
          aria-hidden
        />
      ) : null}

      {/* Stage Badge & Timeframe */}
      <div>
        <span className="inline-flex items-center gap-1 font-mono text-xs font-semibold tracking-wider text-[#a3ff12]">
          <Milestone size={12} />
          STAGE {stage}
        </span>
        {timeframe && (
          <p className="mt-1 flex items-center gap-1 font-mono text-[11px] text-[#71717a]">
            <Calendar size={11} /> {timeframe}
          </p>
        )}
      </div>

      {/* Card Body */}
      <div className="rounded-2xl border border-[#27272a] bg-[#121212] p-5 sm:p-6 shadow-md transition-all hover:border-[#3f3f46]">
        <h3 className="font-mono text-sm font-semibold tracking-wider text-white">
          {title}
        </h3>
        {description && (
          <p className="mt-2 text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
            {description}
          </p>
        )}
        <ul className="mt-4 space-y-2 border-t border-[#27272a]/60 pt-3">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-xs text-[#d4d4d8]">
              <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-[#a3ff12]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}
