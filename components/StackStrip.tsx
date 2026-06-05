'use client'

import { STACK } from '@/lib/data'
import styles from './StackStrip.module.css'

export default function StackStrip() {
  return (
    <div className={styles.strip}>
      <span className={styles.label}>STACK //</span>
      {STACK.map((s) => (
        <div key={s} className={styles.item}>{s}</div>
      ))}
    </div>
  )
}
