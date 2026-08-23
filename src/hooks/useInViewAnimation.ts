import { useEffect, useRef, useState, type RefObject } from 'react'

export function useInViewAnimation<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.1,
): { ref: RefObject<T | null>; isInView: boolean } {
  const ref = useRef<T | null>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || isInView) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [isInView, threshold])

  return { ref, isInView }
}
