import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import translationEn from "./local/en.json"
import translationAr from "./local/ar.json"

const resources = {
  en: { translation: translationEn },
  ar: { translation: translationAr },
}

// ✅ هات اللغة المخزنة من localStorage قبل init
const savedLang = localStorage.getItem("i18nextLng") || "en"

// ✅ ضبط الاتجاه قبل تحميل الصفحة (لحل مشكلة الوميض)
document.documentElement.dir = savedLang === "ar" ? "ltr" : "ltr"
document.documentElement.lang = savedLang

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLang, // ← ← ← أهم سطر
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
  })

i18n.on("languageChanged", (lng) => {
  document.documentElement.dir = lng === "ar" ? "ltr" : "ltr"
  document.documentElement.lang = lng
})

export default i18n
