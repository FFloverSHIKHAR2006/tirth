"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/context/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, MapPin, Clock, Compass } from "lucide-react"

type YatraCardProps = {
  titleKey: string
  descKey: string
  href: string
  imageSrc: string
  imageAlt: string
  location: string
  duration: string
  distance: string
}

export function YatraCard({
  titleKey,
  descKey,
  href,
  imageSrc,
  imageAlt,
  location,
  duration,
  distance,
}: YatraCardProps) {
  const { t } = useLanguage()

  return (
    <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-border/80 bg-card rounded-3xl flex flex-col justify-between">
      <div>
        {/* Card Image Banner */}
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Location Badge on Image */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold border border-white/20">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              {location}
            </span>
          </div>

          {/* Quick Metrics on Image Bottom */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-stone-200 font-medium">
            <span className="flex items-center gap-1 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-lg">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              {duration}
            </span>
            <span className="flex items-center gap-1 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-lg">
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              {distance}
            </span>
          </div>
        </div>

        {/* Card Content */}
        <CardHeader className="p-6">
          <CardTitle className="font-serif text-2xl sm:text-3xl font-bold text-card-foreground group-hover:text-primary transition-colors">
            {t(titleKey)}
          </CardTitle>
          <CardDescription className="text-muted-foreground text-sm sm:text-base leading-relaxed mt-2 line-clamp-3">
            {t(descKey)}
          </CardDescription>
        </CardHeader>
      </div>

      <CardFooter className="p-6 pt-0">
        <Link href={href} className="w-full">
          <Button
            size="lg"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group/btn rounded-2xl font-semibold shadow-md gap-2"
          >
            <span>{t("viewDetails")}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
