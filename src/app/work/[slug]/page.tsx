import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { work } from '@/data/work'

export function generateStaticParams() {
  return work.map((w) => ({ slug: w.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const item = work.find((w) => w.slug === slug)
  if (!item) return {}
  return {
    title: `${item.role} @ ${item.company}`,
    description: item.summary,
  }
}

export default async function WorkSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const item = work.find((w) => w.slug === slug)
  if (!item) notFound()

  return (
    <main className="mx-auto max-w-3xl px-6 pb-24 pt-32">
      <Link
        href="/work"
        className="inline-flex items-center gap-2 font-mono text-xs text-foreground/60 hover:text-foreground"
      >
        <ArrowLeft className="h-3 w-3" />
        Visi darbai
      </Link>

      <div className="mt-8 space-y-3">
        <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
          {item.period} · {item.type} · {item.arrangement}
        </p>
        <h1 className="text-4xl font-medium tracking-tight md:text-5xl">
          {item.company}
        </h1>
        <p className="font-mono text-sm text-foreground/70">
          {item.role} · {item.location}
        </p>
      </div>

      <p className="mt-10 text-base leading-relaxed text-foreground/80 md:text-lg">
        {item.summary}
      </p>

      <ul className="mt-8 space-y-2 text-sm text-foreground/80">
        {item.highlights.map((h, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-foreground/40" />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap gap-2">
        {item.skills.map((s) => (
          <span
            key={s}
            className="rounded-md border border-foreground/10 bg-foreground/5 px-2 py-1 font-mono text-xs text-foreground/70"
          >
            {s}
          </span>
        ))}
      </div>
    </main>
  )
}
