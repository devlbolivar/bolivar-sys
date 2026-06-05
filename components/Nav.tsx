'use client'
import { useState } from 'react'
import { A, Am, mono } from '@/lib/tokens'
import { useIsMobile } from '@/hooks/useIsMobile'

const links: [string, string][] = [
  ['.servicios', '#servicios'],
  ['.casos', '#casos'],
  ['.precios', '#precios'],
  ['.blog', '#blog'],
  ['.faq', '#faq'],
]

export default function Nav() {
  const isMobile = useIsMobile()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        padding: isMobile ? '16px 24px' : '18px 80px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'rgba(3,13,24,0.9)', backdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${Am(0.08)}`,
      }}>
        <a href="#top">
          <span style={{ ...mono, fontSize: isMobile ? 15 : 17, fontWeight: 700, color: A, letterSpacing: 2 }}>
            BOLIVAR_SYS
          </span>
        </a>

        {isMobile ? (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none', border: `1px solid ${Am(0.2)}`, color: A,
              width: 38, height: 38, borderRadius: 6, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 18, ...mono,
            }}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        ) : (
          <>
            <div style={{ display: 'flex', gap: 32, color: Am(0.42), fontSize: 13, ...mono }}>
              {links.map(([label, href]) => (
                <a key={label} href={href}
                  style={{ color: 'inherit', transition: 'color .15s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = A)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = Am(0.42))}
                >{label}</a>
              ))}
            </div>
            <a href="#contacto">
              <button
                style={{
                  background: 'transparent', border: `1px solid ${A}`, color: A,
                  padding: '9px 22px', borderRadius: 6, fontSize: 13, cursor: 'pointer',
                  ...mono, letterSpacing: 1, transition: 'background .2s, box-shadow .2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = Am(0.1); e.currentTarget.style.boxShadow = `0 0 20px ${Am(0.2)}` }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.boxShadow = 'none' }}
              >
                CONTACTAR →
              </button>
            </a>
          </>
        )}
      </nav>

      {isMobile && menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 99,
          background: 'rgba(3,13,24,0.97)', backdropFilter: 'blur(20px)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 36,
          paddingTop: 64,
        }}>
          {links.map(([label, href]) => (
            <a key={label} href={href}
              onClick={() => setMenuOpen(false)}
              style={{ ...mono, fontSize: 20, color: Am(0.7), letterSpacing: 2 }}
            >{label}</a>
          ))}
          <a href="#contacto" onClick={() => setMenuOpen(false)}>
            <button style={{
              marginTop: 16, background: A, border: 'none', color: '#030D18',
              padding: '14px 44px', borderRadius: 6, fontSize: 15, cursor: 'pointer',
              ...mono, fontWeight: 700, letterSpacing: 1,
            }}>
              CONTACTAR →
            </button>
          </a>
        </div>
      )}
    </>
  )
}
