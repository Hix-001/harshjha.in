import { highlights } from '../data/content'
import { useInViewAnimation } from '../hooks/useInViewAnimation'
import { SectionHeading } from '../components/SectionHeading'
import { Award, Zap, Terminal, Activity } from 'lucide-react'

const icons = [Activity, Terminal, Zap, Award]

export function Highlights() {
  const { ref, isInView } = useInViewAnimation()

  return (
    <section id="highlights" className="border-t border-[#27272a] py-20 md:py-28 bg-[#070707]">
      <div ref={ref} className="mx-auto max-w-6xl px-5 md:px-8">
        <div className={isInView ? 'fade-in-up' : 'opacity-0'}>
          <SectionHeading
            index="05"
            label="HIGHLIGHTS &amp; METRICS"
            title="Consistent learning. Measurable growth."
            subtitle="Key milestones across problem-solving streaks, public project builds, and engineering discipline."
          />
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => {
            const Icon = icons[i % icons.length]
            return (
              <article
                key={item.label}
                className={`group relative overflow-hidden rounded-2xl border border-[#27272a] bg-[#121212] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#a3ff12]/50 hover:shadow-[0_12px_36px_rgba(163,255,18,0.06)] ${
                  isInView ? 'fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${0.1 + i * 0.08}s` }}
              >
                {/* Subtle corner glow */}
                <div className="pointer-events-none absolute -right-8 -top-8 size-20 rounded-full bg-[#a3ff12]/5 blur-xl group-hover:opacity-100 opacity-0 transition-opacity" />

                <div className="flex items-center justify-between">
                  <div className="flex size-10 items-center justify-center rounded-xl border border-[#27272a] bg-[#171717] text-[#a3ff12]">
                    <Icon size={18} />
                  </div>
                  <span className="font-mono text-[9px] tracking-widest text-[#71717a]">
                    {item.label}
                  </span>
                </div>

                <div className="mt-5">
                  <div className="font-display text-3xl font-bold text-white tracking-tight">
                    {item.value}
                  </div>
                  <div className="font-mono text-[11px] text-[#a3ff12] mt-0.5 font-medium">
                    {item.unit}
                  </div>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-[#a1a1aa] border-t border-[#27272a]/50 pt-3">
                  {item.text}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
