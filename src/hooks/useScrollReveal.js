import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// One shared IntersectionObserver per route render, not one per section.
// Reveals each `.reveal` element once, then stops observing it.
function useScrollReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal:not(.reveal--visible)')
    if (!elements.length) return undefined

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      elements.forEach((el) => el.classList.add('reveal--visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [pathname])
}

export default useScrollReveal
