import type { Metadata } from 'next'
import { SITE } from '@/lib/constants'
import { work } from '@/data/work'
import { Mail, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'CV',
  description: `${SITE.name} — gyvenimo aprašymas.`,
}

export default function CVPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-24 pt-32">
      <header className="space-y-3 border-b border-foreground/10 pb-8">
        <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
          Curriculum Vitae
        </p>
        <h1 className="text-4xl font-medium tracking-tight md:text-5xl">
          {SITE.name}
        </h1>
        <p className="font-mono text-sm text-foreground/60">
          Software Engineer · AI Specialist
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 font-mono text-xs text-foreground/60">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-3 w-3" />
            {SITE.location}
          </span>
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center gap-2 hover:text-foreground"
          >
            <Mail className="h-3 w-3" />
            {SITE.email}
          </a>
        </div>
      </header>

      <section className="mt-10 space-y-6">
        <h2 className="font-mono text-xs uppercase tracking-widest text-foreground/50">
          Patirtis
        </h2>
        <ul className="space-y-6">
          {work.map((w) => (
            <li key={w.slug} className="space-y-1">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-medium">
                  {w.role} · {w.company}
                </h3>
                <span className="shrink-0 font-mono text-xs text-foreground/50">
                  {w.period}
                </span>
              </div>
              <p className="font-mono text-xs text-foreground/50">
                {w.location}
              </p>
              <p className="text-sm text-foreground/80">{w.summary}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="font-mono text-xs uppercase tracking-widest text-foreground/50">
          Įgūdžiai
        </h2>
        <p className="text-sm text-foreground/80">
          {/* TODO: užpildyti realiais įgūdžiais */}
          TypeScript, React, Next.js, Node.js, Python, LLM integracijos, AWS,
          PostgreSQL.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="font-mono text-xs uppercase tracking-widest text-foreground/50">
          Išsilavinimas
        </h2>
        <p className="text-sm text-foreground/80">
          {/* TODO: pridėti išsilavinimą */}
          TODO.
        </p>
      </section>
    </main>
  )
}
