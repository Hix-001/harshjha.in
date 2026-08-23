import { useState } from 'react'
import { exploring, type FocusAreaItem } from '../data/content'
import { useInViewAnimation } from '../hooks/useInViewAnimation'
import { SectionHeading } from '../components/SectionHeading'
import { Compass, Cpu, GraduationCap, ArrowRight, X, Sparkles, CheckCircle2, FolderGit2 } from 'lucide-react'

export function About() {
  const { ref, isInView } = useInViewAnimation()
  const [selectedFocus, setSelectedFocus] = useState<FocusAreaItem | null>(null)

  return (
    <section id="about" className="border-t border-[#27272a] bg-[#0d0d0d] py-20 md:py-28 scroll-mt-20">
      <div
        ref={ref}
        className={`mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-12 md:px-8 ${
          isInView ? 'fade-in-up' : 'opacity-0'
        }`}
      >
        {/* Left Col: Narrative */}
        <div className="md:col-span-7">
          <SectionHeading
            index="01"
            label="ABOUT ME"
            title="Building foundational strength. Crafting modern software."
            subtitle="Curiosity-driven development across systems programming, algorithms, and full-stack engineering."
          />

          <div className="mt-8 space-y-4 text-sm sm:text-base leading-relaxed text-[#a1a1aa]">
            <p>
              I am currently a <strong className="text-white">2nd year Computer Science &amp; Engineering</strong> student based in India. My journey started with understanding how computers execute code from the silicon up—learning C++, object-oriented principles, memory layouts, and data structures.
            </p>
            <p>
              Beyond coursework, I love bridging theoretical computer science with real-world, interactive software. Whether it's building an algorithm visualizer to master graph pathfinding or engineering a command-line tool in Python &amp; C++, I believe in shipping tangible code to learn deeply.
            </p>
            <p>
              My goal is to continue refining my craft, contribute meaningfully to open-source developer ecosystems, and collaborate on scalable engineering challenges.
            </p>
          </div>

          {/* Quick Highlight Cards */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-[#27272a] bg-[#121212] p-4.5">
              <div className="flex items-center gap-2.5 text-[#a3ff12] font-mono text-xs">
                <GraduationCap size={16} />
                <span>Academics &amp; Foundations</span>
              </div>
              <p className="mt-2 text-xs text-[#a1a1aa] leading-relaxed">
                Core coursework in Data Structures, Algorithms, DBMS, Operating Systems, and OOPs in C++.
              </p>
            </div>

            <div className="rounded-xl border border-[#27272a] bg-[#121212] p-4.5">
              <div className="flex items-center gap-2.5 text-[#5eead4] font-mono text-xs">
                <Cpu size={16} />
                <span>Hands-on Engineering</span>
              </div>
              <p className="mt-2 text-xs text-[#a1a1aa] leading-relaxed">
                Building React 19 apps, TypeScript tools, interactive web sandboxes, and performant utilities.
              </p>
            </div>
          </div>
        </div>

        {/* Right Col: Interactive Exploration Matrix */}
        <aside
          className={`md:col-span-5 h-fit rounded-2xl border border-[#27272a] bg-[#121212] p-6 shadow-xl ${
            isInView ? 'fade-in-up' : ''
          }`}
          style={{ animationDelay: '0.2s' }}
        >
          <div className="flex items-center justify-between pb-4 border-b border-[#27272a]">
            <p className="font-mono text-[11px] tracking-[0.2em] text-[#a3ff12] flex items-center gap-2">
              <Compass size={14} />
              CURRENT FOCUS AREAS
            </p>
            <span className="size-2 rounded-full bg-[#a3ff12] glow-pulse" />
          </div>

          <p className="mt-4 text-xs text-[#a1a1aa]">
            Topics I am actively studying and implementing. <strong className="text-[#a3ff12]">Click any item</strong> to open its breakdown:
          </p>

          <ul className="mt-5 space-y-2.5">
            {exploring.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => setSelectedFocus(item)}
                  className="group flex w-full items-center justify-between gap-3 rounded-xl border border-[#27272a]/70 bg-[#171717] px-3.5 py-3 text-left transition-all hover:border-[#a3ff12] hover:bg-[#1c2415]/40 active:scale-[0.99] focus-ring"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="font-mono text-[11px] font-bold text-[#a3ff12] shrink-0">
                      {item.id}
                    </span>
                    <span className="h-3 w-px bg-[#27272a]" aria-hidden />
                    <span className="font-mono text-xs text-[#f5f5f5] group-hover:text-white leading-snug">
                      {item.title}
                    </span>
                  </div>
                  <ArrowRight
                    size={14}
                    className="text-[#71717a] transition-all group-hover:translate-x-1 group-hover:text-[#a3ff12] shrink-0"
                  />
                </button>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      {/* Focus Area Details Modal */}
      {selectedFocus && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/75 backdrop-blur-md fade-in-up"
          onClick={() => setSelectedFocus(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedFocus.title}
        >
          <div
            className="relative w-full max-w-lg max-h-[88vh] overflow-y-auto rounded-2xl border border-[#27272a] bg-[#121212] p-5 sm:p-6 shadow-2xl shadow-black/80"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#27272a]">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] font-bold text-[#a3ff12] bg-[#a3ff12]/10 border border-[#a3ff12]/30 px-2 py-0.5 rounded-full">
                    FOCUS #{selectedFocus.id}
                  </span>
                  <span className="font-mono text-[10px] text-[#5eead4] bg-[#5eead4]/10 border border-[#5eead4]/30 px-2 py-0.5 rounded-full">
                    {selectedFocus.status}
                  </span>
                </div>
                <h3 className="mt-2.5 font-display text-lg sm:text-xl font-bold text-white leading-snug">
                  {selectedFocus.title}
                </h3>
                <p className="mt-1 font-mono text-xs text-[#a3ff12]">{selectedFocus.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedFocus(null)}
                className="rounded-lg border border-[#27272a] bg-[#171717] p-1.5 text-[#a1a1aa] hover:text-white hover:border-white/40 focus-ring shrink-0"
                aria-label="Close modal"
              >
                <X size={16} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="mt-4 space-y-4 text-xs sm:text-sm leading-relaxed text-[#a1a1aa]">
              <p>{selectedFocus.description}</p>

              {/* Key Topics */}
              <div className="rounded-xl border border-[#27272a] bg-[#171717] p-4">
                <p className="font-mono text-[11px] font-semibold text-[#f5f5f5] flex items-center gap-1.5 mb-2.5">
                  <Sparkles size={13} className="text-[#a3ff12]" /> Key Study &amp; Implementation Topics
                </p>
                <ul className="space-y-1.5 font-mono text-xs text-[#d4d4d8]">
                  {selectedFocus.keyTopics.map((topic, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 size={12} className="text-[#a3ff12] shrink-0" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Projects */}
              {selectedFocus.relatedProjects && selectedFocus.relatedProjects.length > 0 && (
                <div>
                  <p className="font-mono text-[11px] font-semibold text-[#f5f5f5] flex items-center gap-1.5 mb-2">
                    <FolderGit2 size={13} className="text-[#5eead4]" /> Connected Portfolio Projects
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedFocus.relatedProjects.map((proj, i) => (
                      <span
                        key={i}
                        className="rounded-lg border border-[#27272a] bg-[#171717] px-3 py-1 font-mono text-xs text-[#5eead4]"
                      >
                        {proj}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="mt-6 pt-4 border-t border-[#27272a] flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedFocus(null)}
                className="rounded-full border border-[#27272a] bg-[#171717] px-5 py-2 font-mono text-xs text-[#f5f5f5] hover:border-[#a3ff12] hover:text-[#a3ff12] focus-ring"
              >
                Close (ESC)
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
