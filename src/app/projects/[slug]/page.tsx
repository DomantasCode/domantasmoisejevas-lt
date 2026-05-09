import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { projects } from '@/data/projects'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.summary,
  }
}

export default async function ProjectSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

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
          Projektas · {project.year}
        </p>
        <h1 className="text-4xl font-medium tracking-tight md:text-5xl">
          {project.title}
        </h1>
        <p className="text-sm text-foreground/70">{project.summary}</p>
      </div>

      <div className="mt-10 space-y-6">
        <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-foreground/10 bg-foreground/5 px-2 py-1 font-mono text-xs text-foreground/70"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 font-mono text-sm">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:opacity-70"
            >
              Live <ArrowUpRight className="h-3 w-3" />
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:opacity-70"
            >
              Repo <ArrowUpRight className="h-3 w-3" />
            </a>
          )}
        </div>
      </div>
    </main>
  )
}
