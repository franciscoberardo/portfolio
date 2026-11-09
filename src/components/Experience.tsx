import { experience } from '../data/experience'
import { profile } from '../data/profile'
import type { PortfolioCopy } from '../i18n/translations'
import type { Language } from '../types'
import { SectionHeading } from './SectionHeading'
import { Tags } from './Tags'
import { Arrow } from './Arrow'
import './Experience.css'

interface ExperienceProps {
  language: Language
  copy: PortfolioCopy['experience']
}

export function Experience({ language, copy }: ExperienceProps) {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <SectionHeading {...copy.heading} />
        <div className="timeline">
          {experience.map(({ id, company, roles }) => (
            <article className="career-group" key={id}>
              <div className="company-heading">
                <h3>{company[language]}</h3>
                <span>
                  {roles.length > 1 ? copy.progression : roles[0].period[language]}
                </span>
              </div>

              <div className="progression">
                {roles.map((role) => (
                  <div className="progression-role" key={role.id}>
                    <span className="progression-marker" aria-hidden="true" />
                    <p className="role-title">
                      {role.title[language]} <span>· {role.period[language]}</span>
                    </p>
                    <p className="role-summary">{role.summary[language]}</p>
                    <Tags items={role.tags[language]} />
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
        <a className="inline-link experience-link" href={profile.linkedin} target="_blank" rel="noreferrer">
          {copy.linkedinLink} <Arrow />
        </a>
      </div>
    </section>
  )
}
