'use client'

import styles from './Footer.module.css'

const cols = [
  { h: 'Servicios', ls: ['Tienda Shopify', 'Landing / Sitio', 'Chatbot IA', 'Retainer Mensual'] },
  { h: 'Empresa',   ls: ['Sobre Luis', 'Casos de éxito', 'Blog', 'Proceso de trabajo'] },
  { h: 'Legal',     ls: ['Política de privacidad', 'Términos de servicio', 'Cookies'] },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        {/* Brand */}
        <div className={styles.brand}>
          <span className={styles.brandName}>BOLIVAR_SYS</span>
          <p className={styles.brandDesc}>
            Diseño, desarrollo e inteligencia artificial para emprendedores que quieren vender más, trabajar menos y escalar sin límites.
          </p>
          <div className={styles.socials}>
            {[['LI', 'LinkedIn'], ['TW', 'Twitter/X'], ['IG', 'Instagram']].map(([s, title]) => (
              <div key={s} className={styles.social} title={title}>{s}</div>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div className={styles.mobileColumns}>
          {cols.map((c) => (
            <div key={c.h}>
              <p className={styles.mobileColHead}>{c.h.toUpperCase()}</p>
              <div className={styles.mobileColLinks}>
                {c.ls.map((l) => (
                  <a key={l} href="#" className={styles.mobileColLink}>{l}</a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {cols.map((c) => (
          <div key={c.h} className={styles.col}>
            <p className={styles.colHead}>{c.h.toUpperCase()}</p>
            <div className={styles.colLinks}>
              {c.ls.map((l) => (
                <a key={l} href="#" className={styles.colLink}>{l}</a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.bottom}>
        <span className={styles.copy}>© 2025 · LUIS_BOLIVAR · TODOS LOS DERECHOS RESERVADOS</span>
        <div className={styles.legalLinks}>
          {['Privacidad', 'Términos', 'Cookies'].map((l) => (
            <a key={l} href="#" className={styles.legalLink}>{l}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
