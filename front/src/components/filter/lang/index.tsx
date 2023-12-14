"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";
import { ChangeEvent } from "react";
import { CustomSelect } from "..";

const options: { label: string; value: string }[] = [
  {
    label: "English",
    value: "en",
  },
  {
    label: "Turkish",
    value: "tr",
  },
];

const SetLanguage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const locale = useLocale();
  const url = `${pathname}?${searchParams.toString()}` as "/categories";

  const onChange = (e: ChangeEvent<HTMLSelectElement>) =>
    router.push(url, { locale: e.target.value });

  return (
    <CustomSelect defaultValue={locale} onChange={onChange} options={options} />
  );
};

export default SetLanguage;
