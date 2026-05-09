'use client'

import dynamic from 'next/dynamic'

const MeshGradient = dynamic(
  () =>
    import('@/components/sections/MeshGradient').then((m) => m.MeshGradient),
  { ssr: false }
)

export function MeshGradientClient(
  props: React.ComponentProps<typeof MeshGradient>
) {
  return <MeshGradient {...props} />
}
