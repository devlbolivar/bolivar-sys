'use client'

import { useState, useEffect } from 'react'
import { Am, A } from '@/lib/tokens'

export default function ScrollProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const fn = () => {
      const el = document.documentElement
      const tot = el.scrollHeight - el.clientHeight
      setPct(tot > 0 ? (el.scrollTop / tot) * 100 : 0)
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        zIndex: 200,
        background: Am(0.07),
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${pct}%`,
          background: `linear-gradient(90deg,${Am(0)},${A})`,
          transition: 'width .08s',
        }}
      />
    </div>
  )
}
