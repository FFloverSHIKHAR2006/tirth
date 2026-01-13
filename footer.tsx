"use client"

import Link from "next/link"
import { useLanguage } from "@/context/language-context"

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif text-lg font-bold">ॐ</span>
              </div>
              <span className="font-serif text-xl font-semibold">Yatra Portal</span>
            </div>
            <p className="text-background/70 leading-relaxed">{t("footerTagline")}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">{t("navEvents")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/yatra/84-kos" className="text-background/70 hover:text-primary transition-colors">
                  {t("event84Kos")}
                </Link>
              </li>
              <li>
                <Link href="/yatra/namisharanya" className="text-background/70 hover:text-primary transition-colors">
                  {t("eventNamisharanya")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
          <p>
            © {currentYear} Yatra Portal. {t("footerRights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
