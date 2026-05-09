'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isTravel = theme === 'travel'

  return (
    <button
      type="button"
      aria-label={isTravel ? 'Pereiti į code režimą' : 'Pereiti į travel režimą'}
      onClick={() => setTheme(isTravel ? 'code' : 'travel')}
      className="flex h-8 w-8 items-center justify-center rounded-md text-foreground/60 transition-colors hover:bg-foreground/5 hover:text-foreground"
    >
      {mounted ? (
        isTravel ? (
          <Moon className="h-4 w-4" />
        ) : (
          <Sun className="h-4 w-4" />
        )
      ) : (
        <span className="h-4 w-4" />
      )}
    </button>
  )
}
