import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { work } from '@/data/work'
import { projects } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Darbai',
  description: 'Darbo patirtis ir projektai.',
}

export default function WorkPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-24 pt-32">
      <div className="space-y-3">
        <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
          Darbai
        </p>
        <h1 className="text-4xl font-medium tracking-tight md:text-5xl">
          Patirtis ir projektai
        </h1>
      </div>

      <section className="mt-16 space-y-2">
        <h2 className="font-mono text-xs uppercase tracking-widest text-foreground/50">
          Patirtis
        </h2>
        <ul className="divide-y divide-foreground/10">
          {work.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/work/${item.slug}`}
                className="group flex flex-col gap-1 py-5 transition-colors hover:bg-foreground/5"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-lg font-medium">{item.company}</span>
                  <span className="font-mono text-xs text-foreground/50">
                    {item.period}
                  </span>
                </div>
                <span className="text-sm text-foreground/70">
                  {item.role} · {item.location}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 space-y-2">
        <h2 className="font-mono text-xs uppercase tracking-widest text-foreground/50">
          Projektai
        </h2>
        <ul className="divide-y divide-foreground/10">
          {projects.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/projects/${p.slug}`}
                className="group flex items-center justify-between gap-4 py-5 transition-colors hover:bg-foreground/5"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-lg font-medium">{p.title}</span>
                  <span className="text-sm text-foreground/70">{p.summary}</span>
                </div>
                <div className="flex items-center gap-3 font-mono text-xs text-foreground/50">
                  {p.year}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
