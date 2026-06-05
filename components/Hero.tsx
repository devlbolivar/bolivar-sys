'use client'
import type { CSSProperties } from 'react'
import { A, Am, BG, mono, grot, gl } from '@/lib/tokens'
import { SVC } from '@/lib/data'
import { useIsMobile } from '@/hooks/useIsMobile'

export default function Hero() {
  const isMobile = useIsMobile()

  return (
    <section
      id="top"
      style={{
        padding: isMobile ? '60px 24px 72px' : '88px 80px 110px',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 460px',
        gap: isMobile ? 48 : 72,
        alignItems: 'center',
        minHeight: isMobile ? 'auto' : '91vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `linear-gradient(${Am(0.04)} 1px,transparent 1px),linear-gradient(90deg,${Am(0.04)} 1px,transparent 1px)`,
        backgroundSize: '72px 72px', pointerEvents: 'none',
      }} />

      {/* Glow blob */}
      <div style={{
        position: 'absolute', right: isMobile ? '-20%' : '26%', top: '46%',
        transform: 'translateY(-50%)',
        width: isMobile ? 320 : 580, height: isMobile ? 320 : 580,
        borderRadius: '50%',
        background: `radial-gradient(circle,${Am(0.1)} 0%,transparent 65%)`,
        pointerEvents: 'none',
      }} />

      {/* Left column — copy */}
      <div style={{ position: 'relative' }}>
        <div style={{ ...mono, fontSize: 11, color: Am(0.55), letterSpacing: 2, marginBottom: 28, lineHeight: 2.2 }}>
          <span>&gt; SISTEMA INICIADO</span><br />
          <span style={{ color: Am(0.28) }}>&gt; CARGANDO SERVICIOS...</span><br />
          <span style={{ color: '#22C55E' }}>
            &gt; LISTO&nbsp;
            <span style={{
              display: 'inline-block', width: 7, height: 7, borderRadius: '50%',
              background: '#22C55E', verticalAlign: 'middle', marginLeft: 4,
              animation: 'pulse 2s infinite',
            }} />
          </span>
        </div>

        <h1 style={{
          ...grot,
          fontSize: isMobile ? 42 : 78,
          fontWeight: 700,
          lineHeight: 1.05,
          letterSpacing: isMobile ? '-1.5px' : '-2.5px',
          marginBottom: 20,
          color: '#E8F4F8',
          animation: 'fadeUp .7s ease both',
          textWrap: 'pretty' as CSSProperties['textWrap'],
        }}>
          Tecnología que<br />Convierte Visitas<br />
          <span style={{ color: A }}>en Ventas.</span>
        </h1>

        <p style={{
          fontSize: isMobile ? 16 : 18, color: Am(0.5), lineHeight: 1.85,
          maxWidth: 490, marginBottom: 36, animation: 'fadeUp .7s .12s ease both',
        }}>
          Shopify, landing pages, agentes IA y soporte mensual para emprendedores que entienden que el resultado lo es todo.
        </p>

        <div style={{
          display: 'flex', gap: 12, marginBottom: 44,
          animation: 'fadeUp .7s .22s ease both', flexWrap: 'wrap',
        }}>
          <a href="#contacto">
            <button style={{
              background: A, border: 'none', color: BG,
              padding: isMobile ? '13px 28px' : '15px 38px',
              borderRadius: 6, fontSize: isMobile ? 14 : 15, cursor: 'pointer',
              ...grot, fontWeight: 700,
              boxShadow: `0 0 36px ${Am(0.3)}`, transition: 'box-shadow .2s',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 0 60px ${Am(0.52)}` }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = `0 0 36px ${Am(0.3)}` }}
            >
              Iniciar Proyecto →
            </button>
          </a>
          <a href="#servicios">
            <button style={{
              background: 'transparent', border: `1px solid ${Am(0.3)}`, color: A,
              padding: isMobile ? '13px 28px' : '15px 38px',
              borderRadius: 6, fontSize: isMobile ? 14 : 15, cursor: 'pointer', ...grot,
              transition: 'border-color .2s',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = Am(0.6) }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = Am(0.3) }}
            >
              Ver Servicios
            </button>
          </a>
        </div>

        <div style={{
          display: 'flex', gap: 12, flexWrap: 'wrap',
          animation: 'fadeUp .7s .34s ease both',
        }}>
          {[['20+', 'proyectos'], ['4.9★', 'rating'], ['100%', 'puntual'], ['IA', 'integrada']].map(([v, l]) => (
            <div key={l} style={{ ...gl({ borderRadius: 12 }), padding: '12px 18px', textAlign: 'center' }}>
              <div style={{ ...mono, fontSize: 16, color: A, fontWeight: 700 }}>{v}</div>
              <div style={{ fontSize: 11, color: Am(0.38), marginTop: 2 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right column — terminal */}
      <div style={{
        ...gl({ borderRadius: 14, overflow: 'hidden' }),
        ...mono, fontSize: 13, lineHeight: 2.1,
        animation: 'fadeUp .7s .18s ease both',
        boxShadow: `0 0 64px ${Am(0.07)}, 0 24px 80px rgba(0,0,0,.5)`,
      }}>
        <div style={{
          background: '#071F35', padding: '13px 18px',
          borderBottom: `1px solid ${Am(0.1)}`,
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          {['#FF5F57', '#FEBC2E', '#28C840'].map((c) => (
            <span key={c} style={{ width: 11, height: 11, borderRadius: '50%', background: c, display: 'inline-block' }} />
          ))}
          <span style={{ marginLeft: 8, color: Am(0.28), fontSize: 11 }}>bolivar-sys.sh</span>
        </div>
        <div style={{ padding: '26px 30px' }}>
          <div style={{ color: Am(0.55) }}>$ <span style={{ color: A }}>bolivar</span> --services</div>
          <div style={{ color: Am(0.28) }}># Servicios disponibles:</div>
          {SVC.map((s) => (
            <div key={s.tag}>
              <span style={{ color: '#22C55E' }}>✓ </span>
              <span style={{ color: '#E8F4F8' }}>{s.tag.toLowerCase()}</span>
              <span style={{ color: Am(0.28) }}> --activo</span>
            </div>
          ))}
          <div style={{ marginTop: 10, color: Am(0.55) }}>$ <span style={{ color: A }}>status</span> --check</div>
          <div style={{ color: '#22C55E' }}>✓ on-time: 100% &nbsp;·&nbsp; rating: 4.9/5</div>
          <div style={{ marginTop: 4, color: Am(0.55) }}>
            $&nbsp;<span style={{ color: A, animation: 'blink 1s step-end infinite', display: 'inline-block' }}>█</span>
          </div>
        </div>
      </div>
    </section>
  )
}
