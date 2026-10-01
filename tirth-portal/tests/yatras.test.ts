import { describe, it, expect } from "vitest"
import { yatras, getYatraBySlug } from "@/data/yatras"
import { type Language } from "@/data/translations-data"

const supportedLanguages: Language[] = [
  "en", "hi", "kn", "ml", "ta", "te",
  "mr", "as", "pa", "or", "gu", "bn"
]

describe("Yatras Data Model & Highlights Integrity", () => {
  it("should contain both 84-kos and namisharanya yatras", () => {
    expect(yatras["84-kos"]).toBeDefined()
    expect(yatras["namisharanya"]).toBeDefined()
    expect(getYatraBySlug("84-kos")).toBeDefined()
    expect(getYatraBySlug("namisharanya")).toBeDefined()
  })

  it("should have valid coordinates and non-empty route waypoints", () => {
    Object.values(yatras).forEach((yatra) => {
      expect(yatra.centerCoordinates.lat).toBeGreaterThan(20)
      expect(yatra.centerCoordinates.lat).toBeLessThan(32)
      expect(yatra.centerCoordinates.lng).toBeGreaterThan(70)
      expect(yatra.centerCoordinates.lng).toBeLessThan(85)
      expect(yatra.routeCoordinates.length).toBeGreaterThanOrEqual(4)
      expect(yatra.markers.length).toBeGreaterThanOrEqual(4)

      yatra.markers.forEach((marker) => {
        expect(marker.title).toBeTruthy()
        expect(marker.lat).toBeGreaterThan(20)
        expect(marker.lng).toBeGreaterThan(70)
      })
    })
  })

  it("should have non-empty highlights defined for ALL 12 languages without returning undefined", () => {
    Object.values(yatras).forEach((yatra) => {
      supportedLanguages.forEach((lang) => {
        const highlights = yatra.highlights[lang]
        expect(
          highlights,
          `Yatra "${yatra.id}" has undefined highlights for language "${lang}"`
        ).toBeDefined()
        expect(
          Array.isArray(highlights),
          `Yatra "${yatra.id}" highlights for "${lang}" is not an array`
        ).toBe(true)
        expect(
          highlights.length,
          `Yatra "${yatra.id}" has empty highlights for language "${lang}"`
        ).toBeGreaterThanOrEqual(5)
      })
    })
  })
})
