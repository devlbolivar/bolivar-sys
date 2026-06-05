'use client'

import type { CSSProperties } from 'react'
import { A, Am, mono, grot, gl } from '@/lib/tokens'
import { SVC } from '@/lib/data'
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

export default function Services() {
  return (
    <section
      id="servicios"
      style={{
        padding: '80px',
        borderTop: `1px solid ${Am(0.07)}`,
      }}
    >
      <SectionHead label="> SERVICIOS.LIST()" title="Qué construimos" />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4,1fr)',
          gap: 18,
        }}
      >
        {SVC.map((s, i) => (
          <FadeIn key={s.title} delay={i * 0.09} style={{ display: 'flex' }}>
            <div
              style={{
                ...gl({ borderRadius: 16 }),
                padding: '30px 24px',
                flex: 1,
                transition: 'border-color .22s,background .22s',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = Am(0.32)
                e.currentTarget.style.background = Am(0.08)
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = Am(0.12)
                e.currentTarget.style.background = Am(0.04)
              }}
            >
              <div
                style={{
                  ...mono,
                  fontSize: 10,
                  color: A,
                  marginBottom: 14,
                  letterSpacing: 1,
                }}
              >
                [{s.tag}]
              </div>
              <div style={{ fontSize: 24, marginBottom: 14, color: A }}>
                {s.icon}
              </div>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  marginBottom: 10,
                  lineHeight: 1.3,
                  color: '#E8F4F8',
                }}
              >
                {s.title}
              </h3>
              <p style={{ color: Am(0.5), fontSize: 14, lineHeight: 1.75 }}>
                {s.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
