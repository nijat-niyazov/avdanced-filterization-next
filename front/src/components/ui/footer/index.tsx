import { Link } from "@/i18n/navigation";
import { useFormatter, useLocale } from "next-intl";

const Footer = () => {
  const { dateTime, list, number, relativeTime } = useFormatter();
  const currentDate = new Date();

  dateTime(currentDate, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const locale = useLocale() as "en" | "tr";

  return (
    <footer className="bg-black min-h-40 flex items-center justify-between text-white px-4 py-5">
      <p className="flex-none">Footer</p>

      <Link href="/categories" className="flex-none mx-auto">
        {locale === "en" ? "Categories" : "Kategoriler!"}
      </Link>

      <span className="flex-none">
        {dateTime(currentDate, {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </span>
    </footer>
  );
};

export default Footer;
