'use client'

import { A, Am, mono } from '@/lib/tokens'

const links: [string, string][] = [
  ['.servicios', '#servicios'],
  ['.casos', '#casos'],
  ['.precios', '#precios'],
  ['.blog', '#blog'],
  ['.faq', '#faq'],
]

export default function Nav() {
  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        padding: '18px 80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'rgba(3,13,24,0.9)',
        backdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${Am(0.08)}`,
      }}
    >
      <a href="#top">
        <span
          style={{
            ...mono,
            fontSize: 17,
            fontWeight: 700,
            color: A,
            letterSpacing: 2,
          }}
        >
          BOLIVAR_SYS
        </span>
      </a>

      <div
        style={{
          display: 'flex',
          gap: 32,
          color: Am(0.42),
          fontSize: 13,
          ...mono,
        }}
      >
        {links.map(([label, href]) => (
          <a
            key={label}
            href={href}
            style={{ color: 'inherit', transition: 'color .15s' }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = A)
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = Am(0.42))
            }
          >
            {label}
          </a>
        ))}
      </div>

      <a href="#contacto">
        <button
          style={{
            background: 'transparent',
            border: `1px solid ${A}`,
            color: A,
            padding: '9px 22px',
            borderRadius: 6,
            fontSize: 13,
            cursor: 'pointer',
            ...mono,
            letterSpacing: 1,
            transition: 'background .2s, box-shadow .2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = Am(0.1)
            e.currentTarget.style.boxShadow = `0 0 20px ${Am(0.2)}`
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          CONTACTAR →
        </button>
      </a>
    </nav>
  )
}
