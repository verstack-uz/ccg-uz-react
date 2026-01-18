import i18n from "i18next";
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

i18n
  .use(Backend) // loads translations from /public/locales
  .use(LanguageDetector) // detects user language
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: "uz-latin",
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "i18nextLng",
      convertDetectedLanguage: (lng) => {
        // Map generic "uz" to "uz-latin" as default
        if (lng.startsWith("uz") && !lng.includes("-")) {
          return "uz-latin";
        }
        return lng;
      },
    },
  });

export default i18n;
