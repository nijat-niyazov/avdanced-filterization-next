import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n/navigation";

export default createMiddleware({
  defaultLocale: "tr",
  locales,
});

export const config = {
  matcher: ["/", "/(en|tr)/:path*"],
};
