'use client'

import { useState } from 'react'
import styles from './Nav.module.css'

const links: [string, string][] = [
  ['.servicios', '#servicios'],
  ['.casos', '#casos'],
  ['.precios', '#precios'],
  ['.blog', '#blog'],
  ['.faq', '#faq'],
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className={styles.nav}>
        <a href="#top">
          <span className={styles.logo}>BOLIVAR_SYS</span>
        </a>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <div className={styles.links}>
          {links.map(([label, href]) => (
            <a key={label} href={href} className={styles.link}>{label}</a>
          ))}
        </div>

        <a href="#contacto" className={styles.ctaWrapper}>
          <button className={styles.cta}>CONTACTAR →</button>
        </a>
      </nav>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a href="#contacto" onClick={() => setMenuOpen(false)}>
            <button className={styles.mobileCta}>CONTACTAR →</button>
          </a>
        </div>
      )}
    </>
  )
}
