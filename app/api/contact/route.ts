import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const { nombre, email, servicio, mensaje } = await req.json()

  if (!nombre || !email || !mensaje) {
    return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 })
  }

  await resend.emails.send({
    from: 'BOLIVAR_SYS <onboarding@resend.dev>',
    to: 'luisbolivar515@gmail.com',
    replyTo: email,
    subject: `Nuevo contacto: ${nombre} — ${servicio || 'sin especificar'}`,
    html: `
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Servicio:</strong> ${servicio || '—'}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${mensaje.replace(/\n/g, '<br/>')}</p>
    `,
  })

  return NextResponse.json({ ok: true })
}
