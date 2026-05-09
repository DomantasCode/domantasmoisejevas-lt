'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Country } from '@/data/countries'

export function CountryStrip({ countries }: { countries: Country[] }) {
  return (
    <ul className="grid grid-cols-2 gap-x-6 gap-y-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {countries.map((c, i) => (
        <motion.li
          key={c.code}
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, delay: i * 0.025 }}
        >
          <Link
            href={`/travels/${c.code.toLowerCase()}`}
            className="group flex items-baseline justify-between gap-2 border-b border-foreground/10 py-3 transition-colors hover:border-warm-orange/40"
          >
            <span className="flex items-baseline gap-2">
              <span className="font-serif text-base text-foreground transition-colors group-hover:text-warm-orange">
                {c.nameLt}
              </span>
              {c.current && (
                <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-warm-orange" />
              )}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/40 transition-colors group-hover:text-warm-orange/70">
              {c.code}
            </span>
          </Link>
        </motion.li>
      ))}
    </ul>
  )
}
