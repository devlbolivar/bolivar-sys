'use client'

import { useState, useEffect } from 'react'
import styles from './ScrollProgress.module.css'

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
    <div className={styles.track}>
      <div className={styles.bar} style={{ width: `${pct}%` }} />
    </div>
  )
}
