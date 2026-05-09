'use client'

import { Marquee } from '@/components/shared/Marquee'

export function MarqueeStrip({
  items,
  bg = 'canary',
  fg = 'navy',
  speed = 50,
  separator = '✦',
  italic = false,
  diagonal = false,
}: {
  items: string[]
  bg?: 'canary' | 'mint' | 'electric' | 'tangerine' | 'cobalt' | 'cream' | 'navy'
  fg?: 'canary' | 'mint' | 'electric' | 'tangerine' | 'cobalt' | 'cream' | 'navy'
  speed?: number
  separator?: string
  italic?: boolean
  diagonal?: boolean
}) {
  const style: React.CSSProperties = diagonal
    ? { transform: 'rotate(-3deg)', transformOrigin: 'center', margin: '-1.5rem 0' }
    : {}

  return (
    <div
      className="relative w-full overflow-hidden border-y-2 border-navy"
      style={{ background: `var(--color-${bg})`, color: `var(--color-${fg})` }}
    >
      <div className="py-5" style={style}>
        <div
          className={`font-display text-3xl font-light leading-none md:text-5xl ${italic ? 'italic' : 'uppercase'}`}
        >
          <Marquee items={items} speed={speed} separator={separator} />
        </div>
      </div>
    </div>
  )
}
