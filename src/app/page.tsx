import { HomeHero } from '@/components/sections/HomeHero'
import { HomeAbout } from '@/components/sections/HomeAbout'
import { HomeWork } from '@/components/sections/HomeWork'
import { HomeTravels } from '@/components/sections/HomeTravels'
import { HomeHobbies } from '@/components/sections/HomeHobbies'
import { HomeContact } from '@/components/sections/HomeContact'
import { MarqueeStrip } from '@/components/sections/MarqueeStrip'

const TICKER_1 = [
  'AVAILABLE FOR WORK',
  '·',
  'AI INTEGRATION',
  '·',
  'WEB DEVELOPMENT',
  '·',
  'CREATIVE DIRECTION',
  '·',
  'GENOA → REMOTE',
  '·',
]

const TICKER_2 = [
  'kuriu ateitį',
  'keičiu pasaulį į gera',
  'design × engineering × ai',
  'lentų sportai · gitara · krepšinis',
  'open to interesting work',
]

const TICKER_3 = [
  'MMXXVI',
  '∞',
  'V0.1',
  '@DOMMANTAS',
  'WORLD/19',
  'GENOA · IT',
  'BUILT WITH PURPOSE',
]

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <MarqueeStrip
        items={TICKER_1}
        bg="canary"
        fg="navy"
        speed={45}
        separator="✦"
        diagonal
      />

      <HomeAbout />

      <MarqueeStrip
        items={TICKER_2}
        bg="electric"
        fg="cream"
        speed={50}
        separator="—"
        italic
      />

      <HomeWork />
      <HomeTravels />
      <HomeHobbies />

      <MarqueeStrip
        items={TICKER_3}
        bg="cream"
        fg="navy"
        speed={55}
        separator="●"
      />

      <HomeContact />
    </>
  )
}
