"use client"

import React, { useState } from 'react'
import { dashamahavidyas } from '@/data/naimisharanya-parikrama-data'
import { useLanguage } from '@/context/language-context'
import { SourceBadge } from '@/components/source-badge'
import { Sparkles, Shield, Compass, BookOpen } from 'lucide-react'

export function DashamahavidyaExplorer() {
  const { language } = useLanguage()
  const [activeNumber, setActiveNumber] = useState<number>(1)

  const activeMahavidya = dashamahavidyas.find((m) => m.number === activeNumber) || dashamahavidyas[0]

  return (
    <div className="rounded-3xl border border-primary/25 bg-card/70 backdrop-blur-md p-6 sm:p-8 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/80 pb-5">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <SourceBadge label="SCRIPTURAL REFERENCE" />
            <span className="text-xs text-primary font-semibold tracking-wider uppercase">
              कालीपीठ साधना धाम
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
            {language === 'hi' ? 'दशमहाविद्या दर्शन एवं साधना' : 'Dashamahavidya Explorer (10 Sacred Powers)'}
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            {language === 'hi'
              ? 'कालीपीठ नैमिषारण्य में प्रतिष्ठित दसों महाविद्याओं के दिव्य स्वरूप, आयुध एवं साधना रहस्य।'
              : 'The ten sacred aspects of the Divine Mother enshrined at Kali Peeth, Naimisharanya.'}
          </p>
        </div>
      </div>

      {/* Mahavidya Selector Pills */}
      <div className="flex flex-wrap gap-2 pt-1">
        {dashamahavidyas.map((m) => {
          const isSelected = m.number === activeNumber
          const name = language === 'hi' ? m.name.hi : m.name.en
          return (
            <button
              key={m.number}
              onClick={() => setActiveNumber(m.number)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                isSelected
                  ? 'bg-primary text-primary-foreground shadow-md scale-105'
                  : 'bg-secondary/70 text-foreground/80 hover:bg-secondary border border-border/60'
              }`}
            >
              <span className="text-[10px] w-4 h-4 rounded-full bg-background/20 flex items-center justify-center font-mono">
                {m.number}
              </span>
              <span>{name}</span>
            </button>
          )
        })}
      </div>

      {/* Active Mahavidya Details Display */}
      <div className="grid md:grid-cols-3 gap-6 p-6 rounded-2xl bg-secondary/30 border border-border/60">
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center justify-between gap-2">
            <div>
              <span className="text-xs font-mono font-bold text-primary">
                {language === 'hi' ? `महाविद्या क्रमांक ${activeMahavidya.number}` : `Mahavidya #${activeMahavidya.number}`}
              </span>
              <h4 className="font-serif text-2xl font-bold text-foreground">
                {language === 'hi' ? activeMahavidya.name.hi : activeMahavidya.name.en}
              </h4>
              <p className="text-xs sm:text-sm text-primary font-medium mt-0.5">
                {language === 'hi' ? activeMahavidya.title.hi : activeMahavidya.title.en}
              </p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-serif text-xl font-bold">
              ॐ
            </div>
          </div>

          <div className="space-y-3 text-xs sm:text-sm leading-relaxed">
            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1 mb-1">
                <Shield className="w-3.5 h-3.5 text-primary" />
                {language === 'hi' ? 'स्वरूप एवं आयुध (Iconography)' : 'Iconography & Attributes'}
              </h5>
              <p className="text-foreground/90 bg-background/60 p-3 rounded-xl border border-border/40">
                {language === 'hi' ? activeMahavidya.iconography.hi : activeMahavidya.iconography.en}
              </p>
            </div>

            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                {language === 'hi' ? 'आध्यात्मिक रहस्य एवं महत्व' : 'Spiritual Significance'}
              </h5>
              <p className="text-foreground/90 bg-background/60 p-3 rounded-xl border border-border/40">
                {language === 'hi' ? activeMahavidya.significance.hi : activeMahavidya.significance.en}
              </p>
            </div>
          </div>
        </div>

        {/* Sacred Mantra & Reference Box */}
        <div className="flex flex-col justify-between p-5 rounded-2xl bg-card border border-primary/20 space-y-4">
          <div>
            <div className="flex items-center gap-1 text-xs font-bold text-primary uppercase tracking-wider mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? 'सिद्ध मंत्र' : 'Sacred Mantra'}</span>
            </div>
            <p className="font-serif text-base text-foreground bg-primary/5 p-4 rounded-xl border border-primary/20 text-center font-bold">
              {activeMahavidya.mantra}
            </p>
          </div>

          <div className="text-[11px] text-muted-foreground p-3 rounded-xl bg-secondary/50 border border-border/40 leading-normal">
            <span className="font-semibold text-foreground">
              {language === 'hi' ? 'कालीपीठ संदर्भ:' : 'Kali Peeth Reference:'}
            </span>{' '}
            {language === 'hi'
              ? 'नैमिषारण्य कालीपीठ में दसों महाविद्याओं के विग्रह प्राण-प्रतिष्ठित हैं, जहाँ प्रतिदिन तांत्रिक-वैदिक अनुष्ठान होते हैं।'
              : 'All 10 Mahavidyas are consecrated at Kali Peeth, Naimisharanya, serving as an integrated Vedic-Tantric sadhana center.'}
          </div>
        </div>
      </div>
    </div>
  )
}
