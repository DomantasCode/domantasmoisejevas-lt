export interface Hobby {
  slug: string
  title: string
  category: 'Sportas' | 'Kūryba' | 'Mokymasis' | 'Kita'
  summary: string
  // TODO: pridėti nuotraukas, ilgesnius tekstus, susijusias kelionių vietas
}

// TODO: užpildyti realiais hobiais
export const hobbies: Hobby[] = []
