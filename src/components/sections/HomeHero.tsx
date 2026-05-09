'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const ROLES = [
  { word: 'Software', accent: 'Engineer' },
  { word: 'AI', accent: 'Specialist' },
  { word: 'Wake-park', accent: 'Rider' },
  { word: 'World', accent: 'Wanderer' },
]

export function HomeHero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const [roleIdx, setRoleIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(
      () => setRoleIdx((i) => (i + 1) % ROLES.length),
      2400
    )
    return () => clearInterval(t)
  }, [])

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden"
    >
      {/* Animated grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            'linear-gradient(rgb(var(--foreground) / 0.4) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--foreground) / 0.4) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse at center, black 28%, transparent 78%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at center, black 28%, transparent 78%)',
          animation: 'grid-drift 24s linear infinite',
        }}
      />

      {/* Color blooms */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 50% 35% at 50% 60%, rgb(96 165 250 / 0.18), transparent 70%),
            radial-gradient(ellipse 30% 30% at 80% 20%, rgb(251 146 60 / 0.12), transparent 70%),
            radial-gradient(ellipse 30% 25% at 15% 75%, rgb(244 114 88 / 0.10), transparent 70%)
          `,
        }}
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 px-6 text-center"
      >
        {/* Status chip */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 font-mono text-[11px] text-foreground/70 backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-term-green opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-term-green" />
          </span>
          available · Genoa, Italy · 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(3rem,11vw,11rem)] font-light leading-[0.92] tracking-[-0.02em]"
        >
          Domantas
          <br />
          <span className="italic text-shine">Moisejevas</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 flex items-center justify-center gap-3 font-mono text-sm text-foreground/60 md:text-base"
        >
          <span className="text-term-green">$</span>
          <span className="text-foreground/40">whoami</span>
          <span className="text-foreground/20">→</span>
          <motion.span
            key={roleIdx}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-term-cyan"
          >
            {ROLES[roleIdx].word}{' '}
            <span className="text-warm-orange">{ROLES[roleIdx].accent}</span>
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Bottom corner cluster */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/40">
        scroll ↓
      </div>
    </section>
  )
}
