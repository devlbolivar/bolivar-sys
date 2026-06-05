'use client'

import FadeIn from '@/components/FadeIn'
import styles from './VideoSection.module.css'

export default function VideoSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <FadeIn>
          <div>
            <p className={styles.tag}>&gt; LUIS.INTRO()</p>
            <h2 className={styles.h2}>
              Hola, soy Luis.<br />Construyo sistemas<br />que venden.
            </h2>
            <p className={styles.body}>
              Más de 3 años construyendo plataformas digitales para emprendedores en Latinoamérica. No solo código — estrategia, diseño y resultados medibles con cada proyecto.
            </p>
            <div className={styles.stats}>
              {[['20+', 'Proyectos'], ['3+', 'Años'], ['4.9', 'Calificación']].map(([v, l]) => (
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
