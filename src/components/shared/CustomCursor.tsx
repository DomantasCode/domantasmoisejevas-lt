'use client'

import { useEffect, useRef, useState } from 'react'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    // Disable on touch / coarse pointers
    if (window.matchMedia('(pointer: coarse)').matches) return
    setEnabled(true)

    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let rx = mx
    let ry = my
    let raf = 0

    function onMove(e: MouseEvent) {
      mx = e.clientX
      my = e.clientY
      const target = e.target as HTMLElement | null
      if (target?.closest('a, button, [role="button"], canvas, input, textarea, label')) {
        setHovered(true)
      } else {
        setHovered(false)
      }
    }

    function tick() {
      // Dot snaps; ring eases
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`
      }
      rx += (mx - rx) * 0.18
      ry += (my - ry) * 0.18
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    window.addEventListener('mousemove', onMove)
    document.documentElement.style.cursor = 'none'

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      document.documentElement.style.cursor = ''
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 rounded-full bg-warm-orange mix-blend-difference"
      />
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full border border-foreground/40 mix-blend-difference transition-[width,height,border-color,background] duration-300 ease-out"
        style={{
          width: hovered ? 48 : 28,
          height: hovered ? 48 : 28,
          borderColor: hovered
            ? 'rgb(251 146 60)'
            : 'rgb(255 255 255 / 0.5)',
          background: hovered ? 'rgb(251 146 60 / 0.08)' : 'transparent',
        }}
      />
    </>
  )
}
