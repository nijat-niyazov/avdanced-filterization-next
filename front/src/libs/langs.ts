import "server-only";

const dicts = {
  en: () => import("@/db/en.json").then((m) => m.default),
  tr: () => import("@/db/tr.json").then((m) => m.default),
};

export const getDictionary = (lang: keyof typeof dicts) => dicts[lang]();
