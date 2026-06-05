'use client'
import type { CSSProperties } from 'react'
import { A, Am, mono, grot, gl } from '@/lib/tokens'
import FadeIn from '@/components/FadeIn'
import { useIsMobile } from '@/hooks/useIsMobile'

export default function VideoSection() {
  const isMobile = useIsMobile()

  return (
    <section style={{ padding: isMobile ? '60px 24px' : '88px 80px', borderTop: `1px solid ${Am(0.07)}` }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: isMobile ? 44 : 80,
        alignItems: 'center',
        maxWidth: 1100, margin: '0 auto',
      }}>
        <FadeIn>
          <div>
            <p style={{ ...mono, fontSize: 11, color: A, letterSpacing: 3, marginBottom: 14 }}>&gt; LUIS.INTRO()</p>
            <h2 style={{
              ...grot, fontSize: isMobile ? 34 : 52, fontWeight: 700, lineHeight: 1.05,
              letterSpacing: isMobile ? '-1px' : '-1.5px', color: '#E8F4F8', marginBottom: 22,
              textWrap: 'pretty' as CSSProperties['textWrap'],
            }}>
              Hola, soy Luis.<br />Construyo sistemas<br />que venden.
            </h2>
            <p style={{ fontSize: 16, color: Am(0.5), lineHeight: 1.85, marginBottom: 32 }}>
              Más de 3 años construyendo plataformas digitales para emprendedores en Latinoamérica. No solo código — estrategia, diseño y resultados medibles con cada proyecto.
            </p>
            <div style={{ display: 'flex', gap: isMobile ? 28 : 40, marginBottom: 32, flexWrap: 'wrap' }}>
              {[['20+', 'Proyectos'], ['3+', 'Años'], ['4.9', 'Calificación']].map(([v, l]) => (
                <div key={l}>
                  <div style={{ ...mono, fontSize: isMobile ? 22 : 28, color: A, fontWeight: 700 }}>{v}</div>
                  <div style={{ fontSize: 12, color: Am(0.38), marginTop: 3 }}>{l}</div>
                </div>
              ))}
            </div>
            <a href="#contacto">
              <button
                style={{
                  background: 'transparent', border: `1px solid ${Am(0.3)}`, color: A,
                  padding: '13px 30px', borderRadius: 6, fontSize: 14, cursor: 'pointer',
                  ...mono, letterSpacing: 1, transition: 'border-color .2s, background .2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = Am(0.6); e.currentTarget.style.background = Am(0.08) }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = Am(0.3); e.currentTarget.style.background = 'transparent' }}
              >
                AGENDAR LLAMADA →
              </button>
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div
            style={{
              ...gl({ borderRadius: 20, overflow: 'hidden', boxShadow: `0 0 64px ${Am(0.07)}` }),
              aspectRatio: '16/9', position: 'relative', cursor: 'pointer', transition: 'box-shadow .3s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 0 80px ${Am(0.2)}` }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = `0 0 64px ${Am(0.07)}` }}
          >
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: `repeating-linear-gradient(45deg,${Am(0.04)} 0px,${Am(0.04)} 1px,transparent 1px,transparent 14px)`,
            }} />
            <div style={{
              position: 'absolute', inset: 0, display: 'flex',
              flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 18,
            }}>
              <div style={{
                width: 68, height: 68, borderRadius: '50%', border: `2px solid ${A}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: `0 0 32px ${Am(0.35)}`, animation: 'glowin 3s ease-in-out infinite',
              }}>
                <span style={{ color: A, fontSize: 22, marginLeft: 5 }}>▶</span>
              </div>
              <span style={{ ...mono, fontSize: 11, color: Am(0.42), letterSpacing: 2 }}>VIDEO DE PRESENTACIÓN</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
