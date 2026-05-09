import type { Metadata } from 'next'
import { MapPin, Mail } from 'lucide-react'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Apie',
  description: `${SITE.name} — apie mane.`,
}

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-24 pt-32">
      <div className="space-y-10">
        <div className="space-y-3">
          <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
            Apie mane
          </p>
          <h1 className="text-4xl font-medium tracking-tight md:text-5xl">
            {SITE.name}
          </h1>
          <p className="font-mono text-sm text-foreground/60">{SITE.headline}</p>
        </div>

        <div className="space-y-5 text-base leading-relaxed text-foreground/80 md:text-lg">
          <p>
            Kuriu ateities sprendimus pasitelkdamas technologijas ir kūrybinę
            viziją, vedinas misijos keisti pasaulį į gera. 🗺️
          </p>
          <p>
            Dirbu sunkiau nei dauguma, nes esu susitelkęs į kūrimą to nuostabaus
            gyvenimo, kurį noriu nugyventi. 🚀
          </p>
          <p>
            Šiuo metu esu Erasmus+ mainuose <em>University of Genoa</em> ir
            studijuoju AI bei Computer Science. Pagrindinė bazė — VILNIUS TECH,
            kur baigiu Computer Software Engineering bakalaurą. Dirbu su VMI
            kaip <span className="font-mono text-foreground">AI Growth &amp; Innovation Architect</span>{' '}
            ir vienasmenėje agentūroje{' '}
            <span className="font-mono text-foreground">MozeTech</span>.
          </p>
        </div>

        <div className="flex flex-col gap-3 border-t border-foreground/10 pt-8 font-mono text-sm text-foreground/60 sm:flex-row sm:gap-8">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            {SITE.location}
          </div>
          <a
            href={`mailto:${SITE.email}`}
            className="flex items-center gap-2 hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
            {SITE.email}
          </a>
        </div>
      </div>
    </main>
  )
}
