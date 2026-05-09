import type { Metadata } from 'next'
import { MapPin, Mail } from 'lucide-react'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Apie',
  description: `${SITE.name} — apie mane, ką dirbu ir kur esu.`,
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
          <p className="font-mono text-sm text-foreground/60">
            Software Engineer · AI Specialist
          </p>
        </div>

        <div className="space-y-5 text-base leading-relaxed text-foreground/80 md:text-lg">
          <p>
            Esu programinės įrangos inžinierius, dirbantis su web ir AI
            sistemomis. Mane domina ta vieta, kur susikerta produktų
            inžinerija, dizainas ir didieji kalbos modeliai.
          </p>
          <p>
            Šiuo metu gyvenu ir dirbu iš {SITE.location}. Keliauju kiek galiu —
            iki šiol aplankiau virš 20 šalių, ir kiekviena jų vienaip ar kitaip
            paveikė tai, kaip galvoju apie produktus, žmones ir laiką.
          </p>
          <p>
            Šis tinklalapis — vieta, kur renku savo darbus, projektus, keliones
            ir mintis. Dalis jo veikia kaip{' '}
            <span className="font-mono text-foreground">AI Domantas</span> —
            pokalbių botas, kuris atsako už mane, kai manęs nėra.
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
