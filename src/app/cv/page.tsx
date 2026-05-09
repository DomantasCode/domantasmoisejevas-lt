import type { Metadata } from 'next'
import { Mail, MapPin } from 'lucide-react'
import { SITE } from '@/lib/constants'
import { work } from '@/data/work'
import { education, certifications } from '@/data/education'

export const metadata: Metadata = {
  title: 'CV',
  description: `${SITE.name} — gyvenimo aprašymas.`,
}

const TOP_SKILLS = ['Project Management', 'Artificial Intelligence (AI)']

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
        <p className="font-mono text-sm text-foreground/60">{SITE.headline}</p>
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

      <section className="mt-10 space-y-3">
        <h2 className="font-mono text-xs uppercase tracking-widest text-foreground/50">
          Top įgūdžiai
        </h2>
        <div className="flex flex-wrap gap-2">
          {TOP_SKILLS.map((s) => (
            <span
              key={s}
              className="rounded-md border border-foreground/10 bg-foreground/5 px-2 py-1 font-mono text-xs text-foreground/80"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-10 space-y-6">
        <h2 className="font-mono text-xs uppercase tracking-widest text-foreground/50">
          Patirtis
        </h2>
        <ul className="space-y-8">
          {work.map((w) => (
            <li key={w.slug} className="space-y-2">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-medium">
                  {w.role} · {w.company}
                </h3>
                <span className="shrink-0 font-mono text-xs text-foreground/50">
                  {w.period}
                </span>
              </div>
              <p className="font-mono text-xs text-foreground/50">
                {w.type} · {w.location} · {w.arrangement}
              </p>
              <p className="text-sm text-foreground/80">{w.summary}</p>
              <ul className="space-y-1 pt-2 text-sm text-foreground/70">
                {w.highlights.map((h, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-foreground/40" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-mono text-xs uppercase tracking-widest text-foreground/50">
          Išsilavinimas
        </h2>
        <ul className="space-y-5">
          {education.map((e) => (
            <li key={e.slug} className="space-y-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-base font-medium">{e.institution}</h3>
                <span className="shrink-0 font-mono text-xs text-foreground/50">
                  {e.period}
                </span>
              </div>
              <p className="text-sm text-foreground/80">
                {e.degree} · {e.field}
              </p>
              {e.notes && (
                <p className="text-xs text-foreground/60">{e.notes}</p>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-mono text-xs uppercase tracking-widest text-foreground/50">
          Sertifikatai
        </h2>
        <ul className="space-y-3">
          {certifications.map((c) => (
            <li key={c.slug} className="space-y-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-base font-medium">{c.title}</h3>
                <span className="shrink-0 font-mono text-xs text-foreground/50">
                  {c.issued}
                </span>
              </div>
              <p className="font-mono text-xs text-foreground/60">
                {c.issuer}
                {c.credentialId && ` · ID: ${c.credentialId}`}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
