'use client'

import { POSTS } from '@/lib/data'
import FadeIn from '@/components/FadeIn'
import styles from './Blog.module.css'

export default function Blog() {
  return (
    <section id="blog" className={styles.section}>
      <FadeIn>
        <div className={styles.header}>
          <div>
            <p className={styles.tag}>&gt; BLOG.LATEST()</p>
            <h2 className={styles.h2}>Últimos artículos</h2>
          </div>
          <a href="#" className={styles.viewAll}>VER TODOS →</a>
        </div>
      </FadeIn>

      <div className={styles.grid}>
        {POSTS.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.1} className={styles.flex}>
            <div className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.cardTag}>{p.tag.toUpperCase()}</span>
                <span className={styles.readTime}>{p.read} read</span>
              </div>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>
              <div className={styles.cardFooter}>
                <span className={styles.date}>{p.date}</span>
                <span className={styles.read}>LEER →</span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
