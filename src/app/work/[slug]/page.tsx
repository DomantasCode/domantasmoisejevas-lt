import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { work } from '@/data/work'
import { Terminal, Prompt } from '@/components/shared/Terminal'

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
    <main className="mx-auto max-w-4xl px-6 pb-24 pt-32">
      <Link
        href="/work"
        className="inline-flex items-center gap-2 font-mono text-xs text-foreground/60 hover:text-foreground"
      >
        <ArrowLeft className="h-3 w-3" />
        cd ../
      </Link>

      <Terminal title={`~/domantas/work/${item.slug}`} className="mt-6">
        <div className="space-y-5 px-5 py-6">
          <Prompt cwd={`~/domantas/work/${item.slug}`}>
            <span className="text-term-amber">cat</span>{' '}
            <span className="text-term-magenta">README.md</span>
          </Prompt>

          <div className="space-y-3 pl-2">
            <h1 className="text-2xl font-medium tracking-tight text-foreground md:text-3xl">
              # {item.company}
            </h1>
            <p className="text-foreground/80">
              <span className="text-term-cyan">role:</span> {item.role}
            </p>
            <p className="text-foreground/80">
              <span className="text-term-cyan">period:</span>{' '}
              <span className="text-term-amber">{item.period}</span>
              {item.current && (
                <span className="ml-3 inline-flex items-center gap-1 text-term-green">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-term-green" />
                  active
                </span>
              )}
            </p>
            <p className="text-foreground/80">
              <span className="text-term-cyan">type:</span> {item.type} ·{' '}
              {item.arrangement}
            </p>
            <p className="text-foreground/80">
              <span className="text-term-cyan">location:</span> {item.location}
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <p className="pl-2 text-foreground/70">
              <span className="text-term-magenta">## Summary</span>
            </p>
            <p className="pl-2 text-foreground/85">{item.summary}</p>
          </div>

          <div className="space-y-2 pt-2">
            <p className="pl-2 text-foreground/70">
              <span className="text-term-magenta">## Highlights</span>
            </p>
            <ul className="space-y-1.5 pl-2">
              {item.highlights.map((h, i) => (
                <li key={i} className="flex gap-3 text-foreground/85">
                  <span className="text-term-green">▸</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2 pt-2">
            <p className="pl-2 text-foreground/70">
              <span className="text-term-magenta">## Stack</span>
            </p>
            <div className="flex flex-wrap gap-2 pl-2">
              {item.skills.map((s) => (
                <span
                  key={s}
                  className="rounded border border-term-cyan/30 bg-term-cyan/5 px-2 py-0.5 text-xs text-term-cyan"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Terminal>
    </main>
  )
}
