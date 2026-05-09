import Link from 'next/link'
import { hobbies } from '@/data/hobbies'

const ACCENT: Record<string, string> = {
  Sportas: 'var(--color-tangerine)',
  Muzika: 'var(--color-electric)',
  Kūryba: 'var(--color-cobalt)',
  Mokymasis: 'var(--color-mint)',
  Kita: 'var(--color-navy)',
}

export function HomeHobbies() {
  return (
    <section
      className="relative overflow-hidden noise"
      style={{ background: 'var(--color-canary)', color: 'var(--color-navy)' }}
    >
      {/* Watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[5%] -left-[4%] z-0 select-none font-display italic font-light leading-none text-navy/[0.07]"
        style={{ fontSize: 'clamp(15rem, 45vw, 50rem)' }}
      >
        05
      </div>

      <div className="relative z-10 mx-auto max-w-[110rem] px-6 py-32 md:px-10 md:py-44">
        <div className="mb-16 flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-navy/65">
          <div className="flex items-center gap-3">
            <span className="text-tangerine">[05]</span>
            <span>module/hobbies</span>
          </div>
          <Link
            href="/hobbies"
            className="hidden items-center gap-2 text-navy hover:text-cream md:inline-flex"
          >
            ↘ all hobbies
          </Link>
        </div>

        <h2
          className="font-display font-light leading-[0.84] tracking-[-0.04em]"
          style={{ fontSize: 'clamp(3rem, 13vw, 14rem)' }}
        >
          <span className="block">when</span>
          <span className="block italic font-normal text-tangerine">
            i&apos;m / not coding
          </span>
        </h2>

        {/* Sticker-stack hobby cards */}
        <div className="relative mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hobbies.map((h, idx) => {
            const accent = ACCENT[h.category] ?? ACCENT.Kita
            const rotate = [-3, 2, -1.5][idx] ?? 0
            return (
              <Link
                key={h.slug}
                href={`/hobbies/${h.slug}`}
                className="group relative flex h-full flex-col gap-5 border-2 border-navy bg-cream p-6 transition-transform hover:-translate-y-2 md:p-8"
                style={{
                  rotate: `${rotate}deg`,
                  boxShadow: '8px 8px 0 0 var(--color-navy)',
                }}
              >
                {/* Big number */}
                <div className="flex items-baseline justify-between">
                  <span
                    className="font-display text-5xl font-light leading-none tracking-tight md:text-6xl"
                    style={{ color: accent }}
                  >
                    0{idx + 1}
                  </span>
                  <span
                    className="border-2 border-navy bg-cream px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em]"
                    style={{ color: accent }}
                  >
                    {h.category}
                  </span>
                </div>

                <h3 className="font-display text-3xl font-normal leading-[1.05] tracking-tight md:text-4xl">
                  {h.title}
                </h3>

                {h.since && (
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-navy/55">
                    {h.since}
                  </p>
                )}

                <p className="text-sm leading-relaxed text-navy/70 md:text-base">
                  {h.summary}
                </p>

                <span className="mt-auto inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-navy">
                  read{' '}
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
