export type SourceLabel =
  | 'TRADITION'
  | 'SCRIPTURAL REFERENCE'
  | 'LOCAL BELIEF'
  | 'REFERENCE DOCUMENT'
  | 'GEOGRAPHICAL INFORMATION'
  | 'PRACTICAL INFORMATION'

export type SiteCategory =
  | 'Shakti'
  | 'Shiva'
  | 'Vishnu'
  | 'Rishi'
  | 'Kund'
  | 'Temple'
  | 'Ghat'
  | 'Ashram'
  | 'Mythological'
  | 'Cave'
  | 'Other'

export interface ScripturalQuote {
  source: string
  shloka?: string
  translation: {
    en: string
    hi: string
  }
}

export interface ParikramaDay {
  dayNumber: number
  slug: string
  title: {
    en: string
    hi: string
  }
  stopName: {
    en: string
    hi: string
  }
  district: string
  coordinates: {
    lat: number
    lng: number
  }
  startLocation: string
  overnightLocation: string
  traditionalSignificance: {
    en: string
    hi: string
  }
  ritualsAndDonations: {
    en: string[]
    hi: string[]
  }
  keySacredSites: string[] // slugs of sites visited on this day
  symbolicTirthas?: string[] // symbolic tirthas mentioned in the PDF
  nextStopSlug: string | null
  prevStopSlug: string | null
  distanceFromPreviousKm?: number
}

export interface SacredSiteDetail {
  id: string
  slug: string
  title: {
    en: string
    hi: string
  }
  category: SiteCategory
  district: string
  coordinates: {
    lat: number
    lng: number
  }
  dayNumbers: number[]
  deitiesOrFigures: string[]
  spiritualSignificance: {
    en: string
    hi: string
  }
  traditionalLore: {
    en: string
    hi: string
  }
  scripturalQuotations?: ScripturalQuote[]
  ritualsAndObservances: {
    en: string[]
    hi: string[]
  }
  sourceLabels: SourceLabel[]
  relatedSiteSlugs: string[]
  specialFeature?: 'dashamahavidya' | 'trishakti' | 'purana-mandir' | 'dadhichi' | 'chakra' | 'none'
  practicalTips?: {
    en: string
    hi: string
  }
}

export interface DashamahavidyaDetail {
  number: number
  name: {
    en: string
    hi: string
  }
  title: {
    en: string
    hi: string
  }
  iconography: {
    en: string
    hi: string
  }
  significance: {
    en: string
    hi: string
  }
  mantra: string
}

export interface TrishaktiPower {
  power: 'ichha' | 'jnana' | 'kriya'
  name: {
    en: string
    hi: string
  }
  deity: {
    en: string
    hi: string
  }
  meaning: {
    en: string
    hi: string
  }
  symbolism: {
    en: string
    hi: string
  }
}
