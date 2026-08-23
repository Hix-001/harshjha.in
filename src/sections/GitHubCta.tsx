import { Github, ArrowUpRight } from 'lucide-react'
import { SITE } from '../data/content'
import { Button } from '../components/Button'

function ContributionGrid() {
  // Generate realistic-looking contribution patterns
  const weeks = 18
  const daysPerWeek = 7
  const totalDays = weeks * daysPerWeek

  const colors = [
    '#171717',
    '#1c2d0f',
    '#2e4d14',
    '#4b7e1c',
    '#a3ff12',
  ]

  const cells = Array.from({ length: totalDays }, (_, i) => {
    // Semi-random density simulating active coding
    const hash = (i * 9301 + 49297) % 233280
    const rand = hash / 233280
    let level = 0
    if (rand > 0.35) level = 1
    if (rand > 0.6) level = 2
    if (rand > 0.8) level = 3
    if (rand > 0.92) level = 4
    return colors[level]
  })

  return (
    <div className="space-y-2">
      <div
        className="grid grid-flow-col grid-rows-7 gap-1.5 overflow-x-auto p-1"
        role="img"
        aria-label="GitHub style contribution heat matrix"
      >
        {cells.map((color, i) => (
          <span
            key={i}
            className="size-3 rounded-[3px] transition-transform hover:scale-125"
            style={{ backgroundColor: color }}
            title={`Active Contribution Day ${i + 1}`}
          />
        ))}
      </div>
      <div className="flex items-center justify-between font-mono text-[9px] text-[#71717a] pt-2 border-t border-[#27272a]/60">
        <span>Less</span>
        <div className="flex items-center gap-1">
          {colors.map((c, idx) => (
            <span key={idx} className="size-2 rounded-[2px]" style={{ backgroundColor: c }} />
          ))}
        </div>
        <span>More</span>
      </div>
    </div>
  )
}

export function GitHubCta() {
  return (
    <section className="border-t border-[#27272a] bg-[#0d0d0d] py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-12 md:px-8">
        <div className="md:col-span-6">
          <p className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-[#a3ff12]">
            <Github size={15} aria-hidden />
            OPEN SOURCE &amp; LEARNING IN PUBLIC
          </p>
          <h2 className="mt-4 text-3xl font-medium md:text-4xl text-white">
            Code is better when it is open &amp; shared.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#a1a1aa]">
            I maintain repositories covering algorithm experiments, developer utilities, and web engineering sandboxes. Follow my journey, inspect the code, or submit an issue/PR.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={SITE.github} target="_blank" rel="noopener noreferrer">
              <Github size={16} />
              Visit github.com/Hix-001
            </Button>
            <Button href="#projects" variant="secondary">
              Explore Portfolio Projects
            </Button>
          </div>
        </div>

        <div className="md:col-span-6 rounded-2xl border border-[#27272a] bg-[#121212] p-6 shadow-xl">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#27272a]">
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-[#a3ff12]" />
              <span className="font-mono text-xs text-[#f5f5f5] font-medium">@Hix-001</span>
            </div>
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] text-[#a1a1aa] hover:text-[#a3ff12] flex items-center gap-1"
            >
              Public Profile <ArrowUpRight size={11} />
            </a>
          </div>

          {/* Activity Heatmap Grid */}
          <ContributionGrid />

          <div className="mt-4 grid grid-cols-2 gap-2 pt-2">
            <div className="rounded-lg bg-[#171717] border border-[#27272a] p-2.5 text-center font-mono">
              <div className="text-xs text-[#a3ff12] font-semibold">100%</div>
              <div className="text-[10px] text-[#71717a]">Open Repos</div>
            </div>
            <div className="rounded-lg bg-[#171717] border border-[#27272a] p-2.5 text-center font-mono">
              <div className="text-xs text-[#5eead4] font-semibold">Active</div>
              <div className="text-[10px] text-[#71717a]">Commit Cadence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
