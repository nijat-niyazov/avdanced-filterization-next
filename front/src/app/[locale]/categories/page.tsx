"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Page = () => {
  const title = useTranslations("pages");
  const pathname = usePathname();
  const locale = useLocale();

  const category = locale === "en" ? "technology" : "teknoloji";

  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <h2 className="text-6xl font-extrabold block mb-3">
        {locale === "en" ? "About" : "Hakkımızda"}
      </h2>{" "}
      <Link
        locale={locale}
        // href={pathname + (locale === "en" ? "/technology" : "/teknoloji")}
        href={`${pathname}/${category}`}
      >
        {category}
      </Link>
    </div>
  );
};

export default Page;
