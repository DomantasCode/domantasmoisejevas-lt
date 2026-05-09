'use client'

import { cn } from '@/lib/utils'

export function Marquee({
  items,
  className,
  speed = 40,
  separator = '✦',
}: {
  items: string[]
  className?: string
  /** seconds to complete one full loop */
  speed?: number
  separator?: string
}) {
  // Duplicate items so the loop is seamless
  const stream = [...items, ...items]

  return (
    <div
      className={cn(
        'relative flex w-full overflow-hidden whitespace-nowrap',
        className
      )}
    >
      <div
        className="flex shrink-0 items-center gap-8 will-change-transform"
        style={{
          animation: `marquee-scroll ${speed}s linear infinite`,
        }}
      >
        {stream.map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            <span>{item}</span>
            <span className="text-warm-orange">{separator}</span>
          </span>
        ))}
      </div>
      <div
        className="flex shrink-0 items-center gap-8 will-change-transform"
        style={{
          animation: `marquee-scroll ${speed}s linear infinite`,
        }}
      >
        {stream.map((item, i) => (
          <span key={`b-${i}`} className="flex items-center gap-8">
            <span>{item}</span>
            <span className="text-warm-orange">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
