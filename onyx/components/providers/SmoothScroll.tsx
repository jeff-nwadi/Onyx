'use client'

import { ReactNode, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useStore } from '@/store/useStore'
import { usePathname } from 'next/navigation'

gsap.registerPlugin(ScrollTrigger)

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const setIsScrolled = useStore((state) => state.setIsScrolled)
  const setIsMounted = useStore((state) => state.setIsMounted)
  const pathname = usePathname()

  useEffect(() => {
    setIsMounted(true)
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    const initAnimations = () => {
      gsap.utils.toArray('[data-gsap="fade-up"]').forEach((el: any) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
          y: 80,
          opacity: 0,
          duration: 1.2,
          ease: 'power4.out'
        })
      })

      gsap.utils.toArray('[data-gsap="stagger"]').forEach((el: any) => {
        gsap.from(el.children, {
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
          y: 80,
          opacity: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: 'power4.out'
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
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [setIsScrolled, setIsMounted, pathname])

  return <>{children}</>
}
