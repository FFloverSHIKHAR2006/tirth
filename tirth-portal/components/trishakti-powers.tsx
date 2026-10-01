"use client"

import React from 'react'
import { trishaktiPowers } from '@/data/naimisharanya-parikrama-data'
import { useLanguage } from '@/context/language-context'
import { SourceBadge } from '@/components/source-badge'
import { Zap, Heart, Eye } from 'lucide-react'

export function TrishaktiPowers() {
  const { language } = useLanguage()

  const powerIcons = {
    ichha: Heart,
    jnana: Eye,
    kriya: Zap,
  }

  return (
    <div className="rounded-3xl border border-primary/25 bg-card/80 backdrop-blur-md p-6 sm:p-8 shadow-xl space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/80 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <SourceBadge label="REFERENCE DOCUMENT" />
            <span className="text-xs text-primary font-semibold tracking-wider uppercase">
              त्रिशक्ति दर्शन
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
            {language === 'hi' ? 'त्रिशक्ति रहस्य: इच्छा, ज्ञान एवं क्रिया शक्ति' : 'The Three Divine Powers: Will, Wisdom & Action'}
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            {language === 'hi'
              ? 'त्रिशक्ति धाम मंदिर (नैमिषारण्य) की अद्वितीय दक्षिण भारतीय स्थापत्य एवं दार्शनिक संकल्पना।'
              : 'The South Indian architectural and theological synthesis at Trishakti Dham, Naimisharanya.'}
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {trishaktiPowers.map((power) => {
          const Icon = powerIcons[power.power]
          return (
            <div
              key={power.power}
              className="p-6 rounded-2xl bg-secondary/40 border border-border/80 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  {language === 'hi' ? power.deity.hi : power.deity.en}
                </span>
                <h4 className="font-serif text-xl font-bold text-foreground mt-1">
                  {language === 'hi' ? power.name.hi : power.name.en}
                </h4>
                <p className="text-xs sm:text-sm text-foreground/90 mt-2 leading-relaxed">
                  {language === 'hi' ? power.meaning.hi : power.meaning.en}
                </p>
              </div>

              <div className="pt-3 border-t border-border/50 text-[11px] text-muted-foreground">
                <span className="font-semibold text-foreground">
                  {language === 'hi' ? 'मंदिर में प्रतीक:' : 'Temple Symbolism:'}
                </span>{' '}
                {language === 'hi' ? power.symbolism.hi : power.symbolism.en}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
