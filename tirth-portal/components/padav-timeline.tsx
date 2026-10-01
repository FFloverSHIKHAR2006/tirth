"use client"

import React from "react"
import Link from "next/link"
import { Calendar, MapPin, ArrowRight, Sparkles } from "lucide-react"
import { getPadavs } from "@/data/sacred-locations"
import { useLanguage } from "@/context/language-context"

export function PadavTimeline() {
  const { language, t } = useLanguage()
  const padavs = getPadavs()

  return (
    <div className="space-y-6">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          {t("parikramaDays")}
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
          {t("parikramaStops")}
        </h3>
        <p className="text-muted-foreground text-sm sm:text-base mt-2">
          {language === "hi"
            ? "फाल्गुन मास में संपन्न होने वाली 84 कोसी नैमिषारण्य परिक्रमा के 11 मुख्य पड़ाव"
            : "The 11 sacred sequential stops of the 84 Kos Parikrama around Naimisharanya Dham"}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {padavs.map((padav) => {
          const title = language === "hi" ? padav.title.hi : padav.title.en
          const significance =
            language === "hi"
              ? padav.significance.hi.split("\n")[0]
              : padav.significance.en

          return (
            <div
              key={padav.slug}
              className="group relative flex flex-col justify-between bg-card rounded-2xl p-6 border border-border/80 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300"
            >
              {/* Day Badge */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-primary text-primary-foreground shadow-sm">
                  <Calendar className="w-3.5 h-3.5" />
                  {t("day")} {padav.dayNumber}
                </span>
                <span className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-primary" />
                  {padav.district}
                </span>
              </div>

              {/* Title & Preview */}
              <div>
                <h4 className="font-serif text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug mb-2">
                  {title}
                </h4>
                <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed mb-6">
                  {significance}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-border/60">
                <Link
                  href={`/yatra/namisharanya/${padav.slug}`}
                  className="inline-flex items-center justify-between w-full text-sm font-semibold text-primary hover:text-primary/80 group-hover:underline"
                >
                  <span>{t("viewDetails")}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
