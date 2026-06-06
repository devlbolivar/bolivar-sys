'use client'

import { SVC } from '@/lib/data'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="top" className={styles.section}>
      <div className={styles.gridBg} />
      <div className={styles.glow} />

      {/* Left column */}
      <div className={styles.left}>
        <div className={styles.termPrefix}>
          <span>&gt; SISTEMA INICIADO</span><br />
          <span className={styles.termDim}>&gt; CARGANDO SERVICIOS...</span><br />
          <span className={styles.termGreen}>
            &gt; LISTO&nbsp;
            <span className={styles.pulseDot} />
          </span>
        </div>

        <h1 className={styles.h1}>
          Tecnología que<br />Convierte Visitas<br />
          <span className={styles.h1Accent}>en Ventas.</span>
        </h1>

        <p className={styles.subtitle}>
          Construyo la plataforma digital que tu negocio necesita para vender más — con diseño que convierte y tecnología que escala.
        </p>

        <div className={styles.btnRow}>
          <a href="#contacto">
            <button className={styles.btnPrimary}>Iniciar Proyecto →</button>
          </a>
          <a href="#servicios">
            <button className={styles.btnSecondary}>Ver Servicios</button>
          </a>
        </div>
        <p className={styles.ctaHint}>↑ Primera consulta de 30 min gratuita · sin compromisos</p>

        <div className={styles.statsRow}>
          {[['10+', 'años exp.'], ['Disney', 'proyecto'], ['100%', 'puntual'], ['LATAM', 'cobertura']].map(([v, l]) => (
            <div key={l} className={styles.statCard}>
              <div className={styles.statValue}>{v}</div>
              <div className={styles.statLabel}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Terminal */}
      <div className={styles.terminal}>
        <div className={styles.termHeader}>
          <span className={`${styles.termDot} ${styles.termDotRed}`} />
          <span className={`${styles.termDot} ${styles.termDotYellow}`} />
          <span className={`${styles.termDot} ${styles.termDotGreen}`} />
          <span className={styles.termFile}>bolivar-sys.sh</span>
        </div>
        <div className={styles.termBody}>
          <div className={styles.termPrompt}>
            $ <span className={styles.termCmd}>bolivar</span> --services
          </div>
          <div className={styles.termComment}># Servicios disponibles:</div>
          {SVC.map((s) => (
            <div key={s.tag}>
              <span className={styles.termOk}>✓ </span>
              <span className={styles.termText}>{s.tag.toLowerCase()}</span>
              <span className={styles.termComment}> --activo</span>
            </div>
          ))}
          <div className={`${styles.termPrompt} ${styles.termMt10}`}>
            $ <span className={styles.termCmd}>status</span> --check
          </div>
          <div className={styles.termOk}>✓ on-time: 100% &nbsp;·&nbsp; rating: 4.9/5</div>
          <div className={`${styles.termPrompt} ${styles.termMt4}`}>
            $&nbsp;<span className={styles.cursor}>█</span>
          </div>
        </div>
      </div>
    </section>
  )
}
