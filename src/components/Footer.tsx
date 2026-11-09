import { profile } from '../data/profile'
import type { PortfolioCopy } from '../i18n/translations'
import './Footer.css'

interface FooterProps {
  copy: PortfolioCopy['footer']
}

export function Footer({ copy }: FooterProps) {
  return (
    <footer className="footer container">
      <span>© {new Date().getFullYear()} {profile.name}</span>
      <span>{copy.role}</span>
      <div>
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </footer>
  )
}
