import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  parikramaDays,
  getDayByNumber,
  getSiteBySlug,
} from '@/data/naimisharanya-parikrama-data'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { SourceBadge } from '@/components/source-badge'
import { Button } from '@/components/ui/button'
import {
  MapPin,
  Calendar,
  Compass,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  Award,
  BookOpen,
  Home,
  ChevronRight,
} from 'lucide-react'

interface DayPageProps {
  params: Promise<{ dayNumber: string }>
}

export async function generateStaticParams() {
  return parikramaDays.map((day) => ({
    dayNumber: String(day.dayNumber),
  }))
}

export default async function ParikramaDayPage({ params }: DayPageProps) {
  const { dayNumber } = await params
  const dayNum = parseInt(dayNumber, 10)
  const day = getDayByNumber(dayNum)

  if (!day) {
    notFound()
  }

  const prevDay = day.prevStopSlug
    ? parikramaDays.find((d) => d.slug === day.prevStopSlug)
    : null
  const nextDay = day.nextStopSlug
    ? parikramaDays.find((d) => d.slug === day.nextStopSlug)
    : null

  const keySites = day.keySacredSites
    .map((slug) => getSiteBySlug(slug))
    .filter((site): site is NonNullable<typeof site> => Boolean(site))

  const isCulminationDay = day.dayNumber === 11

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-primary flex items-center gap-1">
              <Home className="w-3 h-3" />
              <span>होम</span>
            </Link>
            <ChevronRight className="w-3 h-3 opacity-50" />
            <Link href="/yatra/namisharanya" className="hover:text-primary">
              नैमिषारण्य 84 कोस
            </Link>
            <ChevronRight className="w-3 h-3 opacity-50" />
            <span className="text-foreground font-semibold">दिवस {day.dayNumber} ({day.stopName.hi})</span>
          </nav>

          {/* Hero Section */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/15 via-card to-secondary/40 border border-primary/20 p-6 sm:p-10 shadow-lg">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-primary text-primary-foreground shadow-sm">
                  <Calendar className="w-3.5 h-3.5" />
                  दिवस {day.dayNumber} / Day {day.dayNumber}
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border border-border">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  {day.district}
                </span>
                {isCulminationDay && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-amber-950 shadow-sm animate-pulse">
                    ★ पूर्णाहुति महापर्व / Culmination Day
                  </span>
                )}
              </div>

              <div>
                <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
                  {day.title.hi}
                </h1>
                <p className="font-sans text-base sm:text-lg text-primary font-medium mt-1">
                  {day.title.en}
                </p>
              </div>

              {/* Transit & Itinerary Summary */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-4 border-t border-border/60 text-xs">
                <div className="bg-background/60 p-3 rounded-xl border border-border/40">
                  <span className="text-muted-foreground font-semibold uppercase tracking-wider text-[10px]">
                    प्रस्थान स्थल (Departure)
                  </span>
                  <p className="font-bold text-foreground text-sm mt-0.5">{day.startLocation}</p>
                </div>
                <div className="bg-background/60 p-3 rounded-xl border border-border/40">
                  <span className="text-muted-foreground font-semibold uppercase tracking-wider text-[10px]">
                    विश्राम पड़ाव (Overnight Camp)
                  </span>
                  <p className="font-bold text-primary text-sm mt-0.5">{day.overnightLocation}</p>
                </div>
                {day.distanceFromPreviousKm && (
                  <div className="bg-background/60 p-3 rounded-xl border border-border/40 sm:col-span-2 lg:col-span-1">
                    <span className="text-muted-foreground font-semibold uppercase tracking-wider text-[10px]">
                      मार्ग दूरी (Distance)
                    </span>
                    <p className="font-bold text-foreground text-sm mt-0.5">
                      लगभग {day.distanceFromPreviousKm} किमी (Kos Track)
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Culmination Banner for Day 11 */}
          {isCulminationDay && (
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-500/20 via-primary/15 to-amber-500/20 border-2 border-amber-500/40 shadow-xl space-y-4 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-amber-500 text-amber-950 flex items-center justify-center shrink-0 shadow-md">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    84 कोस परिक्रमा पूर्णाहुति महोत्सव – मिश्रिख तीर्थ
                  </h3>
                  <p className="text-sm text-foreground/90 mt-1 leading-relaxed">
                    महर्षि दधीचि की परम त्याग भूमि पर 84 कोस की पवित्र यात्रा पूर्ण होती है। यहाँ दधीचि कुंड में स्नान, पूर्णाहुति महाआरती, तथा पंचकोशी परिक्रमा का आयोजन होता है। पूर्णिमा तक विश्राम के पश्चात 15 दिवसीय ऐतिहासिक मेला प्रारंभ होता है।
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Spiritual Significance & Traditional Lore */}
          <div className="space-y-4 p-6 sm:p-8 rounded-3xl bg-card border border-border/80 shadow-sm">
            <div className="flex items-center justify-between gap-3 border-b border-border/60 pb-3">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-primary" />
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground">
                  धार्मिक एवं आध्यात्मिक महत्व
                </h3>
              </div>
              <SourceBadge label="TRADITION" />
            </div>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-foreground/95">
              <p>{day.traditionalSignificance.hi}</p>
              <div className="p-4 rounded-2xl bg-secondary/40 border border-border/50 text-xs sm:text-sm text-muted-foreground italic leading-relaxed">
                <span className="font-semibold text-foreground not-italic">English Summary:</span>{' '}
                {day.traditionalSignificance.en}
              </div>
            </div>
          </div>

          {/* Rituals and Offerings */}
          <div className="space-y-4 p-6 sm:p-8 rounded-3xl bg-card border border-border/80 shadow-sm">
            <div className="flex items-center justify-between gap-3 border-b border-border/60 pb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground">
                  प्रमुख परंपराएँ, पूजन एवं दान विधान
                </h3>
              </div>
              <SourceBadge label="LOCAL BELIEF" />
            </div>

            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              {day.ritualsAndDonations.hi.map((ritual, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-secondary/40 border border-border/60 text-sm text-foreground"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">{ritual}</span>
                    <p className="text-xs text-muted-foreground mt-1">
                      {day.ritualsAndDonations.en[idx]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Symbolic Tirthas (Days 5, 8, 10) */}
          {day.symbolicTirthas && day.symbolicTirthas.length > 0 && (
            <div className="space-y-3 p-6 rounded-3xl bg-secondary/30 border border-border/70">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-primary" />
                <h4 className="font-serif text-base sm:text-lg font-bold text-foreground">
                  प्रतीकात्मक तीर्थ दर्शन (Symbolic Invocations)
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                संदर्भ अभिलेख के अनुसार इस पड़ाव पर श्रद्धालु निम्नलिखित पावन तीर्थों के नामों का स्मरण एवं प्रतीकात्मक नमन करते हैं:
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {day.symbolicTirthas.map((tirtha, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-xl bg-background border border-primary/20 text-xs font-semibold text-foreground shadow-xs"
                  >
                    🚩 {tirtha}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Key Sacred Sites on This Day */}
          {keySites.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground">
                  इस पड़ाव के प्रमुख दर्शनीय एवं पावन तीर्थ
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {keySites.map((site) => (
                  <Link
                    key={site.slug}
                    href={`/yatra/namisharanya/${site.slug}`}
                    className="group flex flex-col justify-between p-5 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs mb-2">
                        <span className="px-2.5 py-0.5 rounded-full font-bold bg-primary/10 text-primary border border-primary/20">
                          {site.category}
                        </span>
                        <SourceBadge label={site.sourceLabels[0] || 'TRADITION'} />
                      </div>

                      <h4 className="font-serif text-base font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                        {site.title.hi}
                      </h4>

                      <p className="text-xs text-muted-foreground line-clamp-2 mt-2 leading-relaxed">
                        {site.spiritualSignificance.hi}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-border/60 flex items-center justify-between text-xs font-semibold text-primary">
                      <span>तीर्थ विवरण देखें</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Location & Directions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-secondary/30 border border-border/80 text-xs">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <span className="text-muted-foreground">
                भौगोलिक निर्देशांक: {day.coordinates.lat}° N, {day.coordinates.lng}° E ({day.district})
              </span>
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${day.coordinates.lat},${day.coordinates.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline shrink-0"
            >
              <span>Google Maps पर मार्ग देखें</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Next & Previous Day Pagination Bar */}
          <div className="flex items-center justify-between pt-8 border-t border-border/80">
            {prevDay ? (
              <Link
                href={`/yatra/namisharanya/day/${prevDay.dayNumber}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-card hover:bg-accent text-xs font-semibold text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>पिछला पड़ाव: दिवस {prevDay.dayNumber} ({prevDay.stopName.hi})</span>
              </Link>
            ) : (
              <div />
            )}

            {nextDay ? (
              <Link
                href={`/yatra/namisharanya/day/${nextDay.dayNumber}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 text-xs font-semibold transition-colors shadow-sm"
              >
                <span>अगला पड़ाव: दिवस {nextDay.dayNumber} ({nextDay.stopName.hi})</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : (
              <Link
                href="/yatra/namisharanya"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 text-xs font-semibold transition-colors shadow-sm"
              >
                <span>परिक्रमा विवरण पृष्ठ पर लौटें</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
