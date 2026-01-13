"use client"

import { useLanguage } from "@/context/language-context"
import { YatraCard } from "@/components/yatra-card"

export function YatrasSection() {
  const { t } = useLanguage()

  return (
    <section id="yatras" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">{t("featuresTitle")}</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <YatraCard
            titleKey="kos84Title"
            descKey="kos84Desc"
            href="/yatra/84-kos"
            imageQuery="Vrindavan temple complex with pilgrims walking spiritual journey"
          />
          <YatraCard
            titleKey="namisharanyaTitle"
            descKey="namisharanyaDesc"
            href="/yatra/namisharanya"
            imageQuery="Naimisharanya forest sacred site ancient Indian pilgrimage"
          />
        </div>
      </div>
    </section>
  )
}
