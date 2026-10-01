# Tirth (तीर्थ) – Sacred Indian Pilgrimage Portal

An autonomous, full-stack, production-grade pilgrimage discovery and parikrama guidance platform built with **Next.js 16 (App Router)**, **React 19**, and **Tailwind CSS**.

The portal serves pilgrims and devotees exploring India's ancient sacred circuits—centered on the **84 Kos Naimisharanya Parikrama (Sitapur & Hardoi)** and the **84 Kos Braj Parikrama (Mathura-Vrindavan)**—complete with interactive route maps, 11-day sequential parikrama stops (पड़ाव), 34 sacred shrines, epistemic source classification, and a robust 12-language multilingual system.

---

## Technology Stack

- **Framework**: Next.js 16 (App Router, Turbopack, Server-Side Generation / Prerendering)
- **Library**: React 19
- **Styling**: Tailwind CSS v4 with custom spiritual color tokens (`oklch` Saffron, Gold, Sandstone)
- **Typography**: `Noto_Sans` & `Noto_Serif` (Google Fonts) with Devanagari & Latin script support
- **Icons**: Lucide React
- **UI Components**: Radix UI Primitives (DropdownMenu, Dialog, Card, Button, Tabs, Badge)
- **Mapping**: Resilient Interactive SVG Pilgrimage Route Map with coordinate projection + optional Google Maps JavaScript API integration
- **Testing**: Vitest automated unit & data integrity testing suite (32 tests across 6 suites)

---

## Key Features

1. **Multilingual Pilgrimage System (12 Indian Languages)**
   - English (`en`), Hindi (`hi`), Kannada (`kn`), Malayalam (`ml`), Tamil (`ta`), Telugu (`te`), Marathi (`mr`), Assamese (`as`), Punjabi (`pa`), Odia (`or`), Gujarati (`gu`), and Bengali (`bn`).
   - Client-side persistence via `localStorage` with SSR hydration safety.
   - Resilient English fallback ensuring zero undefined crashes.

2. **84 Kos Naimisharanya Parikrama (Authoritative 23-Page Specification)**
   - **Epistemic Source Labels**: Strict classification of information into `TRADITION`, `SCRIPTURAL REFERENCE`, `LOCAL BELIEF`, `REFERENCE DOCUMENT`, `GEOGRAPHICAL INFORMATION`, and `PRACTICAL INFORMATION`.
   - **11-Day Parikrama Timeline**: Full day-by-day sacred stops across Sitapur and Hardoi districts:
     - Day 1: कोरौना (कोरावल) पड़ाव (Korona) – Chakra Tirth dawn bath & Ganesha laddoo bhog
     - Day 2: हरैया (जगन्नाथ क्षेत्र) पड़ाव (Hareya) – Kailash Ashram & Baba Khabish
     - Day 3: नगवाँ–कोथावाँ पड़ाव (Nagva-Kothava) – Hatyaharan Tirth
     - Day 4: गिरधरपुर–उमरारी पड़ाव (Giridharpur) – Gangasagar Tirth
     - Day 5: साक्षी गोपालपुर पड़ाव (Sakshi Gopalpur) – Gopal Mandir
     - Day 6: देवगवाँ पड़ाव (Devgawan) – Dronacharya Ashram & Shiva Mandir
     - Day 7: मड़ोवा पड़ाव (Mandwa) – Mandavya Rishi Ashram
     - Day 8: जरीगवाँ पड़ाव (Jarigawan) – Brahma-Jari Tirth
     - Day 9: नैमिषारण्य पड़ाव (Naimisharanya) – Chakra Tirth, Lalita Peeth, Vyas Gaddi, Hanuman Garhi, Suta Gaddi, Kali Peeth, Trishakti Dham
     - Day 10: कोलहवा–बरेठी पड़ाव (Kolahwa-Barethi) – Barethi Kund
     - Day 11: मिश्रिख तीर्थ पड़ाव (Mishrikh) – Maharshi Dadhichi Kund bath, Purnahuti Yajna, and 15-day Holi Mela
   - **Interactive Explorers**:
     - `DashamahavidyaExplorer`: 10 sacred Mahavidyas with attributes, iconography, and sacred mantras for Kali Peeth.
     - `TrishaktiPowers`: The Three Divine Powers (Ichha, Jnana, Kriya) illustrating the South Indian architectural synthesis at Trishakti Dham.
     - `JourneyProgress`: 11-step visual checkpoint tracker with local storage persistence.
     - `SacredSitesExplorer`: Multi-criteria filterable catalog of all 34 sacred sites across 11 categories with search.
   - **Dynamic Routes**:
     - Dedicated Parikrama Day routes: `/yatra/namisharanya/day/[dayNumber]` (Days 1–11).
     - Dedicated Shrine Detail routes: `/yatra/namisharanya/[location]` (34 sacred sites).

3. **84 Kos Braj Parikrama (Mathura-Vrindavan)**
   - 252 km parikrama circuit covering Vrindavan Dham, Mathura Krishna Janmabhoomi, Radha Kund, Govardhan Hill (Giriraj Ji), Barsana (Radharani Dham), and Nandgaon.

4. **Resilient Interactive Pilgrimage Map**
   - Renders vector polylines, numbered markers, interactive stop cards, and zoom/reset controls.
   - Zero-dependency interactive fallback when no Google Maps API key is provided.
   - Deep-link integration for opening live driving/walking directions in Google Maps.

5. **SEO & Accessibility**
   - Semantic HTML5 heading hierarchy with ARIA landmarks.
   - Dynamic `sitemap.xml` and `robots.txt` generation covering all 52 static pages.
   - OpenGraph, Twitter Card, and viewport meta configuration.

---

## Getting Started

### Development
```bash
npm install
npm run dev
```
Open `http://localhost:3000` to view the application.

### Running Tests
```bash
npm test
```

### TypeScript Validation
```bash
npm run typecheck
```

### Production Build
```bash
npm run build
```
Pre-renders all 52 pages statically.
