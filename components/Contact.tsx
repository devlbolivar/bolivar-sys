'use client'

import { useState } from 'react'
import FadeIn from '@/components/FadeIn'
import styles from './Contact.module.css'

type Status = 'idle' | 'sending' | 'ok' | 'error'

export default function Contact() {
  const [form, setForm] = useState({ nombre: '', email: '', servicio: '', mensaje: '' })
  const [status, setStatus] = useState<Status>('idle')

  function set(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('ok')
      setForm({ nombre: '', email: '', servicio: '', mensaje: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contacto" className={styles.section}>
      <div className={styles.inner}>
        <FadeIn>
          <div>
            <p className={styles.tag}>&gt; CONTACT.INIT()</p>
            <h2 className={styles.h2}>
              Hablemos de<br />tu proyecto.
            </h2>
            <p className={styles.intro}>
              Respondo en menos de 24h. Sin compromisos, sin rodeos — solo una conversación honesta sobre lo que necesita tu negocio.
            </p>
            <div className={styles.bullets}>
              {[
                'Trabajo con clientes en toda Latinoamérica',
                'Primera consulta gratuita de 30 minutos',
                'Contrato claro, precios 100% transparentes',
              ].map((txt) => (
                <div key={txt} className={styles.bullet}>
                  <span className={styles.bulletArrow}>→</span>
                  <span>{txt}</span>
                </div>
              ))}
            </div>
            <div className={styles.chips}>
              {['luis@bolivarsys.com', 'WhatsApp disponible', 'GMT-5 · LATAM'].map((t) => (
                <div key={t} className={styles.chip}>{t}</div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          {status === 'ok' ? (
            <div className={styles.form}>
              <p className={styles.tag}>&gt; MENSAJE ENVIADO</p>
              <p className={styles.intro}>Gracias. Te respondo en menos de 24 horas.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                className={styles.input}
                placeholder="nombre"
                value={form.nombre}
                onChange={(e) => set('nombre', e.target.value)}
                required
              />
              <input
                className={styles.input}
                placeholder="email"
                type="email"
                value={form.email}
                onChange={(e) => set('email', e.target.value)}
                required
              />
              <select
                className={`${styles.input} ${styles.select}`}
                value={form.servicio}
                onChange={(e) => set('servicio', e.target.value)}
              >
                <option value="" disabled>servicio de interés</option>
                <option value="Shopify">Shopify</option>
                <option value="Landing">Landing / Sitio web</option>
                <option value="IA">Chatbot / Agente IA</option>
                <option value="Retainer">Retainer mensual</option>
                <option value="Otro">Otro / No sé aún</option>
              </select>
              <textarea
                className={`${styles.input} ${styles.textarea}`}
                placeholder="cuéntame sobre tu negocio y qué quieres lograr"
                rows={4}
                value={form.mensaje}
                onChange={(e) => set('mensaje', e.target.value)}
                required
              />
              <button
                type="submit"
                className={styles.submit}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'ENVIANDO...' : 'ENVIAR MENSAJE →'}
              </button>
              {status === 'error' && (
                <p className={styles.note} style={{ color: 'var(--red, #ef4444)' }}>
                  Error al enviar. Intenta de nuevo o escríbeme directo.
                </p>
              )}
              {status !== 'error' && (
                <p className={styles.note}>Respuesta garantizada en &lt; 24 horas</p>
              )}
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  )
}
