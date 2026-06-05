export const SVC = [
  { icon: '⬡', tag: 'Shopify',  title: 'Tienda Shopify',      desc: 'Setup completo con diseño custom, apps integradas y todo configurado para vender desde el primer día.' },
  { icon: '◎', tag: 'Web',      title: 'Landing / Sitio',     desc: 'Páginas de alta conversión que proyectan autoridad y generan confianza real en tu audiencia.'          },
  { icon: '◈', tag: 'IA',       title: 'Chatbot / Agente IA', desc: 'Asistentes que atienden, califican leads y venden por ti las 24 horas, los 7 días de la semana.'       },
  { icon: '◉', tag: 'Retainer', title: 'Retainer Mensual',    desc: 'Soporte continuo, optimización y actualizaciones para que tu plataforma nunca falle.'                  },
]

export const CASES = [
  { client: 'Noix Studio', type: 'Tienda Shopify', industry: 'Moda', metric: '$80K', mlabel: 'ventas primer trimestre', desc: 'Tienda desde cero con diseño editorial, integración Klaviyo y checkout con A/B testing. Resultado: 3.8% tasa de conversión desde el primer mes.', tags: ['Shopify','Klaviyo','CRO'] },
  { client: 'Innova Supply', type: 'Agente IA', industry: 'B2B', metric: '90%', mlabel: 'consultas automatizadas', desc: 'Agente entrenado en catálogo, precios y políticas de la empresa. Integrado en WhatsApp Business y web. Ahorra 40+ horas mensuales de atención.', tags: ['OpenAI','WhatsApp','API'] },
  { client: 'Bloom Co.', type: 'Landing + Retainer', industry: 'Marketing', metric: '-45%', mlabel: 'costo por lead adquirido', desc: 'Landing de alta conversión construida sobre datos del cliente + retainer mensual de optimización CRO. Resultados sostenidos en el tiempo.', tags: ['Landing','SEO','Retainer'] },
]

export const PLANS = [
  { name: 'Starter', price: '$999', sub: 'Landing o tienda básica', items: ['Diseño personalizado','Hasta 5 páginas','SEO on-page','Formulario de contacto','14 días de soporte'], top: false },
  { name: 'Growth',  price: '$2,499', sub: 'Proyecto completo + IA básica', items: ['Todo Starter','Apps + pasarelas de pago','Chatbot IA integrado','Analytics avanzado','30 días de soporte'], top: true },
  { name: 'Scale',   price: '$4,999+', sub: 'Enterprise + agente IA custom', items: ['Todo Growth','Agente IA entrenado a medida','Retainer mensual incluido','Reportes quincenales','Soporte prioritario 24/7'], top: false },
]

export const STEPS = [
  { n: '01', t: 'Discovery',   d: 'Entendemos tu negocio, objetivos, audiencia ideal y competencia antes de diseñar nada.'  },
  { n: '02', t: 'Diseño',      d: 'Prototipo visual que apruebas tú antes de escribir una sola línea de código.'             },
  { n: '03', t: 'Desarrollo',  d: 'Código limpio, optimizado y escalable. Sin atajos ni deudas técnicas que duelen después.' },
  { n: '04', t: 'Lanzamiento', d: 'QA completo, deploy y entrega con soporte post-lanzamiento incluido en todos los planes.' },
]

export const TESTI = [
  { q: 'Nuestra tienda pasó de cero a $80K en ventas el primer trimestre. Luis entregó a tiempo y el resultado superó todo lo que esperábamos.', a: '— Mariana G., fundadora · Noix Studio' },
  { q: 'El agente IA responde el 90% de las consultas solo. Ahorramos horas de atención cada semana. Lo recomiendo sin pensarlo dos veces.', a: '— Carlos R., CEO · Innova Supply' },
  { q: 'Profesional, puntual y con un ojo increíble para el diseño. El retainer mensual vale cada peso. Seguimos trabajando juntos dos años después.', a: '— Sofía M., directora de marketing · Bloom Co.' },
]

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
