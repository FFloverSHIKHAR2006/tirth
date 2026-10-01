"use client"

import React from "react"
import Image from "next/image"
import { useLanguage } from "@/context/language-context"
import { Button } from "@/components/ui/button"
import { ArrowDown, Sparkles } from "lucide-react"

export function HeroSection() {
  const { t } = useLanguage()

  const scrollToYatras = () => {
    document.getElementById("yatras")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Hero Background with High Quality Sacred Temple Ghats Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-sunrise.jpg"
          alt="Sacred Indian Pilgrimage Ghats at Sunrise"
          fill
          priority
          className="object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
          sizes="100vw"
        />
        {/* Multilayered Spiritual Atmosphere Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-black/50" />
        <div className="absolute inset-0 bg-amber-950/20 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-16 sm:py-24">
        {/* Sacred Mantra Pill */}
        <div className="mb-6 inline-block">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-background/80 backdrop-blur-md text-primary text-sm font-semibold border border-primary/30 shadow-lg">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>ॐ नमो भगवते वासुदेवाय • ॐ नमः शिवाय</span>
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 text-balance leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
          {t("heroTitle")}
        </h1>

        {/* Hero Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-stone-200 mb-10 max-w-2xl mx-auto text-pretty leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] font-medium">
          {t("heroSubtitle")}
        </p>

        {/* Call to Action Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base sm:text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold gap-2 border border-primary-foreground/20"
            onClick={scrollToYatras}
          >
            <span>{t("exploreYatras")}</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </Button>
        </div>
      </div>

      {/* Bottom Gradient Transition to Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  )
}
