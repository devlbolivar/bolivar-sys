'use client'
import { Am, BG2, mono, gl } from '@/lib/tokens'
import { STACK } from '@/lib/data'
import { useIsMobile } from '@/hooks/useIsMobile'

export default function StackStrip() {
  const isMobile = useIsMobile()
  return (
    <div style={{
      borderTop: `1px solid ${Am(0.07)}`, borderBottom: `1px solid ${Am(0.07)}`,
      padding: isMobile ? '14px 24px' : '16px 80px',
      background: BG2, display: 'flex', alignItems: 'center',
      gap: 10, flexWrap: 'wrap',
    }}>
      <span style={{ ...mono, fontSize: 10, color: Am(0.28), letterSpacing: 2, flexShrink: 0 }}>
        STACK //
      </span>
      {STACK.map((s) => (
        <div key={s} style={{ ...gl({ borderRadius: 6 }), padding: '5px 12px', ...mono, fontSize: 11, color: Am(0.52) }}>
          {s}
        </div>
      ))}
    </div>
  )
}
