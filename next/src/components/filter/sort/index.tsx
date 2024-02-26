"use client";
import { useNavigations } from "@/hooks";
import { setQuery } from "@/utils/setQuery";
import { useLocale } from "next-intl";
import React from "react";
import CustomSelect from "../custom/select";

const Sort = () => {
  const { router, searchParams, pathname } = useNavigations();

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const url = setQuery("sort", e.target.value, searchParams);
    router.push(pathname + "?" + url);
  };

  const locale = useLocale();

  const options = [
    {
      label: locale === "en" ? "Price Asc" : "Artan Fiyat",
      value: "priceAsc",
    },
    {
      label: locale === "en" ? "Price Desc" : "Azalan Fiyat",
      value: "priceDesc",
    },
    {
      label: locale === "en" ? "Less Popular" : "Az popüler",
      value: "lessPopular",
    },
    {
      label: locale === "en" ? "Most Popular" : "En popüler",
      value: "mostPopular",
    },
  ];

  return (
    <CustomSelect
      onChange={onChange}
      label={locale === "en" ? "Sort by" : "Sortla"}
      defaultValue={searchParams.get("sort") ?? ""}
      options={options}
    />
  );
};

export default Sort;
