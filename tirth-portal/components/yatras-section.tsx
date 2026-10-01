"use client"

import React from "react"
import { useLanguage } from "@/context/language-context"
import { YatraCard } from "@/components/yatra-card"
import { yatras } from "@/data/yatras"

export function YatrasSection() {
  const { t } = useLanguage()
  const kos84 = yatras["84-kos"]
  const namish = yatras["namisharanya"]

  return (
    <section id="yatras" className="py-24 bg-secondary/30 border-y border-border/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest font-bold text-primary">
            Sacred Pilgrimage Circuits
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            {t("ourSacredYatras")}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground text-base sm:text-lg pt-2 leading-relaxed">
            {t("yatrasSectionDesc")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <YatraCard
            titleKey="84kosYatraTitle"
            descKey="84kosYatraDesc"
            href="/yatra/84-kos"
            imageSrc={kos84.heroImage}
            imageAlt="84 Kos Braj Parikrama Mathura Vrindavan"
            location={kos84.location}
            duration={kos84.duration}
            distance={kos84.distance}
          />
          <YatraCard
            titleKey="namisharanyaYatraTitle"
            descKey="namisharanyaYatraDesc"
            href="/yatra/namisharanya"
            imageSrc={namish.heroImage}
            imageAlt="Namisharanya Yatra Sitapur Hardoi"
            location={namish.location}
            duration={namish.duration}
            distance={namish.distance}
          />
        </div>
      </div>
    </section>
  )
}
