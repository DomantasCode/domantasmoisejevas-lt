export interface Hobby {
  slug: string
  title: string
  category: 'Sportas' | 'Muzika' | 'Kūryba' | 'Mokymasis' | 'Kita'
  since?: string
  summary: string
  description: string[]
  highlights?: string[]
  images?: string[] // paths under /public, e.g. '/photos/hobbies/skate-1.jpg'
}

export const hobbies: Hobby[] = [
  {
    slug: 'lentu-sportai',
    title: 'Lentų sportai',
    category: 'Sportas',
    since: 'Nuo 12-ųjų',
    summary: 'Skate, snow, wake — viskas, kas turi lentą po kojom.',
    description: [
      'Viskas prasidėjo nuo riedlentės — nuo dvylikos kasdien varydavau į skeitparką su draugais. Tas ritmas išliko: skeitinu iki šiol, žiemą sezone — snieglentė, vasarą — vandenlentė.',
      'Vienas nuostabiausių dalykų, kuriuos dėl lentų sportų patyriau — dirbau 313 Cable Park, geriausiame wake parke Lietuvoje. Tai vieta, kur sezono metu praleisdavau visas dienas ant vandens.',
    ],
    highlights: [
      'Skateboard — nuo 12-ųjų iki šiol',
      'Snowboard — kasmetinė žiema',
      'Wakeboard — vasaros sezonas',
      'Dirbau 313 Cable Park (Lietuva)',
    ],
    images: [], // TODO: pridėti nuotraukas į /public/photos/hobbies/
  },
  {
    slug: 'krepsinis',
    title: 'Krepšinis',
    category: 'Sportas',
    summary: 'Anksčiau organizuotai, dabar pickup\'ai su draugais.',
    description: [
      'Krepšinį žaidžiu ilgą laiką. Anksčiau treniruodavausi organizuotai komandoje, dabar žaidžiu pickup\'us su draugais lauke — kai oras leidžia ir kai radom laisvą aikštelę.',
    ],
    images: [],
  },
  {
    slug: 'gitara',
    title: 'Gitara',
    category: 'Muzika',
    summary: 'Mokausi, groju, klausau.',
    description: [
      'Moku groti gitara ir vis dar mokausi. Muzika apskritai man labai svarbi — ne tik kaip klausytojui, bet ir kaip kažkas, ką pats kuriu rankomis.',
    ],
    images: [],
  },
]
