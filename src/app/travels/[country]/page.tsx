import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { countries } from '@/data/countries'
import { PhotoGallery } from '@/components/shared/PhotoGallery'

export function generateStaticParams() {
  return countries.map((c) => ({ country: c.code.toLowerCase() }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>
}): Promise<Metadata> {
  const { country } = await params
  const item = countries.find((c) => c.code.toLowerCase() === country)
  if (!item) return {}
  return {
    title: item.nameLt,
    description: `Kelionės į ${item.nameLt}.`,
  }
}

export default async function TravelCountryPage({
  params,
}: {
  params: Promise<{ country: string }>
}) {
  const { country } = await params
  const item = countries.find((c) => c.code.toLowerCase() === country)
  if (!item) notFound()

  return (
    <main className="relative mx-auto max-w-3xl px-6 pb-24 pt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[50vh] opacity-50"
        style={{
          background:
            'radial-gradient(ellipse at 30% 0%, rgb(var(--accent) / 0.18), transparent 65%)',
        }}
      />

      <Link
        href="/travels"
        className="inline-flex items-center gap-2 font-mono text-xs text-warm-orange hover:opacity-70"
      >
        <ArrowLeft className="h-3 w-3" />
        Visos šalys
      </Link>

      <div className="mt-8 space-y-3">
        <p className="font-mono text-xs uppercase tracking-widest text-warm-orange">
          {item.code}
          {item.current && ' · gyvenu čia dabar'}
        </p>
        <h1 className="font-serif text-5xl font-light tracking-tight md:text-7xl">
          {item.nameLt}
        </h1>
        <p className="font-mono text-sm text-foreground/60">{item.name}</p>
      </div>

      {item.notes && item.notes.length > 0 && (
        <div className="mt-10 space-y-4 text-base leading-relaxed text-foreground/80 md:text-lg">
          {item.notes.map((n, i) => (
            <p key={i}>{n}</p>
          ))}
        </div>
      )}

      <div className="mt-12">
        <PhotoGallery
          images={item.images}
          alt={item.nameLt}
          emptyHint={`Įmesk nuotraukas į /public/photos/travels/${item.code.toLowerCase()}/ ir pridėk path į src/data/countries.ts → ${item.code} → images[]`}
        />
      </div>
    </main>
  )
}
