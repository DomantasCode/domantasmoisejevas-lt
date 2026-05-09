import Link from 'next/link'
import { SITE } from '@/lib/constants'

export function HomeContact() {
  return (
    <section
      className="relative overflow-hidden noise"
      style={{ background: 'var(--color-navy)', color: 'var(--color-cream)' }}
    >
      {/* Watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[10%] -left-[5%] z-0 select-none font-display italic font-light leading-none text-cream/[0.05]"
        style={{ fontSize: 'clamp(15rem, 50vw, 60rem)' }}
      >
        06
      </div>

      <div className="relative z-10 mx-auto max-w-[110rem] px-6 py-32 md:px-10 md:py-44">
        <div className="mb-16 flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-cream/60">
          <div className="flex items-center gap-3">
            <span className="text-mint">[06]</span>
            <span>module/contact</span>
          </div>
          <span className="hidden md:inline">end of stream ▮</span>
        </div>

        <p
          className="font-display font-light italic leading-[0.9] tracking-[-0.04em] text-canary"
          style={{ fontSize: 'clamp(2rem, 8vw, 8rem)' }}
        >
          let&apos;s build
        </p>
        <p
          className="font-display font-light leading-[0.86] tracking-[-0.04em] text-cream"
          style={{ fontSize: 'clamp(2.2rem, 9vw, 9rem)' }}
        >
          something{' '}
          <span className="italic font-normal text-tangerine">unhinged</span>.
        </p>

        {/* HUGE mailto link */}
        <a
          href={`mailto:${SITE.email}`}
          className="group mt-16 block break-all border-y-2 border-cream/30 py-6 font-display font-light leading-none tracking-[-0.03em] text-cream transition-colors hover:text-mint"
          style={{ fontSize: 'clamp(2rem, 8vw, 7rem)' }}
        >
          <span className="inline-flex items-baseline gap-4">
            <span className="text-mint group-hover:text-cream">→</span>
            {SITE.email}
          </span>
        </a>

        <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-6 font-mono text-xs uppercase tracking-[0.25em] text-cream/65">
          <Link href="/contact" className="hover:text-canary">
            ↘ via form
          </Link>
          <a
            href={SITE.social.find((s) => s.type === 'linkedin')?.url ?? '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-mint"
          >
            ↗ linkedin
          </a>
          <a
            href={SITE.social.find((s) => s.type === 'instagram')?.url ?? '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-tangerine"
          >
            ↗ instagram
          </a>
          <a
            href={SITE.social.find((s) => s.type === 'github')?.url ?? '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-electric"
          >
            ↗ github
          </a>
          <a
            href={SITE.social.find((s) => s.label.includes('Shaika'))?.url ?? '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-canary"
          >
            ↗ youtube/shaika
          </a>
        </div>
      </div>
    </section>
  )
}
