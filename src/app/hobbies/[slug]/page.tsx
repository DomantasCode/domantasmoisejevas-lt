import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { hobbies } from '@/data/hobbies'
import { PhotoGallery } from '@/components/shared/PhotoGallery'

export function generateStaticParams() {
  return hobbies.map((h) => ({ slug: h.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const h = hobbies.find((x) => x.slug === slug)
  if (!h) return {}
  return {
    title: h.title,
    description: h.summary,
  }
}

export default async function HobbyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const h = hobbies.find((x) => x.slug === slug)
  if (!h) notFound()

  return (
    <main className="relative mx-auto max-w-3xl px-6 pb-24 pt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[45vh] opacity-50"
        style={{
          background:
            'radial-gradient(ellipse at 30% 0%, rgb(var(--accent) / 0.15), transparent 65%)',
        }}
      />

      <Link
        href="/hobbies"
        className="inline-flex items-center gap-2 font-mono text-xs text-warm-orange hover:opacity-70"
      >
        <ArrowLeft className="h-3 w-3" />
        Visi hobiai
      </Link>

      <div className="mt-8 space-y-3">
        <p className="font-mono text-xs uppercase tracking-widest text-warm-orange">
          {h.category}
          {h.since && ` · ${h.since}`}
        </p>
        <h1 className="font-serif text-5xl font-light tracking-tight md:text-7xl">
          {h.title}
        </h1>
        <p className="text-base text-foreground/70">{h.summary}</p>
      </div>

      <div className="mt-10 space-y-5 text-base leading-relaxed text-foreground/80 md:text-lg">
        {h.description.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {h.highlights && h.highlights.length > 0 && (
        <ul className="mt-8 space-y-2 text-sm text-foreground/80">
          {h.highlights.map((hl, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-foreground/40" />
              <span>{hl}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-12">
        <PhotoGallery
          images={h.images}
          alt={h.title}
          emptyHint={`Įmesk JPG/PNG į /public/photos/hobbies/ ir pridėk path į src/data/hobbies.ts → ${h.slug} → images[]`}
        />
      </div>
    </main>
  )
}
