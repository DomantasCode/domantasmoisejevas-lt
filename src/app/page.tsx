import { HomeHero } from '@/components/sections/HomeHero'
import { HomeAbout } from '@/components/sections/HomeAbout'
import { HomeWork } from '@/components/sections/HomeWork'
import { HomeTravels } from '@/components/sections/HomeTravels'
import { HomeHobbies } from '@/components/sections/HomeHobbies'
import { HomeContact } from '@/components/sections/HomeContact'
import { Marquee } from '@/components/shared/Marquee'

const TICKER_TOP = [
  'Software Engineer',
  'AI Specialist',
  'Wake-park Rider',
  '20 šalių',
  'Genoa, IT',
  'available 2026',
  'AI Growth & Innovation Architect',
]

const TICKER_BOTTOM = [
  'kuriu ateitį',
  'keičiu pasaulį į gera',
  'design × engineering × AI',
  'lentų sportai · gitara · krepšinis',
  'open to interesting work',
]

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <div className="relative border-y border-foreground/10 bg-foreground py-5 font-display text-3xl text-background md:text-4xl">
        <Marquee items={TICKER_TOP} speed={50} />
      </div>

      <HomeAbout />
      <HomeWork />
      <HomeTravels />
      <HomeHobbies />

      <div className="relative border-y border-foreground/10 bg-warm-orange py-5 font-display text-3xl italic text-background md:text-4xl">
        <Marquee items={TICKER_BOTTOM} speed={45} separator="—" />
      </div>

      <HomeContact />
    </>
  )
}
