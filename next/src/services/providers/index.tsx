"use client";

import { NextIntlClientProvider, useLocale, useMessages } from "next-intl";
import { ThemeProvider as NextThemeProvider } from "next-themes";

import { ElementType, ReactNode } from "react";

type ProviderType = [ElementType, Record<string, unknown>];

const useHookBody = () => {
  const locale = useLocale();
  const messages = useMessages();

  return { locale, messages };
};

const { locale, messages } = useHookBody();

const providers: ProviderType[] = [
  [NextIntlClientProvider, { locale, messages }],
  [NextThemeProvider, { attribute: "data-theme", defaultTheme: "system", enableColorScheme: true, enableSystem: true }],
];

const initialComponent = ({ children }: { children: ReactNode[] }) => <>{children}</>;

const buildProvidersTree = (allProviders: ProviderType[]) =>
  allProviders.reduce((AccumulatedComponents: ElementType, [Provider, props = {}]: ProviderType) => {
    return ({ children }) => (
      <AccumulatedComponents>
        <Provider {...props}>{children}</Provider>
      </AccumulatedComponents>
    );
  }, initialComponent);

const ProvidersTree = buildProvidersTree(providers);

export default ProvidersTree;
