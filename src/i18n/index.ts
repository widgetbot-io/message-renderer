import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import * as EnglishLocale from "./locales/en/translation.json";

const resources = {
  en: {
    translation: EnglishLocale,
  },
};

void i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
  })
  .then(console.log);
