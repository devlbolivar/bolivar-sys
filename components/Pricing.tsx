'use client'
import type { CSSProperties } from 'react'
import { A, Am, BG, BG2, mono, grot, gl } from '@/lib/tokens'
import { PLANS } from '@/lib/data'
import FadeIn from '@/components/FadeIn'
import { useIsMobile } from '@/hooks/useIsMobile'

export default function Pricing() {
  const isMobile = useIsMobile()
  const pad = isMobile ? '60px 24px' : '80px'

  return (
    <section id="precios" style={{ padding: pad, background: BG2, borderTop: `1px solid ${Am(0.07)}` }}>
      <FadeIn>
        <div style={{ marginBottom: isMobile ? 36 : 52 }}>
          <p style={{ ...mono, fontSize: 11, color: A, letterSpacing: 3, marginBottom: 14 }}>&gt; PRICING.GET()</p>
          <h2 style={{ ...grot, fontSize: isMobile ? 32 : 48, fontWeight: 700, letterSpacing: '-1.5px', color: '#E8F4F8', textWrap: 'pretty' as CSSProperties['textWrap'] }}>
            Inversión clara
          </h2>
        </div>
      </FadeIn>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)', gap: 20, maxWidth: 940, margin: '0 auto' }}>
        {PLANS.map((p, i) => (
          <FadeIn key={p.name} delay={i * 0.1} style={{ display: 'flex' }}>
            <div style={{
              ...gl({
                borderRadius: 20,
                background: p.top ? Am(0.08) : Am(0.03),
                border: p.top ? `1px solid ${Am(0.38)}` : `1px solid ${Am(0.1)}`,
                boxShadow: p.top ? `0 0 52px ${Am(0.1)}` : 'none',
              }),
              padding: '36px 28px', position: 'relative', flex: 1, display: 'flex', flexDirection: 'column',
            }}>
              {p.top && (
                <div style={{
                  position: 'absolute', top: -12, right: 20,
                  background: A, color: BG, ...mono, fontSize: 10,
                  padding: '4px 14px', borderRadius: 6, fontWeight: 700, letterSpacing: 1,
                }}>POPULAR</div>
              )}
              <div style={{ ...mono, fontSize: 11, color: A, marginBottom: 10, letterSpacing: 1 }}>[{p.name.toLowerCase()}]</div>
              <div style={{ fontSize: 44, fontWeight: 700, color: p.top ? A : '#E8F4F8', marginBottom: 4, ...grot, letterSpacing: '-1px' }}>{p.price}</div>
              <div style={{ ...mono, fontSize: 12, color: Am(0.38), marginBottom: 24 }}>{p.sub}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
                {p.items.map((item) => (
                  <div key={item} style={{ display: 'flex', gap: 9, fontSize: 14, color: Am(0.68), alignItems: 'flex-start' }}>
                    <span style={{ color: A, flexShrink: 0 }}>→</span>{item}
                  </div>
                ))}
              </div>
              <a href="#contacto">
                <button
                  style={{
                    width: '100%', marginTop: 28, padding: '13px',
                    background: p.top ? A : 'transparent',
                    border: p.top ? 'none' : `1px solid ${Am(0.25)}`,
                    color: p.top ? BG : A,
                    borderRadius: 8, fontSize: 13, cursor: 'pointer',
                    ...mono, fontWeight: 700, letterSpacing: 0.5, transition: 'opacity .15s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = '.8' }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
                >
                  SELECCIONAR →
                </button>
              </a>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
