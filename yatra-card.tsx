"use client"

import Link from "next/link"
import { useLanguage } from "@/context/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

type YatraCardProps = {
  titleKey: string
  descKey: string
  href: string
  imageQuery: string
}

export function YatraCard({ titleKey, descKey, href, imageQuery }: YatraCardProps) {
  const { t } = useLanguage()

  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-border bg-card">
      <div className="relative h-48 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{
            backgroundImage: `url(/placeholder.svg?height=400&width=600&query=${encodeURIComponent(imageQuery)})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
      </div>
      <CardHeader>
        <CardTitle className="font-serif text-2xl text-card-foreground">{t(titleKey)}</CardTitle>
        <CardDescription className="text-muted-foreground leading-relaxed">{t(descKey)}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Link href={href} className="w-full">
          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group">
            {t("viewDetails")}
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
