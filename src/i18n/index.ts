import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import * as EnglishLocale from "./locales/en/translation.json";

const resources = {
  en: {
    translation: EnglishLocale,
  },
};

function durationFormatter(
  isShort: boolean,
  value: unknown,
  lng: unknown,
  options: unknown
) {
  const numericValue = Number(value);
  const key = isShort ? "duration_short" : "duration";

  if (numericValue < 60)
    return i18next.t(`${key}.seconds`, { count: numericValue }, options);

  if (numericValue < 3600)
    return i18next.t(
      `${key}.minutes`,
      { count: Math.floor(numericValue / 60) },
      options
    );

  if (numericValue < 86400)
    return i18next.t(
      `${key}.hours`,
      { count: Math.floor(numericValue / 3600) },
      options
    );

  if (numericValue < 604800)
    return i18next.t(
      `${key}.days`,
      { count: Math.floor(numericValue / 86400) },
      options
    );

  return i18next.t(
    `${key}.weeks`,
    { count: Math.floor(numericValue / 604800) },
    options
  );
}

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
  i18next.services.formatter.add("duration_short", (value, lng, options) =>
    durationFormatter(true, value, lng, options)
  );

  i18next.services.formatter.add("duration", (value, lng, options) =>
    durationFormatter(false, value, lng, options)
  );
}
