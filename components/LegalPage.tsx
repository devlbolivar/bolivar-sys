import Link from 'next/link'
import styles from './LegalPage.module.css'

export default function LegalPage({ title, updated, children }: {
  title: string
  updated: string
  children: React.ReactNode
}) {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.back}>← BOLIVAR_SYS</Link>
      </header>
      <main className={styles.main}>
        <p className={styles.tag}>&gt; LEGAL.LOAD()</p>
        <h1 className={styles.h1}>{title}</h1>
        <p className={styles.updated}>Última actualización: {updated}</p>
        <div className={styles.body}>{children}</div>
      </main>
      <footer className={styles.foot}>
        <span>© 2026 · LUIS_BOLIVAR · TODOS LOS DERECHOS RESERVADOS</span>
      </footer>
    </div>
  )
}
