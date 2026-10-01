import type React from "react"
import type { Metadata, Viewport } from "next"
import { Noto_Sans, Noto_Serif } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/context/language-context"
import "./globals.css"

const notoSans = Noto_Sans({
  subsets: ["latin", "devanagari"],
  variable: "--font-sans",
  display: "swap",
})

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

export const viewport: Viewport = {
  themeColor: "#d97706",
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL("https://tirth-yatra.vercel.app"),
  title: {
    default: "Yatra Portal - Sacred Pilgrimage Journeys across India",
    template: "%s | Yatra Portal",
  },
  description:
    "Embark on divine pilgrimage journeys across India. Explore 84 Kos Braj Parikrama and Namisharanya Yatra with interactive route maps, 11-day padav guides, and sacred darshan details.",
  keywords: [
    "Tirth",
    "Yatra Portal",
    "84 Kos Yatra",
    "Naimisharanya Parikrama",
    "Braj Parikrama",
    "Chakra Tirth",
    "Lalita Devi",
    "Pilgrimage India",
    "Hindu Temples",
    "तीर्थ यात्रा",
    "नैमिषारण्य",
  ],
  authors: [{ name: "Tirth Team" }],
  openGraph: {
    title: "Yatra Portal - Sacred Pilgrimage Journeys",
    description:
      "Explore 84 Kos Braj Parikrama and Naimisharanya 11-day sacred parikrama with interactive maps and spiritual guides.",
    url: "https://tirth-yatra.vercel.app",
    siteName: "Yatra Portal",
    images: [
      {
        url: "/images/hero-sunrise.jpg",
        width: 1200,
        height: 630,
        alt: "Sacred Indian Pilgrimage Temples at Sunrise",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yatra Portal - Sacred Pilgrimage Journeys",
    description:
      "Explore 84 Kos Braj Parikrama and Naimisharanya 11-day sacred parikrama with interactive maps and spiritual guides.",
    images: ["/images/hero-sunrise.jpg"],
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${notoSans.variable} ${notoSerif.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-background text-foreground min-h-screen flex flex-col">
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
