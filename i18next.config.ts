import { defineConfig } from "i18next-cli";

export default defineConfig({
  locales: ["uz-latin", "uz-cyrillic", "ru", "en"],
  extract: {
    input: ["src/**/*.{js,jsx,ts,tsx}"],
    output: "public/locales/{{language}}/translations.json",
  },
});
