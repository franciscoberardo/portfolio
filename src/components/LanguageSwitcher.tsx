import type { Language } from '../types'

interface LanguageSwitcherProps {
  language: Language
  onChange: (language: Language) => void
  label: string
}

const languages = [
  { code: 'es', label: 'Español' },
  { code: 'en', label: 'English' },
] as const

export function LanguageSwitcher({ language, onChange, label }: LanguageSwitcherProps) {
  return (
    <div className="language" role="group" aria-label={label}>
      {languages.map(({ code, label }, index) => (
        <span className="language-option" key={code}>
          {index > 0 && <span aria-hidden="true">/</span>}
          <button
            type="button"
            lang={code}
            aria-label={label}
            aria-pressed={language === code}
            onClick={() => onChange(code)}
          >
            {code.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  )
}
