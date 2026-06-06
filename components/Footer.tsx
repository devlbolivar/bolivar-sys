'use client'

import styles from './Footer.module.css'

const cols = [
  {
    h: 'Servicios',
    ls: [
      { label: 'Tienda Shopify',   href: '#servicios' },
      { label: 'Landing / Sitio',  href: '#servicios' },
      { label: 'Chatbot IA',       href: '#servicios' },
      { label: 'Retainer Mensual', href: '#servicios' },
    ],
  },
  {
    h: 'Navegación',
    ls: [
      { label: 'Sobre Luis',       href: '#intro'     },
      { label: 'Proyectos',        href: '#casos'     },
      { label: 'Proceso',          href: '#proceso'   },
      { label: 'Contacto',         href: '#contacto'  },
    ],
  },
  {
    h: 'Legal',
    ls: [
      { label: 'Política de privacidad', href: '/privacidad' },
      { label: 'Términos de servicio',   href: '/terminos'   },
      { label: 'Cookies',                href: '/cookies'    },
    ],
  },
]

const socials = [
  { label: 'LI', title: 'LinkedIn', href: 'https://linkedin.com/in/luisdevcode' },
  { label: 'GH', title: 'GitHub',   href: 'https://github.com/devlbolivar'     },
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
            {socials.map(({ label, title, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={styles.social} title={title}>
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div className={styles.mobileColumns}>
          {cols.map((c) => (
            <div key={c.h}>
              <p className={styles.mobileColHead}>{c.h.toUpperCase()}</p>
              <div className={styles.mobileColLinks}>
                {c.ls.map(({ label, href }) => (
                  <a key={label} href={href} className={styles.mobileColLink}>{label}</a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {cols.map((c) => (
          <div key={c.h} className={styles.col}>
            <p className={styles.colHead}>{c.h.toUpperCase()}</p>
            <div className={styles.colLinks}>
              {c.ls.map(({ label, href }) => (
                <a key={label} href={href} className={styles.colLink}>{label}</a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.bottom}>
        <span className={styles.copy}>© 2026 · LUIS_BOLIVAR · TODOS LOS DERECHOS RESERVADOS</span>
        <div className={styles.legalLinks}>
          {[['Privacidad', '/privacidad'], ['Términos', '/terminos'], ['Cookies', '/cookies']].map(([l, href]) => (
            <a key={l} href={href} className={styles.legalLink}>{l}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
