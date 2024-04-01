import createMiddleware from "next-intl/middleware";
import { localePrefix, locales, pathnames } from "./i18n/navigation";

export default createMiddleware({ defaultLocale: "tr", locales, localePrefix, pathnames });

export const config = { matcher: ["/", "/(en|tr)/:path*"] };
