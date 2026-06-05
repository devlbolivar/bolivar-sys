import type { CSSProperties } from 'react'

export const A = '#00D4FF'
export const Am = (o: number) => `rgba(0,212,255,${o})`
export const BG = '#030D18'
export const BG2 = '#071525'
export const mono: CSSProperties = { fontFamily: "var(--font-mono), monospace" }
export const grot: CSSProperties = { fontFamily: "var(--font-grotesk), sans-serif" }
export const gl = (x: CSSProperties = {}): CSSProperties => ({
  background: Am(0.04),
  border: `1px solid ${Am(0.12)}`,
  ...x,
})
