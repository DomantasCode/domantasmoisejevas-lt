'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'

const SUBTITLES = [
  'Software Engineer',
  'AI Specialist',
  'Explorer',
] as const

export function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % SUBTITLES.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      {/* Animated grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            'linear-gradient(rgb(var(--foreground) / 0.4) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--foreground) / 0.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage:
            'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          animation: 'grid-drift 22s linear infinite',
        }}
      />

      {/* Color accent bloom */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 55%, rgb(var(--accent) / 0.18), transparent 70%)',
          backgroundSize: '200% 200%',
          animation: 'gradient-shift 14s ease-in-out infinite',
        }}
      />

      <div className="relative z-10 px-6 text-center">
        {/* Status chip */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 font-mono text-[11px] text-foreground/60 backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-term-green opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-term-green" />
          </span>
          available · Genoa, Italy
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl font-medium tracking-tight md:text-7xl lg:text-8xl"
        >
          Domantas{' '}
          <span className="font-serif italic font-normal text-foreground/90">
            Moisejevas
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 font-mono text-sm text-foreground/60 md:text-base"
        >
          <span className="text-term-green">$</span>{' '}
          <span className="text-foreground/40">whoami</span>
          <br />
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-block text-term-cyan"
          >
            {SUBTITLES[index]}
          </motion.span>
        </motion.div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ animation: 'scroll-bounce 2s ease-in-out infinite' }}
      >
        <ChevronDown className="h-6 w-6 text-foreground/40" />
      </div>
    </section>
  )
}
