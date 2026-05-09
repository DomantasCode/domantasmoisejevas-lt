export type SocialType = 'github' | 'linkedin' | 'instagram' | 'youtube'

export interface SocialLink {
  type: SocialType
  label: string
  url: string
}

export const SITE = {
  name: 'Domantas Moisejevas',
  shortName: 'Domantas',
  description: 'Programinės įrangos inžinierius ir AI specialistas',
  url: 'https://domantasmoisejevas.lt',
  email: 'domantas@moisejevas.lt',
  location: 'Genoa, Italy',
  social: [
    {
      type: 'github',
      label: 'GitHub',
      url: 'https://github.com/DomantasCode',
    },
    {
      type: 'linkedin',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/domantasmoisejevas/',
    },
    {
      type: 'instagram',
      label: 'Instagram',
      url: 'https://www.instagram.com/dommantas/',
    },
    {
      type: 'youtube',
      label: 'YouTube — Shaika',
      url: 'https://www.youtube.com/@SHAIKA_SHERIA',
    },
    {
      type: 'youtube',
      label: 'YouTube — domantastech',
      url: '', // TODO: dar nesukurtas
    },
  ] satisfies readonly SocialLink[],
} as const
