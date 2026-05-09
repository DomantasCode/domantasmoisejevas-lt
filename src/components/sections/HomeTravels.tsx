import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { countries } from '@/data/countries'
import { GlobeClient } from '@/components/sections/GlobeClient'
import { Counter } from '@/components/sections/Counter'
import { Reveal } from '@/components/shared/Reveal'

const CONTINENT: Record<string, 'EU' | 'AS' | 'AF'> = {
  EG: 'AF',
  MA: 'AF',
  TR: 'AS',
  CY: 'AS',
}

export function HomeTravels() {
  const visited = countries.filter((c) => c.visited)
  const continents = new Set(visited.map((c) => CONTINENT[c.code] ?? 'EU'))
  const current = visited.find((c) => c.current)

  return (
    <section className="relative overflow-hidden border-t border-foreground/10">
      {/* Warm ambient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 80% 50%, rgb(251 146 60 / 0.18), transparent 60%),
            radial-gradient(ellipse 50% 60% at 10% 80%, rgb(244 114 88 / 0.12), transparent 60%),
            radial-gradient(ellipse 40% 30% at 50% 0%, rgb(96 165 250 / 0.10), transparent 60%)
          `,
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:py-44">
        <Reveal className="mb-12 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/50">
          <span className="text-warm-orange">/03</span>
          <span className="h-px flex-1 max-w-[80px] bg-foreground/20" />
          <span>kelionės</span>
        </Reveal>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
          <div className="space-y-10">
            <Reveal>
              <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] font-light leading-[0.98] tracking-[-0.02em]">
                Žemė,
                <br />
                <span className="italic text-warm-orange">kurią</span>
                <br />
                paliečiau.
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="max-w-md text-base leading-relaxed text-foreground/70 md:text-lg">
                Kiekviena šalis — istorija, žmogus, akimirka. Tempk gaublį,
                spausk pin'ą — atversiu duris.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="grid grid-cols-3 gap-6 border-t border-foreground/10 pt-8">
                <div>
                  <div className="font-display text-5xl font-light text-warm-orange md:text-6xl">
                    <Counter to={visited.length} />
                  </div>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                    šalys
                  </p>
                </div>
                <div>
                  <div className="font-display text-5xl font-light md:text-6xl">
                    <Counter to={continents.size} />
                  </div>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                    žemynai
                  </p>
                </div>
                <div>
                  <div className="font-display text-5xl font-light md:text-6xl">
                    ∞
                  </div>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                    pildoma
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/travels"
                  className="group inline-flex items-center gap-2 rounded-full bg-warm-orange px-6 py-3 font-mono text-sm text-background transition-transform hover:-translate-y-0.5"
                >
                  Atrasti visas šalis
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                {current && (
                  <Link
                    href={`/travels/${current.code.toLowerCase()}`}
                    className="font-mono text-xs text-foreground/60 hover:text-foreground"
                  >
                    Dabar → {current.nameLt}
                  </Link>
                )}
              </div>
            </Reveal>
          </div>

          <div className="relative flex items-center justify-center">
            {/* Glow halo */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 blur-3xl"
              style={{
                background:
                  'radial-gradient(circle at center, rgb(91 157 255 / 0.4), rgb(251 146 60 / 0.15) 40%, transparent 70%)',
              }}
            />
            <GlobeClient />
          </div>
        </div>
      </div>
    </section>
  )
}
