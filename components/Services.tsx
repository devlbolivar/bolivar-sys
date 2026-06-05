'use client'

import { SVC } from '@/lib/data'
import FadeIn from '@/components/FadeIn'
import styles from './Services.module.css'

export default function Services() {
  return (
    <section id="servicios" className={styles.section}>
      <FadeIn>
        <div className={styles.header}>
          <p className={styles.tag}>&gt; SERVICIOS.LIST()</p>
          <h2 className={styles.h2}>Qué construimos</h2>
        </div>
      </FadeIn>

      <div className={styles.grid}>
        {SVC.map((s, i) => (
          <FadeIn key={s.title} delay={i * 0.09} className={styles.flex}>
            <div className={styles.card}>
              <div className={styles.cardTag}>[{s.tag}]</div>
              <div className={styles.cardIcon}>{s.icon}</div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
