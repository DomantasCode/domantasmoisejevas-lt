import type { Metadata } from 'next'
import { Mail } from 'lucide-react'
import { SITE } from '@/lib/constants'
import { ContactForm } from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Kontaktai',
  description: `Susisiek su ${SITE.name}.`,
}

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 pb-24 pt-32">
      <div className="space-y-3">
        <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
          Kontaktai
        </p>
        <h1 className="text-4xl font-medium tracking-tight md:text-5xl">
          Susisiekim
        </h1>
        <p className="text-base text-foreground/70">
          Parašyk per formą arba tiesiai į pašto dėžutę.
        </p>
        <a
          href={`mailto:${SITE.email}`}
          className="inline-flex items-center gap-2 font-mono text-sm text-foreground/80 hover:text-foreground"
        >
          <Mail className="h-4 w-4" />
          {SITE.email}
        </a>
      </div>

      <div className="mt-12">
        <ContactForm />
      </div>
    </main>
  )
}
