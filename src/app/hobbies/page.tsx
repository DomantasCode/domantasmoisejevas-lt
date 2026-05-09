import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { hobbies } from '@/data/hobbies'

export const metadata: Metadata = {
  title: 'Hobiai',
  description: 'Ką darau kai nedirbu.',
}

export default function HobbiesPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 pb-24 pt-32">
      <div className="space-y-3">
        <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
          Hobiai · {hobbies.length}
        </p>
        <h1 className="text-4xl font-medium tracking-tight md:text-5xl">
          Ką darau kai nedirbu
        </h1>
      </div>

      <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {hobbies.map((h) => (
          <li key={h.slug}>
            <Link
              href={`/hobbies/${h.slug}`}
              className="group flex h-full flex-col gap-3 rounded-lg border border-foreground/10 p-6 transition-colors hover:border-foreground/30 hover:bg-foreground/5"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                  {h.category}
                  {h.since && ` · ${h.since}`}
                </p>
                <ArrowUpRight className="h-4 w-4 text-foreground/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <h2 className="text-xl font-medium">{h.title}</h2>
              <p className="text-sm text-foreground/70">{h.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
