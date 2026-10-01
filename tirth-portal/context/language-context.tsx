"use client"

import React, { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type Language, translationsData } from "@/data/translations-data"

export type { Language }

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  isTranslating: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const STORAGE_KEY = "tirth_selected_language"

/**
 * Configure googtrans cookies so Google Translate's engine immediately recognizes
 * the desired target language across all routes and subdomains.
 */
function setGoogTransCookie(targetLang: string) {
  if (typeof document === "undefined" || typeof window === "undefined") return

  if (targetLang === "en") {
    document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    document.cookie = "googtrans=/en/en; path=/;"
    const hostname = window.location.hostname
    if (hostname && hostname !== "localhost" && !/^\d+\.\d+\.\d+\.\d+$/.test(hostname)) {
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=.${hostname}; path=/;`
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${hostname}; path=/;`
    }
  } else {
    document.cookie = `googtrans=/en/${targetLang}; path=/;`
    const hostname = window.location.hostname
    if (hostname && hostname !== "localhost" && !/^\d+\.\d+\.\d+\.\d+$/.test(hostname)) {
      document.cookie = `googtrans=/en/${targetLang}; domain=.${hostname}; path=/;`
    }
  }
}

/**
 * Programmatically triggers Google Translate's hidden select combo to translate
 * all text nodes on the page without requiring full page reload.
 */
function triggerGoogleTranslate(targetLang: string) {
  if (typeof window === "undefined" || typeof document === "undefined") return

  setGoogTransCookie(targetLang)

  const apply = (): boolean => {
    const select = document.querySelector(".goog-te-combo") as HTMLSelectElement | null
    if (select) {
      if (targetLang === "en") {
        const hasEn = Array.from(select.options).some((opt) => opt.value === "en")
        select.value = hasEn ? "en" : ""
        select.dispatchEvent(new Event("change"))

        try {
          const iframe = document.querySelector("iframe.goog-te-banner-frame") as HTMLIFrameElement | null
          if (iframe) {
            const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document
            const restoreBtn = iframeDoc?.querySelector(".goog-te-button button") as HTMLElement | null
            if (restoreBtn) restoreBtn.click()
          }
        } catch {
          // ignore cross-origin restrictions
        }
      } else {
        select.value = targetLang
        select.dispatchEvent(new Event("change"))
      }
      return true
    }
    return false
  }

  if (!apply()) {
    let attempts = 0
    const interval = setInterval(() => {
      attempts++
      if (apply() || attempts > 30) {
        clearInterval(interval)
      }
    }, 120)
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")
  const [isTranslating, setIsTranslating] = useState<boolean>(false)

  // Sync from localStorage on client mount & initialize translation
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language | null
      if (saved) {
        setLanguageState(saved)
        document.documentElement.lang = saved
        if (saved !== "en") {
          setGoogTransCookie(saved)
          triggerGoogleTranslate(saved)
        }
      }
    } catch {
      // Ignore localStorage errors in private mode
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setIsTranslating(true)
    setLanguageState(lang)

    try {
      localStorage.setItem(STORAGE_KEY, lang)
      document.documentElement.lang = lang
    } catch {
      // Ignore localStorage errors
    }

    triggerGoogleTranslate(lang)

    setTimeout(() => {
      setIsTranslating(false)
    }, 700)
  }

  const t = (key: string): string => {
    const entry = translationsData[key]
    if (!entry) return key
    return entry[language] || entry["en"] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isTranslating }}>
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
