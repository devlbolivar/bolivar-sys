'use client'

import { Am, BG2, mono, gl } from '@/lib/tokens'
import { STACK } from '@/lib/data'

export default function StackStrip() {
  return (
    <div
      style={{
        borderTop: `1px solid ${Am(0.07)}`,
        borderBottom: `1px solid ${Am(0.07)}`,
        padding: '16px 80px',
        background: BG2,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        flexWrap: 'wrap',
      }}
    >
      <span
        style={{
          ...mono,
          fontSize: 10,
          color: Am(0.28),
          letterSpacing: 2,
          flexShrink: 0,
        }}
      >
        STACK //
      </span>
      {STACK.map((s) => (
        <div
          key={s}
          style={{
            ...gl({ borderRadius: 6 }),
            padding: '5px 14px',
            ...mono,
            fontSize: 12,
            color: Am(0.52),
          }}
        >
          {s}
        </div>
      ))}
    </div>
  )
}
