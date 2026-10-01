"use client"

import React from "react"
import Link from "next/link"
import { useLanguage } from "@/context/language-context"
import { SourceBadge } from "@/components/source-badge"
import { Button } from "@/components/ui/button"
import { parikramaDays, getSiteBySlug } from "@/data/naimisharanya-parikrama-data"
import {
  Sparkles,
  MapPin,
  Calendar,
  Compass,
  ArrowRight,
  BookOpen,
  ShieldCheck,
  Languages,
  CheckCircle2,
  BookmarkCheck,
} from "lucide-react"

export function NaimisharanyaFeaturedSection() {
  const { language, t } = useLanguage()

  // Featured 6 canonical shrines
  const featuredSiteSlugs = [
    "chakra-tirth",
    "lalita-shakti-peeth",
    "vyas-gaddi",
    "dadhichi-kund",
    "kalipith",
    "trishakti-dham",
  ]

  const featuredSites = featuredSiteSlugs
    .map((slug) => getSiteBySlug(slug))
    .filter((site): site is NonNullable<typeof site> => Boolean(site))

  return (
    <section className="py-20 bg-background space-y-24">
      {/* 1. What is Naimisharanya (Vedic Tapobhumi) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-secondary/30 border border-border/80 shadow-md">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20">
                  <Sparkles className="w-3.5 h-3.5" />
                  आदि तपोभूमि नैमिषारण्य
                </span>
                <SourceBadge label="SCRIPTURAL REFERENCE" />
                <SourceBadge label="TRADITION" />
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
                {language === "hi"
                  ? "जहाँ 88,000 ऋषियों ने वेदों और पुराणों का ज्ञान प्रज्वलित किया"
                  : "Where 88,000 Sages Kindled the Light of Vedic Wisdom"}
              </h2>

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                {language === "hi"
                  ? "पुराणों के अनुसार जब कलियुग के आगमन पर ऋषियों ने साधना हेतु उपयुक्त निर्विघ्न स्थान माँगा, तब ब्रह्मा जी ने अपना मनोमय चक्र छोड़ा। चक्र की नेमि (परिधि) जिस पावन वन में गिरी, वही 'नैमिषारण्य' कहलाया। यहाँ महर्षि शौनक की अध्यक्षता में सहस्त्र-वर्षीय ज्ञान यज्ञ हुआ और महर्षि वेदव्यास ने 18 पुराणों की रचना की।"
                  : "According to sacred Puranas, when sages sought a sanctuary immune to Kali Yuga's decadence, Lord Brahma rolled his cosmic mind-wheel (Manomaya Chakra). Where its rim (nemi) shattered into the earth became Naimisharanya. Here, 88,000 rishis under Sage Shaunaka held a thousand-year sacrifice, and Ved Vyasa composed the 18 Puranas."}
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link href="/yatra/namisharanya">
                  <Button className="gap-2 shadow-sm">
                    {language === "hi" ? "84 कोस परिक्रमा का विवरण" : "Explore 84 Kos Parikrama"}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/yatra/namisharanya/chakra-tirth">
                  <Button variant="outline" className="gap-2">
                    {language === "hi" ? "चक्रतीर्थ दर्शन" : "Chakra Tirth Darshan"}
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-sm rounded-3xl p-6 bg-card border border-border/80 shadow-lg text-center space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center shadow-inner">
                  <span className="font-serif text-4xl text-primary select-none">☸</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground">
                  {language === "hi" ? "चक्र नेमि की पावन धुरी" : "The Axis of Brahma's Wheel"}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  "एतन्मनोमयम् चक्रं मया सृष्टं विसृज्यते। यत्रास्य शीर्यते नेमिः स देशस्तपसः शुभः॥"
                </p>
                <div className="pt-2 border-t border-border/60 text-[11px] font-medium text-primary">
                  — वराह पुराण (Varaha Purana)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. 84 Kos Parikrama Overview & Key Metrics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs uppercase tracking-widest font-bold text-primary">
            {language === "hi" ? "परिक्रमा रूपरेखा" : "Parikrama Circuit Overview"}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            {language === "hi"
              ? "11 दिवस, 84 कोस, 2 जनपदों की पुण्य यात्रा"
              : "11 Days, 84 Kos, Across Sitapur & Hardoi"}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            {language === "hi"
              ? "फाल्गुन शुक्ल प्रतिपदा से पूर्णिमा तक चलने वाली यह महापरिक्रमा चक्रतीर्थ से आरंभ होकर दधीचि कुंड मिश्रिख में पूर्ण होती है।"
              : "Conducted annually from Phalguna Shukla Pratipada to Purnima, this sacred circumambulation commences at Chakra Tirth and culminates at Dadhichi Kund in Mishrikh."}
          </p>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-6 rounded-3xl bg-card border border-border/80 shadow-sm text-center space-y-2">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
              <Calendar className="w-6 h-6" />
            </div>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-foreground">11</div>
            <p className="text-xs sm:text-sm font-semibold text-foreground">
              {language === "hi" ? "पवित्र पड़ाव (Days)" : "Sacred Stages (Days)"}
            </p>
            <p className="text-[11px] text-muted-foreground">प्रतिपदा से एकादशी-पूर्णिमा</p>
          </div>

          <div className="p-6 rounded-3xl bg-card border border-border/80 shadow-sm text-center space-y-2">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-foreground">~252 km</div>
            <p className="text-xs sm:text-sm font-semibold text-foreground">
              {language === "hi" ? "कुल दूरी (84 कोस)" : "Total Distance (84 Kos)"}
            </p>
            <p className="text-[11px] text-muted-foreground">प्राचीन परिधि माप</p>
          </div>

          <div className="p-6 rounded-3xl bg-card border border-border/80 shadow-sm text-center space-y-2">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-foreground">2</div>
            <p className="text-xs sm:text-sm font-semibold text-foreground">
              {language === "hi" ? "जनपद (Districts)" : "Districts Covered"}
            </p>
            <p className="text-[11px] text-muted-foreground">सीतापुर एवं हरदोई (UP)</p>
          </div>

          <div className="p-6 rounded-3xl bg-card border border-border/80 shadow-sm text-center space-y-2">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-purple-500/10 text-purple-600 flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-foreground">30+</div>
            <p className="text-xs sm:text-sm font-semibold text-foreground">
              {language === "hi" ? "सत्यापित पावन स्थल" : "Sacred Shrines & Kunds"}
            </p>
            <p className="text-[11px] text-muted-foreground">जीपीएस सत्यापित निर्देशांक</p>
          </div>
        </div>
      </div>

      {/* 3. 11-Day Timeline Preview Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-primary tracking-wider uppercase">
              11-Day Daily Itinerary
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mt-1">
              {language === "hi" ? "एकादश दिवसीय परिक्रमा पड़ाव" : "The 11-Day Pilgrimage Stages"}
            </h3>
          </div>
          <Link href="/yatra/namisharanya#parikrama-timeline-section">
            <Button variant="ghost" className="gap-2 text-primary hover:text-primary/80">
              {language === "hi" ? "संपूर्ण टाइमलाइन देखें" : "View Full Timeline"}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {parikramaDays.slice(0, 6).map((day) => (
            <Link
              key={day.dayNumber}
              href={`/yatra/namisharanya/day/${day.dayNumber}`}
              className="group p-4 rounded-2xl bg-card border border-border/80 hover:border-primary/50 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] text-muted-foreground mb-1.5">
                  <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-bold">
                    Day {day.dayNumber}
                  </span>
                  <span>{day.distanceFromPreviousKm} km</span>
                </div>
                <h4 className="font-serif text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                  {language === "hi" ? day.stopName.hi : day.stopName.en}
                </h4>
                <p className="text-[11px] text-muted-foreground line-clamp-1 mt-0.5">
                  {day.district.split(" ")[0]}
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-border/50 text-[11px] font-medium text-primary flex items-center justify-between">
                <span>विवरण देखें</span>
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>

        {/* Second row for days 7 to 11 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {parikramaDays.slice(6, 11).map((day) => (
            <Link
              key={day.dayNumber}
              href={`/yatra/namisharanya/day/${day.dayNumber}`}
              className="group p-4 rounded-2xl bg-card border border-border/80 hover:border-primary/50 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] text-muted-foreground mb-1.5">
                  <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-bold">
                    Day {day.dayNumber}
                  </span>
                  <span>{day.distanceFromPreviousKm} km</span>
                </div>
                <h4 className="font-serif text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                  {language === "hi" ? day.stopName.hi : day.stopName.en}
                </h4>
                <p className="text-[11px] text-muted-foreground line-clamp-1 mt-0.5">
                  {day.district.split(" ")[0]}
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-border/50 text-[11px] font-medium text-primary flex items-center justify-between">
                <span>विवरण देखें</span>
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 4. Sacred Shrines Highlights (6 Key Sites from the 23-page PDF) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest font-bold text-primary">
            Sacred Shrines & Kunds
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
            {language === "hi" ? "प्रमुख तीर्थ एवं पावन दर्शनीय स्थल" : "Celebrated Shrines & Holy Kunds"}
          </h3>
          <p className="text-sm text-muted-foreground">
            {language === "hi"
              ? "नैमिषारण्य के हृदय में स्थित वे दिव्य स्थल जहाँ शास्त्र प्रमाण और आध्यात्मिक ऊर्जा का प्रत्यक्ष संगम होता है।"
              : "Iconic sanctums in Naimisharanya where scriptural revelation, ancient tapasya, and living devotion converge."}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredSites.map((site) => (
            <Link
              key={site.slug}
              href={`/yatra/namisharanya/${site.slug}`}
              className="group p-6 rounded-3xl bg-card border border-border/80 hover:border-primary/50 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
                    {site.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    <span>{site.district.split(" ")[0]}</span>
                  </div>
                </div>

                <h4 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {language === "hi" ? site.title.hi : site.title.en}
                </h4>

                <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                  {language === "hi"
                    ? site.spiritualSignificance.hi
                    : site.spiritualSignificance.en}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {site.sourceLabels.slice(0, 2).map((lbl) => (
                    <SourceBadge key={lbl} label={lbl} />
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-border/60 flex items-center justify-between text-xs font-bold text-primary">
                <span>{t("viewDetails")}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 5. Why Tirth Platform Features (Epistemic Trust, 12 Languages, Checkpoints) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-secondary/40 border border-border/80">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-primary">
              Platform Innovations
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
              {language === "hi"
                ? "तीर्थ डिजिटल प्लेटफॉर्म की विशेषताएँ"
                : "Engineered for Modern Devotees & Scholars"}
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              {language === "hi"
                ? "प्रामाणिक शास्त्र ज्ञान, वैज्ञानिक सटीकता और सहज डिजिटल अनुभव का त्रिवेणी संगम।"
                : "A unified synthesis of scriptural fidelity, geographical rigor, and intuitive digital accessibility."}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1: Epistemic Rigor */}
            <div className="p-6 rounded-2xl bg-card border border-border/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-base font-bold text-foreground">
                {language === "hi" ? "स्पष्ट प्रमाणिक वर्गीकरण" : "Epistemic Rigor"}
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {language === "hi"
                  ? "परंपरा, शास्त्र प्रमाण, लोक आस्था और भौगोलिक तथ्यों का अलग-अलग रंग-चिह्नित वर्गीकरण।"
                  : "Color-coded tagging strictly differentiating Tradition, Scripture, Local Belief, and Verified Geography."}
              </p>
            </div>

            {/* Feature 2: 12 Indic Languages */}
            <div className="p-6 rounded-2xl bg-card border border-border/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                <Languages className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-base font-bold text-foreground">
                {language === "hi" ? "12 भारतीय भाषाएँ" : "12 Indic Languages"}
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {language === "hi"
                  ? "हिंदी, अंग्रेजी, कन्नड़, मलयालम, तमिल, तेलुगु, मराठी, असमिया, पंजाबी, ओड़िया, गुजराती और बांग्ला में संपूर्ण सामग्री।"
                  : "Seamless instant switching across Hindi, English, Tamil, Telugu, Kannada, Malayalam, Bengali, and more."}
              </p>
            </div>

            {/* Feature 3: Pilgrim Tracker */}
            <div className="p-6 rounded-2xl bg-card border border-border/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center">
                <BookmarkCheck className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-base font-bold text-foreground">
                {language === "hi" ? "व्यक्तिगत परिक्रमा ट्रैकर" : "Pilgrim Progress Tracker"}
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {language === "hi"
                  ? "11 दिनों की यात्रा में अपने संपन्न पड़ावों को स्थानीय रूप से चिन्हित व सहेजें।"
                  : "Track and mark completed stages across the 11 days with persistent offline-friendly storage."}
              </p>
            </div>

            {/* Feature 4: GPS Coordinates */}
            <div className="p-6 rounded-2xl bg-card border border-border/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-base font-bold text-foreground">
                {language === "hi" ? "जीपीएस एवं मैप्स नेविगेशन" : "GPS & Live Maps"}
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {language === "hi"
                  ? "प्रत्येक पड़ाव और उप-तीर्थ के 4-दशमलव सटीक निर्देशांक और एक-क्लिक गूगल मैप्स दिशा-निर्देश।"
                  : "4-decimal precise coordinates for every padav and shrine with one-tap Google Maps directions."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
