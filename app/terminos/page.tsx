import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Términos de Servicio — BOLIVAR_SYS',
}

export default function Terminos() {
  return (
    <LegalPage title="Términos de Servicio" updated="1 de junio de 2026">

      <p>
        Estos Términos de Servicio regulan la relación contractual entre <strong>Luis Bolívar</strong> (en adelante "el
        Proveedor"), operando bajo la marca <strong>Bolivar Systems</strong>, y cualquier persona natural o jurídica (en
        adelante "el Cliente") que contrate sus servicios de desarrollo web, implementación de inteligencia
        artificial o soporte mensual. Al iniciar un proyecto, el Cliente acepta estos términos en su totalidad.
      </p>

      <h2>1. Servicios ofrecidos</h2>
      <p>El Proveedor ofrece los siguientes servicios:</p>
      <ul>
        <li><strong>Tienda Shopify:</strong> configuración, diseño y lanzamiento de tiendas en línea</li>
        <li><strong>Landing page / sitio web:</strong> diseño y desarrollo de páginas de alta conversión</li>
        <li><strong>Chatbot / Agente IA:</strong> desarrollo de agentes conversacionales integrados en WhatsApp, web u otras plataformas</li>
        <li><strong>Retainer mensual:</strong> soporte continuo, mantenimiento y optimización de plataformas existentes</li>
      </ul>
      <p>El alcance específico de cada proyecto queda definido en la propuesta o contrato individual acordado por escrito con el Cliente.</p>

      <h2>2. Proceso de trabajo</h2>
      <p>Los proyectos siguen un proceso de cuatro etapas:</p>
      <ul>
        <li><strong>Discovery:</strong> sesión inicial para entender el negocio, objetivos y requerimientos</li>
        <li><strong>Diseño:</strong> prototipo visual que el Cliente aprueba antes de iniciar el desarrollo</li>
        <li><strong>Desarrollo:</strong> implementación técnica según el alcance acordado</li>
        <li><strong>Lanzamiento:</strong> QA, deploy y entrega con soporte post-lanzamiento incluido</li>
      </ul>

      <h2>3. Pagos y facturación</h2>
      <p>
        Los precios, forma de pago y plazos se especifican en la propuesta individual para cada proyecto.
        Como referencia general:
      </p>
      <ul>
        <li>Se requiere un anticipo para iniciar el trabajo (porcentaje según proyecto)</li>
        <li>El saldo restante se paga al aprobar la entrega final</li>
        <li>Los retainers mensuales se facturan al inicio de cada período</li>
      </ul>
      <p>El incumplimiento en el pago puede resultar en la suspensión del servicio o la retención de los entregables hasta su regularización.</p>

      <h2>4. Revisiones y cambios de alcance</h2>
      <p>
        Cada plan incluye un número de rondas de revisión indicado en la propuesta. Los cambios que excedan
        el alcance acordado — nuevas funcionalidades, rediseños mayores o modificaciones sustanciales al brief
        original — serán presupuestados y facturados por separado antes de ejecutarse.
      </p>

      <h2>5. Propiedad intelectual</h2>
      <p>
        Una vez realizado el pago total del proyecto, el Cliente recibe la titularidad completa del producto
        entregado: diseños, código, contenido y configuraciones. El Proveedor se reserva el derecho de incluir
        el proyecto en su portafolio, salvo que el Cliente indique expresamente lo contrario por escrito.
      </p>
      <p>
        Las herramientas, librerías y frameworks de terceros utilizados en el desarrollo están sujetos a sus
        propias licencias de uso (open source, comerciales, etc.).
      </p>

      <h2>6. Responsabilidades del cliente</h2>
      <p>Para garantizar la entrega en los plazos acordados, el Cliente se compromete a:</p>
      <ul>
        <li>Proveer el contenido (textos, imágenes, logotipos) en los tiempos acordados</li>
        <li>Responder a consultas y revisiones en un plazo razonable (máximo 5 días hábiles)</li>
        <li>Designar un único punto de contacto para toma de decisiones</li>
      </ul>
      <p>Los retrasos causados por incumplimiento del Cliente no son responsabilidad del Proveedor y pueden afectar los plazos de entrega.</p>

      <h2>7. Garantía y soporte post-lanzamiento</h2>
      <p>
        Todos los proyectos incluyen un período de soporte post-lanzamiento (14 a 30 días según el plan)
        para corregir errores o ajustes menores dentro del alcance original. Pasado este período, el soporte
        continuo está disponible a través de un retainer mensual.
      </p>

      <h2>8. Limitación de responsabilidad</h2>
      <p>
        El Proveedor no garantiza resultados comerciales específicos (ventas, leads, conversiones) derivados
        del uso de los productos entregados. Los resultados dependen de múltiples factores externos al control
        del Proveedor, incluyendo el mercado, la estrategia de marketing del Cliente y la calidad del producto o servicio ofrecido.
      </p>
      <p>
        La responsabilidad máxima del Proveedor ante cualquier reclamo no excederá el monto total pagado por
        el proyecto en cuestión.
      </p>

      <h2>9. Resolución de conflictos</h2>
      <p>
        Ante cualquier disputa, las partes se comprometen a buscar primero una solución amistosa. De no
        alcanzarse acuerdo, se someterán a la jurisdicción de los tribunales competentes de Santiago de Chile,
        aplicándose la legislación chilena vigente.
      </p>

      <h2>10. Contacto</h2>
      <p>
        Para consultas sobre estos términos: <a href="mailto:luis@bolivarsys.com">luis@bolivarsys.com</a>
      </p>

    </LegalPage>
  )
}
