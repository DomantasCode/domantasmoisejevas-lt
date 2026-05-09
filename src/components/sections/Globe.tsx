'use client'

import createGlobe, { type COBEOptions } from 'cobe'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'
import { countries } from '@/data/countries'

const VISITED = countries.filter((c) => c.visited)

const MARKERS = VISITED.map((c) => ({
  location: [c.lat, c.lng] as [number, number],
  size: c.current ? 0.12 : 0.07,
}))

const THETA = 0.32
const BASE_OPTS = {
  devicePixelRatio: 2,
  phi: 0,
  theta: THETA,
  dark: 1,
  diffuse: 1.2,
  mapSamples: 16000,
  mapBrightness: 6,
  baseColor: [0.18, 0.22, 0.32] as [number, number, number],
  markerColor: [0.99, 0.6, 0.2] as [number, number, number],
  glowColor: [0.6, 0.75, 1] as [number, number, number],
} satisfies Partial<COBEOptions>

export function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<number | null>(null)
  const pointerMovement = useRef(0)
  const phiRef = useRef(0)
  const widthRef = useRef(0)
  const router = useRouter()
  const [hovered, setHovered] = useState<string | null>(null)

  const onResize = useCallback(() => {
    if (canvasRef.current) {
      widthRef.current = canvasRef.current.offsetWidth
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', onResize)
    onResize()

    const w = widthRef.current * 2
    const globe = createGlobe(canvasRef.current!, {
      ...BASE_OPTS,
      width: w,
      height: w,
      markers: MARKERS,
    })

    let frame = 0
    const loop = () => {
      if (pointerInteracting.current === null) {
        phiRef.current += 0.0035
      }
      const newW = widthRef.current * 2
      globe.update({
        phi: phiRef.current + pointerMovement.current,
        theta: THETA,
        width: newW,
        height: newW,
      })
      frame = requestAnimationFrame(loop)
    }
    frame = requestAnimationFrame(loop)

    setTimeout(() => {
      if (canvasRef.current) canvasRef.current.style.opacity = '1'
    }, 50)

    return () => {
      cancelAnimationFrame(frame)
      globe.destroy()
      window.removeEventListener('resize', onResize)
    }
  }, [onResize])

  function findNearestCountry(clientX: number, clientY: number) {
    const canvas = canvasRef.current
    if (!canvas) return null
    const rect = canvas.getBoundingClientRect()
    const cx = (clientX - rect.left) / rect.width - 0.5
    const cy = (clientY - rect.top) / rect.height - 0.5

    const r = Math.sqrt(cx * cx + cy * cy) * 2
    if (r > 0.95) return null

    const x = cx * 2
    const y = -cy * 2
    const z2 = 1 - x * x - y * y
    if (z2 < 0) return null
    const z = Math.sqrt(z2)

    const phi = phiRef.current + pointerMovement.current

    const yt = y * Math.cos(-THETA) - z * Math.sin(-THETA)
    const zt = y * Math.sin(-THETA) + z * Math.cos(-THETA)

    const xs = x * Math.cos(-phi) + zt * Math.sin(-phi)
    const zs = -x * Math.sin(-phi) + zt * Math.cos(-phi)

    const lat = Math.asin(yt) * (180 / Math.PI)
    const lng = Math.atan2(xs, zs) * (180 / Math.PI)

    let best: (typeof VISITED)[number] | null = null
    let bestD = 8
    for (const c of VISITED) {
      const dLat = c.lat - lat
      const dLng = ((c.lng - lng + 540) % 360) - 180
      const d = Math.sqrt(dLat * dLat + dLng * dLng)
      if (d < bestD) {
        bestD = d
        best = c
      }
    }
    return best
  }

  return (
    <div
      className="relative aspect-square w-full max-w-[600px]"
      style={{ contain: 'layout paint size' }}
    >
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current =
            e.clientX - pointerMovement.current * 100
          if (canvasRef.current) canvasRef.current.style.cursor = 'grabbing'
        }}
        onPointerUp={(e) => {
          if (pointerInteracting.current !== null) {
            const moved = Math.abs(
              e.clientX -
                (pointerInteracting.current + pointerMovement.current * 100)
            )
            if (moved < 5) {
              const country = findNearestCountry(e.clientX, e.clientY)
              if (country) {
                router.push(`/travels/${country.code.toLowerCase()}`)
              }
            }
          }
          pointerInteracting.current = null
          if (canvasRef.current) canvasRef.current.style.cursor = 'grab'
        }}
        onPointerOut={() => {
          pointerInteracting.current = null
          if (canvasRef.current) canvasRef.current.style.cursor = 'grab'
          setHovered(null)
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current
            pointerMovement.current = delta / 100
          }
          const country = findNearestCountry(e.clientX, e.clientY)
          setHovered(country?.nameLt ?? null)
          if (canvasRef.current) {
            canvasRef.current.style.cursor =
              pointerInteracting.current !== null
                ? 'grabbing'
                : country
                  ? 'pointer'
                  : 'grab'
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current
            pointerMovement.current = delta / 100
          }
        }}
        style={{
          width: '100%',
          height: '100%',
          cursor: 'grab',
          contain: 'layout paint size',
          opacity: 0,
          transition: 'opacity 0.6s ease',
        }}
      />

      <div
        className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-warm-orange/30 bg-background/80 px-3 py-1 font-mono text-xs text-warm-orange backdrop-blur transition-all"
        style={{
          opacity: hovered ? 1 : 0,
          transform: `translate(-50%, ${hovered ? 0 : 8}px)`,
        }}
      >
        {hovered ?? ''}
      </div>
    </div>
  )
}
