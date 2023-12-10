import { getRequestConfig } from "next-intl/server";
import { getTranslationMessagesWithFetch } from "../libs";

export default getRequestConfig(
  async ({ locale }) => {
    const { data: messages } = await getTranslationMessagesWithFetch({
      lang: locale,
    });

    return {
      messages,
    };
  }
  // ({
  //   messages: (await import(`../messages/${locale}.json`)).default,
  // }) //with json
);
