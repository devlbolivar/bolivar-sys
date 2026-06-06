export const SVC = [
  { icon: '⬡', tag: 'Shopify',  title: 'Tienda Shopify',      desc: 'Setup completo con plantilla premium, free o custom — apps integradas y listo para vender desde el primer día.' },
  { icon: '◎', tag: 'Web',      title: 'Landing / Sitio',     desc: 'Páginas de alta conversión que proyectan autoridad y generan confianza real en tu audiencia.'          },
  { icon: '◈', tag: 'IA',       title: 'Chatbot / Agente IA', desc: 'Asistentes que atienden, califican leads y venden por ti las 24 horas, los 7 días de la semana.'       },
  { icon: '◉', tag: 'Retainer', title: 'Retainer Mensual',    desc: 'Soporte continuo, optimización y actualizaciones para que tu plataforma nunca falle.'                  },
]

export const CASES = [
  { client: 'Globant · Disney', type: 'Consultoría Enterprise', industry: 'Tecnología', metric: '30%', mlabel: 'reducción en tiempos de carga', desc: 'Lideré la migración de arquitectura monolítica a micro-frontend con Webpack Module Federation en plataformas internas de Disney, usadas por miles de usuarios en múltiples propiedades. Stack: React, TypeScript, Node.js.', tags: ['React', 'Microfrontends', 'TypeScript'] },
  { client: 'WhatsApp AI Agent', type: 'Proyecto Propio · En Desarrollo', industry: 'SaaS / IA', metric: '24/7', mlabel: 'atención automatizada sin intervención', desc: 'SaaS de agente IA dirigido a PyMEs chilenas: motor de reservas con Google Calendar, sistema RAG para respuestas contextuales, y arquitectura multi-tenant. Stack: Python, FastAPI, OpenAI, LangChain.', tags: ['OpenAI', 'LangChain', 'FastAPI'] },
  { client: 'Kdoce', type: 'Technical Lead · 5 años', industry: 'B2B', metric: '5+', mlabel: 'años liderando equipos de desarrollo', desc: 'Lideré desarrollo y mantenimiento de plataforma propietaria B2B. Coordiné equipos cross-funcionales, mentoricé developers junior y fui responsable de módulos críticos, calidad de código y alineamiento con objetivos de negocio.', tags: ['Technical Lead', 'Fullstack', 'Node.js'] },
]

export const PLANS = [
  { name: 'Starter', price: '$699', originalPrice: '$999', sub: 'Landing o tienda básica', items: ['Diseño personalizado','Hasta 5 páginas','SEO on-page','Formulario de contacto','14 días de soporte'], top: false },
  { name: 'Growth',  price: '$1,699', originalPrice: '$2,499', sub: 'Proyecto completo + IA básica', items: ['Todo Starter','Apps + pasarelas de pago','Chatbot IA integrado','Analytics avanzado','30 días de soporte'], top: true },
  { name: 'Scale',   price: 'A cotizar', originalPrice: null, sub: 'Enterprise + agente IA custom', items: ['Todo Growth','Agente IA entrenado a medida','Retainer mensual incluido','Reportes quincenales','Soporte prioritario 24/7'], top: false },
]

export const STEPS = [
  { n: '01', t: 'Discovery',   d: 'Entendemos tu negocio, objetivos, audiencia ideal y competencia antes de diseñar nada.'  },
  { n: '02', t: 'Diseño',      d: 'Prototipo visual que apruebas tú antes de escribir una sola línea de código.'             },
  { n: '03', t: 'Desarrollo',  d: 'Código limpio, optimizado y escalable. Sin atajos ni deudas técnicas que duelen después.' },
  { n: '04', t: 'Lanzamiento', d: 'QA completo, deploy y entrega con soporte post-lanzamiento incluido en todos los planes.' },
]

export const TESTI: { q: string; a: string }[] = []

export const FAQS = [
  { q: '¿Cuánto tiempo tarda un proyecto típico?', a: 'Un landing page toma 1–2 semanas. Una tienda Shopify completa, 2–4 semanas. Los proyectos con agente IA pueden tomar 4–6 semanas según la complejidad de los flujos.' },
  { q: '¿Qué necesito para empezar?', a: 'Solo una llamada de 30 minutos para entender tu negocio. Si ya tienes logo, paleta de colores e idea del proyecto, mejor. Si no, lo definimos juntos en el discovery.' },
  { q: '¿Hay soporte después del lanzamiento?', a: 'Sí. Todos los planes incluyen soporte post-lanzamiento (14–30 días). Para soporte continuo, ofrezco retainers mensuales con tiempo de respuesta garantizado.' },
  { q: '¿Puedo ver proyectos anteriores antes de contratar?', a: 'Por supuesto. Durante la llamada de discovery comparto el portafolio completo con métricas reales de cada proyecto.' },
  { q: '¿Con qué tipos de negocio trabajan?', a: 'Moda, alimentos, servicios profesionales, salud, tecnología y más. Si vendes algo, puedo construir la plataforma para venderlo mejor.' },
  { q: '¿Qué pasa si no quedo satisfecho?', a: 'Trabajamos con revisiones incluidas. Si al finalizar algo no está a tu gusto dentro del alcance acordado, lo corregimos. El objetivo es que quedes 100% satisfecho.' },
]

export const POSTS = [
  { tag: 'Shopify', read: '8 min', date: 'May 2025', title: 'Por qué tu tienda no convierte — y cómo arreglarlo hoy', desc: 'Los 6 errores más comunes en tiendas Shopify y cómo cada uno está frenando tus ventas silenciosamente.' },
  { tag: 'IA',      read: '6 min', date: 'Abr 2025', title: 'Cómo un agente IA redujo nuestros costos de atención al 30%', desc: 'El caso real de Innova Supply: del problema a la solución, con números, código y aprendizajes.' },
  { tag: 'Diseño',  read: '5 min', date: 'Mar 2025', title: '5 errores de diseño que cuestan ventas', desc: 'Pequeños detalles visuales que generan grandes diferencias en la percepción y confianza del usuario.' },
]

export const STACK = ['Shopify','Next.js','OpenAI','Vercel','Stripe','Klaviyo','Tailwind','Webflow','Node.js','Postgres']
