import { Search, SetLanguage, Sort } from "@/components/filter";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { SelectTheme } from "..";

const Header = async () => {
  const t = await getTranslations("");

  const title = t.rich("header.title", {
    github: (chunks) => (
      <>
        <br />
        <Link className="italic text-lg" target="_blank" href={"https://www.github.com/nijat-niyazov"}>
          {chunks}
        </Link>{" "}
      </>
    ),
    home: (chunks) => <Link href="/">{chunks}</Link>,
  });

  return (
    <header className="flex items-center justify-between border-b-2 pb-5 border-gray-700/30 w-full  blue:bg-blue-900  blue:text-white">
      <h2 className="text-3xl">{title}</h2>

      <div className="flex gap-4 items-center">
        <Search placeholder={t("header.placeholder")} />
        <Sort />
        <SetLanguage />
        <SelectTheme />
      </div>
    </header>
  );
};

export default Header;
