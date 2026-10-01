"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { parikramaDays } from '@/data/naimisharanya-parikrama-data'
import { useLanguage } from '@/context/language-context'
import { CheckCircle2, Circle, Bookmark, Sparkles, Award } from 'lucide-react'

const STORAGE_KEY = 'tirth_naimisharanya_progress'

export function JourneyProgress() {
  const { language, t } = useLanguage()
  const [completedDays, setCompletedDays] = useState<number[]>([])

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        setCompletedDays(JSON.parse(saved))
      }
    } catch {
      // Ignore in private browsing
    }
  }, [])

  const toggleDay = (dayNum: number, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const updated = completedDays.includes(dayNum)
      ? completedDays.filter((d) => d !== dayNum)
      : [...completedDays, dayNum]

    setCompletedDays(updated)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    } catch {
      // Ignore
    }
  }

  const completionPercent = Math.round((completedDays.length / 11) * 100)

  return (
    <div className="rounded-3xl border border-border/80 bg-card/70 backdrop-blur-sm p-5 sm:p-6 shadow-md space-y-4">
      {/* Tracker Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/60 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
            <Award className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-serif text-base sm:text-lg font-bold text-foreground">
              {language === 'hi' ? 'परिक्रमा यात्रा प्रगति ट्रैकर' : '84 Kos Parikrama Journey Tracker'}
            </h4>
            <p className="text-xs text-muted-foreground">
              {language === 'hi'
                ? 'अपने 11 दिवसीय पड़ाव अन्वेषण को चिह्नित करें (लोकल डिवाइस पर सुरक्षित)'
                : 'Track your exploration across the 11 sacred padavs (saved locally)'}
            </p>
          </div>
        </div>

        {/* Progress Bar & Percentage */}
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end">
            <span className="text-xs font-bold text-foreground">
              {completedDays.length} / 11 {language === 'hi' ? 'पड़ाव' : 'Stops'}
            </span>
            <span className="text-[11px] text-primary font-semibold">{completionPercent}%</span>
          </div>
          <div className="w-24 sm:w-32 h-2.5 rounded-full bg-secondary overflow-hidden border border-border">
            <div
              className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
              style={{ width: `${completionPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* 11-Day Interactive Step Bar */}
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-11 gap-2 pt-1">
        {parikramaDays.map((day) => {
          const isDone = completedDays.includes(day.dayNumber)
          const stopName = language === 'hi' ? day.stopName.hi : day.stopName.en

          return (
            <div
              key={day.dayNumber}
              className={`group relative flex flex-col items-center p-2 rounded-xl border transition-all duration-200 text-center ${
                isDone
                  ? 'bg-primary/10 border-primary/40 text-primary'
                  : 'bg-secondary/40 border-border/60 hover:border-primary/40 text-foreground'
              }`}
            >
              <Link
                href={`/yatra/namisharanya/day/${day.dayNumber}`}
                className="w-full flex flex-col items-center"
              >
                <span className="text-[10px] font-mono font-bold uppercase text-muted-foreground">
                  D{day.dayNumber}
                </span>
                <span className="font-serif text-xs font-semibold mt-0.5 line-clamp-1 group-hover:text-primary">
                  {stopName.split(' ')[0]}
                </span>
              </Link>

              <button
                onClick={(e) => toggleDay(day.dayNumber, e)}
                className="mt-1.5 p-1 rounded-md text-muted-foreground hover:text-primary transition-colors"
                title={isDone ? 'Mark unvisited' : 'Mark explored/visited'}
                aria-label={`Toggle Day ${day.dayNumber}`}
              >
                {isDone ? (
                  <CheckCircle2 className="w-4 h-4 text-primary fill-primary/20" />
                ) : (
                  <Circle className="w-4 h-4 text-muted-foreground/60" />
                )}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
