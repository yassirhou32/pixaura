"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { translations } from '@/lib/translations'

type Language = 'fr' | 'en'

interface TranslationContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('fr')

  useEffect(() => {
    const storedLang = localStorage.getItem('language') as Language
    if (storedLang && (storedLang === 'fr' || storedLang === 'en')) {
      setLanguageState(storedLang)
    } else {
      // Detect browser language if no stored language
      const browserLang = navigator.language.split('-')[0]
      if (browserLang === 'fr') {
        setLanguageState('fr')
      } else {
        setLanguageState('en') // Default to English if not French
      }
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations[language]
    
    for (const k of keys) {
      value = value?.[k]
      if (value === undefined) {
        // Fallback to French if translation is missing
        value = translations.fr
        for (const k2 of keys) {
          value = value?.[k2]
        }
        break
      }
    }
    
    return typeof value === 'string' ? value : key
  }

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  )
}

export const useTranslation = () => {
  const context = useContext(TranslationContext)
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider')
  }
  return context
}

