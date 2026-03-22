'use client'

import { ReactNode, useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useStore } from '@/store/useStore'

gsap.registerPlugin(ScrollTrigger)

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const setIsScrolled = useStore((state) => state.setIsScrolled)
  const setIsMounted = useStore((state) => state.setIsMounted)

  useEffect(() => {
    setIsMounted(true)
    
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    })

    lenis.on('scroll', (e: any) => {
      setIsScrolled(e.scroll > 50)
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    const initAnimations = () => {
      gsap.utils.toArray('[data-gsap="fade-up"]').forEach((el: any) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
          y: 40,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        })
      })

      gsap.utils.toArray('[data-gsap="stagger"]').forEach((el: any) => {
        gsap.from(el.children, {
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out'
        })
      })

      gsap.from('[data-gsap="hero-title"] span', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out',
        delay: 0.2
      })

      gsap.from('[data-gsap="hero-reveal"]', {
        y: 20,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.6
      })

    }

    const timer = setTimeout(initAnimations, 100)

    return () => {
      lenis.destroy()
      clearTimeout(timer)
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [setIsScrolled, setIsMounted])

  return <>{children}</>
}
