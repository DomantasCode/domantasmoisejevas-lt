export interface Country {
  code: string
  name: string
  nameLt: string
  visited: boolean
  current?: boolean
  /** Geografinės koordinatės (sostinė ar svarbiausias miestas) — naudojama 3D Globe */
  lat: number
  lng: number
  notes?: string[]
  images?: string[]
}

// Surūšiuota pagal lietuvišką pavadinimą.
export const countries: Country[] = [
  { code: 'BA', name: 'Bosnia and Herzegovina', nameLt: 'Bosnija ir Hercegovina', visited: true, lat: 43.85, lng: 18.36, images: [] },
  { code: 'BG', name: 'Bulgaria', nameLt: 'Bulgarija', visited: true, lat: 42.70, lng: 23.32, images: [] },
  { code: 'EG', name: 'Egypt', nameLt: 'Egiptas', visited: true, lat: 30.04, lng: 31.24, images: [] },
  { code: 'GR', name: 'Greece', nameLt: 'Graikija', visited: true, lat: 37.98, lng: 23.73, images: [] },
  { code: 'ES', name: 'Spain', nameLt: 'Ispanija', visited: true, lat: 40.42, lng: -3.70, images: [] },
  {
    code: 'IT',
    name: 'Italy',
    nameLt: 'Italija',
    visited: true,
    current: true,
    lat: 44.41, // Genoa
    lng: 8.93,
    notes: ['Erasmus+ University of Genoa.'],
    images: [],
  },
  { code: 'GB', name: 'United Kingdom', nameLt: 'Jungtinė Karalystė', visited: true, lat: 51.51, lng: -0.13, images: [] },
  { code: 'CY', name: 'Cyprus', nameLt: 'Kipras', visited: true, lat: 35.17, lng: 33.36, images: [] },
  { code: 'LV', name: 'Latvia', nameLt: 'Latvija', visited: true, lat: 56.95, lng: 24.10, images: [] },
  { code: 'PL', name: 'Poland', nameLt: 'Lenkija', visited: true, lat: 52.23, lng: 21.01, images: [] },
  {
    code: 'LT',
    name: 'Lithuania',
    nameLt: 'Lietuva',
    visited: true,
    lat: 54.69,
    lng: 25.28,
    notes: ['Gimtinė. Vilnius — bazė.'],
    images: [],
  },
  { code: 'MT', name: 'Malta', nameLt: 'Malta', visited: true, lat: 35.90, lng: 14.51, images: [] },
  { code: 'MA', name: 'Morocco', nameLt: 'Marokas', visited: true, lat: 34.02, lng: -6.83, images: [] },
  { code: 'MC', name: 'Monaco', nameLt: 'Monakas', visited: true, lat: 43.74, lng: 7.42, images: [] },
  { code: 'NL', name: 'Netherlands', nameLt: 'Nyderlandai', visited: true, lat: 52.37, lng: 4.90, images: [] },
  { code: 'FR', name: 'France', nameLt: 'Prancūzija', visited: true, lat: 48.86, lng: 2.35, images: [] },
  { code: 'SE', name: 'Sweden', nameLt: 'Švedija', visited: true, lat: 59.33, lng: 18.07, images: [] },
  { code: 'TR', name: 'Turkey', nameLt: 'Turkija', visited: true, lat: 41.01, lng: 28.98, images: [] },
  { code: 'DE', name: 'Germany', nameLt: 'Vokietija', visited: true, lat: 52.52, lng: 13.40, images: [] },
]
