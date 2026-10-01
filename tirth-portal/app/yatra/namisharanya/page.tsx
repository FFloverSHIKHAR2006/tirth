"use client"

import React from "react"
import Link from "next/link"
import { useLanguage } from "@/context/language-context"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { InteractiveMap } from "@/components/interactive-map"
import { JourneyTimeline } from "@/components/journey-timeline"
import { JourneyProgress } from "@/components/journey-progress"
import { SacredSitesExplorer } from "@/components/sacred-sites-explorer"
import { SourceBadge } from "@/components/source-badge"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  MapPin,
  Clock,
  Calendar,
  Compass,
  Sparkles,
  BookOpen,
  ShieldCheck,
  Award,
  ChevronDown,
} from "lucide-react"
import { yatras } from "@/data/yatras"

export default function NamisharanyaYatraPage() {
  const { language, t } = useLanguage()
  const yatra = yatras["namisharanya"]

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 bg-gradient-to-b from-secondary/40 via-background to-background border-b border-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/">
            <Button variant="ghost" size="sm" className="mb-6 text-muted-foreground hover:text-primary gap-2">
              <ArrowLeft className="w-4 h-4" />
              {t("backToHome")}
            </Button>
          </Link>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  श्री नैमिषारण्य 84 कोस परिक्रमा
                </span>
                <SourceBadge label="TRADITION" />
                <SourceBadge label="GEOGRAPHICAL INFORMATION" />
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-tight">
                {language === "hi"
                  ? "नैमिषारण्य 84 कोस महापरिक्रमा"
                  : "Naimisharanya 84 Kos Maha Parikrama"}
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {language === "hi"
                  ? "88,000 ऋषियों की पावन तपोभूमि, जहाँ ब्रह्मा जी के मनोमय चक्र की नेमि गिरी और 18 महापुराणों का उपदेश हुआ। 11 दिवसों एवं ~252 किमी में विस्तारित सीतापुर एवं हरदोई जनपदों की अत्यंत पुण्यदायी परिक्रमा।"
                  : "The primordial sanctuary of 88,000 Vedic rishis, where the rim of Lord Brahma's celestial wheel descended and 18 Puranas were revealed. An 11-day, ~252 km sacred circumambulation across Sitapur and Hardoi districts."}
              </p>

              {/* Key Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-card border border-border/80 shadow-sm">
                  <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground">{t("duration")}</p>
                  <p className="font-semibold text-foreground text-sm">11 दिवस (11 Days)</p>
                </div>

                <div className="p-4 rounded-2xl bg-card border border-border/80 shadow-sm">
                  <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                    <Compass className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground">{t("distance")}</p>
                  <p className="font-semibold text-foreground text-sm">84 कोस (~252 km)</p>
                </div>

                <div className="p-4 rounded-2xl bg-card border border-border/80 shadow-sm">
                  <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                    <Calendar className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground">{t("bestTime")}</p>
                  <p className="font-semibold text-foreground text-sm truncate">फाल्गुन शुक्ल प्रतिपदा</p>
                </div>

                <div className="p-4 rounded-2xl bg-card border border-border/80 shadow-sm">
                  <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground">{t("location")}</p>
                  <p className="font-semibold text-foreground text-sm truncate">सीतापुर व हरदोई (UP)</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a href="#parikrama-timeline-section">
                  <Button className="gap-2 shadow-md">
                    11 दिवसीय पड़ाव क्रम देखें
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </a>
                <a href="#sacred-sites-explorer-section">
                  <Button variant="outline" className="gap-2">
                    समस्त 30+ पावन स्थल
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </a>
                <a href="#route-map-section">
                  <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-primary">
                    <MapPin className="w-4 h-4" />
                    मार्ग मानचित्र (Map)
                  </Button>
                </a>
              </div>
            </div>

            {/* Sacred Seal / Hero Visual */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-primary/20 bg-gradient-to-tr from-amber-600/20 via-primary/10 to-amber-100/10 p-8 sm:p-10 text-center flex flex-col items-center justify-center min-h-[340px]">
                <div className="w-24 h-24 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center mb-4 shadow-inner">
                  <span className="font-serif text-5xl text-primary select-none">ॐ</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground">
                  श्री नैमिषारण्य महातीर्थ
                </h3>
                <p className="text-xs font-serif text-primary uppercase tracking-widest mt-1">
                  सर्वतीर्थमयी पावन भूमि
                </p>
                <div className="mt-4 p-4 rounded-xl bg-card/80 backdrop-blur-sm border border-border/70 text-xs text-muted-foreground leading-relaxed max-w-sm">
                  <p>
                    <span className="font-semibold text-foreground">चक्रतीर्थ:</span> जहाँ ब्रह्मा जी का चक्र गिरा।
                  </p>
                  <p className="mt-1">
                    <span className="font-semibold text-foreground">दधीचि कुंड:</span> जहाँ महर्षि दधीचि ने लोककल्याण हेतु अस्थि दान किया।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Pilgrim Checkpoint Tracker */}
      <section className="py-10 bg-secondary/20 border-b border-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <JourneyProgress />
        </div>
      </section>

      {/* About the 84 Kos Parikrama – Scriptural, Historical & Epistemic Depth */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>पौराणिक इतिहास एवं माहात्म्य</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
              84 कोस परिक्रमा का आध्यात्मिक स्वरूप एवं भूगोल
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-3">
              सनातन धर्म में नैमिषारण्य को समस्त तीर्थों का अधिपति माना गया है। जानिए इसका पौराणिक आधार और आधुनिक प्रशासनिक भूगोल।
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: Brahma's Wheel */}
            <div className="p-6 rounded-3xl bg-card border border-border/80 shadow-sm space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-serif text-xl font-bold">
                    ☸
                  </span>
                  <SourceBadge label="SCRIPTURAL REFERENCE" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground">
                  ब्रह्मा जी का मनोमय चक्र
                </h3>
                <p className="text-xs text-primary font-semibold mt-0.5">
                  नेमि + अरण्य = नैमिषारण्य
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2.5">
                  सृष्टिकर्ता ब्रह्मा जी ने ऋषियों को कलियुग के प्रभाव से मुक्त साधना स्थल की खोज हेतु एक मनोमय चक्र प्रदान किया। जिस वन में चक्र की नेमि (परिधि) विशीर्ण होकर भूमि में प्रविष्ट हुई, वह स्थान 'नैमिषारण्य' कहलाया।
                </p>
              </div>
              <div className="pt-3 border-t border-border/60 text-xs text-muted-foreground">
                संदर्भ: वराह पुराण, महाभारत शांति पर्व
              </div>
            </div>

            {/* Card 2: 88,000 Sages */}
            <div className="p-6 rounded-3xl bg-card border border-border/80 shadow-sm space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-serif text-xl font-bold">
                    📜
                  </span>
                  <SourceBadge label="TRADITION" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground">
                  88,000 ऋषियों की ज्ञानभूमि
                </h3>
                <p className="text-xs text-primary font-semibold mt-0.5">
                  व्यास गद्दी व सूत जी की कथा
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2.5">
                  महर्षि शौनक के नेतृत्व में 88,000 ऋषियों ने यहाँ सहस्त्र-वर्षीय ज्ञान महायज्ञ संपन्न किया। व्यास गद्दी पर महर्षि वेदव्यास ने 18 पुराणों व महाभारत की रचना की, जिसे सूत जी ने ऋषियों को सुनाया।
                </p>
              </div>
              <div className="pt-3 border-t border-border/60 text-xs text-muted-foreground">
                संदर्भ: श्रीमद्भागवत महापुराण (1.1.4)
              </div>
            </div>

            {/* Card 3: Maharshi Dadhichi */}
            <div className="p-6 rounded-3xl bg-card border border-border/80 shadow-sm space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-10 h-10 rounded-2xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center font-serif text-xl font-bold">
                    ⚡
                  </span>
                  <SourceBadge label="LOCAL BELIEF" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground">
                  महर्षि दधीचि का अस्थि दान
                </h3>
                <p className="text-xs text-primary font-semibold mt-0.5">
                  मिश्रिख तीर्थ – देवराज इंद्र का वज्र
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2.5">
                  वृत्रासुर के संहार हेतु महर्षि दधीचि ने देवराज इंद्र को अपनी अस्थियाँ दान दीं, जिनसे वज्र का निर्माण हुआ। परिक्रमा के 11वें दिवस मिश्रिख तीर्थ में दधीचि कुंड स्नान के साथ परिक्रमा का पूर्ण फल प्राप्त होता है।
                </p>
              </div>
              <div className="pt-3 border-t border-border/60 text-xs text-muted-foreground">
                संदर्भ: पद्म पुराण एवं स्थानीय लोक परंपरा
              </div>
            </div>
          </div>

          {/* Epistemic Framework Callout */}
          <div className="p-6 sm:p-8 rounded-3xl bg-secondary/40 border border-border/80 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-primary" />
            </div>
            <div className="space-y-1.5 flex-1">
              <h4 className="font-serif text-lg font-bold text-foreground">
                तीर्थ मंच का प्रमाणिक दृष्टिकोण (Epistemic Distinction)
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                तीर्थ डिजिटल प्लेटफॉर्म पर आध्यात्मिक आस्था, शास्त्र प्रमाण, लोक परंपरा और आधुनिक प्रशासनिक तथ्यों को स्पष्ट वर्गीकृत किया गया है। 84 कोस परिक्रमा उत्तर प्रदेश के सीतापुर और हरदोई जनपदों के 11 प्रमुख पड़ावों और 30+ उप-तीर्थों से होकर गुजरती है, जिसका जीपीएस विवरण सत्यापित है।
              </p>
            </div>
            <div className="flex flex-wrap gap-2 shrink-0">
              <SourceBadge label="SCRIPTURAL REFERENCE" />
              <SourceBadge label="GEOGRAPHICAL INFORMATION" />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Pilgrimage Route Map */}
      <section id="route-map-section" className="py-16 bg-secondary/30 border-y border-border/60 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>सत्यापित जीपीएस परिपथ</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-2">
              {t("routeMap")}
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              सीतापुर एवं हरदोई जनपदों में 84 कोस (~252 किमी) के संपूर्ण 11 पड़ावों का इंटरैक्टिव मानचित्र।
            </p>
          </div>

          <InteractiveMap
            center={yatra.centerCoordinates}
            zoom={yatra.zoom}
            markers={yatra.markers}
            routeCoordinates={yatra.routeCoordinates}
            title="84 Kos Naimisharanya Parikrama Circuit"
          />
        </div>
      </section>

      {/* 11-Day Parikrama Timeline Component */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <JourneyTimeline />
        </div>
      </section>

      {/* Comprehensive Sacred Sites Explorer (30+ Sites, 11 Categories, Epistemic Badges) */}
      <section id="sacred-sites-explorer-section" className="py-16 bg-secondary/20 border-t border-border/60 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SacredSitesExplorer />
        </div>
      </section>

      <Footer />
    </main>
  )
}
