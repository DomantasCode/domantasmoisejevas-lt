'use client'

import { useState } from 'react'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setError(null)

    const formData = new FormData(e.currentTarget)
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Nepavyko išsiųsti')
      }
      setStatus('sent')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Klaida')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="font-mono text-xs uppercase tracking-widest text-foreground/60"
        >
          Vardas
        </label>
        <input
          id="name"
          name="name"
          required
          className="w-full rounded-md border border-foreground/10 bg-transparent px-3 py-2 text-sm outline-none focus:border-foreground/40"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="email"
          className="font-mono text-xs uppercase tracking-widest text-foreground/60"
        >
          El. paštas
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-md border border-foreground/10 bg-transparent px-3 py-2 text-sm outline-none focus:border-foreground/40"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="font-mono text-xs uppercase tracking-widest text-foreground/60"
        >
          Žinutė
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full resize-none rounded-md border border-foreground/10 bg-transparent px-3 py-2 text-sm outline-none focus:border-foreground/40"
        />
      </div>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="rounded-md bg-foreground px-5 py-2 font-mono text-sm text-background transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {status === 'sending' ? 'Siunčiu…' : 'Siųsti'}
        </button>
        {status === 'sent' && (
          <span className="font-mono text-xs text-foreground/60">
            Ačiū, gavau.
          </span>
        )}
        {status === 'error' && (
          <span className="font-mono text-xs text-destructive">{error}</span>
        )}
      </div>
    </form>
  )
}
