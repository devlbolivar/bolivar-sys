'use client'

import { useRef, useState, useEffect } from 'react'
import type { CSSProperties, ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  style?: CSSProperties
}

export default function FadeIn({ children, delay = 0, style = {} }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVis(true)
          obs.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? 'translateY(0)' : 'translateY(22px)',
        transition: `opacity .65s ${delay}s ease, transform .65s ${delay}s ease`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
