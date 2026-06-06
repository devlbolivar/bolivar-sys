'use client'

import { PLANS } from '@/lib/data'
import FadeIn from '@/components/FadeIn'
import styles from './Pricing.module.css'

export default function Pricing() {
  return (
    <section id="precios" className={styles.section}>
      <FadeIn>
        <div className={styles.header}>
          <p className={styles.tag}>&gt; PRICING.GET()</p>
          <h2 className={styles.h2}>Inversión clara</h2>

        </div>
      </FadeIn>

      <div className={styles.grid}>
        {PLANS.map((p, i) => (
          <FadeIn key={p.name} delay={i * 0.1} className={styles.flex}>
            <div className={`${styles.card} ${p.top ? styles.cardFeatured : ''}`}>
              {p.top && <div className={styles.badge}>POPULAR</div>}

              <div className={styles.planName}>[{p.name.toLowerCase()}]</div>

              <div className={styles.priceBlock}>
                {p.originalPrice && (
                  <div className={styles.priceRow}>
                    <span className={styles.originalPrice}>{p.originalPrice}</span>
                    <span className={styles.discountTag}>−30%</span>
                  </div>
                )}
                <div className={`${styles.price} ${p.top ? styles.priceFeatured : ''}`}>
                  {p.originalPrice ? <span className={styles.desde}>desde </span> : null}
                  {p.price}
                </div>
              </div>

              <div className={styles.sub}>{p.sub}</div>

              <div className={styles.items}>
                {p.items.map((item) => (
                  <div key={item} className={styles.item}>
                    <span className={styles.itemArrow}>→</span>{item}
                  </div>
                ))}
              </div>

              <a href="#contacto">
                <button className={`${styles.btn} ${p.top ? styles.btnFeatured : ''}`}>
                  {p.originalPrice ? 'SELECCIONAR →' : 'SOLICITAR COTIZACIÓN →'}
                </button>
              </a>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
