import { getRequestConfig } from "next-intl/server";
import { getTranslationMessagesWithFetch } from "../services/api";

export default getRequestConfig(async ({ locale }) => {
  const { data: messages } = await getTranslationMessagesWithFetch(locale as "en" | "tr");

  return { messages };
});
