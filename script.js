// Language configuration with all supported languages
const languages = [
  { code: "en", name: "English" },
  { code: "hi", name: "हिन्दी" },
  { code: "kn", name: "ಕನ್ನಡ" },
  { code: "ml", name: "മലയാളം" },
  { code: "ta", name: "தமிழ்" },
  { code: "te", name: "తెలుగు" },
  { code: "mr", name: "मराठी" },
  { code: "as", name: "অসমীয়া" },
  { code: "pa", name: "ਪੰਜਾਬੀ" },
  { code: "or", name: "ଓଡ଼ିଆ" },
  { code: "gu", name: "ગુજરાતી" },
  { code: "bn", name: "বাংলা" },
]

// Import translations from translations.js
const translations = window.translations || {}

function setLanguage(lang) {
  console.log("[v0] setLanguage called with:", lang)
  localStorage.setItem("selectedLanguage", lang)
  updatePageContent(lang)

  // Update dropdown button text
  const langBtn = document.querySelector(".language-dropdown")?.closest(".dropdown")?.querySelector(".dropdown-btn")
  if (langBtn) {
    const selectedLang = languages.find((l) => l.code === lang)
    if (selectedLang) {
      langBtn.innerHTML = `${selectedLang.name} <span class="dropdown-arrow">▼</span>`
    }
  }
}

function updatePageContent(lang) {
  console.log("[v0] updatePageContent called with:", lang)
  console.log("[v0] Available translations:", Object.keys(translations))

  const t = translations[lang] || translations.en
  console.log("[v0] Using translation for:", lang, "Keys:", Object.keys(t || {}))

  if (!t) {
    console.log("[v0] No translations found!")
    return
  }

  // Update all elements with data-translate attribute
  document.querySelectorAll("[data-translate]").forEach((element) => {
    const key = element.getAttribute("data-translate")
    if (t[key]) {
      element.textContent = t[key]
    }
  })
}

// Initialize language on page load
document.addEventListener("DOMContentLoaded", () => {
  console.log("[v0] DOMContentLoaded - initializing language")
  const savedLanguage = localStorage.getItem("selectedLanguage") || "en"
  console.log("[v0] Saved language:", savedLanguage)
  updatePageContent(savedLanguage)

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const navLinks = document.getElementById("navLinks")

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active")
    })
  }

  // Mobile dropdown toggle
  const dropdowns = document.querySelectorAll(".dropdown")
  dropdowns.forEach((dropdown) => {
    const btn = dropdown.querySelector(".dropdown-btn")
    btn.addEventListener("click", (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault()
        dropdown.classList.toggle("active")
      }
    })
  })

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".navbar")) {
      navLinks?.classList.remove("active")
      dropdowns.forEach((d) => d.classList.remove("active"))
    }
  })

  // Update language dropdown button with saved language
  const selectedLang = languages.find((l) => l.code === savedLanguage)
  const langBtn = document.querySelector(".language-dropdown")?.closest(".dropdown")?.querySelector(".dropdown-btn")
  if (langBtn && selectedLang) {
    langBtn.innerHTML = `${selectedLang.name} <span class="dropdown-arrow">▼</span>`
  }
})

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})
