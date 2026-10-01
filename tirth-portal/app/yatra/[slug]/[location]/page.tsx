import React from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Calendar,
  ExternalLink,
  Sparkles,
  BookOpen,
  CheckCircle2,
  Users,
  Compass,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { SourceBadge } from "@/components/source-badge"
import { DashamahavidyaExplorer } from "@/components/dashamahavidya-explorer"
import { TrishaktiPowers } from "@/components/trishakti-powers"
import { RelatedSites } from "@/components/related-sites"
import { getLocationBySlug, sacredLocations, getPadavs } from "@/data/sacred-locations"
import {
  sacredSiteDetails,
  getSiteBySlug,
  getDayByNumber,
} from "@/data/naimisharanya-parikrama-data"
import { getYatraBySlug } from "@/data/yatras"

interface PageProps {
  params: Promise<{
    slug: string
    location: string
  }>
}

export async function generateStaticParams() {
  const params: { slug: string; location: string }[] = []
  const slugSet = new Set<string>()
  sacredSiteDetails.forEach((s) => slugSet.add(s.slug))
  sacredLocations.forEach((loc) => slugSet.add(loc.slug))
  slugSet.forEach((locSlug) => {
    params.push({ slug: "namisharanya", location: locSlug })
  })
  return params
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, location: locationSlug } = await params
  const siteDetail = getSiteBySlug(locationSlug)
  const legacyLoc = getLocationBySlug(locationSlug)

  const titleHi = siteDetail?.title.hi || legacyLoc?.title.hi || "पवित्र स्थल"
  const titleEn = siteDetail?.title.en || legacyLoc?.title.en || "Sacred Site"
  const desc =
    siteDetail?.spiritualSignificance.hi ||
    legacyLoc?.significance.hi ||
    "नैमिषारण्य 84 कोस परिक्रमा का पावन स्थल"

  return {
    title: `${titleHi} (${titleEn}) – Naimisharanya 84 Kos Parikrama | Tirth`,
    description: desc.substring(0, 160),
    openGraph: {
      title: `${titleHi} – Naimisharanya 84 Kos Parikrama`,
      description: desc.substring(0, 160),
    },
  }
}

export default async function LocationDetailPage({ params }: PageProps) {
  const { slug, location: locationSlug } = await params
  const siteDetail = getSiteBySlug(locationSlug)
  const legacyLoc = getLocationBySlug(locationSlug)
  const yatra = getYatraBySlug(slug)

  if ((!siteDetail && !legacyLoc) || !yatra) {
    notFound()
  }

  // Unified metadata
  const title = siteDetail?.title || legacyLoc?.title || { en: "Sacred Site", hi: "पवित्र स्थल" }
  const district = siteDetail?.district || legacyLoc?.district || "सीतापुर (Sitapur)"
  const coordinates = siteDetail?.coordinates || legacyLoc?.coordinates || { lat: 27.35, lng: 80.48 }
  const dayNumbers = siteDetail?.dayNumbers || (legacyLoc?.dayNumber ? [legacyLoc.dayNumber] : [])
  const category = siteDetail?.category || (legacyLoc?.type === "padav" ? "Ashram" : "Temple")
  const sourceLabels = siteDetail?.sourceLabels || ["TRADITION", "GEOGRAPHICAL INFORMATION"]

  // Next / Previous Padav calculation
  const padavs = getPadavs()
  let prevPadav = null
  let nextPadav = null

  if (legacyLoc?.type === "padav" && legacyLoc.dayNumber) {
    const currentIdx = padavs.findIndex((p) => p.slug === legacyLoc.slug)
    if (currentIdx > 0) prevPadav = padavs[currentIdx - 1]
    if (currentIdx < padavs.length - 1) nextPadav = padavs[currentIdx + 1]
  }

  const primaryDayNumber = dayNumbers.length > 0 ? dayNumbers[0] : null
  const parikramaDay = primaryDayNumber ? getDayByNumber(primaryDayNumber) : null

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${coordinates.lat},${coordinates.lng}`

  // Paragraph splitting
  const significanceText = siteDetail?.spiritualSignificance.hi || legacyLoc?.significance.hi || ""
  const paragraphs = significanceText
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean)

  const isKalipith = siteDetail?.specialFeature === "dashamahavidya" || locationSlug === "kalipith"
  const isTrishakti = siteDetail?.specialFeature === "trishakti" || locationSlug === "trishakti-dham"

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navigation />

      {/* Hero Header */}
      <section className="relative pt-28 pb-14 bg-gradient-to-b from-secondary/40 via-background to-background border-b border-border/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-6 overflow-x-auto">
            <Link href="/" className="hover:text-primary transition-colors whitespace-nowrap">
              होम (Home)
            </Link>
            <span>/</span>
            <Link href={`/yatra/${slug}`} className="hover:text-primary transition-colors whitespace-nowrap">
              नैमिषारण्य यात्रा (Namisharanya)
            </Link>
            {primaryDayNumber && (
              <>
                <span>/</span>
                <Link
                  href={`/yatra/namisharanya/day/${primaryDayNumber}`}
                  className="hover:text-primary transition-colors whitespace-nowrap"
                >
                  दिवस {primaryDayNumber} पड़ाव
                </Link>
              </>
            )}
            <span>/</span>
            <span className="text-foreground font-medium truncate">{title.hi}</span>
          </nav>

          {/* Epistemic Badges & Tags */}
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            {primaryDayNumber && (
              <Link
                href={`/yatra/namisharanya/day/${primaryDayNumber}`}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" />
                दिवस {primaryDayNumber} (Day {primaryDayNumber})
              </Link>
            )}
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-secondary text-secondary-foreground">
              <Compass className="w-3.5 h-3.5 text-primary" />
              {category}
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              {district}
            </span>
            <span className="text-xs font-mono text-muted-foreground">
              📍 {coordinates.lat.toFixed(4)}° N, {coordinates.lng.toFixed(4)}° E
            </span>
          </div>

          {/* Epistemic Source Badges */}
          <div className="flex flex-wrap items-center gap-1.5 mb-4">
            {sourceLabels.map((lbl) => (
              <SourceBadge key={lbl} label={lbl} />
            ))}
          </div>

          {/* Heading */}
          <div className="flex items-start gap-3">
            <span className="font-serif text-3xl sm:text-4xl text-primary mt-1 select-none">ॐ</span>
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
                {title.hi}
              </h1>
              <p className="text-lg text-muted-foreground mt-2 font-serif">{title.en}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="bg-card rounded-3xl p-6 sm:p-10 border border-border/80 shadow-md space-y-8">
            {/* Associated Deities / Sages */}
            {siteDetail?.deitiesOrFigures && siteDetail.deitiesOrFigures.length > 0 && (
              <div className="flex items-center gap-2 p-3.5 rounded-2xl bg-primary/5 border border-primary/15">
                <Users className="w-4 h-4 text-primary shrink-0" />
                <span className="text-xs font-semibold text-foreground">
                  संबद्ध देवता एवं ऋषि (Deities & Sages):
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {siteDetail.deitiesOrFigures.map((fig) => (
                    <span
                      key={fig}
                      className="px-2 py-0.5 rounded-lg bg-background text-primary text-xs font-medium border border-primary/20"
                    >
                      {fig}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Spiritual Significance */}
            <div>
              <div className="flex items-center gap-2 mb-5 pb-3 border-b border-border">
                <Sparkles className="w-5 h-5 text-primary" />
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  धार्मिक महत्त्व एवं इतिहास (Significance & History)
                </h2>
              </div>

              <div className="space-y-4 text-foreground/90 leading-relaxed text-base sm:text-lg">
                {paragraphs.map((para, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              {siteDetail?.spiritualSignificance.en && (
                <div className="mt-4 pt-4 border-t border-border/60">
                  <p className="text-sm text-muted-foreground leading-relaxed italic">
                    {siteDetail.spiritualSignificance.en}
                  </p>
                </div>
              )}
            </div>

            {/* Traditional Lore */}
            {siteDetail?.traditionalLore && (
              <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-2">
                <div className="flex items-center gap-2">
                  <SourceBadge label="TRADITION" />
                  <h3 className="font-serif text-base font-bold text-foreground">
                    पौराणिक एवं लोक मान्यता (Traditional Lore)
                  </h3>
                </div>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  {siteDetail.traditionalLore.hi}
                </p>
                {siteDetail.traditionalLore.en && (
                  <p className="text-xs text-muted-foreground leading-relaxed italic">
                    {siteDetail.traditionalLore.en}
                  </p>
                )}
              </div>
            )}

            {/* Scriptural Quotes */}
            {siteDetail?.scripturalQuotations && siteDetail.scripturalQuotations.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <h3 className="font-serif text-xl font-bold text-foreground">
                    शास्त्र प्रमाण एवं श्लोक (Scriptural Citations)
                  </h3>
                </div>

                <div className="space-y-3">
                  {siteDetail.scripturalQuotations.map((quote, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-2.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                          📜 {quote.source}
                        </span>
                        <SourceBadge label="SCRIPTURAL REFERENCE" />
                      </div>
                      {quote.shloka && (
                        <blockquote className="font-serif text-base sm:text-lg font-semibold text-foreground/90 border-l-2 border-emerald-500/50 pl-3.5 italic">
                          {quote.shloka}
                        </blockquote>
                      )}
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        <span className="font-semibold text-emerald-700 dark:text-emerald-300">भावार्थ:</span>{" "}
                        {quote.translation.hi}
                      </p>
                      {quote.translation.en && (
                        <p className="text-xs text-muted-foreground italic leading-relaxed">
                          <span className="font-medium">Meaning:</span> {quote.translation.en}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Rituals and Observances */}
            {siteDetail?.ritualsAndObservances && siteDetail.ritualsAndObservances.hi.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <h3 className="font-serif text-xl font-bold text-foreground">
                    प्रमुख अनुष्ठान एवं दर्शन विधि (Sacred Rituals & Observances)
                  </h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {siteDetail.ritualsAndObservances.hi.map((ritual, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3.5 rounded-xl bg-secondary/30 border border-border/70"
                    >
                      <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-sm text-foreground/90 leading-snug">{ritual}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Actions & Navigation Link */}
            <div className="p-4 rounded-2xl bg-secondary/30 border border-border flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">तीर्थ स्थान एवं दिशा-निर्देश</p>
                  <p className="text-xs text-muted-foreground">
                    Google Maps पर सटीक जीपीएस निर्देशांक (Coordinates: {coordinates.lat}, {coordinates.lng})
                  </p>
                </div>
              </div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors shadow-sm whitespace-nowrap"
              >
                <ExternalLink className="w-4 h-4" />
                गूगल मैप्स पर देखें (Open Map)
              </a>
            </div>

            {/* Link to Parikrama Day if applicable */}
            {parikramaDay && (
              <div className="p-5 rounded-2xl bg-primary/5 border border-primary/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">
                    84 कोस परिक्रमा यात्रा क्रम
                  </span>
                  <h4 className="font-serif text-base font-bold text-foreground mt-0.5">
                    यह स्थल दिवस {primaryDayNumber} के पड़ाव ({parikramaDay.stopName.hi}) का प्रमुख अंग है
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    संपूर्ण दिवस का मार्ग, रात्रि विश्राम, एवं दान अनुष्ठान विवरण देखें।
                  </p>
                </div>
                <Link
                  href={`/yatra/namisharanya/day/${primaryDayNumber}`}
                  className="shrink-0"
                >
                  <Button variant="default" size="sm" className="gap-2">
                    दिवस {primaryDayNumber} विवरण देखें
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            )}

            {/* Next / Previous Padav Navigation */}
            {(prevPadav || nextPadav) && (
              <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                {prevPadav ? (
                  <Link href={`/yatra/namisharanya/${prevPadav.slug}`} className="w-full sm:w-auto">
                    <Button variant="outline" className="w-full justify-start gap-2 text-left">
                      <ArrowLeft className="w-4 h-4" />
                      <div>
                        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                          पिछला पड़ाव (Day {prevPadav.dayNumber})
                        </div>
                        <div className="text-xs font-semibold text-foreground truncate max-w-[200px]">
                          {prevPadav.title.hi}
                        </div>
                      </div>
                    </Button>
                  </Link>
                ) : (
                  <div />
                )}

                {nextPadav ? (
                  <Link href={`/yatra/namisharanya/${nextPadav.slug}`} className="w-full sm:w-auto">
                    <Button variant="outline" className="w-full justify-end gap-2 text-right">
                      <div>
                        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                          अगला पड़ाव (Day {nextPadav.dayNumber})
                        </div>
                        <div className="text-xs font-semibold text-foreground truncate max-w-[200px]">
                          {nextPadav.title.hi}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            )}

            {/* Back Button */}
            <div className="text-center pt-4">
              <Link href={`/yatra/${slug}`}>
                <Button variant="ghost" className="text-muted-foreground hover:text-primary gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  नैमिषारण्य यात्रा पर वापस (Back to Namisharanya Yatra)
                </Button>
              </Link>
            </div>
          </div>

          {/* Conditional Special Feature: Dashamahavidya Explorer (Kali Peeth) */}
          {isKalipith && (
            <div id="dashamahavidya-section" className="scroll-mt-24">
              <DashamahavidyaExplorer />
            </div>
          )}

          {/* Conditional Special Feature: Trishakti Powers (Trishakti Dham) */}
          {isTrishakti && (
            <div id="trishakti-section" className="scroll-mt-24">
              <TrishaktiPowers />
            </div>
          )}

          {/* Knowledge Graph: Related Sites */}
          {siteDetail?.relatedSiteSlugs && siteDetail.relatedSiteSlugs.length > 0 && (
            <div className="bg-card rounded-3xl p-6 sm:p-8 border border-border/80 shadow-md">
              <RelatedSites relatedSlugs={siteDetail.relatedSiteSlugs} />
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
