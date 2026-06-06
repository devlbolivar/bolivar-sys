import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Política de Privacidad — BOLIVAR_SYS',
}

export default function Privacidad() {
  return (
    <LegalPage title="Política de Privacidad" updated="1 de junio de 2026">

      <p>
        En <strong>Bolivar Systems</strong> (operado por Luis Bolívar, RUT disponible a solicitud), con domicilio en Santiago, Chile,
        tomamos en serio la privacidad de quienes nos contactan. Esta política explica qué datos recopilamos,
        para qué los usamos y cómo los protegemos, en cumplimiento de la <strong>Ley N° 19.628</strong> sobre Protección
        de la Vida Privada de la República de Chile.
      </p>

      <h2>1. Datos que recopilamos</h2>
      <p>Únicamente recopilamos los datos que usted proporciona voluntariamente a través del formulario de contacto:</p>
      <ul>
        <li>Nombre</li>
        <li>Correo electrónico</li>
        <li>Servicio de interés (opcional)</li>
        <li>Mensaje o descripción del proyecto</li>
      </ul>
      <p>
        No recopilamos datos sensibles, no realizamos seguimiento de comportamiento y no utilizamos
        cookies de publicidad o analítica de terceros.
      </p>

      <h2>2. Finalidad del tratamiento</h2>
      <p>Los datos recopilados se utilizan exclusivamente para:</p>
      <ul>
        <li>Responder a su consulta o solicitud de información</li>
        <li>Coordinar una llamada de discovery si así lo solicita</li>
        <li>Enviar información relevante sobre los servicios que usted consultó</li>
      </ul>
      <p>No utilizamos sus datos para envíos masivos de marketing sin su consentimiento previo.</p>

      <h2>3. Proveedores de servicio</h2>
      <p>Para el envío de correos electrónicos utilizamos <strong>Resend</strong> (resend.com), un servicio de
      infraestructura de correo transaccional. Sus datos de contacto son procesados por Resend únicamente
      para la entrega del mensaje. No se comparten con ningún otro tercero.</p>
      <p>Si nos contacta por WhatsApp, aplican también las condiciones de uso de <strong>Meta Platforms, Inc.</strong></p>

      <h2>4. Conservación de datos</h2>
      <p>
        Conservamos sus datos de contacto durante el tiempo necesario para atender su consulta y,
        en caso de iniciar una relación comercial, durante la vigencia del contrato más un período adicional
        de tres (3) años para efectos de respaldo y cumplimiento legal.
      </p>

      <h2>5. Sus derechos</h2>
      <p>Conforme a la Ley N° 19.628, usted tiene derecho a:</p>
      <ul>
        <li><strong>Acceder</strong> a los datos personales que tengamos sobre usted</li>
        <li><strong>Rectificar</strong> datos incorrectos o desactualizados</li>
        <li><strong>Eliminar</strong> sus datos cuando ya no sean necesarios</li>
        <li><strong>Oponerse</strong> al tratamiento de sus datos en circunstancias justificadas</li>
      </ul>
      <p>
        Para ejercer cualquiera de estos derechos, escríbanos a{' '}
        <a href="mailto:luis@bolivarsys.com">luis@bolivarsys.com</a> con el asunto "Derechos ARCO".
        Responderemos en un plazo máximo de 15 días hábiles.
      </p>

      <h2>6. Seguridad</h2>
      <p>
        Adoptamos medidas técnicas razonables para proteger sus datos contra acceso no autorizado,
        pérdida o divulgación. Ninguna transmisión por internet es 100% segura, pero hacemos nuestro
        mejor esfuerzo para proteger la información que nos confía.
      </p>

      <h2>7. Cambios en esta política</h2>
      <p>
        Nos reservamos el derecho de actualizar esta política en cualquier momento. La fecha de
        "última actualización" al inicio de esta página indica cuándo se realizó la revisión más reciente.
        El uso continuado del sitio implica aceptación de los cambios.
      </p>

      <h2>8. Contacto</h2>
      <p>
        Para cualquier consulta sobre privacidad: <a href="mailto:luis@bolivarsys.com">luis@bolivarsys.com</a>
      </p>

    </LegalPage>
  )
}
