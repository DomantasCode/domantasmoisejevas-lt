'use client'

import dynamic from 'next/dynamic'

const Globe = dynamic(
  () => import('@/components/sections/Globe').then((m) => m.Globe),
  {
    ssr: false,
    loading: () => (
      <div className="relative aspect-square w-full max-w-[540px]">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="font-mono text-xs uppercase tracking-widest text-foreground/40">
            Kraunamas globe…
          </p>
        </div>
      </div>
    ),
  }
)

export function GlobeClient() {
  return <Globe />
}
