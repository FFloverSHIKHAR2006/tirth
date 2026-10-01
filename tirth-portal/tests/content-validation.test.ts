import { describe, it, expect } from "vitest"
import {
  parikramaDays,
  sacredSiteDetails,
} from "@/data/naimisharanya-parikrama-data"
import { sacredLocations } from "@/data/sacred-locations"
import { SourceLabel, SiteCategory } from "@/data/pilgrimage-types"

const VALID_SOURCE_LABELS: SourceLabel[] = [
  "TRADITION",
  "SCRIPTURAL REFERENCE",
  "LOCAL BELIEF",
  "REFERENCE DOCUMENT",
  "GEOGRAPHICAL INFORMATION",
  "PRACTICAL INFORMATION",
]

const VALID_CATEGORIES: SiteCategory[] = [
  "Shakti",
  "Shiva",
  "Vishnu",
  "Rishi",
  "Kund",
  "Temple",
  "Ghat",
  "Ashram",
  "Mythological",
  "Cave",
  "Other",
]

describe("Geographical and Content Validation for Naimisharanya", () => {
  it("should have all Parikrama Day coordinates within valid Sitapur/Hardoi boundaries [27.0, 28.0] N and [80.0, 81.0] E", () => {
    parikramaDays.forEach((day) => {
      expect(
        day.coordinates.lat,
        `Day ${day.dayNumber} latitude ${day.coordinates.lat} out of bounds`
      ).toBeGreaterThanOrEqual(27.0)
      expect(
        day.coordinates.lat,
        `Day ${day.dayNumber} latitude ${day.coordinates.lat} out of bounds`
      ).toBeLessThanOrEqual(28.0)

      expect(
        day.coordinates.lng,
        `Day ${day.dayNumber} longitude ${day.coordinates.lng} out of bounds`
      ).toBeGreaterThanOrEqual(80.0)
      expect(
        day.coordinates.lng,
        `Day ${day.dayNumber} longitude ${day.coordinates.lng} out of bounds`
      ).toBeLessThanOrEqual(81.0)
    })
  })

  it("should have all Sacred Site coordinates within valid Sitapur/Hardoi boundaries [27.0, 28.0] N and [80.0, 81.0] E", () => {
    sacredSiteDetails.forEach((site) => {
      expect(
        site.coordinates.lat,
        `Site ${site.slug} latitude ${site.coordinates.lat} out of bounds`
      ).toBeGreaterThanOrEqual(27.0)
      expect(
        site.coordinates.lat,
        `Site ${site.slug} latitude ${site.coordinates.lat} out of bounds`
      ).toBeLessThanOrEqual(28.0)

      expect(
        site.coordinates.lng,
        `Site ${site.slug} longitude ${site.coordinates.lng} out of bounds`
      ).toBeGreaterThanOrEqual(80.0)
      expect(
        site.coordinates.lng,
        `Site ${site.slug} longitude ${site.coordinates.lng} out of bounds`
      ).toBeLessThanOrEqual(81.0)
    })
  })

  it("should have valid categories and source labels for all sacred sites", () => {
    sacredSiteDetails.forEach((site) => {
      expect(
        VALID_CATEGORIES.includes(site.category),
        `Site ${site.slug} has invalid category: ${site.category}`
      ).toBe(true)

      expect(
        site.sourceLabels.length,
        `Site ${site.slug} must have at least one source label`
      ).toBeGreaterThan(0)

      site.sourceLabels.forEach((label) => {
        expect(
          VALID_SOURCE_LABELS.includes(label),
          `Site ${site.slug} has invalid source label: ${label}`
        ).toBe(true)
      })
    })
  })

  it("should verify no duplicate slugs among sacred site details", () => {
    const slugs = sacredSiteDetails.map((s) => s.slug)
    const uniqueSlugs = new Set(slugs)
    expect(uniqueSlugs.size).toBe(sacredSiteDetails.length)
  })

  it("should verify scriptural quotations have complete source and translation data", () => {
    const sitesWithQuotes = sacredSiteDetails.filter(
      (s) => s.scripturalQuotations && s.scripturalQuotations.length > 0
    )
    expect(sitesWithQuotes.length).toBeGreaterThan(0)

    sitesWithQuotes.forEach((site) => {
      site.scripturalQuotations!.forEach((quote) => {
        expect(quote.source).toBeTruthy()
        expect(quote.translation.hi).toBeTruthy()
      })
    })
  })

  it("should resolve all relatedSiteSlugs to valid sites", () => {
    const allKnownSlugs = new Set([
      ...sacredSiteDetails.map((s) => s.slug),
      ...sacredLocations.map((s) => s.slug),
    ])

    sacredSiteDetails.forEach((site) => {
      site.relatedSiteSlugs.forEach((relatedSlug) => {
        expect(
          allKnownSlugs.has(relatedSlug),
          `Site ${site.slug} references unknown related slug: ${relatedSlug}`
        ).toBe(true)
      })
    })
  })
})
