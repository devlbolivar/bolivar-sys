'use client'

import { STEPS } from '@/lib/data'
import FadeIn from '@/components/FadeIn'
import styles from './Process.module.css'

export default function Process() {
  return (
    <section id="proceso" className={styles.section}>
      <FadeIn>
        <div className={styles.header}>
          <p className={styles.tag}>&gt; PROCESO.EXEC()</p>
          <h2 className={styles.h2}>Del brief al lanzamiento</h2>
        </div>
      </FadeIn>

      <div className={styles.grid}>
        {STEPS.map((s, i) => (
          <FadeIn key={s.n} delay={i * 0.1} className={styles.flex}>
            <div className={styles.card}>
              {i < STEPS.length - 1 && <div className={styles.connector} />}
              <div className={styles.stepNum}>{s.n}</div>
              <h3 className={styles.stepTitle}>{s.t}</h3>
              <p className={styles.stepDesc}>{s.d}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
