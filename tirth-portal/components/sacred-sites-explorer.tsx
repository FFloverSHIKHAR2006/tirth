"use client"

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  sacredSiteDetails,
} from '@/data/naimisharanya-parikrama-data'
import { SiteCategory } from '@/data/pilgrimage-types'
import { useLanguage } from '@/context/language-context'
import { SourceBadge } from '@/components/source-badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Search,
  X,
  MapPin,
  ArrowRight,
  Sparkles,
  RotateCcw,
  SlidersHorizontal,
  Calendar,
  Compass,
} from 'lucide-react'

const CATEGORIES: { key: 'all' | SiteCategory; labelEn: string; labelHi: string }[] = [
  { key: 'all', labelEn: 'All Sacred Sites', labelHi: 'समस्त पावन स्थल' },
  { key: 'Shakti', labelEn: 'Shakti Peethas', labelHi: 'शक्तिपीठ व देवी' },
  { key: 'Shiva', labelEn: 'Shiva Shrines', labelHi: 'शिवालय व ज्योति' },
  { key: 'Vishnu', labelEn: 'Vishnu Temples', labelHi: 'वैष्णव मंदिर' },
  { key: 'Rishi', labelEn: 'Rishi Hermitages', labelHi: 'ऋषि आश्रम व गद्दी' },
  { key: 'Kund', labelEn: 'Sacred Kunds', labelHi: 'पवित्र कुंड व तीर्थ' },
  { key: 'Temple', labelEn: 'Temples', labelHi: 'प्राचीन मंदिर' },
  { key: 'Ghat', labelEn: 'River Ghats', labelHi: 'गोमती पावन घाट' },
  { key: 'Ashram', labelEn: 'Ashrams', labelHi: 'आश्रम व तपोभूमि' },
  { key: 'Mythological', labelEn: 'Mythological', labelHi: 'पौराणिक स्थल' },
  { key: 'Cave', labelEn: 'Ancient Caves', labelHi: 'ऋषि गुफाएँ' },
]

export function SacredSitesExplorer() {
  const { language, t } = useLanguage()
  const [query, setQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState<'all' | SiteCategory>('all')
  const [dayFilter, setDayFilter] = useState<number | 'all'>('all')

  const filteredSites = useMemo(() => {
    const q = query.trim().toLowerCase()

    return sacredSiteDetails.filter((site) => {
      // Category filter
      if (categoryFilter !== 'all' && site.category !== categoryFilter) {
        return false
      }

      // Day filter
      if (dayFilter !== 'all' && !site.dayNumbers.includes(dayFilter)) {
        return false
      }

      // Query filter
      if (!q) return true

      const titleEn = site.title.en.toLowerCase()
      const titleHi = site.title.hi.toLowerCase()
      const sigEn = site.spiritualSignificance.en.toLowerCase()
      const sigHi = site.spiritualSignificance.hi.toLowerCase()
      const district = site.district.toLowerCase()
      const figures = site.deitiesOrFigures.join(' ').toLowerCase()

      return (
        titleEn.includes(q) ||
        titleHi.includes(q) ||
        sigEn.includes(q) ||
        sigHi.includes(q) ||
        district.includes(q) ||
        figures.includes(q) ||
        site.slug.includes(q)
      )
    })
  }, [query, categoryFilter, dayFilter])

  const handleReset = () => {
    setQuery('')
    setCategoryFilter('all')
    setDayFilter('all')
  }

  const hasActiveFilters = query.trim() !== '' || categoryFilter !== 'all' || dayFilter !== 'all'

  return (
    <div className="space-y-8" id="sacred-sites-explorer-section">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/80 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>नैमिषारण्य पवित्र धाम एवं परिक्रमा</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
            {language === 'hi' ? 'समस्त पवित्र तीर्थ एवं दर्शनीय स्थल' : 'Explore Sacred Sites & Shrines'}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 max-w-2xl">
            {language === 'hi'
              ? 'शक्तिपीठ, शिवालय, ऋषि आश्रम, पावन कुंड एवं गोमती घाटों का श्रेणीबद्ध अन्वेषण करें।'
              : 'Browse filterable sacred sanctuaries across deities, sages, holy kunds, and parikrama stops.'}
          </p>
        </div>

        {/* Counter Badge & Reset */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium px-3 py-1.5 rounded-xl bg-secondary text-secondary-foreground border border-border">
            {filteredSites.length} / {sacredSiteDetails.length} {t('showingLocations')}
          </span>
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleReset}
              className="text-xs h-8 px-2.5 text-muted-foreground hover:text-foreground flex items-center gap-1 rounded-xl"
            >
              <RotateCcw className="w-3 h-3" />
              <span>{t('resetFilters')}</span>
            </Button>
          )}
        </div>
      </div>

      {/* Search & Multi-Filter Controls Bar */}
      <div className="space-y-4 bg-card/70 backdrop-blur-sm p-5 rounded-2xl border border-border/80 shadow-sm">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          <Input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={language === 'hi' ? 'तीर्थ, ऋषि, देवता या स्थान खोजें (उदा. ललिता, दधीचि, चक्रतीर्थ)...' : 'Search by shrine, deity, sage, or kund (e.g. Lalita, Dadhichi, Chakra)...'}
            className="pl-10 pr-10 h-11 rounded-xl bg-background/80 border-border/80 text-sm focus-visible:ring-primary"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-1 rounded-lg"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1 mr-1">
            <SlidersHorizontal className="w-3 h-3" />
            {language === 'hi' ? 'श्रेणी:' : 'Category:'}
          </span>
          {CATEGORIES.map((cat) => {
            const isSelected = categoryFilter === cat.key
            return (
              <Button
                key={cat.key}
                variant={isSelected ? 'default' : 'outline'}
                size="sm"
                onClick={() => setCategoryFilter(cat.key)}
                className="text-xs h-7 px-2.5 rounded-lg font-medium"
              >
                {language === 'hi' ? cat.labelHi : cat.labelEn}
              </Button>
            )
          })}
        </div>

        {/* Parikrama Day Filters */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-border/50">
          <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1 mr-1">
            <Calendar className="w-3 h-3" />
            {language === 'hi' ? 'परिक्रमा दिवस:' : 'Parikrama Day:'}
          </span>
          <Button
            variant={dayFilter === 'all' ? 'secondary' : 'ghost'}
            size="sm"
            onClick={() => setDayFilter('all')}
            className="text-xs h-7 px-2 rounded-lg"
          >
            {language === 'hi' ? 'सभी दिवस' : 'All Days'}
          </Button>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((d) => (
            <Button
              key={d}
              variant={dayFilter === d ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => setDayFilter(d)}
              className="text-xs h-7 px-2 rounded-lg font-mono"
            >
              D{d}
            </Button>
          ))}
        </div>
      </div>

      {/* Grid of Filtered Sites */}
      {filteredSites.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSites.map((site) => {
            const title = language === 'hi' ? site.title.hi : site.title.en
            const isPadav = site.dayNumbers.length === 1 && site.id === site.slug

            return (
              <Link
                key={site.slug}
                href={`/yatra/namisharanya/${site.slug}`}
                className="group flex flex-col justify-between p-5 rounded-2xl bg-card border border-border/80 hover:border-primary/50 hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-1.5 mb-3">
                    <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-primary/10 text-primary border border-primary/20">
                      {site.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-0.5">
                      <MapPin className="w-3 h-3 text-primary" />
                      {site.district.split(' ')[0]}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-serif text-base text-primary">ॐ</span>
                    <h4 className="font-serif text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2">
                      {title}
                    </h4>
                  </div>

                  <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed mt-2">
                    {language === 'hi'
                      ? site.spiritualSignificance.hi
                      : site.spiritualSignificance.en}
                  </p>

                  {/* Source Label Tag */}
                  {site.sourceLabels.length > 0 && (
                    <div className="mt-3">
                      <SourceBadge label={site.sourceLabels[0]} />
                    </div>
                  )}
                </div>

                <div className="pt-4 mt-4 border-t border-border/50 flex items-center justify-between text-xs font-semibold text-primary">
                  <span>{t('viewDetails')}</span>
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
            {t('searchNoResults')}
          </h4>
          <p className="text-sm text-muted-foreground max-w-md mb-6 leading-relaxed">
            {language === 'hi'
              ? 'आपकी खोज के अनुसार कोई तीर्थ या पड़ाव नहीं मिला। कृपया अन्य शब्दों से खोजें या फ़िल्टर रीसेट करें।'
              : 'No sacred places match your current search query or filter criteria. Try resetting filters to explore.'}
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={handleReset}
            className="rounded-xl flex items-center gap-2 border-primary/30 hover:bg-primary/10 text-primary font-semibold"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{t('resetFilters')}</span>
          </Button>
        </div>
      )}
    </div>
  )
}
