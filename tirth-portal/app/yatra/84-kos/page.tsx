"use client"

import React from "react"
import Link from "next/link"
import { useLanguage } from "@/context/language-context"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { InteractiveMap } from "@/components/interactive-map"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MapPin, Clock, Calendar, Compass, Sparkles } from "lucide-react"
import { yatras } from "@/data/yatras"

export default function Kos84YatraPage() {
  const { language, t } = useLanguage()
  const yatra = yatras["84-kos"]
  const highlights = yatra.highlights[language] || yatra.highlights["en"] || []

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 bg-gradient-to-b from-secondary/40 via-background to-background border-b border-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/">
            <Button variant="ghost" className="mb-6 text-muted-foreground hover:text-primary gap-2">
              <ArrowLeft className="w-4 h-4" />
              {t("backToHome")}
            </Button>
          </Link>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Braj Mandala Parikrama</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-tight">
                {t(yatra.titleKey)}
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {t(yatra.descKey)}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-card border border-border/80 shadow-sm">
                  <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground">{t("location")}</p>
                  <p className="font-semibold text-foreground text-sm truncate">Mathura & Braj</p>
                </div>

                <div className="p-4 rounded-2xl bg-card border border-border/80 shadow-sm">
                  <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground">{t("duration")}</p>
                  <p className="font-semibold text-foreground text-sm">{yatra.duration}</p>
                </div>

                <div className="p-4 rounded-2xl bg-card border border-border/80 shadow-sm">
                  <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                    <Calendar className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground">{t("bestTime")}</p>
                  <p className="font-semibold text-foreground text-sm truncate">Oct - Nov (Kartik)</p>
                </div>

                <div className="p-4 rounded-2xl bg-card border border-border/80 shadow-sm">
                  <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                    <Compass className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground">{t("distance")}</p>
                  <p className="font-semibold text-foreground text-sm">{yatra.distance}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/80 aspect-[4/3] bg-gradient-to-tr from-amber-600/30 to-amber-100/30 flex items-center justify-center p-8 text-center">
                <div className="space-y-4">
                  <span className="font-serif text-6xl text-primary drop-shadow-md">🦚</span>
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    श्री ब्रज चौरासी कोस परिक्रमा
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                    भगवान श्री कृष्ण की बाल लीलाओं, 12 दिव्य वनों एवं गिरिराज गोवर्धन की पावन परिक्रमा।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-3">
              {t("routeMap")}
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              {t("84kosRouteInfo")}
            </p>
          </div>

          <InteractiveMap
            center={yatra.centerCoordinates}
            zoom={yatra.zoom}
            markers={yatra.markers}
            routeCoordinates={yatra.routeCoordinates}
            title="84 Kos Braj Parikrama Circuit"
          />
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 bg-secondary/30 border-t border-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-3">
              {t("keyHighlights")}
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              {t("84kosSignificance")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border/80 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <span className="text-primary font-bold text-sm">{index + 1}</span>
                </div>
                <p className="text-foreground leading-relaxed text-sm sm:text-base font-medium">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
