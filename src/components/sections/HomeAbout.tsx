import Image from 'next/image'

const FACTS = [
  { k: 'BORN', v: '2003' },
  { k: 'BASE', v: 'Vilnius / Genoa' },
  { k: 'LEARN', v: 'CSE @ VILNIUS TECH' },
  { k: 'BUILD', v: 'AI @ VMI + MozeTech' },
] as const

export function HomeAbout() {
  return (
    <section
      className="relative overflow-hidden noise"
      style={{ background: 'var(--color-cream)', color: 'var(--color-navy)' }}
    >
      {/* HUGE watermark "/02" */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[8%] -right-[5%] z-0 select-none font-display italic font-light leading-none text-navy/[0.04]"
        style={{ fontSize: 'clamp(15rem, 45vw, 50rem)' }}
      >
        02
      </div>

      <div className="relative z-10 mx-auto max-w-[110rem] px-6 py-32 md:px-10 md:py-44">
        {/* Top label row */}
        <div className="mb-16 flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-navy/60">
          <div className="flex items-center gap-3">
            <span className="text-electric">[02]</span>
            <span>module/about</span>
          </div>
          <span className="hidden md:inline">scroll · {' '}↓</span>
        </div>

        {/* Massive editorial headline */}
        <h2
          className="font-display font-light leading-[0.86] tracking-[-0.04em]"
          style={{ fontSize: 'clamp(3rem, 12vw, 14rem)' }}
        >
          <span className="block">building</span>
          <span className="block italic font-normal text-electric">
            future / now
          </span>
          <span className="block">— for those</span>
          <span className="block italic font-normal">who notice.</span>
        </h2>

        {/* Two-column body */}
        <div className="mt-20 grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5 md:col-start-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-navy/50">
              ↘ raison d&apos;être
            </p>
            <p className="mt-6 font-display text-2xl leading-[1.2] tracking-tight md:text-3xl">
              Kuriu ateities sprendimus pasitelkdamas technologijas ir kūrybinę
              viziją, vedinas misijos{' '}
              <span className="italic text-tangerine">keisti pasaulį</span>.
            </p>
            <p className="mt-8 max-w-md text-base leading-relaxed text-navy/70 md:text-lg">
              Dirbu sunkiau nei dauguma, nes esu susitelkęs į kūrimą to nuostabaus
              gyvenimo, kurį noriu nugyventi. Inžinierius, AI architect, lentų
              sportų entuziastas, 19-os šalių keliautojas.
            </p>
          </div>

          {/* FACTS grid — bordered, monospace */}
          <div className="md:col-span-5 md:col-start-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-navy/50">
              ↘ stat block
            </p>
            <ul className="mt-6 grid grid-cols-2 border-l-2 border-t-2 border-navy">
              {FACTS.map((f) => (
                <li
                  key={f.k}
                  className="flex flex-col gap-2 border-b-2 border-r-2 border-navy bg-cream p-5"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-navy/50">
                    {f.k}
                  </span>
                  <span className="font-display text-2xl font-light leading-tight tracking-tight md:text-3xl">
                    {f.v}
                  </span>
                </li>
              ))}
            </ul>

            {/* Sticker badges */}
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <span
                className="border-2 border-navy bg-mint px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-navy"
                style={{ rotate: '-2deg' }}
              >
                hands-on
              </span>
              <span
                className="border-2 border-navy bg-electric px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-cream"
                style={{ rotate: '3deg' }}
              >
                AI-pilled
              </span>
              <span
                className="border-2 border-navy bg-tangerine px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-cream"
                style={{ rotate: '-1deg' }}
              >
                outdoor-coded
              </span>
              <span
                className="border-2 border-navy bg-cream px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-navy"
                style={{ rotate: '4deg' }}
              >
                lt → it
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
