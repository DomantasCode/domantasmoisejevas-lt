'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { SITE } from '@/lib/constants'

const NAV = [
  { href: '/about', label: 'Apie' },
  { href: '/work', label: 'Darbai' },
  { href: '/travels', label: 'Kelionės' },
  { href: '/chat', label: 'Chat' },
  { href: '/contact', label: 'Kontaktai' },
] as const

export function Header() {
  const pathname = usePathname()

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-mono text-sm tracking-tight text-foreground hover:opacity-70"
        >
          {SITE.shortName}
        </Link>
        <nav className="flex items-center gap-6 font-mono text-sm">
          {NAV.map((item) => {
            const active = pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'transition-opacity hover:opacity-100',
                  active ? 'opacity-100' : 'opacity-50'
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
