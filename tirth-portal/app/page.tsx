import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { NaimisharanyaFeaturedSection } from "@/components/naimisharanya-featured-section"
import { YatrasSection } from "@/components/yatras-section"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <NaimisharanyaFeaturedSection />
      <YatrasSection />
      <AboutSection />
      <Footer />
    </main>
  )
}
