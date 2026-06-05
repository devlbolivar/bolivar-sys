'use client'

import type { CSSProperties } from 'react'
import { A, Am, BG2, mono, grot, gl } from '@/lib/tokens'
import { TESTI } from '@/lib/data'
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

function SectionHead({
  label,
  title,
}: {
  label: string
  title: React.ReactNode
}) {
  return (
    <FadeIn>
      <div style={{ marginBottom: 52 }}>
        <SectionLabel>{label}</SectionLabel>
        <h2
          style={{
            ...grot,
            fontSize: 48,
            fontWeight: 700,
            letterSpacing: '-1.5px',
            color: '#E8F4F8',
            textWrap: 'pretty' as CSSProperties['textWrap'],
          }}
        >
          {title}
        </h2>
      </div>
    </FadeIn>
  )
}

export default function Testimonials() {
  return (
    <section
      style={{
        padding: '80px',
        background: BG2,
        borderTop: `1px solid ${Am(0.07)}`,
      }}
    >
      <SectionHead
        label="> TESTIMONIOS.LOG()"
        title={
          <>
            Clientes reales,
            <br />
            resultados reales.
          </>
        }
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3,1fr)',
          gap: 18,
        }}
      >
        {TESTI.map((t, i) => (
          <FadeIn key={i} delay={i * 0.1} style={{ display: 'flex' }}>
            <div
              style={{
                ...gl({ borderRadius: 16 }),
                padding: '32px 28px',
                flex: 1,
              }}
            >
              <div
                style={{
                  ...mono,
                  fontSize: 42,
                  color: Am(0.15),
                  lineHeight: 0.8,
                  marginBottom: 18,
                }}
              >
                &quot;
              </div>
              <p
                style={{
                  color: Am(0.72),
                  fontSize: 15,
                  lineHeight: 1.85,
                  marginBottom: 24,
                }}
              >
                {t.q}
              </p>
              <p style={{ ...mono, color: Am(0.38), fontSize: 11 }}>{t.a}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
