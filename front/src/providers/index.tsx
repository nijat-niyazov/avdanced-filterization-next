"use client";

import React from "react";
import ThemeProvider from "./theme";

const Providers = ({
  children,
}: {
  children: React.ReactNode | JSX.Element;
}) => {
  //
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
