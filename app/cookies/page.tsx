import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Política de Cookies — BOLIVAR_SYS',
}

export default function Cookies() {
  return (
    <LegalPage title="Política de Cookies" updated="1 de junio de 2026">

      <p>
        Esta política explica qué son las cookies, cuáles utiliza el sitio <strong>bolivarsys.com</strong> y cómo
        puede gestionarlas. En cumplimiento de la normativa aplicable, le informamos de forma transparente
        sobre su uso.
      </p>

      <h2>1. ¿Qué son las cookies?</h2>
      <p>
        Las cookies son pequeños archivos de texto que un sitio web almacena en su navegador cuando lo visita.
        Permiten que el sitio recuerde información sobre su visita, como preferencias de navegación o el estado
        de la sesión. No contienen información personal identificable por sí solas.
      </p>

      <h2>2. Cookies que utilizamos</h2>
      <p>
        Este sitio tiene un uso mínimo de cookies. <strong>No utilizamos cookies de publicidad, rastreo
        de comportamiento ni analítica de terceros</strong> (como Google Analytics o Meta Pixel).
      </p>
      <p>Las únicas cookies presentes son de carácter técnico, generadas por el framework Next.js:</p>
      <ul>
        <li>
          <strong>Cookies de sesión de Next.js:</strong> utilizadas internamente para la correcta
          navegación y renderizado de la aplicación. Son temporales y se eliminan al cerrar el navegador.
        </li>
      </ul>
      <p>
        Estas cookies son estrictamente necesarias para el funcionamiento básico del sitio y no requieren
        su consentimiento previo.
      </p>

      <h2>3. Cookies de terceros</h2>
      <p>
        Si hace clic en el botón de WhatsApp o accede a nuestros perfiles de LinkedIn o GitHub desde este
        sitio, esas plataformas pueden establecer sus propias cookies según sus políticas de privacidad
        respectivas, sobre las cuales no tenemos control.
      </p>

      <h2>4. Cómo gestionar o eliminar cookies</h2>
      <p>
        Puede configurar su navegador para que rechace cookies, le avise antes de aceptarlas o las elimine
        una vez cerrada la sesión. A continuación, instrucciones para los navegadores más comunes:
      </p>
      <ul>
        <li>
          <strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies y otros datos de sitios
        </li>
        <li>
          <strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies y datos del sitio
        </li>
        <li>
          <strong>Safari:</strong> Preferencias → Privacidad → Gestionar datos de sitios web
        </li>
        <li>
          <strong>Edge:</strong> Configuración → Cookies y permisos del sitio
        </li>
      </ul>
      <p>
        Tenga en cuenta que desactivar las cookies técnicas puede afectar el correcto funcionamiento de
        algunas partes del sitio.
      </p>

      <h2>5. Cambios en esta política</h2>
      <p>
        Si en el futuro incorporamos nuevas cookies (por ejemplo, analítica para mejorar la experiencia del
        sitio), actualizaremos esta política y, cuando corresponda, solicitaremos su consentimiento.
      </p>

      <h2>6. Contacto</h2>
      <p>
        Para cualquier consulta sobre el uso de cookies en este sitio:{' '}
        <a href="mailto:luis@bolivarsys.com">luis@bolivarsys.com</a>
      </p>

    </LegalPage>
  )
}
