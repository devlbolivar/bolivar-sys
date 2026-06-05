'use client'
import { useState } from 'react'
import type { CSSProperties } from 'react'
import { A, Am, mono, grot, gl } from '@/lib/tokens'
import { FAQS } from '@/lib/data'
import FadeIn from '@/components/FadeIn'
import { useIsMobile } from '@/hooks/useIsMobile'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const isMobile = useIsMobile()
  const pad = isMobile ? '60px 24px' : '80px'

  return (
    <section id="faq" style={{ padding: pad, borderTop: `1px solid ${Am(0.07)}` }}>
      <FadeIn>
        <div style={{ marginBottom: isMobile ? 36 : 52 }}>
          <p style={{ ...mono, fontSize: 11, color: A, letterSpacing: 3, marginBottom: 14 }}>&gt; FAQ.QUERY()</p>
          <h2 style={{ ...grot, fontSize: isMobile ? 32 : 48, fontWeight: 700, letterSpacing: '-1.5px', color: '#E8F4F8', textWrap: 'pretty' as CSSProperties['textWrap'] }}>
            Preguntas frecuentes
          </h2>
        </div>
      </FadeIn>
      <div style={{ maxWidth: 800, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {FAQS.map((f, i) => (
          <FadeIn key={i} delay={i * 0.05}>
            <div style={{
              ...gl({ borderRadius: 12, borderColor: open === i ? Am(0.3) : Am(0.12), transition: 'border-color .2s' }),
              overflow: 'hidden',
            }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%', background: 'none', border: 'none',
                  padding: '18px 20px', display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between', cursor: 'pointer', textAlign: 'left', gap: 16,
                }}
              >
                <span style={{ fontSize: isMobile ? 14 : 16, fontWeight: 600, color: '#E8F4F8', ...grot }}>{f.q}</span>
                <span style={{
                  ...mono, color: A, fontSize: 20, flexShrink: 0,
                  transition: 'transform .25s', transform: open === i ? 'rotate(45deg)' : 'none',
                  display: 'inline-block',
                }}>+</span>
              </button>
              <div style={{ maxHeight: open === i ? 260 : 0, overflow: 'hidden', transition: 'max-height .32s ease' }}>
                <p style={{ padding: '0 20px 20px', color: Am(0.55), fontSize: 14, lineHeight: 1.85 }}>{f.a}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
