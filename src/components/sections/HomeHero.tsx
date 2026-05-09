'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { MeshGradientClient } from '@/components/sections/MeshGradientClient'

const ROLES = [
  { label: 'software/engineer', accent: '#4fc683' },
  { label: 'ai/architect', accent: '#7b4dff' },
  { label: 'wakepark/rider', accent: '#ff8040' },
  { label: 'world/wanderer', accent: '#fdbd03' },
]

export function HomeHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const [roleIdx, setRoleIdx] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const lines = sectionRef.current?.querySelectorAll('.line-wrap')
      if (lines) {
        gsap.fromTo(
          lines,
          { yPercent: 110, rotate: 4 },
          {
            yPercent: 0,
            rotate: 0,
            duration: 1.6,
            ease: 'expo.out',
            stagger: 0.14,
          }
        )
      }
      gsap.fromTo(
        '.hero-fade',
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          stagger: 0.08,
          ease: 'power3.out',
          delay: 0.55,
        }
      )
      gsap.fromTo(
        '.sticker',
        { opacity: 0, scale: 0.8, rotate: 0 },
        {
          opacity: 1,
          scale: 1,
          rotate: (i: number) => [-12, 8, -6, 14, -10][i] ?? 0,
          duration: 0.8,
          ease: 'back.out(1.6)',
          delay: 1.1,
          stagger: 0.07,
        }
      )
      gsap.to('.bracket', {
        rotate: '+=10',
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.4,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const t = setInterval(
      () => setRoleIdx((i) => (i + 1) % ROLES.length),
      2400
    )
    return () => clearInterval(t)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative isolate min-h-[100svh] overflow-hidden"
      style={{ background: '#040224' }}
    >
      {/* Animated WebGL mesh gradient */}
      <MeshGradientClient />

      {/* Top-corner meta grid */}
      <div className="hero-fade pointer-events-none absolute inset-x-0 top-24 z-10 flex items-baseline justify-between px-6 font-mono text-[10px] uppercase tracking-[0.25em] text-cream/55 md:px-10">
        <div className="flex items-center gap-3">
          <span className="text-mint">[01]</span>
          <span>module/hero</span>
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <span className="text-canary">●</span>
          <span>n44.41° / e8.93°</span>
          <span className="text-cream/30">|</span>
          <span>genoa, italy</span>
        </div>
        <div className="flex items-center gap-3">
          <span>{new Date().getFullYear()}</span>
          <span className="text-tangerine">→</span>
        </div>
      </div>

      {/* Massive [ ] brackets framing the title */}
      <div
        aria-hidden
        className="bracket pointer-events-none absolute left-2 top-1/2 z-[2] -translate-y-1/2 select-none font-display font-light leading-none text-mint/60 md:left-6"
        style={{ fontSize: 'clamp(8rem, 28vw, 28rem)' }}
      >
        [
      </div>
      <div
        aria-hidden
        className="bracket pointer-events-none absolute right-2 top-1/2 z-[2] -translate-y-1/2 select-none font-display font-light leading-none text-electric/60 md:right-6"
        style={{ fontSize: 'clamp(8rem, 28vw, 28rem)' }}
      >
        ]
      </div>

      {/* Watermark section index (huge) */}
      <div
        aria-hidden
        className="hero-fade pointer-events-none absolute bottom-[6%] right-[3%] z-[1] select-none font-display italic font-light leading-none text-cream/[0.06]"
        style={{ fontSize: 'clamp(10rem, 35vw, 36rem)' }}
      >
        01
      </div>

      {/* TITLE — center stage */}
      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
        <h1
          className="font-display font-light leading-[0.82] tracking-[-0.04em] text-cream"
          style={{ fontSize: 'clamp(3.2rem, 17vw, 16rem)' }}
        >
          <span className="block overflow-hidden">
            <span className="line-wrap inline-block uppercase">DOMANTAS</span>
          </span>
          <span className="block overflow-hidden">
            <span className="line-wrap inline-block italic font-normal lowercase text-canary">
              moisejevas
            </span>
          </span>
        </h1>

        <div className="hero-fade mt-12 flex flex-wrap items-center justify-center gap-3 font-mono text-sm text-cream/70 md:text-base">
          <span className="text-mint">$</span>
          <span className="text-cream/40">whoami</span>
          <span className="text-cream/20">→</span>
          <span
            key={roleIdx}
            className="inline-block rounded-none border px-3 py-1.5"
            style={{
              borderColor: ROLES[roleIdx].accent,
              color: ROLES[roleIdx].accent,
              background: `${ROLES[roleIdx].accent}14`,
              transition: 'all 0.5s ease',
            }}
          >
            {ROLES[roleIdx].label}
          </span>
        </div>
      </div>

      {/* STICKER STACK — rotated badges around the edges */}
      <div className="sticker pointer-events-none absolute left-6 top-[18%] z-[3] hidden flex-col items-start gap-1 font-mono text-[10px] uppercase tracking-[0.2em] md:flex">
        <span
          className="border border-canary bg-canary px-2 py-0.5 text-navy"
          style={{ rotate: '-12deg' }}
        >
          v0.1 · wip
        </span>
      </div>
      <div className="sticker pointer-events-none absolute right-8 top-[22%] z-[3] hidden md:block">
        <div
          className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-mint bg-navy text-center font-mono text-[9px] uppercase tracking-[0.2em] text-mint"
          style={{ rotate: '8deg' }}
        >
          since
          <br />
          MMIII
        </div>
      </div>
      <div className="sticker pointer-events-none absolute bottom-[18%] left-12 z-[3] hidden md:block">
        <span
          className="border border-tangerine bg-tangerine/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-tangerine"
          style={{ rotate: '-6deg' }}
        >
          ↘ portfolio
        </span>
      </div>
      <div className="sticker pointer-events-none absolute bottom-[24%] right-16 z-[3] hidden md:block">
        <span
          className="border border-electric bg-electric/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-electric"
          style={{ rotate: '14deg' }}
        >
          AI architect
        </span>
      </div>
      <div className="sticker pointer-events-none absolute bottom-[10%] left-1/3 z-[3] hidden md:block">
        <span
          className="border border-cream/30 bg-cream/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-cream/70"
          style={{ rotate: '-10deg' }}
        >
          erasmus+ unige
        </span>
      </div>

      {/* Footer scroll cue */}
      <div className="hero-fade absolute bottom-6 left-1/2 z-10 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.4em] text-cream/40">
        scroll ↓ keep going
      </div>
    </section>
  )
}
