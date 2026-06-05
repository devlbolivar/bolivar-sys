'use client'
import { A, Am, BG2, mono } from '@/lib/tokens'
import { useIsMobile } from '@/hooks/useIsMobile'

const cols = [
  { h: 'Servicios', ls: ['Tienda Shopify', 'Landing / Sitio', 'Chatbot IA', 'Retainer Mensual'] },
  { h: 'Empresa',   ls: ['Sobre Luis', 'Casos de éxito', 'Blog', 'Proceso de trabajo'] },
  { h: 'Legal',     ls: ['Política de privacidad', 'Términos de servicio', 'Cookies'] },
]

export default function Footer() {
  const isMobile = useIsMobile()

  return (
    <footer style={{ borderTop: `1px solid ${Am(0.08)}`, background: BG2 }}>
      <div style={{
        padding: isMobile ? '48px 24px' : '60px 80px',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr 1fr 1fr',
        gap: isMobile ? 40 : 60,
      }}>
        {/* Brand */}
        <div>
          <span style={{ ...mono, fontSize: 18, color: A, fontWeight: 700, letterSpacing: 2, display: 'block', marginBottom: 14 }}>
            BOLIVAR_SYS
          </span>
          <p style={{ color: Am(0.42), fontSize: 14, lineHeight: 1.85, maxWidth: 280, marginBottom: 28 }}>
            Diseño, desarrollo e inteligencia artificial para emprendedores que quieren vender más, trabajar menos y escalar sin límites.
          </p>
          <div style={{ display: 'flex', gap: 8 }}>
            {[['LI', 'LinkedIn'], ['TW', 'Twitter/X'], ['IG', 'Instagram']].map(([s, title]) => (
              <div key={s} title={title} style={{
                background: Am(0.04), border: `1px solid ${Am(0.12)}`, borderRadius: 8,
                width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center',
                ...mono, fontSize: 11, color: Am(0.5), cursor: 'pointer', transition: 'border-color .2s,color .2s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = Am(0.38); e.currentTarget.style.color = A }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = Am(0.12); e.currentTarget.style.color = Am(0.5) }}
              >{s}</div>
            ))}
          </div>
        </div>

        {/* Link columns — on mobile show as 3-col grid */}
        {isMobile ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
            {cols.map((c) => (
              <div key={c.h}>
                <p style={{ ...mono, fontSize: 10, color: A, letterSpacing: 2, marginBottom: 14 }}>{c.h.toUpperCase()}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {c.ls.map((l) => (
                    <a key={l} href="#" style={{ color: Am(0.42), fontSize: 13, transition: 'color .15s' }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#E8F4F8' }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = Am(0.42) }}
                    >{l}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          cols.map((c) => (
            <div key={c.h}>
              <p style={{ ...mono, fontSize: 10, color: A, letterSpacing: 2, marginBottom: 18 }}>{c.h.toUpperCase()}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
                {c.ls.map((l) => (
                  <a key={l} href="#" style={{ color: Am(0.42), fontSize: 14, transition: 'color .15s' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#E8F4F8' }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = Am(0.42) }}
                  >{l}</a>
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      <div style={{
        padding: isMobile ? '16px 24px' : '20px 80px',
        borderTop: `1px solid ${Am(0.06)}`,
        display: 'flex', flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'center',
        gap: 12,
      }}>
        <span style={{ ...mono, fontSize: 11, color: Am(0.22) }}>© 2025 · LUIS_BOLIVAR · TODOS LOS DERECHOS RESERVADOS</span>
        <div style={{ display: 'flex', gap: 20, ...mono, fontSize: 12, color: Am(0.22) }}>
          {['Privacidad', 'Términos', 'Cookies'].map((l) => (
            <a key={l} href="#" style={{ color: 'inherit', transition: 'color .15s' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = A }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = Am(0.22) }}
            >{l}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
