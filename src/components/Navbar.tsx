import { useState } from 'react'
import type { PortfolioCopy } from '../i18n/translations'
import type { Language } from '../types'
import { Arrow } from './Arrow'
import { LanguageSwitcher } from './LanguageSwitcher'
import './Navbar.css'

interface NavbarProps {
  language: Language
  onLanguageChange: (language: Language) => void
  copy: PortfolioCopy['navigation']
}

export function Navbar({ language, onLanguageChange, copy }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="nav-wrap">
      <nav
        className="nav container"
        aria-label={copy.label}
        onKeyDown={(event) => {
          if (event.key === 'Escape') setMenuOpen(false)
        }}
      >
        <a className="brand" href="#top" onClick={() => setMenuOpen(false)}>
          FB<span>.</span>
        </a>

        <div id="main-menu" className={`nav-links${menuOpen ? ' is-open' : ''}`}>
          {copy.items.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={id === 'contact' ? 'nav-contact' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {label}
              {id === 'contact' && <Arrow size={15} />}
            </a>
          ))}
        </div>

        <LanguageSwitcher
          language={language}
          onChange={onLanguageChange}
          label={copy.languageLabel}
        />

        <button
          type="button"
          className="menu-button"
          aria-controls="main-menu"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? copy.closeMenu : copy.openMenu}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span>
        </button>
      </nav>
    </header>
  )
}
