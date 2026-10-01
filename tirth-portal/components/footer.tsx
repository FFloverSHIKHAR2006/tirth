"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/context/language-context"
import { Sparkles, MapPin, Heart } from "lucide-react"

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-stone-950 text-stone-200 border-t border-stone-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Brand & Purpose */}
          <div className="md:col-span-6 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white/10 p-1 flex items-center justify-center border border-amber-500/30">
                <Image
                  src="/logo.png"
                  alt="Tirth Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white">
                  {t("logo")}
                </span>
                <p className="text-xs text-amber-400/90 font-medium tracking-wide">
                  पवित्र तीर्थ यात्रा दर्शन • Sacred Indian Pilgrimages
                </p>
              </div>
            </Link>

            <p className="text-sm text-stone-400 max-w-md leading-relaxed">
              {t("footerTagline")}
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs text-stone-400">
              <span className="font-serif text-amber-500 text-base">ॐ</span>
              <span>Dedicated to preserving Sanatan pilgrimage heritage and spiritual guidance.</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-white text-base flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-500" />
              {t("navEvents")}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/yatra/84-kos"
                  className="text-stone-400 hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  {t("event84Kos")}
                </Link>
              </li>
              <li>
                <Link
                  href="/yatra/namisharanya"
                  className="text-stone-400 hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  {t("eventNamisharanya")}
                </Link>
              </li>
              <li>
                <Link
                  href="/yatra/namisharanya/chakra-tirth"
                  className="text-stone-400 hover:text-amber-400 transition-colors text-xs pl-5"
                >
                  चक्रतीर्थ (Chakra Tirth)
                </Link>
              </li>
              <li>
                <Link
                  href="/yatra/namisharanya/lalita-shakti-peeth"
                  className="text-stone-400 hover:text-amber-400 transition-colors text-xs pl-5"
                >
                  माँ ललिता शक्ति पीठ
                </Link>
              </li>
            </ul>
          </div>

          {/* Pilgrimage Guidance */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-white text-base">
              {t("aboutTitle")}
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>{t("sacredRoutes")}</li>
              <li>{t("spiritualGuidance")}</li>
              <li>{t("divineExperience")}</li>
              <li>{t("parikramaStops")}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {currentYear} {t("logo")}. {t("footerRights")}
          </p>
          <div className="flex items-center gap-1">
            <span>Preserving sacred traditions with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>for pilgrims worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
