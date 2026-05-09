import type { Metadata } from 'next'
import Link from 'next/link'
import { countries } from '@/data/countries'

export const metadata: Metadata = {
  title: 'Kelionės',
  description: 'Šalys, kuriose lankiausi.',
}

export default function TravelsPage() {
  const visited = countries.filter((c) => c.visited)

  return (
    <main className="mx-auto max-w-5xl px-6 pb-24 pt-32">
      <div className="space-y-3">
        <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
          Kelionės · {visited.length} šalys
        </p>
        <h1 className="text-4xl font-medium tracking-tight md:text-5xl">
          Kur buvau
        </h1>
        <p className="max-w-xl text-base text-foreground/70">
          Sąrašas pildomas. Vėliau čia atsiras 3D Globe ir kiekvienos šalies
          atskira istorija.
        </p>
      </div>

      <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {visited.map((c) => (
          <li key={c.code}>
            <Link
              href={`/travels/${c.code.toLowerCase()}`}
              className="group flex flex-col gap-1 rounded-lg border border-foreground/10 p-4 transition-colors hover:border-foreground/30 hover:bg-foreground/5"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-foreground/50">
                  {c.code}
                </span>
                {c.current && (
                  <span className="rounded-full bg-accent/20 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                    dabar
                  </span>
                )}
              </div>
              <span className="text-base font-medium">{c.nameLt}</span>
              <span className="text-xs text-foreground/50">{c.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
