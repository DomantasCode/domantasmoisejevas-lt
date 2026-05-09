import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { countries } from '@/data/countries'
import { GlobeClient } from '@/components/sections/GlobeClient'
import { CountryStrip } from '@/components/sections/CountryStrip'
import { Counter } from '@/components/sections/Counter'

export const metadata: Metadata = {
  title: 'Kelionės',
  description: 'Šalys, kuriose lankiausi.',
}

// Continent classification (for the stat — quick & dirty)
const CONTINENT: Record<string, 'Europa' | 'Azija' | 'Afrika'> = {
  EG: 'Afrika',
  MA: 'Afrika',
  TR: 'Azija',
  CY: 'Azija',
}

export default function TravelsPage() {
  const visited = countries.filter((c) => c.visited)
  const continents = new Set(visited.map((c) => CONTINENT[c.code] ?? 'Europa'))
  const current = visited.find((c) => c.current)

  return (
    <>
      {/* HERO — full bleed */}
      <section className="relative min-h-[100svh] overflow-hidden">
        {/* Warm ambient lighting */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 70% 40%, rgb(251 146 60 / 0.18), transparent 60%),
              radial-gradient(ellipse 60% 80% at 20% 80%, rgb(244 114 88 / 0.12), transparent 55%),
              radial-gradient(ellipse 50% 40% at 50% 0%, rgb(96 165 250 / 0.10), transparent 60%)
            `,
          }}
        />

        {/* Grain overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-[0.07]"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E")',
          }}
        />

        <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-7xl grid-cols-1 items-center gap-8 px-6 pt-32 pb-20 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:pb-24">
          {/* LEFT — text */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-warm-orange/30 bg-warm-orange/10 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-warm-orange">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-warm-orange opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-warm-orange" />
              </span>
              live tracker
            </div>

            <h1 className="font-serif text-[clamp(3.5rem,9vw,7.5rem)] font-light leading-[0.95] tracking-tight">
              Žemė,
              <br />
              <span className="italic text-warm-orange">kurią</span>
              <br />
              paliečiau.
            </h1>

            <p className="max-w-md text-lg leading-relaxed text-foreground/70">
              Kiekviena šalis yra istorija, žmogus, akimirka. Tempk gaublį.
              Spausk, kur buvau — atversiu duris.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 border-t border-foreground/10 pt-8">
              <div>
                <div className="font-serif text-5xl font-light tracking-tight text-warm-orange md:text-6xl">
                  <Counter to={visited.length} />
                </div>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                  šalys
                </p>
              </div>
              <div>
                <div className="font-serif text-5xl font-light tracking-tight md:text-6xl">
                  <Counter to={continents.size} />
                </div>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                  žemynai
                </p>
              </div>
              <div>
                <div className="font-serif text-5xl font-light tracking-tight md:text-6xl">
                  ∞
                </div>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                  pildoma
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — globe */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full">
              {/* Glow halo */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 blur-3xl"
                style={{
                  background:
                    'radial-gradient(circle at center, rgb(251 146 60 / 0.35), transparent 60%)',
                }}
              />
              <GlobeClient />
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-widest text-foreground/40">
          scroll ↓
        </div>
      </section>

      {/* CURRENTLY IN */}
      {current && (
        <section className="relative border-y border-warm-orange/20 bg-warm-orange/5">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <div className="flex flex-col items-baseline justify-between gap-3 md:flex-row md:items-center">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-warm-orange">
                  Dabar
                </p>
                <h2 className="font-serif text-4xl font-light italic md:text-5xl">
                  {current.nameLt}
                </h2>
                {current.notes?.[0] && (
                  <p className="mt-1 text-sm text-foreground/60">
                    {current.notes[0]}
                  </p>
                )}
              </div>
              <Link
                href={`/travels/${current.code.toLowerCase()}`}
                className="group inline-flex items-center gap-2 rounded-full border border-warm-orange/40 bg-warm-orange/10 px-5 py-2 font-mono text-sm text-warm-orange transition-colors hover:bg-warm-orange/20"
              >
                Skaityti
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* COUNTRY LIST */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-warm-orange">
                Sąrašas
              </p>
              <h2 className="mt-2 font-serif text-4xl font-light tracking-tight md:text-5xl">
                Visos <span className="italic">{visited.length}</span> šalys
              </h2>
            </div>
            <p className="hidden font-mono text-xs text-foreground/50 sm:block">
              spausk šalį →
            </p>
          </div>

          <CountryStrip countries={visited} />
        </div>
      </section>
    </>
  )
}
