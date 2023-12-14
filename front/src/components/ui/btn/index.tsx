"use client";

import { useTranslations } from "next-intl";
import { ReactNode } from "react";

const CustomButton = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode | JSX.Element;
}) => {
  const t = useTranslations("header");

  return (
    <>
      <button
        onClick={(e: any) => console.log(e.target.innerText)}
        className="bg-buttons  text-white font-bold py-2 px-4 rounded"
      >
        {t("btn")}
        {/* title */}
      </button>
      {children}
    </>
  );
};

export default CustomButton;
