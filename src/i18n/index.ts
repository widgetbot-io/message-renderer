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

if (i18next.services.formatter) {
  i18next.services.formatter.add("duration", (value, lng, options) => {
    const numericValue = Number(value);

    if (numericValue < 60)
      return i18next.t("duration.seconds", { count: numericValue }, options);

    if (numericValue < 3600)
      return i18next.t(
        "duration.minutes",
        { count: Math.floor(numericValue / 60) },
        options
      );

    if (numericValue < 86400)
      return i18next.t(
        "duration.hours",
        { count: Math.floor(numericValue / 3600) },
        options
      );

    if (numericValue < 604800)
      return i18next.t(
        "duration.days",
        { count: Math.floor(numericValue / 86400) },
        options
      );

    return i18next.t(
      "duration.weeks",
      { count: Math.floor(numericValue / 604800) },
      options
    );
  });
}
