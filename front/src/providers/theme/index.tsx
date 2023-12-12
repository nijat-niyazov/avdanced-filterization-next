"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ReactNode } from "react";

const ThemeProvider = ({ children }: { children: ReactNode | JSX.Element }) => {
  return (
    <NextThemeProvider enableSystem attribute="class" defaultTheme="system">
      {children}
    </NextThemeProvider>
  );
};

export default ThemeProvider;
