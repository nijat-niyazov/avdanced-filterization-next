import { getLocale, getMessages, getTranslations } from "next-intl/server";

const CopHeader = async () => {
  const t = await getTranslations("");
  const messages = await getMessages();
  const locale = await getLocale();

  const title = "HEIGHT BE";

  return (
    <header className="flex items-center justify-between border-b-2 pb-5 border-gray-700/30 w-full ">
      <h2 className="text-3xl">{title}</h2>
      {/* 
      <div className="flex gap-4 items-center">
        <Search placeholder={t("header.placeholder")} />
        <Sort />
        <SetLanguage />
        <SelectTheme />
        <CustomButton title={t("header.btn")}>
          <span>{t("header.des")}</span>
        </CustomButton>
      </div> */}
    </header>
  );
};

export default CopHeader;
