'use client'

import type { CSSProperties } from 'react'
import { A, Am, BG2, mono, grot, gl } from '@/lib/tokens'
import { STEPS } from '@/lib/data'
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

function SectionHead({ label, title }: { label: string; title: string }) {
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

export default function Process() {
  return (
    <section
      id="proceso"
      style={{
        padding: '80px',
        background: BG2,
        borderTop: `1px solid ${Am(0.07)}`,
      }}
    >
      <SectionHead label="> PROCESO.EXEC()" title="Del brief al lanzamiento" />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4,1fr)',
          gap: 18,
        }}
      >
        {STEPS.map((s, i) => (
          <FadeIn key={s.n} delay={i * 0.1} style={{ display: 'flex' }}>
            <div
              style={{
                ...gl({ borderRadius: 16 }),
                padding: '28px 24px',
                flex: 1,
                position: 'relative',
              }}
            >
              {i < STEPS.length - 1 && (
                <div
                  style={{
                    position: 'absolute',
                    right: -10,
                    top: 36,
                    width: 20,
                    height: 1,
                    background: Am(0.18),
                  }}
                />
              )}
              <div
                style={{
                  ...mono,
                  fontSize: 52,
                  color: Am(0.07),
                  fontWeight: 700,
                  lineHeight: 1,
                  marginBottom: 20,
                  letterSpacing: '-2px',
                }}
              >
                {s.n}
              </div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  marginBottom: 10,
                  color: '#E8F4F8',
                }}
              >
                {s.t}
              </h3>
              <p style={{ color: Am(0.5), fontSize: 14, lineHeight: 1.75 }}>
                {s.d}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
