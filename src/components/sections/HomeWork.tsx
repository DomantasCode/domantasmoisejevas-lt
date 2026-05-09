'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { work } from '@/data/work'

export function HomeWork() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden noise"
      style={{ background: 'var(--color-electric)', color: 'var(--color-cream)' }}
    >
      {/* Watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[5%] -left-[5%] z-0 select-none font-display italic font-light leading-none text-cream/[0.07]"
        style={{ fontSize: 'clamp(15rem, 45vw, 50rem)' }}
      >
        03
      </div>

      <div className="relative z-10 mx-auto max-w-[110rem] px-6 py-32 md:px-10 md:py-44">
        <div className="mb-16 flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-cream/70">
          <div className="flex items-center gap-3">
            <span className="text-canary">[03]</span>
            <span>module/work</span>
          </div>
          <Link
            href="/work"
            className="hidden items-center gap-2 text-cream hover:text-canary md:inline-flex"
          >
            ↘ all positions
          </Link>
        </div>

        <h2
          className="font-display font-light leading-[0.86] tracking-[-0.04em]"
          style={{ fontSize: 'clamp(3rem, 14vw, 16rem)' }}
        >
          <span className="block">things</span>
          <span className="block italic font-normal text-canary">
            i build / now
          </span>
        </h2>

        {/* Work listings as a giant numbered table */}
        <ul className="mt-20 border-t-2 border-cream/30">
          {work.map((w, i) => (
            <li key={w.slug} className="border-b-2 border-cream/30">
              <Link
                href={`/work/${w.slug}`}
                className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-4 py-8 transition-colors hover:bg-cream hover:text-navy md:grid-cols-[auto_1fr_2fr_auto] md:gap-8 md:py-12"
              >
                <span className="font-mono text-xs text-cream/50 group-hover:text-navy/60 md:text-sm">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="flex flex-col gap-1">
                  <span className="font-display text-3xl font-light leading-none tracking-tight md:text-6xl">
                    {w.company}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream/60 group-hover:text-navy/60">
                    {w.role}
                  </span>
                </div>

                <p className="hidden text-sm leading-relaxed text-cream/70 group-hover:text-navy/70 md:block md:text-base">
                  {w.summary}
                </p>

                <div className="flex shrink-0 flex-col items-end gap-1 font-mono text-[10px] uppercase tracking-[0.2em]">
                  {w.current && (
                    <span className="border border-canary bg-canary px-2 py-0.5 text-navy">
                      ● live
                    </span>
                  )}
                  <span className="text-cream/60 group-hover:text-navy/60">
                    {w.period}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/work"
          className="mt-12 inline-flex items-center gap-3 border-2 border-cream bg-cream px-6 py-3 font-mono text-sm uppercase tracking-[0.2em] text-navy transition-colors hover:border-canary hover:bg-canary md:hidden"
        >
          all positions →
        </Link>
      </div>
    </section>
  )
}
