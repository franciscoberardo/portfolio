export type Language = 'en' | 'es'

export type Localized<T> = Record<Language, T>

export interface SectionHeading {
  eyebrow: string
  title: string
}

export interface Project {
  id: string
  hidden?: boolean
  name: Localized<string>
  category: Localized<string>
  description: Localized<string>
  tags: Localized<string[]>
  href?: string
  image?: {
    src: string
    width: number
    height: number
    alt: Localized<string>
  }
}

export interface CareerRole {
  id: string
  title: Localized<string>
  period: Localized<string>
  summary: Localized<string>
  tags: Localized<string[]>
}

export interface CareerGroup {
  id: string
  company: Localized<string>
  roles: CareerRole[]
}

export interface StackGroup {
  id: string
  name: Localized<string>
  technologies: string[]
}
