"use client"

import React, { useEffect } from "react"
import { useRouter } from "next/navigation"
import {
  Compass,
  MapPin,
  Sparkles,
  Building2,
  Calendar,
  Route,
} from "lucide-react"
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from "@/components/ui/command"
import { sacredLocations } from "@/data/sacred-locations"
import { yatras } from "@/data/yatras"
import { useLanguage } from "@/context/language-context"

interface SearchDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const router = useRouter()
  const { language, t } = useLanguage()

  // Global Ctrl+K / Cmd+K keyboard shortcut listener
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName))) {
        e.preventDefault()
        onOpenChange(!open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [open, onOpenChange])

  const handleSelect = (href: string) => {
    onOpenChange(false)
    router.push(href)
  }

  const padavs = sacredLocations.filter((loc) => loc.type === "padav")
  const shrines = sacredLocations.filter((loc) => loc.type !== "padav")

  return (
    <CommandDialog
      open={open}
      onOpenChange={onOpenChange}
      title={t("quickSearch")}
      description={t("quickSearchPlaceholder")}
    >
      <CommandInput
        placeholder={t("quickSearchPlaceholder")}
        className="text-sm"
      />
      <CommandList className="max-h-[380px] p-2">
        <CommandEmpty className="py-8 text-center text-sm text-muted-foreground">
          <Compass className="w-8 h-8 mx-auto mb-2 text-primary/40 animate-pulse" />
          <p className="font-semibold text-foreground">{t("searchNoResults")}</p>
          <p className="text-xs mt-1">Try searching "Chakra", "Day 1", "Braj", or "ललिता देवी"</p>
        </CommandEmpty>

        {/* Major Pilgrimage Circuits (Yatras) */}
        <CommandGroup heading={language === "hi" ? "🕉 प्रमुख यात्रा परिपथ" : "🕉 Major Pilgrimage Circuits"}>
          {Object.values(yatras).map((yatra) => {
            const title = t(yatra.titleKey)
            const desc = t(yatra.descKey)
            return (
              <CommandItem
                key={yatra.id}
                value={`${title} ${desc} ${yatra.location} yatra 84 kos`}
                onSelect={() => handleSelect(`/yatra/${yatra.slug}`)}
                className="flex items-center justify-between p-2.5 rounded-xl cursor-pointer hover:bg-accent"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <Route className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-serif font-bold text-sm text-foreground">{title}</span>
                    <span className="text-xs text-muted-foreground line-clamp-1 max-w-[280px]">{desc}</span>
                  </div>
                </div>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground font-semibold shrink-0">
                  {yatra.duration}
                </span>
              </CommandItem>
            )
          })}
        </CommandGroup>

        <CommandSeparator />

        {/* 11 Parikrama Stops (Padavs) */}
        <CommandGroup heading={language === "hi" ? "🚩 11-दिवसीय परिक्रमा पड़ाव" : "🚩 11-Day Parikrama Stops"}>
          {padavs.map((loc) => {
            const title = language === "hi" ? loc.title.hi : loc.title.en
            const district = loc.district.split(" ")[0]
            return (
              <CommandItem
                key={loc.slug}
                value={`${loc.title.en} ${loc.title.hi} Day ${loc.dayNumber} ${loc.district} पड़ाव`}
                onSelect={() => handleSelect(`/yatra/namisharanya/${loc.slug}`)}
                className="flex items-center justify-between p-2.5 rounded-xl cursor-pointer hover:bg-accent"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                    {loc.dayNumber}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-serif font-medium text-sm text-foreground">{title}</span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-primary" />
                      {district}
                    </span>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold border border-primary/20">
                  {t("day")} {loc.dayNumber}
                </span>
              </CommandItem>
            )
          })}
        </CommandGroup>

        <CommandSeparator />

        {/* 9 Ancient Shrines & Temples */}
        <CommandGroup heading={language === "hi" ? "🛕 प्राचीन तीर्थ एवं मंदिर" : "🛕 Ancient Shrines & Temples"}>
          {shrines.map((loc) => {
            const title = language === "hi" ? loc.title.hi : loc.title.en
            const district = loc.district.split(" ")[0]
            return (
              <CommandItem
                key={loc.slug}
                value={`${loc.title.en} ${loc.title.hi} ${loc.district} मन्दिर तीर्थ`}
                onSelect={() => handleSelect(`/yatra/namisharanya/${loc.slug}`)}
                className="flex items-center justify-between p-2.5 rounded-xl cursor-pointer hover:bg-accent"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-secondary text-secondary-foreground flex items-center justify-center">
                    <Building2 className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-serif font-medium text-sm text-foreground">{title}</span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-primary" />
                      {district}
                    </span>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground font-semibold">
                  तीर्थ
                </span>
              </CommandItem>
            )
          })}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
