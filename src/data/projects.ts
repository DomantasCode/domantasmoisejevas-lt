export interface Project {
  slug: string
  title: string
  year: number
  summary: string
  description: string
  tech: string[]
  url?: string
  repo?: string
}

// TODO: pakeisti realiais projektais
export const projects: Project[] = [
  {
    slug: 'domantasmoisejevas-lt',
    title: 'domantasmoisejevas.lt',
    year: 2026,
    summary: 'Šis tinklalapis.',
    description:
      'Asmeninė svetainė su 3D Globe sekcija, AI chat botu ir kelionių dienoraščiu.',
    tech: ['Next.js 16', 'TypeScript', 'Tailwind v4', 'Framer Motion', 'Three.js'],
    repo: 'https://github.com/DomantasCode/domantasmoisejevas-lt',
  },
]
