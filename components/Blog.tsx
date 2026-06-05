'use client'

import { A, Am, BG2, mono, grot, gl } from '@/lib/tokens'
import { POSTS } from '@/lib/data'
import FadeIn from '@/components/FadeIn'

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        ...mono,
        fontSize: 11,
        color: A,
        letterSpacing: 3,
        marginBottom: 14,
      }}
    >
      {children}
    </p>
  )
}

export default function Blog() {
  return (
    <section
      id="blog"
      style={{
        padding: '80px',
        background: BG2,
        borderTop: `1px solid ${Am(0.07)}`,
      }}
    >
      <FadeIn>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: 52,
            flexWrap: 'wrap',
            gap: 20,
          }}
        >
          <div>
            <SectionLabel>&gt; BLOG.LATEST()</SectionLabel>
            <h2
              style={{
                ...grot,
                fontSize: 48,
                fontWeight: 700,
                letterSpacing: '-1.5px',
                color: '#E8F4F8',
              }}
            >
              Últimos artículos
            </h2>
          </div>
          <a
            href="#"
            style={{
              ...mono,
              fontSize: 12,
              color: A,
              letterSpacing: 1,
              transition: 'opacity .15s',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.opacity = '.6'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.opacity = '1'
            }}
          >
            VER TODOS →
          </a>
        </div>
      </FadeIn>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3,1fr)',
          gap: 20,
        }}
      >
        {POSTS.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.1} style={{ display: 'flex' }}>
            <div
              style={{
                ...gl({ borderRadius: 16 }),
                padding: '30px 26px',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                transition: 'border-color .22s,background .22s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = Am(0.3)
                e.currentTarget.style.background = Am(0.07)
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = Am(0.12)
                e.currentTarget.style.background = Am(0.04)
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 20,
                }}
              >
                <span
                  style={{
                    ...gl({ borderRadius: 6 }),
                    padding: '4px 12px',
                    ...mono,
                    fontSize: 10,
                    color: A,
                    letterSpacing: 1,
                  }}
                >
                  {p.tag.toUpperCase()}
                </span>
                <span style={{ ...mono, fontSize: 11, color: Am(0.32) }}>
                  {p.read} read
                </span>
              </div>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  lineHeight: 1.4,
                  color: '#E8F4F8',
                  marginBottom: 14,
                  flex: 1,
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  color: Am(0.5),
                  fontSize: 14,
                  lineHeight: 1.7,
                  marginBottom: 22,
                }}
              >
                {p.desc}
              </p>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span style={{ ...mono, fontSize: 11, color: Am(0.32) }}>
                  {p.date}
                </span>
                <span style={{ ...mono, fontSize: 12, color: A }}>LEER →</span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
