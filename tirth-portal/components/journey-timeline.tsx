"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { parikramaDays } from '@/data/naimisharanya-parikrama-data'
import { useLanguage } from '@/context/language-context'
import {
  MapPin,
  Calendar,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Compass,
  CheckCircle,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export function JourneyTimeline() {
  const { language, t } = useLanguage()
  const [selectedDayNum, setSelectedDayNum] = useState<number>(1)

  const activeDay = parikramaDays.find((d) => d.dayNumber === selectedDayNum) || parikramaDays[0]

  return (
    <div className="space-y-8" id="parikrama-timeline-section">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/80 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>फाल्गुन मास चौरासी कोसी परिक्रमा</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
            {language === 'hi' ? '11-दिवसीय पावन परिक्रमा मार्ग' : '11-Day Sacred Parikrama Journey'}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 max-w-2xl">
            {language === 'hi'
              ? 'नैमिषारण्य से प्रारंभ होकर 252 किमी (84 कोस) की परिधि में 11 पवित्र पड़ावों का अनुक्रमिक आध्यात्मिक पथ।'
              : 'The sequential 252 km spiritual circumambulation spanning 11 sacred padavs across Sitapur and Hardoi.'}
          </p>
        </div>

        <Link href={`/yatra/namisharanya/day/${activeDay.dayNumber}`}>
          <Button size="sm" className="rounded-xl flex items-center gap-2 font-semibold">
            <span>{language === 'hi' ? `दिवस ${activeDay.dayNumber} विस्तार देखें` : `Explore Day ${activeDay.dayNumber}`}</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>

      {/* Interactive 11-Day Step Selector Bar (Horizontal Scroll / Stepper) */}
      <div className="overflow-x-auto pb-3 -mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="flex items-center gap-2 min-w-max">
          {parikramaDays.map((day) => {
            const isSelected = day.dayNumber === selectedDayNum
            const stopName = language === 'hi' ? day.stopName.hi : day.stopName.en

            return (
              <button
                key={day.dayNumber}
                onClick={() => setSelectedDayNum(day.dayNumber)}
                className={`flex flex-col items-start p-3 rounded-2xl border transition-all duration-200 text-left min-w-[130px] ${
                  isSelected
                    ? 'bg-primary text-primary-foreground border-primary shadow-lg scale-105'
                    : 'bg-card text-foreground border-border hover:border-primary/40 hover:bg-accent'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-1">
                  <span
                    className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full ${
                      isSelected
                        ? 'bg-primary-foreground/20 text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground'
                    }`}
                  >
                    {t('day')} {day.dayNumber}
                  </span>
                  {day.dayNumber === 11 && (
                    <span className="text-[10px] font-bold">★ पूर्णाहुति</span>
                  )}
                </div>
                <span className="font-serif text-sm font-bold truncate max-w-[110px]">
                  {stopName}
                </span>
                <span
                  className={`text-[10px] truncate max-w-[110px] mt-0.5 ${
                    isSelected ? 'text-primary-foreground/80' : 'text-muted-foreground'
                  }`}
                >
                  {day.district.split(' ')[0]}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Selected Day Spotlight Card */}
      <div className="grid lg:grid-cols-3 gap-6 p-6 sm:p-8 rounded-3xl bg-card border border-primary/20 shadow-xl">
        <div className="lg:col-span-2 space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-bold border border-primary/20">
              {t('day')} {activeDay.dayNumber} • पड़ाव {activeDay.dayNumber}
            </span>
            <span className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground flex items-center gap-1 font-medium">
              <MapPin className="w-3 h-3 text-primary" />
              {activeDay.district}
            </span>
            {activeDay.distanceFromPreviousKm && (
              <span className="text-xs text-muted-foreground">
                • ~{activeDay.distanceFromPreviousKm} km
              </span>
            )}
          </div>

          <div>
            <h4 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
              {language === 'hi' ? activeDay.title.hi : activeDay.title.en}
            </h4>
            <p className="text-sm text-foreground/90 leading-relaxed mt-3">
              {language === 'hi'
                ? activeDay.traditionalSignificance.hi
                : activeDay.traditionalSignificance.en}
            </p>
          </div>

          {/* Key Rituals & Traditional Offerings */}
          <div className="space-y-2 pt-2">
            <h5 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>{language === 'hi' ? 'प्रमुख परंपराएँ एवं अनुष्ठान' : 'Traditions & Ritual Offerings'}</span>
            </h5>
            <div className="grid sm:grid-cols-2 gap-2">
              {(language === 'hi'
                ? activeDay.ritualsAndDonations.hi
                : activeDay.ritualsAndDonations.en
              ).map((ritual, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 p-2.5 rounded-xl bg-secondary/40 border border-border/50 text-xs text-foreground/90"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                  <span>{ritual}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Info Box */}
        <div className="flex flex-col justify-between p-6 rounded-2xl bg-secondary/30 border border-border/70 space-y-6">
          <div className="space-y-4 text-xs">
            <div>
              <span className="text-muted-foreground font-semibold uppercase tracking-wider text-[10px]">
                {language === 'hi' ? 'प्रस्थान स्थल (Start)' : 'Departure Location'}
              </span>
              <p className="font-serif text-sm font-bold text-foreground mt-0.5">
                {activeDay.startLocation}
              </p>
            </div>

            <div>
              <span className="text-muted-foreground font-semibold uppercase tracking-wider text-[10px]">
                {language === 'hi' ? 'रात्रि विश्राम स्थल (Overnight Camp)' : 'Overnight Rest Camp'}
              </span>
              <p className="font-serif text-sm font-bold text-primary mt-0.5">
                {activeDay.overnightLocation}
              </p>
            </div>

            {activeDay.symbolicTirthas && activeDay.symbolicTirthas.length > 0 && (
              <div>
                <span className="text-muted-foreground font-semibold uppercase tracking-wider text-[10px]">
                  {language === 'hi' ? 'प्रतीकात्मक तीर्थ दर्शन' : 'Symbolic Tirtha Invocations'}
                </span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {activeDay.symbolicTirthas.map((tirtha, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-background border border-border text-foreground font-medium"
                    >
                      {tirtha}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-border/60">
            <Link
              href={`/yatra/namisharanya/day/${activeDay.dayNumber}`}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-xs shadow-md hover:bg-primary/90 transition-colors"
            >
              <span>{language === 'hi' ? 'इस पड़ाव का संपूर्ण विवरण पढ़ें' : 'View Full Day Details'}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
