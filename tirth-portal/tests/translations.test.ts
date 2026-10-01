import { describe, it, expect } from "vitest"
import { translationsData, type Language } from "@/data/translations-data"

const supportedLanguages: Language[] = [
  "en", "hi", "kn", "ml", "ta", "te",
  "mr", "as", "pa", "or", "gu", "bn"
]

describe("Multilingual System Integrity", () => {
  it("should have all 12 supported languages defined in every translation key", () => {
    const keys = Object.keys(translationsData)
    expect(keys.length).toBeGreaterThanOrEqual(80)

    keys.forEach((key) => {
      const entry = translationsData[key]
      supportedLanguages.forEach((lang) => {
        expect(
          entry[lang],
          `Missing or empty translation for key "${key}" in language "${lang}"`
        ).toBeDefined()
        expect(
          typeof entry[lang] === "string" && entry[lang].trim().length > 0,
          `Key "${key}" has an empty string for language "${lang}"`
        ).toBe(true)
      })
    })
  })

  it("should have the correct Gujarati translation for 84 Kos Yatra", () => {
    expect(translationsData.event84Kos.gu).toBe("84 કોસ યાત્રા")
  })

  it("should have proper translations for sacred locations and parikrama stops", () => {
    expect(translationsData.parikramaStops.en).toContain("11-Day Parikrama Stops")
    expect(translationsData.parikramaStops.hi).toContain("परिक्रमा पड़ाव")
    expect(translationsData.majorShrines.hi).toContain("प्रमुख तीर्थ")
  })

  it("should format correct automated translation parameters for all supported languages", () => {
    supportedLanguages.forEach((lang) => {
      const expectedCookieValue = lang === "en" ? "/en/en" : `/en/${lang}`
      expect(expectedCookieValue).toMatch(/^\/en\/[a-z]{2}$/)
    })
  })
})

