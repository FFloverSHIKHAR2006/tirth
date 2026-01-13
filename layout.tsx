import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans, Noto_Serif } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/context/language-context"
import "./globals.css"

const _notoSans = Noto_Sans({ subsets: ["latin", "devanagari"] })
const _notoSerif = Noto_Serif({ subsets: ["latin", "devanagari"] })

export const metadata: Metadata = {
  title: "Yatra Portal - Sacred Pilgrimage Journeys",
  description:
    "Embark on divine pilgrimage journeys across India. Explore 84 Kos Yatra and Namisharanya Yatra with interactive maps and spiritual guidance.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
