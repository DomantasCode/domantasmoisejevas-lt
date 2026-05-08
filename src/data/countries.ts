export interface Country {
  code: string
  name: string
  nameLt: string
  visited: boolean
  current?: boolean
}

// TODO: pildyti su Been app eksportu (~20 šalių)
export const countries: Country[] = [
  { code: 'LT', name: 'Lithuania', nameLt: 'Lietuva', visited: true },
  { code: 'IT', name: 'Italy', nameLt: 'Italija', visited: true, current: true },
  { code: 'FR', name: 'France', nameLt: 'Prancūzija', visited: true },
  { code: 'MC', name: 'Monaco', nameLt: 'Monakas', visited: true },
]
