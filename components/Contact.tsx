'use client'
import type { CSSProperties } from 'react'
import { A, Am, BG, mono, grot, gl } from '@/lib/tokens'
import FadeIn from '@/components/FadeIn'
import { useIsMobile } from '@/hooks/useIsMobile'

export default function Contact() {
  const isMobile = useIsMobile()

  const iS: CSSProperties = {
    background: Am(0.04), border: `1px solid ${Am(0.15)}`,
    color: '#E8F4F8', padding: '14px 18px', borderRadius: 8,
    fontSize: 13, ...mono, outline: 'none', width: '100%', display: 'block',
    transition: 'border-color .2s',
  }
  const focus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => { e.target.style.borderColor = Am(0.48) }
  const blur  = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => { e.target.style.borderColor = Am(0.15) }

  return (
    <section id="contacto" style={{ padding: isMobile ? '60px 24px' : '88px 80px', borderTop: `1px solid ${Am(0.07)}` }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: isMobile ? 48 : 80,
        alignItems: 'start', maxWidth: 1100, margin: '0 auto',
      }}>
        <FadeIn>
          <div>
            <p style={{ ...mono, fontSize: 11, color: A, letterSpacing: 3, marginBottom: 14 }}>&gt; CONTACT.INIT()</p>
            <h2 style={{
              ...grot, fontSize: isMobile ? 36 : 56, fontWeight: 700,
              lineHeight: 1.0, letterSpacing: isMobile ? '-1px' : '-2px',
              color: '#E8F4F8', marginBottom: 20,
            }}>
              Hablemos de<br />tu proyecto.
            </h2>
            <p style={{ fontSize: 16, color: Am(0.5), lineHeight: 1.85, marginBottom: 36 }}>
              Respondo en menos de 24h. Sin compromisos, sin rodeos — solo una conversación honesta sobre lo que necesita tu negocio.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 36 }}>
              {[
                'Trabajo con clientes en toda Latinoamérica',
                'Primera consulta gratuita de 30 minutos',
                'Contrato claro, precios 100% transparentes',
              ].map((txt) => (
                <div key={txt} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', color: Am(0.5), fontSize: 15 }}>
                  <span style={{ color: A, ...mono, flexShrink: 0, marginTop: 1 }}>→</span>
                  <span>{txt}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {['luis@bolivarsys.com', 'WhatsApp disponible', 'GMT-5 · LATAM'].map((t) => (
                <div key={t} style={{ ...gl({ borderRadius: 8 }), padding: '8px 14px', ...mono, fontSize: 11, color: Am(0.5) }}>{t}</div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={isMobile ? 0 : 0.15}>
          <form style={{ display: 'flex', flexDirection: 'column', gap: 14 }} onSubmit={(e) => e.preventDefault()}>
            <input placeholder="nombre" style={iS} onFocus={focus} onBlur={blur} />
            <input placeholder="email" type="email" style={iS} onFocus={focus} onBlur={blur} />
            <input placeholder="shopify · landing · ia · retainer" style={iS} onFocus={focus} onBlur={blur} />
            <textarea placeholder="cuéntame sobre tu negocio y qué quieres lograr" rows={4} style={{ ...iS, resize: 'none' }} onFocus={focus} onBlur={blur} />
            <button type="submit"
              style={{
                background: A, border: 'none', color: BG,
                padding: '15px', borderRadius: 8, fontSize: 15, cursor: 'pointer',
                ...grot, fontWeight: 700, letterSpacing: 0.5,
                boxShadow: `0 0 32px ${Am(0.28)}`, transition: 'box-shadow .2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 0 56px ${Am(0.48)}` }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = `0 0 32px ${Am(0.28)}` }}
            >
              ENVIAR MENSAJE →
            </button>
            <p style={{ ...mono, fontSize: 11, color: Am(0.3), textAlign: 'center' }}>Respuesta garantizada en &lt; 24 horas</p>
          </form>
        </FadeIn>
      </div>
    </section>
  )
}
