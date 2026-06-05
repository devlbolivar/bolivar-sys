'use client'
import type { CSSProperties } from 'react'
import { A, Am, mono, grot, gl } from '@/lib/tokens'
import { CASES } from '@/lib/data'
import FadeIn from '@/components/FadeIn'
import { useIsMobile } from '@/hooks/useIsMobile'

export default function Cases() {
  const isMobile = useIsMobile()
  const pad = isMobile ? '60px 24px' : '80px'

  return (
    <section id="casos" style={{ padding: pad, borderTop: `1px solid ${Am(0.07)}` }}>
      <FadeIn>
        <div style={{ marginBottom: isMobile ? 36 : 52 }}>
          <p style={{ ...mono, fontSize: 11, color: A, letterSpacing: 3, marginBottom: 14 }}>&gt; CASES.FEATURED()</p>
          <h2 style={{ ...grot, fontSize: isMobile ? 32 : 48, fontWeight: 700, letterSpacing: '-1.5px', color: '#E8F4F8', textWrap: 'pretty' as CSSProperties['textWrap'] }}>
            Resultados reales
          </h2>
        </div>
      </FadeIn>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)', gap: 20 }}>
        {CASES.map((c, i) => (
          <FadeIn key={c.client} delay={i * 0.11} style={{ display: 'flex' }}>
            <div
              style={{ ...gl({ borderRadius: 20 }), padding: '36px 28px', flex: 1, display: 'flex', flexDirection: 'column', transition: 'border-color .22s,background .22s', cursor: 'default' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = Am(0.3); e.currentTarget.style.background = Am(0.07) }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = Am(0.12); e.currentTarget.style.background = Am(0.04) }}
            >
              <div style={{ ...mono, fontSize: 10, color: A, letterSpacing: 2, marginBottom: 18 }}>[{c.industry.toUpperCase()}]</div>
              <div style={{ fontSize: isMobile ? 48 : 58, fontWeight: 700, color: A, ...grot, letterSpacing: '-2px', lineHeight: 1, marginBottom: 4 }}>{c.metric}</div>
              <div style={{ ...mono, fontSize: 12, color: Am(0.42), marginBottom: 24 }}>{c.mlabel}</div>
              <div style={{ height: 1, background: Am(0.08), marginBottom: 22 }} />
              <div style={{ fontSize: 19, fontWeight: 700, color: '#E8F4F8', marginBottom: 4 }}>{c.client}</div>
              <div style={{ ...mono, fontSize: 11, color: A, marginBottom: 12 }}>{c.type}</div>
              <p style={{ color: Am(0.5), fontSize: 14, lineHeight: 1.75, flex: 1, marginBottom: 22 }}>{c.desc}</p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {c.tags.map((t) => (
                  <span key={t} style={{ ...gl({ borderRadius: 6 }), padding: '4px 12px', ...mono, fontSize: 11, color: Am(0.52) }}>{t}</span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
