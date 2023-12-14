"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ReactNode } from "react";

const ThemeProvider = ({ children }: { children: ReactNode | JSX.Element }) => {
  return (
    <NextThemeProvider
      attribute="data-theme" // it has to be data-theme if you use multiple themes
      defaultTheme="system"
      enableColorScheme
      enableSystem
    >
      {children}
    </NextThemeProvider>
  );
};

export default ThemeProvider;
