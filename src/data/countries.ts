export interface Country {
  code: string
  name: string
  nameLt: string
  visited: boolean
  current?: boolean
  notes?: string[]
  images?: string[] // paths under /public, e.g. '/photos/travels/it-1.jpg'
}

// TODO: pildyti su Been app eksportu (~20 šalių)
export const countries: Country[] = [
  {
    code: 'LT',
    name: 'Lithuania',
    nameLt: 'Lietuva',
    visited: true,
    notes: ['Gimtinė. Vilnius — bazė.'],
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
    code: 'FR',
    name: 'France',
    nameLt: 'Prancūzija',
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
]
