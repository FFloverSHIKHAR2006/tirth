import { describe, it, expect } from "vitest"
import {
  parikramaDays,
  sacredSiteDetails,
  dashamahavidyas,
  trishaktiPowers,
  getDayByNumber,
  getSiteBySlug,
  getSitesByDay,
  getSitesByCategory,
} from "@/data/naimisharanya-parikrama-data"

describe("Naimisharanya 84 Kos Parikrama Dataset Integrity", () => {
  it("should have exactly 11 parikrama days numbered sequentially from 1 to 11", () => {
    expect(parikramaDays).toHaveLength(11)
    parikramaDays.forEach((day, index) => {
      expect(day.dayNumber).toBe(index + 1)
      expect(day.slug).toBeTruthy()
      expect(day.title.hi).toBeTruthy()
      expect(day.title.en).toBeTruthy()
      expect(day.stopName.hi).toBeTruthy()
      expect(day.stopName.en).toBeTruthy()
      expect(day.startLocation).toBeTruthy()
      expect(day.overnightLocation).toBeTruthy()
      expect(day.traditionalSignificance.hi).toBeTruthy()
      expect(day.traditionalSignificance.en).toBeTruthy()
      expect(day.ritualsAndDonations.hi.length).toBeGreaterThan(0)
      expect(day.ritualsAndDonations.en.length).toBeGreaterThan(0)
    })
  })

  it("should have unique slugs for all 11 days", () => {
    const slugs = parikramaDays.map((d) => d.slug)
    const uniqueSlugs = new Set(slugs)
    expect(uniqueSlugs.size).toBe(11)
  })

  it("should verify district allocation (Sitapur or Hardoi)", () => {
    parikramaDays.forEach((day) => {
      const isSitapurOrHardoi =
        day.district.includes("Sitapur") ||
        day.district.includes("Hardoi") ||
        day.district.includes("सीतापुर") ||
        day.district.includes("हरदोई")
      expect(isSitapurOrHardoi, `Day ${day.dayNumber} district "${day.district}" is invalid`).toBe(true)
    })
  })

  it("should have 10 Dashamahavidyas with correct order, iconography, and mantras", () => {
    expect(dashamahavidyas).toHaveLength(10)
    dashamahavidyas.forEach((m, idx) => {
      expect(m.number).toBe(idx + 1)
      expect(m.name.hi).toBeTruthy()
      expect(m.name.en).toBeTruthy()
      expect(m.significance.hi).toBeTruthy()
      expect(m.significance.en).toBeTruthy()
      expect(m.mantra).toBeTruthy()
      expect(m.iconography.hi).toBeTruthy()
    })
  })

  it("should have 3 Trishakti powers: ichha, jnana, kriya", () => {
    expect(trishaktiPowers).toHaveLength(3)
    const powers = trishaktiPowers.map((p) => p.power)
    expect(powers).toEqual(["ichha", "jnana", "kriya"])

    trishaktiPowers.forEach((power) => {
      expect(power.name.hi).toBeTruthy()
      expect(power.name.en).toBeTruthy()
      expect(power.deity.hi).toBeTruthy()
      expect(power.meaning.hi).toBeTruthy()
      expect(power.symbolism.hi).toBeTruthy()
    })
  })

  it("should verify helper functions work as expected", () => {
    // getDayByNumber
    const day1 = getDayByNumber(1)
    expect(day1).toBeDefined()
    expect(day1?.slug).toBe("korona")

    const day11 = getDayByNumber(11)
    expect(day11).toBeDefined()
    expect(day11?.slug).toBe("mishrikh-simfukh")

    expect(getDayByNumber(12)).toBeUndefined()

    // getSiteBySlug
    const chakraTirth = getSiteBySlug("chakra-tirth")
    expect(chakraTirth).toBeDefined()
    expect(chakraTirth?.title.en).toContain("Chakra")

    // getSitesByDay
    const day1Sites = getSitesByDay(1)
    expect(day1Sites.length).toBeGreaterThan(0)

    // getSitesByCategory
    const shaktiSites = getSitesByCategory("Shakti")
    expect(shaktiSites.length).toBeGreaterThan(0)
    expect(shaktiSites.some((s) => s.slug === "lalita-shakti-peeth")).toBe(true)
  })

  it("should verify specialFeature sites exist", () => {
    const kaliPeeth = getSiteBySlug("kalipith")
    expect(kaliPeeth).toBeDefined()
    expect(kaliPeeth?.specialFeature).toBe("dashamahavidya")

    const trishakti = getSiteBySlug("trishakti-dham")
    expect(trishakti).toBeDefined()
    expect(trishakti?.specialFeature).toBe("trishakti")
  })
})
