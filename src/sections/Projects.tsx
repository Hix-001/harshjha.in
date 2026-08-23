import { useState } from 'react'
import { projects, SITE } from '../data/content'
import { useInViewAnimation } from '../hooks/useInViewAnimation'
import { ProjectCard } from '../components/ProjectCard'
import { SectionHeading } from '../components/SectionHeading'
import { Github, FolderGit2 } from 'lucide-react'

export function Projects() {
  const { ref, isInView } = useInViewAnimation()
  const [selectedFilter, setSelectedFilter] = useState<string>('All')

  const filterOptions = ['All', 'Algorithms', 'Full Stack', 'Systems & CLI', 'Frontend']

  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedFilter)

  const featured = filteredProjects.find((p) => p.featured) || (selectedFilter === 'All' ? projects[0] : null)
  const nonFeatured = filteredProjects.filter((p) => p !== featured)

  return (
    <section id="projects" className="border-t border-[#27272a] py-20 md:py-28 bg-[#070707] scroll-mt-20">
      <div ref={ref} className="mx-auto max-w-6xl px-5 md:px-8">
        <div className={isInView ? 'fade-in-up' : 'opacity-0'}>
          <SectionHeading
            index="03"
            label="FEATURED WORK"
            title="Projects crafted with care &amp; clean code."
            subtitle="An evolving collection of open-source applications, algorithm sandboxes, and developer tools built from scratch."
          />

          {/* Filter Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pb-2">
            <div className="flex flex-wrap gap-2">
              {filterOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setSelectedFilter(opt)}
                  className={`rounded-full border px-3 py-1.5 font-mono text-xs transition-all active:scale-95 ${
                    selectedFilter === opt
                      ? 'border-[#a3ff12] bg-[#a3ff12]/10 text-[#a3ff12]'
                      : 'border-[#27272a] bg-[#121212] text-[#a1a1aa] hover:border-[#3f3f46] hover:text-[#f5f5f5]'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-[#a1a1aa] hover:text-[#a3ff12] transition-colors"
            >
              <Github size={14} />
              <span>View all repositories on GitHub →</span>
            </a>
          </div>
        </div>

        {/* Projects Showcase Container */}
        <div className="mt-10 space-y-6">
          {featured && (
            <div className={isInView ? 'fade-in-up' : 'opacity-0'} style={{ animationDelay: '0.1s' }}>
              <ProjectCard project={featured} featured />
            </div>
          )}

          {nonFeatured.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {nonFeatured.map((project, i) => (
                <div
                  key={project.id}
                  className={isInView ? 'fade-in-up' : 'opacity-0'}
                  style={{ animationDelay: `${0.15 + i * 0.08}s` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          )}

          {filteredProjects.length === 0 && (
            <div className="rounded-2xl border border-[#27272a] bg-[#121212] py-16 text-center">
              <FolderGit2 size={32} className="mx-auto text-[#71717a]" />
              <p className="mt-3 font-mono text-sm text-[#a1a1aa]">No projects found in this category.</p>
              <button
                type="button"
                onClick={() => setSelectedFilter('All')}
                className="mt-4 rounded-full border border-[#a3ff12]/40 px-4 py-1.5 font-mono text-xs text-[#a3ff12]"
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
