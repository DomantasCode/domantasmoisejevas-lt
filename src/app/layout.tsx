import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { SITE } from '@/lib/constants'
import { ThemeProvider } from '@/components/shared/ThemeProvider'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { LenisProvider } from '@/components/shared/LenisProvider'
import { AutoTheme } from '@/components/shared/AutoTheme'
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
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider>
          <AutoTheme />
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
