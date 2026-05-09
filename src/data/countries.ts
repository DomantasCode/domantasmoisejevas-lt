export interface Country {
  code: string
  name: string
  nameLt: string
  visited: boolean
  current?: boolean
  notes?: string[]
  images?: string[] // paths under /public, e.g. '/photos/travels/it-1.jpg'
}

// 20 šalių. Surūšiuota pagal lietuvišką pavadinimą.
export const countries: Country[] = [
  {
    code: 'BA',
    name: 'Bosnia and Herzegovina',
    nameLt: 'Bosnija ir Hercegovina',
    visited: true,
    images: [],
  },
  {
    code: 'BG',
    name: 'Bulgaria',
    nameLt: 'Bulgarija',
    visited: true,
    images: [],
  },
  {
    code: 'EG',
    name: 'Egypt',
    nameLt: 'Egiptas',
    visited: true,
    images: [],
  },
  {
    code: 'GR',
    name: 'Greece',
    nameLt: 'Graikija',
    visited: true,
    images: [],
  },
  {
    code: 'ES',
    name: 'Spain',
    nameLt: 'Ispanija',
    visited: true,
    images: [],
  },
  {
    code: 'IT',
    name: 'Italy',
    nameLt: 'Italija',
    visited: true,
    current: true,
    notes: ['Erasmus+ University of Genoa.'],
    images: [],
  },
  {
    code: 'GB',
    name: 'United Kingdom',
    nameLt: 'Jungtinė Karalystė',
    visited: true,
    images: [],
  },
  {
    code: 'CY',
    name: 'Cyprus',
    nameLt: 'Kipras',
    visited: true,
    images: [],
  },
  {
    code: 'LV',
    name: 'Latvia',
    nameLt: 'Latvija',
    visited: true,
    images: [],
  },
  {
    code: 'PL',
    name: 'Poland',
    nameLt: 'Lenkija',
    visited: true,
    images: [],
  },
  {
    code: 'LT',
    name: 'Lithuania',
    nameLt: 'Lietuva',
    visited: true,
    notes: ['Gimtinė. Vilnius — bazė.'],
    images: [],
  },
  {
    code: 'MT',
    name: 'Malta',
    nameLt: 'Malta',
    visited: true,
    images: [],
  },
  {
    code: 'MA',
    name: 'Morocco',
    nameLt: 'Marokas',
    visited: true,
    images: [],
  },
  {
    code: 'MC',
    name: 'Monaco',
    nameLt: 'Monakas',
    visited: true,
    images: [],
  },
  {
    code: 'NL',
    name: 'Netherlands',
    nameLt: 'Nyderlandai',
    visited: true,
    images: [],
  },
  {
    code: 'FR',
    name: 'France',
    nameLt: 'Prancūzija',
    visited: true,
    images: [],
  },
  {
    code: 'NC',
    name: 'Northern Cyprus',
    nameLt: 'Šiaurės Kipras',
    visited: true,
    notes: ['De facto valstybė — pripažinta tik Turkijos.'],
    images: [],
  },
  {
    code: 'SE',
    name: 'Sweden',
    nameLt: 'Švedija',
    visited: true,
    images: [],
  },
  {
    code: 'TR',
    name: 'Turkey',
    nameLt: 'Turkija',
    visited: true,
    images: [],
  },
  {
    code: 'DE',
    name: 'Germany',
    nameLt: 'Vokietija',
    visited: true,
    images: [],
  },
]
