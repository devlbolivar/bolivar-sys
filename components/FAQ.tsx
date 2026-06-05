'use client'

import { useState } from 'react'
import { FAQS } from '@/lib/data'
import FadeIn from '@/components/FadeIn'
import styles from './FAQ.module.css'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className={styles.section}>
      <FadeIn>
        <div className={styles.header}>
          <p className={styles.tag}>&gt; FAQ.QUERY()</p>
          <h2 className={styles.h2}>Preguntas frecuentes</h2>
        </div>
      </FadeIn>

      <div className={styles.list}>
        {FAQS.map((f, i) => (
          <FadeIn key={i} delay={i * 0.05}>
            <div className={`${styles.item} ${open === i ? styles.itemOpen : ''}`}>
              <button
                className={styles.trigger}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className={styles.question}>{f.q}</span>
                <span className={`${styles.icon} ${open === i ? styles.iconOpen : ''}`}>+</span>
              </button>
              <div className={`${styles.body} ${open === i ? styles.bodyOpen : ''}`}>
                <p className={styles.answer}>{f.a}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
