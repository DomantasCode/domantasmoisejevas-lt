import Link from 'next/link'
import { countries } from '@/data/countries'
import { GlobeClient } from '@/components/sections/GlobeClient'
import { Counter } from '@/components/sections/Counter'

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
    <section
      className="relative overflow-hidden noise"
      style={{ background: 'var(--color-tangerine)', color: 'var(--color-navy)' }}
    >
      {/* Watermark "/04" */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[8%] -right-[4%] z-0 select-none font-display italic font-light leading-none text-navy/[0.07]"
        style={{ fontSize: 'clamp(15rem, 45vw, 50rem)' }}
      >
        04
      </div>

      <div className="relative z-10 mx-auto max-w-[110rem] px-6 py-32 md:px-10 md:py-44">
        <div className="mb-16 flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-navy/65">
          <div className="flex items-center gap-3">
            <span className="text-electric">[04]</span>
            <span>module/travels</span>
          </div>
          <Link
            href="/travels"
            className="hidden items-center gap-2 text-navy hover:text-cream md:inline-flex"
          >
            ↘ all places
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <h2
              className="font-display font-light leading-[0.84] tracking-[-0.04em]"
              style={{ fontSize: 'clamp(3rem, 13vw, 14rem)' }}
            >
              <span className="block">earth</span>
              <span className="block italic font-normal text-cream">
                that i / touched
              </span>
            </h2>

            {/* Counter row */}
            <div className="mt-16 grid grid-cols-3 gap-6 border-t-2 border-navy pt-8">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-navy/60">
                  countries
                </p>
                <p className="mt-2 font-display text-7xl font-light leading-none tracking-tight md:text-8xl">
                  <Counter to={visited.length} />
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-navy/60">
                  continents
                </p>
                <p className="mt-2 font-display text-7xl font-light leading-none tracking-tight md:text-8xl">
                  <Counter to={continents.size} />
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-navy/60">
                  more soon
                </p>
                <p className="mt-2 font-display text-7xl font-light leading-none tracking-tight md:text-8xl">
                  ∞
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link
                href="/travels"
                className="group inline-flex items-center gap-3 border-2 border-navy bg-navy px-6 py-3 font-mono text-sm uppercase tracking-[0.2em] text-cream transition-colors hover:bg-cream hover:text-navy"
              >
                explore atlas
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              {current && (
                <Link
                  href={`/travels/${current.code.toLowerCase()}`}
                  className="border-b-2 border-navy/0 font-mono text-sm uppercase tracking-[0.2em] text-navy hover:border-navy"
                >
                  ● now in {current.nameLt}
                </Link>
              )}
            </div>
          </div>

          {/* Globe */}
          <div className="relative flex items-center justify-center">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 blur-3xl"
              style={{
                background:
                  'radial-gradient(circle at center, rgb(123 77 255 / 0.5), transparent 60%)',
              }}
            />
            <GlobeClient />
          </div>
        </div>
      </div>
    </section>
  )
}
