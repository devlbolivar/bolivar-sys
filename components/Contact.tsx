'use client'

import FadeIn from '@/components/FadeIn'
import styles from './Contact.module.css'

export default function Contact() {
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
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <input className={styles.input} placeholder="nombre" />
            <input className={styles.input} placeholder="email" type="email" />
            <input className={styles.input} placeholder="shopify · landing · ia · retainer" />
            <textarea
              className={`${styles.input} ${styles.textarea}`}
              placeholder="cuéntame sobre tu negocio y qué quieres lograr"
              rows={4}
            />
            <button type="submit" className={styles.submit}>
              ENVIAR MENSAJE →
            </button>
            <p className={styles.note}>Respuesta garantizada en &lt; 24 horas</p>
          </form>
        </FadeIn>
      </div>
    </section>
  )
}
