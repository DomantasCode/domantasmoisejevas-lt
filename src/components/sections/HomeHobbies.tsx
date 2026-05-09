import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { hobbies } from '@/data/hobbies'
import { Reveal, RevealStagger, RevealItem } from '@/components/shared/Reveal'

const COLORS: Record<string, string> = {
  Sportas: 'bg-warm-orange/10 text-warm-orange border-warm-orange/30',
  Muzika: 'bg-warm-rose/10 text-warm-rose border-warm-rose/30',
  Kūryba: 'bg-warm-teal/10 text-warm-teal border-warm-teal/30',
  Mokymasis: 'bg-warm-amber/10 text-warm-amber border-warm-amber/30',
  Kita: 'bg-foreground/5 text-foreground/60 border-foreground/20',
}

export function HomeHobbies() {
  return (
    <section className="relative overflow-hidden border-t border-foreground/10 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-32 md:py-44">
        <Reveal className="mb-12 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/50">
          <span className="text-warm-orange">/04</span>
          <span className="h-px flex-1 max-w-[80px] bg-foreground/20" />
          <span>hobiai</span>
        </Reveal>

        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[1.02] tracking-[-0.02em]">
              Kai{' '}
              <span className="italic text-warm-orange">nedirbu</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <Link
              href="/hobbies"
              className="group inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-2 font-mono text-sm transition-colors hover:border-warm-orange hover:text-warm-orange"
            >
              Visi hobiai
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        <RevealStagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {hobbies.map((h, idx) => (
            <RevealItem key={h.slug}>
              <Link
                href={`/hobbies/${h.slug}`}
                className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-foreground/10 bg-card p-7 transition-all hover:-translate-y-1 hover:border-warm-orange/40 hover:shadow-2xl hover:shadow-warm-orange/10"
                style={{
                  transform: `rotate(${idx % 2 === 0 ? '-0.4deg' : '0.4deg'})`,
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <span
                    className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest ${COLORS[h.category] ?? COLORS.Kita}`}
                  >
                    {h.category}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-foreground/30 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <h3 className="font-display text-3xl font-light tracking-tight md:text-4xl">
                  {h.title}
                </h3>
                {h.since && (
                  <p className="font-mono text-[11px] text-foreground/50">
                    {h.since}
                  </p>
                )}
                <p className="text-sm leading-relaxed text-foreground/70">
                  {h.summary}
                </p>
              </Link>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
