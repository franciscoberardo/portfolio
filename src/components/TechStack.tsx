import { stackGroups } from '../data/stack'
import type { PortfolioCopy } from '../i18n/translations'
import type { Language } from '../types'
import { SectionHeading } from './SectionHeading'
import './TechStack.css'

interface TechStackProps {
  language: Language
  copy: PortfolioCopy['stack']
}

export function TechStack({ language, copy }: TechStackProps) {
  return (
    <section className="section container stack" id="stack">
      <SectionHeading {...copy.heading} />
      <div className="stack-grid">
        {stackGroups.map(({ id, name, technologies }) => (
          <article key={id}>
            <span>{name[language]}</span>
            <div className="stack-items">
              {technologies.map((technology) => (
                <b key={technology}>{technology}</b>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
