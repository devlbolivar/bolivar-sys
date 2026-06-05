'use client'

import { TESTI } from '@/lib/data'
import FadeIn from '@/components/FadeIn'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <FadeIn>
        <div className={styles.header}>
          <p className={styles.tag}>&gt; TESTIMONIOS.LOG()</p>
          <h2 className={styles.h2}>
            Clientes reales,<br />resultados reales.
          </h2>
        </div>
      </FadeIn>

      <div className={styles.grid}>
        {TESTI.map((t, i) => (
          <FadeIn key={i} delay={i * 0.1} className={styles.flex}>
            <div className={styles.card}>
              <div className={styles.quote}>&quot;</div>
              <p className={styles.text}>{t.q}</p>
              <p className={styles.author}>{t.a}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
