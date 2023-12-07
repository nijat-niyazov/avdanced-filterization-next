"use client";
import { useNavigations } from "@/hooks";
import { setQuery } from "@/utils/setQuery";
import React from "react";
import CustomSelect from "../custom/select";

const options = [
  {
    label: "Name",
    value: "name",
  },
  {
    label: "Price Asc",
    value: "priceAsc",
  },
  {
    label: "Price Desc",
    value: "priceDesc",
  },
];

const Sort = () => {
  const { router, searchParams, pathname } = useNavigations();

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const url = setQuery("sort", e.target.value, searchParams);
    router.push(pathname + "?" + url);
  };

  return (
    <CustomSelect
      onChange={onChange}
      label="Sort by"
      defaultValue={searchParams.get("sort") ?? ""}
      options={options}
    />
  );
};

export default Sort;
