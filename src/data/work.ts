export interface Work {
  slug: string
  company: string
  role: string
  period: string
  location: string
  summary: string
  // TODO: tech, links, highlights
}

// TODO: pakeisti realiais įrašais
export const work: Work[] = [
  {
    slug: 'placeholder-company',
    company: 'Placeholder Company',
    role: 'Software Engineer',
    period: '2024 — dabar',
    location: 'Genoa, Italy',
    summary:
      'Kuriau web aplikacijas su Next.js ir TypeScript, dirbau su LLM integracijomis ir produkto inžinerija.',
  },
]
