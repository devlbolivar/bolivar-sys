'use client'
import type { CSSProperties } from 'react'
import { A, Am, mono, grot, gl } from '@/lib/tokens'
import { SVC } from '@/lib/data'
import FadeIn from '@/components/FadeIn'
import { useIsMobile } from '@/hooks/useIsMobile'

export default function Services() {
  const isMobile = useIsMobile()
  const pad = isMobile ? '60px 24px' : '80px'
  const h2Size = isMobile ? 32 : 48

  return (
    <section id="servicios" style={{ padding: pad, borderTop: `1px solid ${Am(0.07)}` }}>
      <FadeIn>
        <div style={{ marginBottom: isMobile ? 36 : 52 }}>
          <p style={{ ...mono, fontSize: 11, color: A, letterSpacing: 3, marginBottom: 14 }}>&gt; SERVICIOS.LIST()</p>
          <h2 style={{ ...grot, fontSize: h2Size, fontWeight: 700, letterSpacing: '-1.5px', color: '#E8F4F8', textWrap: 'pretty' as CSSProperties['textWrap'] }}>
            Qué construimos
          </h2>
        </div>
      </FadeIn>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4,1fr)', gap: 16 }}>
        {SVC.map((s, i) => (
          <FadeIn key={s.title} delay={i * 0.09} style={{ display: 'flex' }}>
            <div
              style={{ ...gl({ borderRadius: 16 }), padding: '28px 22px', flex: 1, transition: 'border-color .22s,background .22s', cursor: 'default' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = Am(0.32); e.currentTarget.style.background = Am(0.08) }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = Am(0.12); e.currentTarget.style.background = Am(0.04) }}
            >
              <div style={{ ...mono, fontSize: 10, color: A, marginBottom: 12, letterSpacing: 1 }}>[{s.tag}]</div>
              <div style={{ fontSize: 24, marginBottom: 12, color: A }}>{s.icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10, lineHeight: 1.3, color: '#E8F4F8' }}>{s.title}</h3>
              <p style={{ color: Am(0.5), fontSize: 14, lineHeight: 1.75 }}>{s.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
