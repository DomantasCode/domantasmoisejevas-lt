import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import {
  Instrument_Serif,
  Fraunces,
  Bricolage_Grotesque,
  IBM_Plex_Mono,
} from 'next/font/google'

const instrumentSerif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-serif',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-display',
  display: 'swap',
  axes: ['SOFT', 'WONK', 'opsz'],
})

const bricolage = Bricolage_Grotesque({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-grotesque',
  display: 'swap',
})

const plexMono = IBM_Plex_Mono({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-plex-mono',
  display: 'swap',
})
import { Analytics } from '@vercel/analytics/next'
import { SITE } from '@/lib/constants'
import { ThemeProvider } from '@/components/shared/ThemeProvider'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { LenisProvider } from '@/components/shared/LenisProvider'
import { AutoTheme } from '@/components/shared/AutoTheme'
import { CustomCursor } from '@/components/shared/CustomCursor'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — Software Engineer & AI Specialist`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  openGraph: {
    title: SITE.name,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: 'lt_LT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.name,
    description: SITE.description,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="lt"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} ${instrumentSerif.variable} ${fraunces.variable} ${bricolage.variable} ${plexMono.variable}`}
    >
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider>
          <AutoTheme />
          <CustomCursor />
          <LenisProvider>
            <Header />
            {children}
            <Footer />
          </LenisProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
