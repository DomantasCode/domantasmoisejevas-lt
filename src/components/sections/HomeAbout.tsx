import { Reveal, RevealStagger, RevealItem } from '@/components/shared/Reveal'

const FACTS = [
  ['nuo', '2003', 'gimimo metai'],
  ['baigtas', 'VILNIUS TECH', 'CSE bakalauras → 2027'],
  ['dabar', 'Genoa, IT', 'Erasmus+ AI @ UniGe'],
  ['darbas', 'VMI + MozeTech', 'AI Architect / Creator'],
] as const

export function HomeAbout() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 py-32 md:py-44">
        {/* Section index */}
        <Reveal className="mb-12 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/50">
          <span className="text-warm-orange">/01</span>
          <span className="h-px flex-1 max-w-[80px] bg-foreground/20" />
          <span>apie</span>
        </Reveal>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[1.02] tracking-[-0.02em]">
              Kuriu{' '}
              <span className="italic text-warm-orange">ateities</span>
              <br />
              sprendimus,
              <br />
              vedinas misijos{' '}
              <span className="italic">keisti pasaulį</span>{' '}
              į gera.
            </h2>
          </Reveal>

          <RevealStagger className="md:col-span-5 md:pt-8">
            <div className="space-y-6 text-base leading-relaxed text-foreground/70">
              <RevealItem>
                <p>
                  Dirbu sunkiau nei dauguma, nes esu susitelkęs į kūrimą to
                  nuostabaus gyvenimo, kurį noriu nugyventi.
                </p>
              </RevealItem>
              <RevealItem>
                <p>
                  Software inžinierius, AI architect, lentų sportų entuziastas,
                  20-ies šalių keliautojas ir šiuo metu — Erasmus studentas
                  Genoje.
                </p>
              </RevealItem>
              <RevealItem className="pt-6">
                <ul className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-foreground/10 pt-8 font-mono text-xs">
                  {FACTS.map(([k, v, sub]) => (
                    <li key={k} className="space-y-1">
                      <p className="text-[10px] uppercase tracking-widest text-foreground/40">
                        {k}
                      </p>
                      <p className="text-base font-medium text-foreground">
                        {v}
                      </p>
                      <p className="text-[10px] text-foreground/50">{sub}</p>
                    </li>
                  ))}
                </ul>
              </RevealItem>
            </div>
          </RevealStagger>
        </div>
      </div>
    </section>
  )
}
