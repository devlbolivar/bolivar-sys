'use client'
import { A, Am, BG2, mono, grot, gl } from '@/lib/tokens'
import { POSTS } from '@/lib/data'
import FadeIn from '@/components/FadeIn'
import { useIsMobile } from '@/hooks/useIsMobile'

export default function Blog() {
  const isMobile = useIsMobile()
  const pad = isMobile ? '60px 24px' : '80px'

  return (
    <section id="blog" style={{ padding: pad, background: BG2, borderTop: `1px solid ${Am(0.07)}` }}>
      <FadeIn>
        <div style={{
          display: 'flex', alignItems: isMobile ? 'flex-start' : 'flex-end',
          justifyContent: 'space-between', marginBottom: isMobile ? 36 : 52,
          flexWrap: 'wrap', gap: 16,
        }}>
          <div>
            <p style={{ ...mono, fontSize: 11, color: A, letterSpacing: 3, marginBottom: 14 }}>&gt; BLOG.LATEST()</p>
            <h2 style={{ ...grot, fontSize: isMobile ? 32 : 48, fontWeight: 700, letterSpacing: '-1.5px', color: '#E8F4F8' }}>
              Últimos artículos
            </h2>
          </div>
          <a href="#"
            style={{ ...mono, fontSize: 12, color: A, letterSpacing: 1, transition: 'opacity .15s' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '.6' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1' }}
          >VER TODOS →</a>
        </div>
      </FadeIn>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)', gap: 20 }}>
        {POSTS.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.1} style={{ display: 'flex' }}>
            <div
              style={{ ...gl({ borderRadius: 16 }), padding: '28px 24px', flex: 1, display: 'flex', flexDirection: 'column', cursor: 'pointer', transition: 'border-color .22s,background .22s' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = Am(0.3); e.currentTarget.style.background = Am(0.07) }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = Am(0.12); e.currentTarget.style.background = Am(0.04) }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
                <span style={{ ...gl({ borderRadius: 6 }), padding: '4px 12px', ...mono, fontSize: 10, color: A, letterSpacing: 1 }}>{p.tag.toUpperCase()}</span>
                <span style={{ ...mono, fontSize: 11, color: Am(0.32) }}>{p.read} read</span>
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 700, lineHeight: 1.4, color: '#E8F4F8', marginBottom: 12, flex: 1 }}>{p.title}</h3>
              <p style={{ color: Am(0.5), fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>{p.desc}</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ ...mono, fontSize: 11, color: Am(0.32) }}>{p.date}</span>
                <span style={{ ...mono, fontSize: 12, color: A }}>LEER →</span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
