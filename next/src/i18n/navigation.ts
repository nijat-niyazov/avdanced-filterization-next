import { Pathnames, createLocalizedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "tr"] as const;
export const localePrefix = "always"; // Default

export const pathnames = {
  "/": "/",

  "/categories": { en: "/categories", tr: "/kategoriler" },
  "/categories/[category]": { en: "/categories/[category]", tr: "/kategoriler/[category]" },
  "/blogs": { en: "/blogs", tr: "/bloglar" },
  "/blogs/[slug]": { en: "/categories/[slug]", tr: "/bloglar/[slug]" },
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } = createLocalizedPathnamesNavigation({
  locales,
  localePrefix,
  pathnames,
});
