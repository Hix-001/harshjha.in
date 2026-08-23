import { FolderGit2, Mail } from 'lucide-react'
import { Button } from '../components/Button'
import { TerminalCard } from '../components/TerminalCard'
import { SITE } from '../data/content'

const floatLabels = [
  { label: 'C++', pos: 'left-0 top-6' },
  { label: 'Python', pos: 'right-4 top-2' },
  { label: 'React 19', pos: '-left-4 top-1/2' },
  { label: 'TypeScript', pos: '-right-2 top-1/2' },
  { label: 'DSA & Graphs', pos: 'left-6 bottom-4' },
  { label: 'Tailwind CSS', pos: 'right-8 bottom-2' },
]

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-36 pb-16 md:pb-24">
      {/* Background Grids & Glow */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-35" aria-hidden />
      <div className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-[#a3ff12]/8 blur-[120px]" aria-hidden />
      <div className="pointer-events-none absolute right-10 top-60 h-64 w-64 rounded-full bg-[#5eead4]/6 blur-[100px]" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-12 md:px-8">
        {/* Left Column: Headline & Intro */}
        <div className="fade-in-up md:col-span-6 lg:col-span-7">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#27272a] bg-[#121212]/90 px-3.5 py-1.5 font-mono text-[11px] text-[#a1a1aa] shadow-md backdrop-blur-sm">
            <span className="size-2 rounded-full bg-[#a3ff12] glow-pulse" aria-hidden />
            <span className="text-[#f5f5f5] font-medium">HARSH JHA</span>
            <span className="text-[#71717a]">•</span>
            <span className="text-[#a3ff12]">{SITE.status}</span>
          </div>

          <h1 className="mt-6 text-4xl font-medium leading-[1.08] text-[#f5f5f5] sm:text-5xl lg:text-6xl">
            Building software with <span className="text-[#a3ff12]">precision</span> &amp; curious{' '}
            <span className="text-[#5eead4]">engineering</span>.
          </h1>

          <p className="mt-4 font-mono text-xs sm:text-sm tracking-wide text-[#a1a1aa]">
            2nd Year CSE Undergrad · Full Stack Developer · Problem Solver
          </p>

          <p className="mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-[#a1a1aa]">
            Hi, I'm <strong className="text-white font-medium">Harsh Jha</strong>. I engineer responsive web applications, design efficient algorithms, and build developer tools. Passionate about computer systems, clean architecture, and open-source software.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <Button href="#projects">
              <FolderGit2 size={16} />
              View Featured Projects
            </Button>
            <Button href="#contact" variant="secondary">
              <Mail size={16} />
              Get in Touch
            </Button>
          </div>

          {/* Key Metrics Quick Row */}
          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-[#27272a] pt-6 font-mono text-[11px]">
            <div>
              <dt className="text-[#71717a] uppercase tracking-wider">Location</dt>
              <dd className="mt-1 text-[#f5f5f5] font-medium">{SITE.location}</dd>
            </div>
            <div>
              <dt className="text-[#71717a] uppercase tracking-wider">Education</dt>
              <dd className="mt-1 text-[#f5f5f5] font-medium">B.Tech CSE (Year 2)</dd>
            </div>
            <div>
              <dt className="text-[#71717a] uppercase tracking-wider">Core Stack</dt>
              <dd className="mt-1 text-[#a3ff12] font-medium">React · C++ · TS</dd>
            </div>
          </dl>
        </div>

        {/* Right Column: Interactive Terminal */}
        <div className="relative fade-in-up md:col-span-6 lg:col-span-5" style={{ animationDelay: '0.15s' }}>
          {/* Floating Pill Badges */}
          {floatLabels.map((item) => (
            <span
              key={item.label}
              className={`absolute z-20 hidden rounded-full border border-[#27272a] bg-[#171717]/90 px-3 py-1 font-mono text-[10px] tracking-wider text-[#5eead4] shadow-lg backdrop-blur-md transition-all hover:border-[#a3ff12] hover:text-[#a3ff12] lg:inline-block ${item.pos}`}
            >
              {item.label}
            </span>
          ))}

          {/* Terminal Sandbox */}
          <div className="relative">
            <TerminalCard title="harsh@portfolio:~/sandbox" interactive />
          </div>
        </div>
      </div>
    </section>
  )
}
