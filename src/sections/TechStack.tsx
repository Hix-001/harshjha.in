import { useState } from 'react'
import { skills, type SkillCategory } from '../data/content'
import { useInViewAnimation } from '../hooks/useInViewAnimation'
import { SectionHeading } from '../components/SectionHeading'
import { SkillCard } from '../components/SkillCard'
import { Filter } from 'lucide-react'

const categories: ('All' | SkillCategory)[] = [
  'All',
  'Languages',
  'Frontend',
  'Backend & Cloud',
  'Tools & DevOps',
  'Core CS',
]

export function TechStack() {
  const { ref, isInView } = useInViewAnimation()
  const [activeCategory, setActiveCategory] = useState<'All' | SkillCategory>('All')

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter((s) => s.category === activeCategory)

  return (
    <section id="skills" className="border-t border-[#27272a] py-20 md:py-28 scroll-mt-20">
      <div ref={ref} className="mx-auto max-w-6xl px-5 md:px-8">
        <div className={isInView ? 'fade-in-up' : 'opacity-0'}>
          <SectionHeading
            index="02"
            label="TOOLKIT &amp; TECH"
            title="Technologies I build, experiment &amp; solve problems with."
            subtitle="Categorized across systems languages, modern web engineering, database fundamentals, and developer tooling."
          />

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center gap-2 pb-2">
            <span className="mr-1 inline-flex items-center gap-1.5 font-mono text-xs text-[#71717a]">
              <Filter size={13} className="text-[#a3ff12]" /> Filter:
            </span>
            {categories.map((cat) => {
              const count = cat === 'All' ? skills.length : skills.filter((s) => s.category === cat).length
              const isActive = activeCategory === cat
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full border px-3 py-1.5 font-mono text-xs transition-all active:scale-95 ${
                    isActive
                      ? 'border-[#a3ff12] bg-[#a3ff12]/10 text-[#a3ff12]'
                      : 'border-[#27272a] bg-[#121212] text-[#a1a1aa] hover:border-[#3f3f46] hover:text-[#f5f5f5]'
                  }`}
                >
                  {cat} <span className="ml-1 text-[10px] opacity-70">({count})</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill, i) => (
            <div
              key={skill.name}
              className={isInView ? 'fade-in-up' : 'opacity-0'}
              style={{ animationDelay: `${(i % 8) * 0.05}s` }}
            >
              <SkillCard {...skill} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
