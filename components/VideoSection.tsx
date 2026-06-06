'use client'

import FadeIn from '@/components/FadeIn'
import styles from './VideoSection.module.css'

export default function VideoSection() {
  return (
    <section id="intro" className={styles.section}>
      <div className={styles.inner}>
        <FadeIn>
          <div>
            <p className={styles.tag}>&gt; LUIS.INTRO()</p>
            <h2 className={styles.h2}>
              Hola, soy Luis.<br />Construyo sistemas<br />que venden.
            </h2>
            <p className={styles.body}>
              10+ años construyendo software a nivel enterprise — incluyendo plataformas para Disney usadas por miles de usuarios. Hoy aplico esa misma rigurosidad técnica a plataformas para emprendedores en Latinoamérica.
            </p>
            <div className={styles.stats}>
              {[['10+', 'Años exp.'], ['Disney', 'Proyecto'], ['IA', 'Integrada']].map(([v, l]) => (
                <div key={l}>
                  <div className={styles.statValue}>{v}</div>
                  <div className={styles.statLabel}>{l}</div>
                </div>
              ))}
            </div>
            <a href="#contacto">
              <button className={styles.btn}>AGENDAR LLAMADA →</button>
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className={styles.player}>
            <div className={styles.playerPattern} />
            <div className={styles.playerCenter}>
              <div className={styles.playBtn}>
                <span className={styles.playIcon}>▶</span>
              </div>
              <span className={styles.playerLabel}>VIDEO DE PRESENTACIÓN</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
