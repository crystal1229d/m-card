export interface Card {
  name: string
  coprName: string
  tags: string[]
  benefit: string[]
  promition?: {
    title: string
    terms: string
  }
  paback?: string
}

export interface AdBanner {
  title: string
  description: string
  link: string
}