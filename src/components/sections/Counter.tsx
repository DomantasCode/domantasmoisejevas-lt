'use client'

import { animate, useInView, useMotionValue, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export function Counter({
  to,
  duration = 1.4,
}: {
  to: number
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-20%' })
  const value = useMotionValue(0)
  const rounded = useTransform(value, (v) => Math.floor(v).toString())

  useEffect(() => {
    if (!inView) return
    const controls = animate(value, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
    })
    return controls.stop
  }, [inView, to, duration, value])

  return <motion.span ref={ref}>{rounded}</motion.span>
}
