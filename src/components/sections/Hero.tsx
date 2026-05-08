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
      {/* Subtle animated gradient */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgb(59 130 246 / 0.15), transparent 70%)',
          backgroundSize: '200% 200%',
          animation: 'gradient-shift 12s ease-in-out infinite',
        }}
      />

      <div className="relative z-10 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="font-sans text-5xl font-medium tracking-tight md:text-7xl lg:text-8xl"
        >
          Domantas Moisejevas
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 font-mono text-sm text-foreground/60 md:text-base"
        >
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="inline-block"
          >
            {SUBTITLES[index]}
          </motion.span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ animation: 'scroll-bounce 2s ease-in-out infinite' }}
      >
        <ChevronDown className="h-6 w-6 text-foreground/40" />
      </div>
    </section>
  )
}
