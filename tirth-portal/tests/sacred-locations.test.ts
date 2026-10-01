import { describe, it, expect } from "vitest"
import {
  sacredLocations,
  getLocationBySlug,
  getPadavs,
  getShrines,
} from "@/data/sacred-locations"

describe("Sacred Locations (20 Sites) Integrity", () => {
  it("should contain exactly 20 sacred locations migrated from legacy content", () => {
    expect(sacredLocations.length).toBe(20)
  })

  it("should have 11 sequential padavs from Day 1 to Day 11", () => {
    const padavs = getPadavs()
    expect(padavs.length).toBe(11)

    padavs.forEach((padav, idx) => {
      expect(padav.dayNumber).toBe(idx + 1)
      expect(padav.type).toBe("padav")
      expect(padav.title.hi).toBeTruthy()
      expect(padav.title.en).toBeTruthy()
      expect(padav.significance.hi.length).toBeGreaterThan(100)
    })
  })

  it("should have 9 sacred shrines and temples", () => {
    const shrines = getShrines()
    expect(shrines.length).toBe(9)

    shrines.forEach((shrine) => {
      expect(shrine.dayNumber).toBeNull()
      expect(shrine.title.hi).toBeTruthy()
      expect(shrine.significance.hi.length).toBeGreaterThan(100)
    })
  })

  it("should successfully retrieve individual locations by slug", () => {
    const korona = getLocationBySlug("korona")
    expect(korona).toBeDefined()
    expect(korona?.dayNumber).toBe(1)
    expect(korona?.district).toContain("सीतापुर")

    const kalipith = getLocationBySlug("kalipith")
    expect(kalipith).toBeDefined()
    expect(kalipith?.significance.hi).toContain("कालीपीठ")

    const chakraTirth = getLocationBySlug("chakra-tirth")
    expect(chakraTirth).toBeDefined()
  })

  it("should have valid coordinates for all 20 locations", () => {
    sacredLocations.forEach((loc) => {
      expect(loc.coordinates.lat).toBeGreaterThan(27)
      expect(loc.coordinates.lat).toBeLessThan(28)
      expect(loc.coordinates.lng).toBeGreaterThan(80)
      expect(loc.coordinates.lng).toBeLessThan(81)
    })
  })
})
