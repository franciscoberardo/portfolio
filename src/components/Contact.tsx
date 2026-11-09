import { profile } from '../data/profile'
import type { PortfolioCopy } from '../i18n/translations'
import { Arrow } from './Arrow'
import './Contact.css'

interface ContactProps {
  copy: PortfolioCopy['contact']
}

export function Contact({ copy }: ContactProps) {
  return (
    <section className="contact" id="contact">
      <div className="container contact-inner">
        <span className="eyebrow">{copy.heading.eyebrow}</span>
        <span className="sparkle" aria-hidden="true">✦</span>
        <h2>{copy.heading.title}</h2>
        <p>{copy.availability}</p>
        <p className="contact-invitation">{copy.invitation}</p>

        <div className="contact-actions">
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {copy.emailLink} <Arrow />
          </a>
          <span aria-hidden="true">·</span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <Arrow />
          </a>
          <span aria-hidden="true">·</span>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub <Arrow />
          </a>
        </div>
      </div>
    </section>
  )
}
