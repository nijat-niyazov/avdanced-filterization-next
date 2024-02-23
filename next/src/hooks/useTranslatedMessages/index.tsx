import { useMessages, useTranslations } from "next-intl";

const useTranslatedMessages = () => {
  const messages = useMessages();
  const th = useTranslations("header");
  const header = th("header");

  // console.log(messages.header.title);

  return { header };
};

export default useTranslatedMessages;
