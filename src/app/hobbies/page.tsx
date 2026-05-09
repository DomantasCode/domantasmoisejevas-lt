import type { Metadata } from 'next'
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
          Hobiai
        </p>
        <h1 className="text-4xl font-medium tracking-tight md:text-5xl">
          Ką darau kai nedirbu
        </h1>
        <p className="max-w-xl text-base text-foreground/70">
          Sąrašas pildomas.
        </p>
      </div>

      {hobbies.length === 0 ? (
        <div className="mt-12 rounded-lg border border-foreground/10 bg-foreground/5 p-6 font-mono text-xs text-foreground/50">
          TODO: užpildyti hobių sąrašą `src/data/hobbies.ts` faile.
        </div>
      ) : (
        <ul className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {hobbies.map((h) => (
            <li
              key={h.slug}
              className="rounded-lg border border-foreground/10 p-5 transition-colors hover:border-foreground/30 hover:bg-foreground/5"
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                {h.category}
              </p>
              <h2 className="mt-1 text-lg font-medium">{h.title}</h2>
              <p className="mt-2 text-sm text-foreground/70">{h.summary}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
