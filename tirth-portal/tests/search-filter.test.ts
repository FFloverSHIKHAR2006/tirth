import { describe, it, expect } from "vitest"
import { sacredLocations } from "@/data/sacred-locations"
import { filterSacredLocations } from "@/lib/search-locations"

describe("Sacred Places Search & Filter Engine", () => {
  it("should return all 20 locations when no query or filters are applied", () => {
    const results = filterSacredLocations(sacredLocations)
    expect(results.length).toBe(20)
  })

  it("should filter correctly by category (padav vs shrine)", () => {
    const padavs = filterSacredLocations(sacredLocations, { typeFilter: "padav" })
    expect(padavs.length).toBe(11)
    expect(padavs.every((loc) => loc.type === "padav")).toBe(true)

    const shrines = filterSacredLocations(sacredLocations, { typeFilter: "temple" })
    expect(shrines.length).toBe(9)
    expect(shrines.every((loc) => loc.type !== "padav")).toBe(true)
  })

  it("should filter correctly by district (16 in Sitapur, 4 in Hardoi)", () => {
    const sitapur = filterSacredLocations(sacredLocations, { districtFilter: "sitapur" })
    const hardoi = filterSacredLocations(sacredLocations, { districtFilter: "hardoi" })

    expect(sitapur.length).toBe(16)
    expect(hardoi.length).toBe(4)
    expect(sitapur.length + hardoi.length).toBe(20)
  })

  it("should find locations by English title search", () => {
    const chakra = filterSacredLocations(sacredLocations, { query: "chakra" })
    expect(chakra.length).toBeGreaterThanOrEqual(1)
    expect(chakra[0].slug).toBe("chakra-tirth")

    const vyas = filterSacredLocations(sacredLocations, { query: "Vyas Gaddi" })
    expect(vyas.length).toBe(1)
    expect(vyas[0].slug).toBe("vyas-gaddi")
  })

  it("should find locations by Hindi title search", () => {
    const lalita = filterSacredLocations(sacredLocations, { query: "ललिता" })
    expect(lalita.length).toBeGreaterThanOrEqual(1)
    expect(lalita.some((l) => l.slug === "lalita-shakti-peeth")).toBe(true)

    const korona = filterSacredLocations(sacredLocations, { query: "कोरौना" })
    expect(korona.length).toBeGreaterThanOrEqual(1)
    expect(korona.some((l) => l.slug === "korona")).toBe(true)
  })

  it("should find padavs by day query in English and Hindi", () => {
    const day1Eng = filterSacredLocations(sacredLocations, { query: "Day 1" })
    expect(day1Eng.some((l) => l.slug === "korona")).toBe(true)

    const day1Hi = filterSacredLocations(sacredLocations, { query: "प्रथम" })
    expect(day1Hi.some((l) => l.slug === "korona")).toBe(true)

    const day11 = filterSacredLocations(sacredLocations, { query: "Day 11" })
    expect(day11.some((l) => l.dayNumber === 11)).toBe(true)
  })

  it("should support combined multi-criteria filters (category + district + query)", () => {
    const hardoiPadavs = filterSacredLocations(sacredLocations, {
      typeFilter: "padav",
      districtFilter: "hardoi",
    })
    expect(hardoiPadavs.length).toBe(4)
    expect(hardoiPadavs.every((l) => l.district.includes("हरदोई") && l.type === "padav")).toBe(true)

    const searchedHardoi = filterSacredLocations(sacredLocations, {
      typeFilter: "padav",
      districtFilter: "hardoi",
      query: "जगन्नाथ",
    })
    expect(searchedHardoi.length).toBe(1)
    expect(searchedHardoi[0].slug).toBe("hareya")
  })

  it("should return empty array gracefully when no locations match", () => {
    const noResults = filterSacredLocations(sacredLocations, {
      query: "xyznonexistentplacename123",
    })
    expect(noResults).toEqual([])
  })
})
