"use client"

import React from "react"
import { useLanguage } from "@/context/language-context"
import { Heart, Users, Compass, BookOpen, Sparkles } from "lucide-react"

const features = [
  { icon: Heart, labelKey: "spiritualGuidance" },
  { icon: Compass, labelKey: "sacredRoutes" },
  { icon: Sparkles, labelKey: "divineExperience" },
  { icon: BookOpen, labelKey: "parikramaStops" },
]

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sanatan Pilgrimage Heritage</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
              {t("aboutTitle")}
            </h2>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              {t("aboutDesc1")}
            </p>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              {t("aboutDesc2")}
            </p>

            {/* Feature Badges */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-secondary/40 border border-border/80 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-semibold text-foreground text-xs sm:text-sm">
                    {t(feature.labelKey)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Decorative Sacred Emblem Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-8 sm:p-12 border border-primary/30 bg-gradient-to-br from-amber-500/10 via-amber-100/10 to-transparent dark:from-amber-950/20 dark:via-stone-900/40 dark:to-transparent shadow-xl flex flex-col items-center text-center space-y-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-amber-600 to-amber-400 text-white flex items-center justify-center shadow-lg">
                <span className="font-serif text-5xl">ॐ</span>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-bold text-foreground">
                  पवित्र तीर्थ परम्परा
                </h3>
                <p className="text-xs text-primary font-semibold tracking-wider uppercase">
                  Ancient Sacred Knowledge & Parikrama
                </p>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                परिक्रमा आत्मा की शुद्धि और परमात्मा से एकाकार होने का वह पुरातन मार्ग है जिसे सतयुग से ऋषि-मुनि अपनाते आए हैं।
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
