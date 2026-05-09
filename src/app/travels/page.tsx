import type { Metadata } from 'next'
import Link from 'next/link'
import { countries } from '@/data/countries'
import { GlobeClient } from '@/components/sections/GlobeClient'

export const metadata: Metadata = {
  title: 'Kelionės',
  description: 'Šalys, kuriose lankiausi.',
}

export default function TravelsPage() {
  const visited = countries.filter((c) => c.visited)

  return (
    <main className="relative mx-auto max-w-6xl px-6 pb-24 pt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[60vh] opacity-60"
        style={{
          background:
            'radial-gradient(ellipse at 70% 0%, rgb(var(--accent) / 0.18), transparent 60%), radial-gradient(ellipse at 20% 10%, rgb(244 114 88 / 0.12), transparent 55%)',
        }}
      />

      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <header className="space-y-3">
          <p className="font-mono text-xs uppercase tracking-widest text-warm-orange">
            {visited.length} šalys · pildoma
          </p>
          <h1 className="text-5xl font-light tracking-tight md:text-7xl">
            <span className="font-serif italic">Kur</span> buvau
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-foreground/70">
            Žemė, kurią paliečiau. Tempk gaublį, spausk pin'ą — atversi šalies
            puslapį.
          </p>
        </header>

        <div className="flex justify-center">
          <GlobeClient />
        </div>
      </div>

      <h2 className="mt-20 font-mono text-xs uppercase tracking-widest text-warm-orange">
        Visos šalys
      </h2>

      <ul className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visited.map((c, idx) => (
          <li key={c.code}>
            <Link
              href={`/travels/${c.code.toLowerCase()}`}
              className="group relative block overflow-hidden rounded-xl border border-warm-orange/15 bg-card p-6 transition-all hover:-translate-y-1 hover:border-warm-orange/40 hover:shadow-xl hover:shadow-warm-orange/10"
              style={{
                transform: `rotate(${idx % 2 === 0 ? '-0.4deg' : '0.4deg'})`,
              }}
            >
              <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-warm-orange/30 font-serif text-xs italic text-warm-orange">
                {c.code}
              </div>

              {c.current && (
                <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-warm-orange px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-white">
                  <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                  čia dabar
                </span>
              )}

              <div className="mt-12">
                <h3 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">
                  {c.nameLt}
                </h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-widest text-foreground/50">
                  {c.name}
                </p>
              </div>

              {c.notes && c.notes[0] && (
                <p className="mt-4 line-clamp-2 text-sm text-foreground/60">
                  {c.notes[0]}
                </p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
