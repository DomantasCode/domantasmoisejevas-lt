export interface Work {
  slug: string
  company: string
  role: string
  type: 'Full-time' | 'Self-employed' | 'Internship' | 'Contract'
  period: string
  current: boolean
  location: string
  arrangement: 'Hybrid' | 'Remote' | 'On-site'
  summary: string
  highlights: string[]
  skills: string[]
}

export const work: Work[] = [
  {
    slug: 'vmi',
    company: 'Valstybinė mokesčių inspekcija',
    role: 'AI Growth & Innovation Architect',
    type: 'Full-time',
    period: 'Dec 2025 — dabar',
    current: true,
    location: 'Vilnius, Lithuania',
    arrangement: 'Hybrid',
    summary:
      'Vedu AI auditus, identifikuoju automatizavimo galimybes ir įgyvendinu AI sprendimus VMI vidiniams procesams.',
    highlights: [
      'Vedu AI auditus įvertindamas, kur organizacija gali automatizuoti darbą',
      'Identifikuoju laiką švaistančias užduotis ir pateikiu, kaip AI gali jas išspręsti',
      'Kuriu žingsnis-po-žingsnio AI implementacijos planus vidiniams procesams',
      'Parenku tinkamus įrankius ir automatizacijas pagal organizacijos poreikius bei juos diegiu',
      'Padedu komandoms integruoti AI į kasdienį darbą',
      'Stebiu rezultatus, kad AI sprendimai realiai duotų naudos',
      'Užtikrinu, kad kiekvienas AI projektas atitiktų VMI taisykles ir standartus',
    ],
    skills: ['Artificial Intelligence (AI)', 'AI Integration & Automation'],
  },
  {
    slug: 'mozetech',
    company: 'MozeTech',
    role: 'Creator',
    type: 'Self-employed',
    period: 'Dec 2025 — dabar',
    current: true,
    location: 'Lithuania',
    arrangement: 'Remote',
    summary:
      'Vienasmenė AI-driven digital agency. Web sprendimai, brand identity ir AI chatbot integracijos.',
    highlights: [
      'Įsteigiau MozeTech kaip vienasmenę AI-driven digital agency',
      'Naudoju AI įrankius, kad pristatyčiau modernius web sprendimus greičiau ir efektyviau',
      'Išvystyta ekspertizė prompt engineering ir AI-optimized workflow srityse',
      'Kuriu responsive svetaines, e-commerce platformas, brand identity ir AI chatbot integracijas',
      'Sujungiu žmogiškąjį kūrybiškumą su AI automatizavimu, kad pagreitinčiau gamybą',
      'Dirbu tiesiogiai su klientais — greiti sprendimai, aiški komunikacija, lankstumas',
    ],
    skills: ['AI Integration & Automation', 'CSS', 'Web Development'],
  },
  {
    slug: 'starkodas',
    company: 'Starkodas',
    role: 'IT Project Manager',
    type: 'Internship',
    period: 'May 2025 — Jun 2025',
    current: false,
    location: 'Vilnius, Lithuania',
    arrangement: 'Hybrid',
    summary:
      'Pilnas IT projektų ciklas — nuo kliento poreikių analizės iki sprendimų įgyvendinimo viešajam ir privačiam sektoriui.',
    highlights: [
      'Vedžiau pilną IT projektų ciklą — nuo kliento poreikių analizės iki techninių sprendimų pasiūlymo ir įgyvendinimo',
      'Pristatydavau IT projektus klientams iš viešojo ir privataus sektoriaus',
      'Dalyvavau kasdieniuose stand-up\'uose ir savaitiniuose projekto review\'uose',
      'Organizavau development workflow per ClickUp — task kūrimas, priskyrimas, sekimas',
      'Kūriau ir pristatinėjau interaktyvius prototipus klientams su Figma',
      'Vertinau kompleksiškus kliento poreikius į konkrečias technines specifikacijas',
      'Taikiau tiek Agile, tiek Waterfall metodologijas realiame projekte',
    ],
    skills: [
      'Software Documentation',
      'Agile',
      'Waterfall',
      'Figma',
      'ClickUp',
    ],
  },
  {
    slug: 'gedlito-transportas',
    company: 'Gedlito transportas',
    role: 'IT Specialist',
    type: 'Internship',
    period: 'Dec 2024 — Jan 2025',
    current: false,
    location: 'Klaipėda, Lithuania',
    arrangement: 'Remote',
    summary:
      'Įdiegiau ir konfigūravau Moodle mokymo platformą įmonės vidiniam naudojimui — nuo Linux serverio iki UI overhaul ir vartotojų apmokymo.',
    highlights: [
      'Sukūriau serverio infrastruktūrą naujai įmonės aplikacijai — Linux Ubuntu Server VM VMware aplinkoje',
      'Pastačiau stabilų Moodle environment — Apache, MySQL, PHP stack',
      'Modernizavau Moodle UI per pilną vizualinį overhaul su SCSS — element structures, styles, icons, color schemes',
      'Įdiegiau vidinius įmonės mokymo kursus ir atlikau multi-role user testavimą',
      'Apmokiau darbuotojus naudotis Moodle sistema — nuo kursų kūrimo iki vertinimo įrankių',
    ],
    skills: ['MySQL', 'Linux', 'Apache', 'PHP', 'Moodle', 'SCSS', 'VMware'],
  },
]
