"use client"

import React, { useEffect, useState } from "react"
import Script from "next/script"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/context/language-context"

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement?: {
          new (
            options: {
              pageLanguage: string
              includedLanguages?: string
              autoDisplay?: boolean
              layout?: unknown
            },
            elementId: string
          ): unknown
          InlineLayout?: {
            SIMPLE: number
            HORIZONTAL: number
          }
        }
      }
    }
    googleTranslateElementInit?: () => void
  }
}

export function GoogleTranslateLoader() {
  const { language } = useLanguage()
  const pathname = usePathname()
  const [scriptLoaded, setScriptLoaded] = useState(false)

  // 1. Install React DOM reconciliation guard to prevent NotFoundError
  // when Google Translate wraps or replaces TextNodes with <font> tags.
  useEffect(() => {
    if (typeof window === "undefined" || typeof Node === "undefined" || !Node.prototype) return

    const originalRemoveChild = Node.prototype.removeChild
    Node.prototype.removeChild = function <T extends Node>(child: T): T {
      if (child.parentNode !== this) {
        if (typeof console !== "undefined" && console.warn) {
          console.warn("Prevented Google Translate removeChild DOM conflict", child, this)
        }
        return child
      }
      return originalRemoveChild.call(this, child) as T
    }

    const originalInsertBefore = Node.prototype.insertBefore
    Node.prototype.insertBefore = function <T extends Node>(newNode: T, referenceNode: Node | null): T {
      if (referenceNode && referenceNode.parentNode !== this) {
        if (typeof console !== "undefined" && console.warn) {
          console.warn("Prevented Google Translate insertBefore DOM conflict", referenceNode, this)
        }
        return newNode
      }
      return originalInsertBefore.call(this, newNode, referenceNode) as T
    }
  }, [])

  // 2. Define global Google Translate initialization callback
  useEffect(() => {
    if (typeof window === "undefined") return

    window.googleTranslateElementInit = () => {
      try {
        if (window.google?.translate?.TranslateElement) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: "en,hi,kn,ml,ta,te,mr,as,pa,or,gu,bn",
              autoDisplay: false,
            },
            "google_translate_element"
          )
        }
      } catch (err) {
        console.error("Google Translate initialization error:", err)
      }
    }
  }, [])

  // 3. Keep translation synchronized on client-side route changes
  useEffect(() => {
    if (!scriptLoaded || language === "en") return

    const timer = setTimeout(() => {
      const select = document.querySelector(".goog-te-combo") as HTMLSelectElement | null
      if (select && select.value !== language) {
        select.value = language
        select.dispatchEvent(new Event("change"))
      }
    }, 250)

    return () => clearTimeout(timer)
  }, [pathname, language, scriptLoaded])

  return (
    <>
      {/* Hidden container where Google Translate mounts its widget */}
      <div
        id="google_translate_element"
        className="notranslate"
        style={{ display: "none" }}
        aria-hidden="true"
      />
      <Script
        id="google-translate-script"
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
        onLoad={() => setScriptLoaded(true)}
      />
    </>
  )
}
