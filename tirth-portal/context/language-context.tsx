"use client"

import React, { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type Language, translationsData } from "@/data/translations-data"

export type { Language }

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const STORAGE_KEY = "tirth_selected_language"

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")

  // Sync from localStorage on client mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language | null
      if (saved && translationsData.heroTitle[saved]) {
        setLanguageState(saved)
        document.documentElement.lang = saved
      }
    } catch {
      // Ignore localStorage errors in private mode
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    try {
      localStorage.setItem(STORAGE_KEY, lang)
      document.documentElement.lang = lang
    } catch {
      // Ignore localStorage errors
    }
  }

  const t = (key: string): string => {
    const entry = translationsData[key]
    if (!entry) return key
    return entry[language] || entry["en"] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
