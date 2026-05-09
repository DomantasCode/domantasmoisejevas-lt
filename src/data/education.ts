export interface Education {
  slug: string
  institution: string
  degree: string
  field: string
  period: string
  current: boolean
  notes?: string
  skills: string[]
}

export const education: Education[] = [
  {
    slug: 'unige',
    institution: 'University of Genoa',
    degree: "Master's degree (Erasmus+ exchange)",
    field: 'Artificial Intelligence',
    period: '2025 — 2026',
    current: true,
    notes: 'Erasmus+ Exchange Program — Artificial Intelligence & Computer Science',
    skills: ['Artificial Intelligence (AI)', 'Computer Science'],
  },
  {
    slug: 'vilnius-tech',
    institution: 'VILNIUS TECH — Vilnius Gediminas Technical University',
    degree: "Bachelor's degree",
    field: 'Computer Software Engineering',
    period: 'Sep 2023 — Jun 2027',
    current: true,
    notes:
      'Studentų asociacijos narys. Apdovanotas stipendijomis už gerus akademinius rezultatus.',
    skills: [
      'AI Integration & Automation',
      'Software Development',
    ],
  },
]

export interface Certification {
  slug: string
  title: string
  issuer: string
  issued: string
  credentialId?: string
  url?: string
  skills: string[]
}

export const certifications: Certification[] = [
  {
    slug: 'meta-frontend',
    title: 'Meta Front-End Developer Specialization',
    issuer: 'Meta',
    issued: 'Aug 2024',
    credentialId: 'JUTVGEY2QNWQ',
    skills: ['Web Hosting', 'HTML5'],
  },
]
