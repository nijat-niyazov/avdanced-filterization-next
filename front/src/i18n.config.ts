export const i18n = {
  defaultLocale: "en",
  availableLocales: ["en", "tr"],
} as const;

export type Locale = (typeof i18n)["availableLocales"][number];
