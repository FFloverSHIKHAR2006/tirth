"use client"

import React, { useState, useMemo } from "react"
import Link from "next/link"
import {
  MapPin,
  ArrowRight,
  Sparkles,
  Building2,
  Search,
  X,
  Compass,
  RotateCcw,
  SlidersHorizontal,
} from "lucide-react"
import { sacredLocations } from "@/data/sacred-locations"
import { useLanguage } from "@/context/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  filterSacredLocations,
  type LocationTypeFilter,
  type DistrictFilter,
} from "@/lib/search-locations"

export function SacredPlacesGrid() {
  const { language, t } = useLanguage()
  const [query, setQuery] = useState("")
  const [typeFilter, setTypeFilter] = useState<LocationTypeFilter>("all")
  const [districtFilter, setDistrictFilter] = useState<DistrictFilter>("all")

  const filteredLocations = useMemo(() => {
    return filterSacredLocations(sacredLocations, {
      query,
      typeFilter,
      districtFilter,
    })
  }, [query, typeFilter, districtFilter])

  const hasActiveFilters =
    query.trim().length > 0 || typeFilter !== "all" || districtFilter !== "all"

  const handleResetFilters = () => {
    setQuery("")
    setTypeFilter("all")
    setDistrictFilter("all")
  }

  return (
    <div className="space-y-8" id="sacred-places-section">
      {/* Header & Description */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/80 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>नैमिषारण्य पवित्र धाम</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
            {t("sacredPlacesTitle")}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            {t("sacredSitesCount")} • 11 पड़ाव एवं 9 प्राचीन तीर्थ
          </p>
        </div>

        {/* Counter Badge */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          <span className="text-xs font-medium px-3 py-1.5 rounded-xl bg-secondary/80 text-secondary-foreground border border-border">
            {filteredLocations.length} / {sacredLocations.length} {t("showingLocations")}
          </span>
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleResetFilters}
              className="text-xs h-8 px-2.5 text-muted-foreground hover:text-foreground flex items-center gap-1 rounded-xl"
            >
              <RotateCcw className="w-3 h-3" />
              <span>{t("resetFilters")}</span>
            </Button>
          )}
        </div>
      </div>

      {/* Search Input & Multi-Criteria Controls */}
      <div className="space-y-4 bg-card/60 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-border/80 shadow-sm">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          <Input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("searchPlaceholder")}
            aria-label={t("searchPlaceholder")}
            className="pl-10 pr-10 h-11 rounded-xl bg-background/80 border-border/80 text-sm focus-visible:ring-primary"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-1 rounded-lg hover:bg-secondary transition-colors"
              aria-label={t("clearSearch")}
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Controls Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pt-1">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1 mr-1">
              <SlidersHorizontal className="w-3 h-3" />
              {t("filterByType")}:
            </span>
            <Button
              variant={typeFilter === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setTypeFilter("all")}
              className="text-xs h-8 rounded-lg"
            >
              {t("allLocations")} (20)
            </Button>
            <Button
              variant={typeFilter === "padav" ? "default" : "outline"}
              size="sm"
              onClick={() => setTypeFilter("padav")}
              className="text-xs h-8 rounded-lg flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3" />
              {t("parikramaStops")} (11)
            </Button>
            <Button
              variant={typeFilter === "temple" ? "default" : "outline"}
              size="sm"
              onClick={() => setTypeFilter("temple")}
              className="text-xs h-8 rounded-lg flex items-center gap-1"
            >
              <Building2 className="w-3 h-3" />
              {t("majorShrines")} (9)
            </Button>
          </div>

          {/* District Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1 mr-1">
              <MapPin className="w-3 h-3" />
              {t("filterByDistrict")}:
            </span>
            <Button
              variant={districtFilter === "all" ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setDistrictFilter("all")}
              className="text-xs h-8 rounded-lg"
            >
              {t("allDistricts")}
            </Button>
            <Button
              variant={districtFilter === "sitapur" ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setDistrictFilter("sitapur")}
              className="text-xs h-8 rounded-lg"
            >
              {t("sitapurDistrict")} (16)
            </Button>
            <Button
              variant={districtFilter === "hardoi" ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setDistrictFilter("hardoi")}
              className="text-xs h-8 rounded-lg"
            >
              {t("hardoiDistrict")} (4)
            </Button>
          </div>
        </div>
      </div>

      {/* Grid of Locations */}
      {filteredLocations.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredLocations.map((loc) => {
            const title = language === "hi" ? loc.title.hi : loc.title.en
            const isPadav = loc.type === "padav"

            return (
              <Link
                key={loc.slug}
                href={`/yatra/namisharanya/${loc.slug}`}
                className="group flex flex-col justify-between p-5 rounded-2xl bg-card border border-border/80 hover:border-primary/50 hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${
                        isPadav
                          ? "bg-primary/10 text-primary border border-primary/20"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {isPadav ? `${t("day")} ${loc.dayNumber}` : "तीर्थ / मंदिर"}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-0.5">
                      <MapPin className="w-3 h-3 text-primary" />
                      {loc.district.split(" ")[0]}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-serif text-base text-primary">ॐ</span>
                    <h4 className="font-serif text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2">
                      {title}
                    </h4>
                  </div>

                  <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed mt-2">
                    {language === "hi"
                      ? loc.significance.hi.split("\n")[0]
                      : loc.significance.en}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-border/50 flex items-center justify-between text-xs font-semibold text-primary">
                  <span>{t("viewDetails")}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            )
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="flex flex-col items-center justify-center p-12 text-center rounded-2xl border border-dashed border-border bg-card/40 my-6">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
            <Compass className="w-8 h-8 animate-pulse" />
          </div>
          <h4 className="font-serif text-lg sm:text-xl font-bold text-foreground mb-2">
            {t("searchNoResults")}
          </h4>
          <p className="text-sm text-muted-foreground max-w-md mb-6 leading-relaxed">
            {language === "hi"
              ? "आप जो खोज रहे हैं उससे संबंधित कोई पड़ाव या तीर्थ नहीं मिला। कृपया अलग शब्दों से खोजें या फ़िल्टर रीसेट करें।"
              : "No sacred places match your current search query or filter criteria. Try broader keywords or reset the filters."}
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={handleResetFilters}
            className="rounded-xl flex items-center gap-2 border-primary/30 hover:bg-primary/10 text-primary font-semibold"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{t("resetFilters")}</span>
          </Button>
        </div>
      )}
    </div>
  )
}
