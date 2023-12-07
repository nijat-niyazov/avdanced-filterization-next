import { ColorFilters, PriceFilter } from "@/components/filter";

import { FilterInfo, Products } from "@/components/ui";
import { ProductType } from "@/constants";

const HomeContainer = ({
  products,
  maxPrice,
}: {
  products: ProductType[];
  maxPrice: number;
}) => {
  const itemCounts = products.reduce((acc: any, product: ProductType) => {
    if (acc[product.category]) {
      acc[product.category] += 1;
    } else {
      acc[product.category] = 1;
    }
    return acc;
  }, {});

  return (
    <div className="flex items-start gap-10 mt-5">
      <div className="w-1/4 pr-10 border-black/20 dark:border-slate-400/20 border-r-2 sticky top-0">
        <FilterInfo totalItems={products.length} itemCounts={itemCounts} />
        <ColorFilters />
        <PriceFilter defMaxPrice={maxPrice} />
      </div>

      <Products products={products} />
    </div>
  );
};

export default HomeContainer;
