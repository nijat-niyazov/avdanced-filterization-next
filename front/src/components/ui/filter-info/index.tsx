import { ProductType } from "@/constants/types";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";

const FilterInfo = ({ items }: { items: ProductType[] }) => {
  const locale = useLocale() as "en" | "tr";

  const itemCounts = items.reduce((acc: any, product: ProductType) => {
    if (acc[product.category]) {
      acc[product.category] += 1;
    } else {
      acc[product.category] = 1;
    }
    return acc;
  }, {});

  return (
    <ul className="flex flex-col gap-2 font-medium mt-5 pb-5 border-b-2 border-gray-400/40">
      <li className="flex opacity-50  text-base justify-between">
        <span>{locale === "en" ? "Filters" : "Filtreler"}</span>
        <span>
          {items.length} {locale === "en" ? "Products" : "Ürünler"}
        </span>
      </li>
      <li>
        <Link
          className="flex  justify-between"
          locale={locale}
          href={`/categories`}
        >
          <span>{locale === "en" ? "Bags" : "Çantalar"}</span>
          <span>{itemCounts["bags"] ?? 0}</span>
        </Link>
      </li>
      <li>
        <Link className="flex  justify-between" locale={locale} href={`/blogs`}>
          <span>{locale === "en" ? "Shoes" : "Ayakkabılar"}</span>
          <span>{itemCounts["shoes"] ?? 0}</span>
        </Link>
      </li>
      <li className="flex  justify-between">
        <span> {locale === "en" ? "Jackets" : "Ceketler"} </span>
        <span>{itemCounts["jackets"] ?? 0}</span>
      </li>
    </ul>
  );
};

export default FilterInfo;
