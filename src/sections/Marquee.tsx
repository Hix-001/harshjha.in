import { marqueeItems } from '../data/content'

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-[#27272a] bg-[#0d0d0d] py-4 select-none" aria-hidden>
      {/* Edge Gradient Fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 sm:w-32 bg-gradient-to-r from-[#0d0d0d] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 sm:w-32 bg-gradient-to-l from-[#0d0d0d] to-transparent" />

      {/* Seamless Moving Marquee Tracks */}
      <div className="marquee-container flex w-max">
        <div className="animate-marquee flex shrink-0 items-center gap-8 pr-8 whitespace-nowrap font-mono text-xs tracking-[0.28em] text-[#a1a1aa]">
          {marqueeItems.map((item, i) => (
            <span key={`track1-${i}`} className="flex items-center gap-8 transition-colors hover:text-white">
              <span>{item}</span>
              <span className="text-[#a3ff12] text-sm font-bold">•</span>
            </span>
          ))}
        </div>

        <div className="animate-marquee flex shrink-0 items-center gap-8 pr-8 whitespace-nowrap font-mono text-xs tracking-[0.28em] text-[#a1a1aa]">
          {marqueeItems.map((item, i) => (
            <span key={`track2-${i}`} className="flex items-center gap-8 transition-colors hover:text-white">
              <span>{item}</span>
              <span className="text-[#a3ff12] text-sm font-bold">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
