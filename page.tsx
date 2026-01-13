"use client"

import Link from "next/link"
import { useLanguage } from "@/context/language-context"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GoogleMap } from "@/components/google-map"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MapPin, Clock, Calendar, Users } from "lucide-react"

const namisharanyaHighlights = {
  en: [
    "Visit the sacred Chakra Tirth",
    "Darshan at Lalita Devi Temple",
    "Visit the place where Vyasa narrated Puranas",
    "Bathe in the holy Gomti River",
    "Visit the ancient Hanuman Garhi",
    "Experience the spiritual Vyas Gaddi",
  ],
  hi: [
    "पवित्र चक्र तीर्थ के दर्शन",
    "ललिता देवी मंदिर के दर्शन",
    "वह स्थान जहां व्यास ने पुराण सुनाए",
    "पवित्र गोमती नदी में स्नान",
    "प्राचीन हनुमान गढ़ी के दर्शन",
    "आध्यात्मिक व्यास गद्दी का अनुभव",
  ],
  kn: [
    "ಪವಿತ್ರ ಚಕ್ರ ತೀರ್ಥದ ದರ್ಶನ",
    "ಲಲಿತಾ ದೇವಿ ದೇವಾಲಯದ ದರ್ಶನ",
    "ವ್ಯಾಸರು ಪುರಾಣಗಳನ್ನು ಹೇಳಿದ ಸ್ಥಳ",
    "ಪವಿತ್ರ ಗೋಮ್ತಿ ನದಿಯಲ್ಲಿ ಸ್ನಾನ",
    "ಪ್ರಾಚೀನ ಹನುಮಾನ್ ಗರ್ಹಿಯ ದರ್ಶನ",
    "ಆಧ್ಯಾತ್ಮಿಕ ವ್ಯಾಸ ಗದ್ದಿಯ ಅನುಭವ",
  ],
  ml: [
    "പവിത്ര ചക്ര തീർത്ഥത്തിന്റെ ദർശനം",
    "ലലിതാ ദേവി ക്ഷേത്രത്തിന്റെ ദർശനം",
    "വ്യാസൻ പുരാണങ്ങൾ പറഞ്ഞ സ്ഥലം",
    "പവിത്ര ഗോമ്തി നദിയിൽ സ്നാനം",
    "പുരാതന ഹനുമാൻ ഗർഹിയുടെ ദർശനം",
    "ആത്മീയ വ്യാസ് ഗദ്ദിയുടെ അനുഭവം",
  ],
  ta: [
    "புனித சக்ர தீர்த்தத்தின் தரிசனம்",
    "லலிதா தேவி கோயிலின் தரிசனம்",
    "வியாசர் புராணங்களைக் கூறிய இடம்",
    "புனித கோம்தி நதியில் நீராடுதல்",
    "பண்டைய ஹனுமான் கர்ஹியின் தரிசனம்",
    "ஆன்மீக வியாஸ் கத்தியின் அனுபவம்",
  ],
}

const markers = [
  { lat: 27.0721, lng: 80.5618, title: "Chakra Tirth" },
  { lat: 27.0735, lng: 80.5625, title: "Lalita Devi Temple" },
  { lat: 27.0728, lng: 80.564, title: "Vyas Gaddi" },
  { lat: 27.0715, lng: 80.56, title: "Hanuman Garhi" },
  { lat: 27.07, lng: 80.558, title: "Gomti River" },
]

export default function NamisharanyaYatraPage() {
  const { language, t } = useLanguage()
  const highlights = namisharanyaHighlights[language]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/">
            <Button variant="ghost" className="mb-6 text-muted-foreground hover:text-primary">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t("backToHome")}
            </Button>
          </Link>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
                {t("namisharanyaTitle")}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">{t("namisharanyaDesc")}</p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-semibold text-foreground">Sitapur, UP</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="font-semibold text-foreground">3-5 days</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Best Time</p>
                    <p className="font-semibold text-foreground">Year Round</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
                  <Users className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Difficulty</p>
                    <p className="font-semibold text-foreground">Easy</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="aspect-video rounded-2xl bg-cover bg-center shadow-xl"
              style={{
                backgroundImage:
                  "url(/placeholder.svg?height=600&width=800&query=Naimisharanya forest sacred site ancient temple spiritual atmosphere)",
              }}
            />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">{t("routeMap")}</h2>
          <div className="h-[500px]">
            <GoogleMap center={{ lat: 27.0721, lng: 80.5618 }} zoom={15} markers={markers} />
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">{t("keyHighlights")}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-primary font-semibold">{index + 1}</span>
                </div>
                <p className="text-foreground leading-relaxed">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
