import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { hobbies } from '@/data/hobbies'

export const metadata: Metadata = {
  title: 'Hobiai',
  description: 'Ką darau kai nedirbu.',
}

const CATEGORY_COLORS: Record<string, string> = {
  Sportas: 'text-warm-orange border-warm-orange/30',
  Muzika: 'text-warm-rose border-warm-rose/30',
  Kūryba: 'text-warm-teal border-warm-teal/30',
  Mokymasis: 'text-warm-amber border-warm-amber/30',
  Kita: 'text-foreground/60 border-foreground/20',
}

export default function HobbiesPage() {
  return (
    <main className="relative mx-auto max-w-4xl px-6 pb-24 pt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[55vh] opacity-50"
        style={{
          background:
            'radial-gradient(ellipse at 20% 0%, rgb(244 114 88 / 0.15), transparent 60%), radial-gradient(ellipse at 80% 10%, rgb(var(--accent) / 0.12), transparent 60%)',
        }}
      />

      <header className="space-y-3">
        <p className="font-mono text-xs uppercase tracking-widest text-warm-orange">
          Hobiai · {hobbies.length}
        </p>
        <h1 className="text-5xl font-light tracking-tight md:text-7xl">
          Ką darau{' '}
          <span className="font-serif italic">kai nedirbu</span>
        </h1>
      </header>

      <ul className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {hobbies.map((h, idx) => {
          const color = CATEGORY_COLORS[h.category] ?? CATEGORY_COLORS.Kita
          return (
            <li key={h.slug}>
              <Link
                href={`/hobbies/${h.slug}`}
                className="group relative flex h-full flex-col gap-3 overflow-hidden rounded-xl border border-foreground/10 bg-card p-6 transition-all hover:-translate-y-1 hover:border-warm-orange/40 hover:shadow-xl hover:shadow-warm-orange/10"
                style={{
                  transform: `rotate(${idx % 2 === 0 ? '-0.3deg' : '0.3deg'})`,
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <span
                    className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest ${color}`}
                  >
                    {h.category}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-foreground/30 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <h2 className="font-serif text-3xl font-medium tracking-tight">
                  {h.title}
                </h2>
                {h.since && (
                  <p className="font-mono text-[11px] text-foreground/50">
                    {h.since}
                  </p>
                )}
                <p className="text-sm leading-relaxed text-foreground/70">
                  {h.summary}
                </p>
              </Link>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
