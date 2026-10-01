import { SacredLocation } from "@/data/sacred-locations"

export type LocationTypeFilter = "all" | "padav" | "temple"
export type DistrictFilter = "all" | "sitapur" | "hardoi"

export interface SearchLocationsOptions {
  query?: string
  typeFilter?: LocationTypeFilter
  districtFilter?: DistrictFilter
}

const HINDI_DAY_TERMS: Record<number, string[]> = {
  1: ["प्रथम", "पहला", "एक"],
  2: ["द्वितीय", "दूसरा", "दो"],
  3: ["तृतीय", "तीसरा", "तीन"],
  4: ["चतुर्थ", "चौथा", "चार"],
  5: ["पंचम", "पाँचवाँ", "पांचवा", "पांच"],
  6: ["षष्ठम", "छठा", "छह"],
  7: ["सप्तम", "सातवाँ", "सातवा", "सात"],
  8: ["अष्टम", "आठवाँ", "आठवा", "आठ"],
  9: ["नवम", "नौवाँ", "नौवा", "नौ"],
  10: ["दशम", "दसवाँ", "दसवा", "दस"],
  11: ["एकादश", "ग्यारहवाँ", "ग्यारहवा", "ग्यारह"],
}

export function filterSacredLocations(
  locations: SacredLocation[],
  options: SearchLocationsOptions = {}
): SacredLocation[] {
  const { query = "", typeFilter = "all", districtFilter = "all" } = options
  const cleanQuery = query.trim().toLowerCase()

  return locations.filter((loc) => {
    // 1. Type Filter
    if (typeFilter === "padav" && loc.type !== "padav") {
      return false
    }
    if (typeFilter === "temple" && loc.type === "padav") {
      return false
    }

    // 2. District Filter
    if (districtFilter === "sitapur") {
      const isSitapur =
        loc.district.toLowerCase().includes("sitapur") ||
        loc.district.includes("सीतापुर")
      if (!isSitapur) return false
    } else if (districtFilter === "hardoi") {
      const isHardoi =
        loc.district.toLowerCase().includes("hardoi") ||
        loc.district.includes("हरदोई")
      if (!isHardoi) return false
    }

    // 3. Search Query Filter
    if (!cleanQuery) {
      return true
    }

    // Match title
    const titleHi = loc.title.hi.toLowerCase()
    const titleEn = loc.title.en.toLowerCase()
    if (titleHi.includes(cleanQuery) || titleEn.includes(cleanQuery)) {
      return true
    }

    // Match district text
    const districtText = loc.district.toLowerCase()
    if (districtText.includes(cleanQuery)) {
      return true
    }

    // Match day number
    if (loc.dayNumber !== null) {
      const dayStr = String(loc.dayNumber)
      if (
        cleanQuery === dayStr ||
        cleanQuery === `day ${dayStr}` ||
        cleanQuery === `day-${dayStr}` ||
        cleanQuery === `day${dayStr}`
      ) {
        return true
      }

      // Check Hindi day terms (e.g. "प्रथम", "द्वितीय")
      const hindiTerms = HINDI_DAY_TERMS[loc.dayNumber] || []
      if (hindiTerms.some((term) => cleanQuery.includes(term.toLowerCase()))) {
        return true
      }
    }

    // Match significance keywords
    const sigHi = loc.significance.hi.toLowerCase()
    const sigEn = loc.significance.en.toLowerCase()
    if (sigHi.includes(cleanQuery) || sigEn.includes(cleanQuery)) {
      return true
    }

    // Match slug or id
    if (loc.slug.toLowerCase().includes(cleanQuery) || loc.id.toLowerCase().includes(cleanQuery)) {
      return true
    }

    return false
  })
}
