import { timeline } from '../data/content'
import { useInViewAnimation } from '../hooks/useInViewAnimation'
import { SectionHeading } from '../components/SectionHeading'
import { TimelineItem } from '../components/TimelineItem'

export function Journey() {
  const { ref, isInView } = useInViewAnimation()

  return (
    <section id="journey" className="border-t border-[#27272a] bg-[#0d0d0d] py-20 md:py-28">
      <div ref={ref} className="mx-auto max-w-6xl px-5 md:px-8">
        <div className={isInView ? 'fade-in-up' : 'opacity-0'}>
          <SectionHeading
            index="04"
            label="DEVELOPER ROADMAP"
            title="The journey so far. Grounded in progress."
            subtitle="From writing first lines of C++ to architecting full-stack web applications and mastering computer systems."
          />
        </div>
        <ol className="mt-14 space-y-8">
          {timeline.map((item, i) => (
            <TimelineItem
              key={item.stage}
              {...item}
              last={i === timeline.length - 1}
              className={isInView ? 'fade-in-up' : 'opacity-0'}
              style={{ animationDelay: `${0.1 * (i + 1)}s` }}
            />
          ))}
        </ol>
      </div>
    </section>
  )
}
