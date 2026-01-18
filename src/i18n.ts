import i18n, { LanguageDetectorModule } from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

export const languages = {
  "uz-latin": { languageName: "O'zbekcha" },
  "uz-cyrillic": { languageName: "Ўзбекча" },
  ru: { languageName: "Русский" },
  en: { languageName: "English" },
} as const;

export type LanguageCode = keyof typeof languages;
export const languageCodes: Array<LanguageCode> = Object.keys(
  languages,
) as Array<LanguageCode>;

// Custom language detector plugin to convert "uz" to "uz-latin"
const customDetector: LanguageDetectorModule = {
  type: "languageDetector",
  detect() {
    const detector = new LanguageDetector();
    detector.init({
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    });

    let detected = detector.detect();
    if (Array.isArray(detected)) {
      detected = detected[0];
    }

    // Convert "uz" or "uz-*" without explicit variant to "uz-latin"
    if (
      typeof detected === "string" &&
      detected.startsWith("uz") &&
      !detected.match(/uz-(latin|cyrillic)/)
    ) {
      return "uz-latin";
    }

    return detected;
  },
  cacheUserLanguage(lng: string) {
    localStorage.setItem("i18nextLng", lng);
  },
};

i18n
  .use(Backend) // loads translations from /public/locales
  .use(customDetector) // custom detector
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: "uz-latin",
    supportedLngs: languageCodes,
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  });

export default i18n;
