'use client'

import type { CSSProperties, ReactNode } from 'react'
import { useRef, useState, useEffect } from 'react'
import styles from './FadeIn.module.css'

interface FadeInProps {
  children: ReactNode
  delay?: number
  className?: string
}

export default function FadeIn({ children, delay = 0, className = '' }: FadeInProps) {
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
      className={`${styles.base} ${vis ? styles.visible : ''} ${className}`.trim()}
      style={{ '--delay': `${delay}s` } as CSSProperties}
    >
      {children}
    </div>
  )
}
