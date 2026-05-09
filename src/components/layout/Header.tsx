'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { SITE } from '@/lib/constants'

const NAV = [
  { href: '/about', label: 'about', idx: '02' },
  { href: '/work', label: 'work', idx: '03' },
  { href: '/travels', label: 'atlas', idx: '04' },
  { href: '/hobbies', label: 'play', idx: '05' },
  { href: '/contact', label: 'contact', idx: '06' },
] as const

export function Header() {
  const pathname = usePathname()

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[110rem] items-center justify-between px-6 py-5 md:px-10">
        <Link
          href="/"
          className="pointer-events-auto group flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] mix-blend-difference text-cream hover:text-mint"
        >
          <span className="text-mint">●</span>
          <span>{SITE.shortName}/.lt</span>
        </Link>
        <nav className="pointer-events-auto hidden items-center gap-1 md:flex">
          {NAV.map((item) => {
            const active = pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'group flex items-center gap-2 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] mix-blend-difference transition-colors',
                  active ? 'text-mint' : 'text-cream/70 hover:text-cream'
                )}
              >
                <span className="opacity-50">[{item.idx}]</span>
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>
        {/* Mobile: simple menu link to /contact */}
        <Link
          href="/contact"
          className="pointer-events-auto font-mono text-[11px] uppercase tracking-[0.25em] mix-blend-difference text-cream md:hidden"
        >
          menu
        </Link>
      </div>
    </header>
  )
}
