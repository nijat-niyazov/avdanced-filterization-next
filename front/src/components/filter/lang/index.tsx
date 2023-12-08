"use client";
import React, { useState } from "react";
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
  const [lang, setLang] = useState(
    localStorage.getItem("lang") ?? options[0].value
  );

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (typeof localStorage !== "undefined") {
      const value = e.target.value;
      setLang(value);
      localStorage.setItem("lang", value);
    }
  };

  return (
    <CustomSelect defaultValue={lang} onChange={onChange} options={options} />
  );
};

export default SetLanguage;
