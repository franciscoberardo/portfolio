import { useEffect, useState } from 'react'
import { translations } from '../i18n/translations'
import type { Language } from '../types'

const storageKey = 'portfolio-language'

function readLanguage(): Language {
  try {
    return localStorage.getItem(storageKey) === 'es' ? 'es' : 'en'
  } catch {
    return 'en'
  }
}

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(readLanguage)
  const copy = translations[language]

  useEffect(() => {
    document.documentElement.lang = language
    document.title = copy.meta.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', copy.meta.description)

    try {
      localStorage.setItem(storageKey, language)
    } catch {
      return
    }
  }, [language, copy.meta.title, copy.meta.description])

  return { language, setLanguage, copy }
}
