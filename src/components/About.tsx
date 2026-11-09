import { profile } from '../data/profile'
import type { PortfolioCopy } from '../i18n/translations'
import { Arrow } from './Arrow'
import './About.css'

interface AboutProps {
  copy: PortfolioCopy['about']
}

export function About({ copy }: AboutProps) {
  return (
    <section className="section container about" id="about">
      <div className="about-label">
        <span className="eyebrow">{copy.heading.eyebrow}</span>
        <h2>{copy.heading.title}</h2>
      </div>
      <div className="about-content">
        <p className="large-copy">{copy.introduction}</p>
        <div>
          <p>{copy.teaching}</p>
          <a className="inline-link" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <Arrow size={17} />
          </a>
        </div>
      </div>
    </section>
  )
}
