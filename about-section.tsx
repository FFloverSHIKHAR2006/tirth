"use client"

import { useLanguage } from "@/context/language-context"
import { Heart, Users, Compass, BookOpen } from "lucide-react"

const features = [
  { icon: Heart, key: "devotion" },
  { icon: Users, key: "community" },
  { icon: Compass, key: "guidance" },
  { icon: BookOpen, key: "wisdom" },
]

const featureLabels = {
  en: {
    devotion: "Divine Devotion",
    community: "Sacred Community",
    guidance: "Expert Guidance",
    wisdom: "Ancient Wisdom",
  },
  hi: { devotion: "दिव्य भक्ति", community: "पवित्र समुदाय", guidance: "विशेषज्ञ मार्गदर्शन", wisdom: "प्राचीन ज्ञान" },
  kn: { devotion: "ದೈವಿಕ ಭಕ್ತಿ", community: "ಪವಿತ್ರ ಸಮುದಾಯ", guidance: "ತಜ್ಞ ಮಾರ್ಗದರ್ಶನ", wisdom: "ಪ್ರಾಚೀನ ಜ್ಞಾನ" },
  ml: { devotion: "ദൈവിക ഭക്തി", community: "പവിത്ര സമൂഹം", guidance: "വിദഗ്ദ്ധ മാർഗ്ഗനിർദ്ദേശം", wisdom: "പുരാതന ജ്ഞാനം" },
  ta: { devotion: "தெய்வீக பக்தி", community: "புனித சமூகம்", guidance: "நிபுணர் வழிகாட்டுதல்", wisdom: "பண்டைய ஞானம்" },
  te: { devotion: "దివ్య భక్తి", community: "పవిత్ర సమాజం", guidance: "నిపుణ మార్గదర్శకత్వం", wisdom: "ప్రాచీన జ్ఞానం" },
  mr: { devotion: "दिव्य भक्ती", community: "पवित्र समुदाय", guidance: "तज्ञ मार्गदर्शन", wisdom: "प्राचीन ज्ञान" },
  as: { devotion: "দিব্য ভক্তি", community: "পবিত্ৰ সম্প্ৰদায়", guidance: "বিশেষজ্ঞ নিৰ্দেশনা", wisdom: "প্ৰাচীন জ্ঞান" },
  pa: { devotion: "ਦਿਵਯ ਭਗਤੀ", community: "ਪਵਿੱਤਰ ਸਮੁਦਾਇ", guidance: "ਮਾਹਰ ਮਾਰਗਦਰਸ਼ਨ", wisdom: "ਪ੍ਰਾਚੀਨ ਗਿਆਨ" },
  or: { devotion: "ଦିବ୍ୟ ଭକ୍ତି", community: "ପବିତ୍ର ସମୁଦାୟ", guidance: "ବିଶେଷଜ୍ଞ ମାର୍ଗଦର୍ଶନ", wisdom: "ପ୍ରାଚୀନ ଜ୍ଞାନ" },
  gu: { devotion: "દિવ્ય ભક્તિ", community: "પવિત્ર સમુદાય", guidance: "નિષ્ણાત માર્ગદર્શન", wisdom: "પ્રાચીન જ્ઞાન" },
  bn: { devotion: "দিব্য ভক্তি", community: "পবিত্র সম্প্রদায়", guidance: "বিশেষজ্ঞ নির্দেশনা", wisdom: "প্রাচীন জ্ঞান" },
}

export function AboutSection() {
  const { language, t } = useLanguage()
  const labels = featureLabels[language] || featureLabels.en

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">{t("aboutTitle")}</h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">{t("aboutDesc")}</p>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature.key} className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground text-sm">
                    {labels[feature.key as keyof typeof labels]}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div
              className="aspect-[4/3] rounded-2xl bg-cover bg-center shadow-xl"
              style={{
                backgroundImage:
                  "url(/placeholder.svg?height=600&width=800&query=devotees performing sacred pilgrimage ritual in India)",
              }}
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <span className="font-serif text-4xl text-primary">ॐ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
