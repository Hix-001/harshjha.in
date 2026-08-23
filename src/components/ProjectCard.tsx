import { ArrowUpRight, Github, Sparkles, Terminal, LayoutDashboard, Globe, Code } from 'lucide-react'
import type { ProjectItem } from '../data/content'

function Preview({ kind }: { kind: ProjectItem['preview'] }) {
  if (kind === 'dashboard') {
    return (
      <div className="relative h-full min-h-[220px] overflow-hidden bg-[#0d0d0d] p-5">
        <div className="absolute inset-0 opacity-40 grid-bg" />
        <div className="relative rounded-xl border border-[#27272a] bg-[#121212] p-4 shadow-xl">
          {/* Mock Window Controls */}
          <div className="flex items-center justify-between pb-3 border-b border-[#27272a]">
            <div className="flex gap-1.5">
              <span className="size-2 rounded-full bg-[#ef4444]/70" />
              <span className="size-2 rounded-full bg-[#eab308]/70" />
              <span className="size-2 rounded-full bg-[#a3ff12]/70" />
            </div>
            <span className="font-mono text-[9px] text-[#71717a] flex items-center gap-1">
              <LayoutDashboard size={10} className="text-[#a3ff12]" /> visualizer.engine
            </span>
          </div>
          {/* Animated Mock Content */}
          <div className="mt-3.5 space-y-2.5">
            <div className="flex items-center justify-between text-[10px] font-mono text-[#a1a1aa]">
              <span>Graph Traversal: Dijkstra</span>
              <span className="text-[#a3ff12]">42ms | O(V + E log V)</span>
            </div>
            <div className="grid grid-cols-6 gap-1.5 py-1">
              <div className="h-10 rounded bg-[#a3ff12]/20 border border-[#a3ff12]/40 flex items-center justify-center font-mono text-[10px] text-[#a3ff12]">A</div>
              <div className="h-10 rounded bg-[#171717] border border-[#27272a] flex items-center justify-center font-mono text-[10px] text-[#71717a]">B</div>
              <div className="h-10 rounded bg-[#5eead4]/20 border border-[#5eead4]/40 flex items-center justify-center font-mono text-[10px] text-[#5eead4]">C</div>
              <div className="h-10 rounded bg-[#171717] border border-[#27272a] flex items-center justify-center font-mono text-[10px] text-[#71717a]">D</div>
              <div className="h-10 rounded bg-[#a3ff12]/20 border border-[#a3ff12]/40 flex items-center justify-center font-mono text-[10px] text-[#a3ff12]">E</div>
              <div className="h-10 rounded bg-[#171717] border border-[#27272a] flex items-center justify-center font-mono text-[10px] text-[#71717a]">F</div>
            </div>
            <div className="flex gap-2">
              <div className="h-1.5 w-3/4 rounded-full bg-[#a3ff12]/50 animate-pulse" />
              <div className="h-1.5 w-1/4 rounded-full bg-[#5eead4]/40" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (kind === 'browser') {
    return (
      <div className="relative h-full min-h-[190px] overflow-hidden bg-[#0d0d0d] p-4">
        <div className="relative rounded-xl border border-[#27272a] bg-[#121212] shadow-xl">
          <div className="flex items-center gap-2 border-b border-[#27272a] px-3 py-2">
            <span className="size-2 rounded-full bg-[#27272a]" />
            <span className="size-2 rounded-full bg-[#27272a]" />
            <span className="size-2 rounded-full bg-[#27272a]" />
            <span className="ml-2 flex items-center gap-1 flex-1 rounded-md bg-[#171717] px-2 py-0.5 font-mono text-[9px] text-[#a1a1aa]">
              <Globe size={9} className="text-[#5eead4]" /> https://devvault.app/snippets
            </span>
          </div>
          <div className="space-y-2 p-3.5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-[#f5f5f5]">quick_sort.ts</span>
              <span className="rounded bg-[#a3ff12]/10 px-1.5 py-0.2 font-mono text-[8px] text-[#a3ff12]">IndexedDB</span>
            </div>
            <div className="h-1.5 w-2/3 rounded bg-[#a3ff12]/40" />
            <div className="h-1.5 w-full rounded bg-[#27272a]" />
            <div className="h-1.5 w-4/5 rounded bg-[#27272a]" />
          </div>
        </div>
      </div>
    )
  }

  if (kind === 'terminal') {
    return (
      <div className="relative h-full min-h-[190px] overflow-hidden bg-[#0d0d0d] p-4 font-mono text-[11px] leading-relaxed text-[#5eead4]">
        <div className="rounded-xl border border-[#27272a] bg-[#121212] p-3.5">
          <div className="flex items-center gap-1.5 pb-2 text-[10px] text-[#71717a] border-b border-[#27272a]">
            <Terminal size={11} className="text-[#a3ff12]" />
            <span>gittrace --graph --live</span>
          </div>
          <div className="pt-2 text-[10px] space-y-1 font-mono">
            <p className="text-[#a3ff12]">* 8f3c1a2 (HEAD -&gt; main) feat: async DAG pipeline</p>
            <p className="text-[#5eead4]">|\</p>
            <p className="text-[#a1a1aa]">| * 2b9e401 test: benchmark AST traversal</p>
            <p className="text-[#a1a1aa]">|/</p>
            <p className="text-[#71717a]">* 1d04ac8 init: core binary graph bindings</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-full min-h-[190px] overflow-hidden bg-[#0d0d0d] p-4 font-mono text-[11px] leading-relaxed text-[#5eead4]">
      <div className="rounded-xl border border-[#27272a] bg-[#121212] p-3.5">
        <div className="flex items-center gap-1.5 pb-2 text-[10px] text-[#71717a] border-b border-[#27272a]">
          <Code size={11} className="text-[#a3ff12]" />
          <span>os_scheduler.cpp</span>
        </div>
        <div className="pt-2 text-[10px] space-y-1 font-mono text-[#a1a1aa]">
          <p><span className="text-[#a3ff12]">void</span> <span className="text-white">scheduleProcesses</span>(Queue&amp; q) {'{'}</p>
          <p className="pl-3">auto next = q.<span className="text-[#5eead4]">getHighestPriority</span>();</p>
          <p className="pl-3">next.<span className="text-[#a3ff12]">executeBurst</span>(timeQuantum);</p>
          <p className="pl-3"><span className="text-[#a3ff12]">return</span> calculateMetrics(q);</p>
          <p>{'}'}</p>
        </div>
      </div>
    </div>
  )
}

export function ProjectCard({ project, featured = false }: { project: ProjectItem; featured?: boolean }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-[#27272a] bg-[#121212] transition-all duration-300 hover:border-[#a3ff12]/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] ${
        featured ? 'lg:grid lg:grid-cols-12' : 'flex flex-col justify-between'
      }`}
    >
      {/* Preview Section */}
      <div className={`overflow-hidden ${featured ? 'lg:col-span-6' : ''}`}>
        <div className="transition-transform duration-500 group-hover:scale-[1.02]">
          <Preview kind={project.preview} />
        </div>
      </div>

      {/* Content Section */}
      <div
        className={`flex flex-col justify-between p-6 sm:p-7 ${
          featured ? 'lg:col-span-6 lg:p-8' : ''
        }`}
      >
        <div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] tracking-wider text-[#a1a1aa]">
                #{project.id}
              </span>
              <span className="rounded bg-[#171717] border border-[#27272a] px-2 py-0.5 font-mono text-[9px] text-[#5eead4]">
                {project.category}
              </span>
            </div>
            {featured && (
              <span className="inline-flex items-center gap-1 rounded-full border border-[#a3ff12]/40 bg-[#a3ff12]/10 px-2.5 py-0.5 font-mono text-[9px] tracking-widest text-[#a3ff12]">
                <Sparkles size={10} /> FEATURED
              </span>
            )}
          </div>

          <h3 className="mt-3 text-xl font-medium text-[#f5f5f5] sm:text-2xl group-hover:text-white transition-colors">
            {project.name}
          </h3>
          <p className="font-mono text-xs text-[#a3ff12] mt-0.5">{project.subtitle}</p>

          <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#a1a1aa]">
            {project.description}
          </p>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <ul className="mt-4 space-y-1 text-xs text-[#d4d4d8]">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-center gap-2 font-mono text-[11px] text-[#a1a1aa]">
                  <span className="size-1 rounded-full bg-[#a3ff12]" />
                  {highlight}
                </li>
              ))}
            </ul>
          )}

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-[#27272a] bg-[#171717] px-2.5 py-1 font-mono text-[10px] tracking-wide text-[#f5f5f5]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="mt-6 flex flex-wrap items-center gap-4 pt-4 border-t border-[#27272a]/60">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline inline-flex items-center gap-1.5 font-mono text-xs text-[#a3ff12] hover:text-[#b7ff4a] focus-ring"
          >
            Explore Repo <ArrowUpRight size={13} />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline inline-flex items-center gap-1.5 font-mono text-xs text-[#a1a1aa] hover:text-white focus-ring"
          >
            <Github size={13} /> Source Code
          </a>
        </div>
      </div>
    </article>
  )
}
