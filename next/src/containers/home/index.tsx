import { ColorFilters, PriceFilter } from "@/components/filter";

import { FilterInfo, Products } from "@/components/ui";
import { colors } from "@/constants/en";
import { ProductType } from "@/constants/types";
import { useLocale, useTranslations } from "next-intl";

const HomeContainer = ({
  products,
  maxPrice,
}: {
  products: ProductType[];
  maxPrice: number;
}) => {
  const t = useTranslations("colors");

  const options = colors.map((key) => ({
    label: t(`options.${key}.label`),
    value: t(`options.${key}.value`),
    name: t(`options.${key}.label`),
  }));

  const locale = useLocale();

  return (
    <div className="flex items-start gap-10 mt-5">
      <div className="w-1/4 pr-10 border-black/20 dark:border-slate-400/20 border-r-2 sticky top-0">
        <FilterInfo items={products} />
        <ColorFilters
          title={locale === "en" ? "Colors" : "Renkler"}
          options={options}
          param="colors"
        />

        <PriceFilter
          title={locale === "en" ? "Price" : "Fiyat"}
          defMaxPrice={maxPrice}
        />
      </div>

      <Products products={products} />
    </div>
  );
};

export default HomeContainer;
