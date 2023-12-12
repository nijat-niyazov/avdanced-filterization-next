import { NextIntlClientProvider, useLocale, useMessages } from "next-intl";
import React from "react";
import ThemeProvider from "./theme";

const Providers = ({
  children,
}: {
  children: React.ReactNode | JSX.Element;
}) => {
  const messages = useMessages();
  const locale = useLocale();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider>{children}</ThemeProvider>
    </NextIntlClientProvider>
  );
};

export default Providers;
