'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'

const TRAVEL_PREFIXES = ['/travels', '/hobbies'] as const

function themeForPath(pathname: string): 'code' | 'travel' {
  return TRAVEL_PREFIXES.some((p) => pathname.startsWith(p)) ? 'travel' : 'code'
}

export function AutoTheme() {
  const pathname = usePathname()
  const { setTheme } = useTheme()

  useEffect(() => {
    setTheme(themeForPath(pathname))
  }, [pathname, setTheme])

  return null
}
