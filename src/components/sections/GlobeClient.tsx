'use client'

import dynamic from 'next/dynamic'

const EarthGlobe = dynamic(
  () => import('@/components/sections/EarthGlobe').then((m) => m.EarthGlobe),
  {
    ssr: false,
    loading: () => (
      <div className="relative aspect-square w-full max-w-[640px]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-32 w-32 animate-pulse rounded-full bg-foreground/5" />
        </div>
      </div>
    ),
  }
)

export function GlobeClient() {
  return <EarthGlobe />
}
