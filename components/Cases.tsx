'use client'

import { CASES } from '@/lib/data'
import FadeIn from '@/components/FadeIn'
import styles from './Cases.module.css'

export default function Cases() {
  return (
    <section id="casos" className={styles.section}>
      <FadeIn>
        <div className={styles.header}>
          <p className={styles.tag}>&gt; CASES.FEATURED()</p>
          <h2 className={styles.h2}>Experiencia real</h2>
        </div>
      </FadeIn>

      <div className={styles.grid}>
        {CASES.map((c, i) => (
          <FadeIn key={c.client} delay={i * 0.11} className={styles.flex}>
            <div className={styles.card}>
              <div className={styles.industry}>[{c.industry.toUpperCase()}]</div>
              <div className={styles.metric}>{c.metric}</div>
              <div className={styles.mlabel}>{c.mlabel}</div>
              <div className={styles.divider} />
              <div className={styles.client}>{c.client}</div>
              <div className={styles.type}>{c.type}</div>
              <p className={styles.desc}>{c.desc}</p>
              <div className={styles.tags}>
                {c.tags.map((t) => (
                  <span key={t} className={styles.tag2}>{t}</span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn>
        <div className={styles.cta}>
          <p className={styles.ctaText}>¿Listo para el mismo nivel de ejecución en tu proyecto?</p>
          <a href="#contacto">
            <button className={styles.ctaBtn}>Hablemos de tu proyecto →</button>
          </a>
        </div>
      </FadeIn>
    </section>
  )
}
