"use client"

import React from 'react'
import Link from 'next/link'
import { getSiteBySlug } from '@/data/naimisharanya-parikrama-data'
import { useLanguage } from '@/context/language-context'
import { MapPin, ArrowRight, Network, Sparkles } from 'lucide-react'

interface RelatedSitesProps {
  relatedSlugs: string[]
  title?: string
}

export function RelatedSites({ relatedSlugs, title }: RelatedSitesProps) {
  const { language, t } = useLanguage()

  const validSites = relatedSlugs
    .map((slug) => getSiteBySlug(slug))
    .filter((site): site is NonNullable<typeof site> => Boolean(site))

  if (validSites.length === 0) return null

  return (
    <div className="space-y-4 pt-6 border-t border-border/80">
      <div className="flex items-center gap-2">
        <Network className="w-4 h-4 text-primary" />
        <h4 className="font-serif text-lg font-bold text-foreground">
          {title || (language === 'hi' ? 'संबंधित तीर्थ एवं पवित्र स्थल' : 'Related Pilgrimage Sites')}
        </h4>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {validSites.map((site) => {
          const siteTitle = language === 'hi' ? site.title.hi : site.title.en
          return (
            <Link
              key={site.slug}
              href={`/yatra/namisharanya/${site.slug}`}
              className="group p-4 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] text-muted-foreground mb-2">
                  <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-bold">
                    {site.category}
                  </span>
                  <span className="flex items-center gap-0.5">
                    <MapPin className="w-3 h-3 text-primary" />
                    {site.district.split(' ')[0]}
                  </span>
                </div>

                <h5 className="font-serif text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                  {siteTitle}
                </h5>

                <p className="text-xs text-muted-foreground line-clamp-2 mt-1 leading-normal">
                  {language === 'hi'
                    ? site.spiritualSignificance.hi
                    : site.spiritualSignificance.en}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-border/50 flex items-center justify-between text-xs font-semibold text-primary">
                <span>{t('viewDetails')}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
