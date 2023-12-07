"use client";
import React from "react";
import CustomSelect from "../custom/select";

const options = [
  {
    label: "English",
    value: "eng",
  },
  {
    label: "Turkish",
    value: "tr",
  },
];

const SetLanguage = () => {
  // const { router, searchParams, pathname } = useNavigations();

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // const url = setQuery("setLanguage", e.target.value, searchParams);
    // router.push(pathname + "?" + url);
  };

  return <CustomSelect onChange={onChange} options={options} />;
};

export default SetLanguage;
