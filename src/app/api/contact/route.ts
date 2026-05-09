import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json().catch(() => null)

  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Invalid body' }, { status: 400 })
  }

  const { name, email, message } = body as Record<string, unknown>

  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof message !== 'string' ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  // TODO: integruoti Resend (RESEND_API_KEY) ir Upstash rate limiting
  console.log('[contact] received', { name, email, message })

  return NextResponse.json({ ok: true })
}
