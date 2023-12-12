"use client";

import { CustomSelect } from "@/components/filter";
import { useLocale } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const SelectTheme = () => {
  //
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const locale = useLocale();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-32 h-1"></div>;
  }

  const options = [
    {
      label: locale === "en" ? "System" : "Sistem",
      value: "system",
    },
    {
      label: locale === "en" ? "Light" : " Işık ",
      value: "light",
    },
    {
      label: locale === "en" ? "Dark" : "Karanlık",
      value: "dark",
    },
  ];

  const onThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setTheme(e.target.value);

  const defaultValue = resolvedTheme === "system" ? "system" : theme;

  return (
    <CustomSelect
      defaultValue={defaultValue}
      options={options}
      onChange={onThemeChange}
    />
  );
};

export default SelectTheme;
