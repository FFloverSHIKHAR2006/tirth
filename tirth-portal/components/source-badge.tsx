import React from 'react'
import { SourceLabel } from '@/data/pilgrimage-types'
import { BookOpen, Sparkles, MapPin, Info, ShieldCheck, HeartHandshake } from 'lucide-react'

interface SourceBadgeProps {
  label: SourceLabel
  className?: string
}

const BADGE_CONFIG: Record<
  SourceLabel,
  {
    text: string
    icon: React.ComponentType<{ className?: string }>
    bgClass: string
    textClass: string
    borderClass: string
  }
> = {
  'TRADITION': {
    text: 'परंपरा / Tradition',
    icon: Sparkles,
    bgClass: 'bg-amber-500/10',
    textClass: 'text-amber-600 dark:text-amber-400',
    borderClass: 'border-amber-500/25',
  },
  'SCRIPTURAL REFERENCE': {
    text: 'शास्त्र प्रमाण / Scripture',
    icon: BookOpen,
    bgClass: 'bg-emerald-500/10',
    textClass: 'text-emerald-600 dark:text-emerald-400',
    borderClass: 'border-emerald-500/25',
  },
  'LOCAL BELIEF': {
    text: 'लोक आस्था / Local Belief',
    icon: HeartHandshake,
    bgClass: 'bg-indigo-500/10',
    textClass: 'text-indigo-600 dark:text-indigo-400',
    borderClass: 'border-indigo-500/25',
  },
  'REFERENCE DOCUMENT': {
    text: 'अभिलेख / Reference Doc',
    icon: ShieldCheck,
    bgClass: 'bg-blue-500/10',
    textClass: 'text-blue-600 dark:text-blue-400',
    borderClass: 'border-blue-500/25',
  },
  'GEOGRAPHICAL INFORMATION': {
    text: 'भौगोलिक तथ्य / Geography',
    icon: MapPin,
    bgClass: 'bg-teal-500/10',
    textClass: 'text-teal-600 dark:text-teal-400',
    borderClass: 'border-teal-500/25',
  },
  'PRACTICAL INFORMATION': {
    text: 'यात्री परामर्श / Practical Info',
    icon: Info,
    bgClass: 'bg-purple-500/10',
    textClass: 'text-purple-600 dark:text-purple-400',
    borderClass: 'border-purple-500/25',
  },
}

export function SourceBadge({ label, className = '' }: SourceBadgeProps) {
  const config = BADGE_CONFIG[label] || BADGE_CONFIG['TRADITION']
  const Icon = config.icon

  return (
    <span
      className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${config.bgClass} ${config.textClass} ${config.borderClass} ${className}`}
      title={config.text}
    >
      <Icon className="w-3 h-3 shrink-0" />
      <span>{config.text}</span>
    </span>
  )
}
