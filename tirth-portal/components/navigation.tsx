"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { ChevronDown, Globe, MapPin, Menu, X, Sparkles, Search } from "lucide-react"
import { useLanguage, type Language } from "@/context/language-context"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { SearchDialog } from "@/components/search-dialog"

const languages: { code: Language; label: string }[] = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिन्दी" },
  { code: "kn", label: "ಕನ್ನಡ" },
  { code: "ml", label: "മലയാളം" },
  { code: "ta", label: "தமிழ்" },
  { code: "te", label: "తెలుగు" },
  { code: "mr", label: "मराठी" },
  { code: "as", label: "অসমীয়া" },
  { code: "pa", label: "ਪੰਜਾਬੀ" },
  { code: "or", label: "ଓଡ଼ିଆ" },
  { code: "gu", label: "ગુજરાતી" },
  { code: "bn", label: "বাংলা" },
]

export function Navigation() {
  const { language, setLanguage, t, isTranslating } = useLanguage()
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const currentLangLabel = languages.find((l) => l.code === language)?.label || "English"

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-md border-b border-border/80"
          : "bg-background/85 backdrop-blur-sm border-b border-border/40"
      }`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl p-1"
          >
            <div className="relative w-11 h-11 rounded-xl overflow-hidden shadow-sm border border-primary/20 bg-card flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Tirth Yatra Portal Logo"
                width={44}
                height={44}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                {t("logo")}
              </span>
              <span className="text-[10px] tracking-widest text-primary font-semibold uppercase hidden sm:block">
                Sacred Pilgrimages • पवित्र यात्रा
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/" ? "text-primary font-semibold" : "text-foreground/80"
              }`}
              aria-current={pathname === "/" ? "page" : undefined}
            >
              {t("home")}
            </Link>

            {/* Yatras / Events Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={`flex items-center gap-1.5 text-sm font-medium hover:text-primary ${
                    pathname.startsWith("/yatra") ? "text-primary font-semibold" : "text-foreground/80"
                  }`}
                >
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{t("navEvents")}</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64 p-2 rounded-2xl shadow-xl border-border/80">
                <DropdownMenuItem asChild>
                  <Link
                    href="/yatra/84-kos"
                    className="flex flex-col items-start gap-1 p-3 rounded-xl cursor-pointer hover:bg-secondary/60"
                  >
                    <span className="font-serif font-bold text-foreground text-sm flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-primary" />
                      {t("event84Kos")}
                    </span>
                    <span className="text-xs text-muted-foreground line-clamp-1">
                      Mathura-Vrindavan Braj Parikrama (252 km)
                    </span>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link
                    href="/yatra/namisharanya"
                    className="flex flex-col items-start gap-1 p-3 rounded-xl cursor-pointer hover:bg-secondary/60"
                  >
                    <span className="font-serif font-bold text-foreground text-sm flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-primary" />
                      {t("eventNamisharanya")}
                    </span>
                    <span className="text-xs text-muted-foreground line-clamp-1">
                      11-Day Sacred Parikrama & Chakra Tirth (252 km)
                    </span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Language Switcher Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 text-xs font-semibold rounded-xl border-border/80 bg-background/50 hover:bg-accent notranslate"
                  aria-label={`Select Language. Current: ${currentLangLabel}`}
                >
                  <Globe className={`w-3.5 h-3.5 text-primary ${isTranslating ? "animate-spin text-amber-500" : ""}`} />
                  <span>{currentLangLabel}</span>
                  <ChevronDown className="w-3 h-3 opacity-60" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 max-h-80 overflow-y-auto p-2 rounded-2xl shadow-xl border-border/80 notranslate">
                <div className="px-2 py-1.5 text-xs font-bold text-muted-foreground border-b border-border/60 mb-1">
                  {t("navLanguage")}
                </div>
                {languages.map((lang) => {
                  const isSelected = language === lang.code
                  return (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={`flex items-center justify-between text-xs py-2 px-3 rounded-lg cursor-pointer ${
                        isSelected ? "bg-primary/10 text-primary font-bold" : "hover:bg-accent"
                      }`}
                    >
                      <span>{lang.label}</span>
                      {isSelected && <span className="text-xs text-primary">✓</span>}
                    </DropdownMenuItem>
                  )
                })}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Quick Search Button (Desktop) */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 text-xs font-medium rounded-xl border-border/80 bg-background/60 hover:bg-accent text-muted-foreground hover:text-foreground px-3 shadow-xs"
              aria-label={t("quickSearch")}
            >
              <Search className="w-3.5 h-3.5 text-primary" />
              <span className="hidden lg:inline">{t("quickSearch")}</span>
              <kbd className="hidden sm:inline-flex items-center gap-0.5 text-[10px] font-mono px-1.5 py-0.5 rounded bg-muted border border-border text-muted-foreground">
                <span className="text-xs">⌘</span>K
              </kbd>
            </Button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-1">
            <button
              className="p-2 rounded-xl text-foreground hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              onClick={() => setSearchOpen(true)}
              aria-label={t("quickSearch")}
            >
              <Search className="w-5 h-5 text-primary" />
            </button>
            <button
              className="p-2 rounded-xl text-foreground hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border/80 bg-background/98 backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-5">
              {/* Search button in mobile drawer */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  setSearchOpen(true)
                }}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-secondary/70 text-xs font-medium text-foreground hover:bg-secondary border border-border/60 text-left mx-2"
              >
                <span className="flex items-center gap-2 text-muted-foreground truncate">
                  <Search className="w-4 h-4 text-primary shrink-0" />
                  <span>{t("quickSearchPlaceholder")}</span>
                </span>
                <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-background border border-border text-muted-foreground shrink-0">
                  ⌘K
                </kbd>
              </button>

              <Link
                href="/"
                className={`text-base font-medium px-2 py-1 transition-colors ${
                  pathname === "/" ? "text-primary font-bold" : "text-foreground/80"
                }`}
              >
                {t("home")}
              </Link>

              <div className="px-2">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  {t("navEvents")}
                </p>
                <div className="flex flex-col gap-2 pl-3 border-l-2 border-primary/30">
                  <Link
                    href="/yatra/84-kos"
                    className="text-sm font-medium text-foreground hover:text-primary py-1"
                  >
                    {t("event84Kos")}
                  </Link>
                  <Link
                    href="/yatra/namisharanya"
                    className="text-sm font-medium text-foreground hover:text-primary py-1"
                  >
                    {t("eventNamisharanya")}
                  </Link>
                </div>
              </div>

              {/* 12-Language Selector Pills */}
              <div className="px-2 pt-2 border-t border-border/60">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-primary" />
                  {t("navLanguage")}
                </p>
                <div className="flex flex-wrap gap-2 notranslate">
                  {languages.map((lang) => {
                    const isSelected = language === lang.code
                    return (
                      <button
                        key={lang.code}
                        onClick={() => setLanguage(lang.code)}
                        className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                          isSelected
                            ? "bg-primary text-primary-foreground border-primary font-bold shadow-sm"
                            : "bg-card text-foreground/80 border-border hover:bg-accent"
                        }`}
                      >
                        {lang.label}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Global Quick Search Command Palette */}
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </nav>
  )
}
