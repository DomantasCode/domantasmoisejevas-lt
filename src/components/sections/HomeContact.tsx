import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SITE } from '@/lib/constants'
import { Reveal } from '@/components/shared/Reveal'

export function HomeContact() {
  return (
    <section className="relative overflow-hidden border-t border-foreground/10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 50% 50%, rgb(96 165 250 / 0.12), transparent 65%),
            radial-gradient(ellipse 30% 30% at 0% 100%, rgb(251 146 60 / 0.10), transparent 70%)
          `,
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:py-44">
        <Reveal className="mb-12 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/50">
          <span className="text-warm-orange">/05</span>
          <span className="h-px flex-1 max-w-[80px] bg-foreground/20" />
          <span>kontaktas</span>
        </Reveal>

        <Reveal>
          <h2 className="font-display text-[clamp(3rem,9vw,9rem)] font-light leading-[0.95] tracking-[-0.03em]">
            Padarom{' '}
            <span className="italic text-warm-orange">kažką</span>{' '}
            kartu.
          </h2>
        </Reveal>

        <Reveal delay={0.2} className="mt-12 max-w-2xl">
          <p className="text-lg leading-relaxed text-foreground/70 md:text-xl">
            Atviras klientams, projektams, pokalbiams, kelionėms.
            Atsakau per dieną.
          </p>
        </Reveal>

        <Reveal delay={0.35} className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${SITE.email}`}
            className="group inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 font-mono text-base text-background transition-transform hover:-translate-y-0.5"
          >
            {SITE.email}
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <Link
            href="/contact"
            className="font-mono text-sm text-foreground/60 hover:text-foreground"
          >
            arba forma →
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
