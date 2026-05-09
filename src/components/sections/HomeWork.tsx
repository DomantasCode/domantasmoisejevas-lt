import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { work } from '@/data/work'
import { Reveal, RevealStagger, RevealItem } from '@/components/shared/Reveal'

export function HomeWork() {
  const featured = work.slice(0, 3)

  return (
    <section className="relative overflow-hidden border-t border-foreground/10 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-32 md:py-44">
        <Reveal className="mb-12 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/50">
          <span className="text-warm-orange">/02</span>
          <span className="h-px flex-1 max-w-[80px] bg-foreground/20" />
          <span>darbai</span>
        </Reveal>

        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[1.02] tracking-[-0.02em]">
              Ką <span className="italic text-warm-orange">dirbu</span>{' '}
              dabar.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-2 font-mono text-sm transition-colors hover:border-warm-orange hover:text-warm-orange"
            >
              Visi
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        <RevealStagger className="divide-y divide-foreground/10 border-y border-foreground/10">
          {featured.map((w) => (
            <RevealItem key={w.slug}>
              <Link
                href={`/work/${w.slug}`}
                className="group grid grid-cols-1 items-baseline gap-4 py-8 transition-colors hover:bg-foreground/[0.02] md:grid-cols-[1fr_2fr_auto] md:gap-8"
              >
                <div className="flex items-baseline gap-3">
                  <h3 className="font-display text-3xl font-light tracking-tight md:text-4xl">
                    {w.company}
                  </h3>
                  {w.current && (
                    <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-term-green" />
                  )}
                </div>
                <p className="text-sm leading-relaxed text-foreground/60 md:text-base">
                  {w.role}
                  <span className="mx-3 text-foreground/30">·</span>
                  {w.summary}
                </p>
                <div className="flex items-center gap-3 font-mono text-xs text-foreground/40">
                  {w.period}
                  <ArrowUpRight className="h-4 w-4 text-foreground/30 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-warm-orange" />
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
