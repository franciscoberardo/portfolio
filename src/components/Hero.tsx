import { profile } from '../data/profile'
import type { PortfolioCopy } from '../i18n/translations'
import { Arrow } from './Arrow'
import { Terminal } from './Terminal'
import './Hero.css'

interface HeroProps {
  copy: PortfolioCopy['hero']
  terminalCopy: PortfolioCopy['terminal']
}

export function Hero({ copy, terminalCopy }: HeroProps) {
  return (
    <section className="hero container" id="top">
      <div className="hero-content">
        <p className="intro-label">{profile.name}</p>
        <h1>{copy.title}</h1>
        <p className="hero-specialty">{copy.specialty}</p>
        <p className="hero-copy">{copy.description}</p>

        <div className="hero-actions">
          <a className="button button-dark" href="#work">
            {copy.projectsLink} <Arrow down size={17} />
          </a>
          <a className="button button-light" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <Arrow />
          </a>
          <a className="text-link" href="#contact">
            {copy.contactLink} <Arrow />
          </a>
        </div>

        <p className="hero-availability">
          <i aria-hidden="true" />
          {copy.availability}
        </p>
      </div>

      <Terminal copy={terminalCopy} />
    </section>
  )
}
