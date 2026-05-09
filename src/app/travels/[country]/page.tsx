import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { countries } from '@/data/countries'

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
    <main className="mx-auto max-w-3xl px-6 pb-24 pt-32">
      <Link
        href="/travels"
        className="inline-flex items-center gap-2 font-mono text-xs text-foreground/60 hover:text-foreground"
      >
        <ArrowLeft className="h-3 w-3" />
        Visos šalys
      </Link>

      <div className="mt-8 space-y-3">
        <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
          {item.code}
          {item.current && ' · gyvenu čia dabar'}
        </p>
        <h1 className="text-4xl font-medium tracking-tight md:text-5xl">
          {item.nameLt}
        </h1>
        <p className="font-mono text-sm text-foreground/60">{item.name}</p>
      </div>

      <p className="mt-10 text-base leading-relaxed text-foreground/70">
        {/* TODO: pridėti kelionių istoriją, nuotraukas, žemėlapį */}
        Šios šalies istorija dar bus papildyta.
      </p>
    </main>
  )
}
