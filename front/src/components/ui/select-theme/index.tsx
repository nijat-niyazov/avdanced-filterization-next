"use client";

import { CustomSelect } from "@/components/filter";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const options = [
  {
    label: "System",
    value: "system",
  },
  {
    label: "Light",
    value: "light",
  },
  {
    label: "Dark",
    value: "dark",
  },
];

const SelectTheme = () => {
  //
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-32 h-1"></div>;
  }

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
