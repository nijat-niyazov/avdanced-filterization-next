import { Products } from "@/components/ui";
import { ProductType } from "@/constants/types";

const HomeContainerCopy = ({
  products,
  maxPrice,
}: {
  products: ProductType[];
  maxPrice: number;
}) => {
  // const itemCounts = products.reduce((acc: any, product: ProductType) => {
  //   if (acc[product.category]) {
  //     acc[product.category] = acc[product.category] + 1;
  //   } else {
  //     acc[product.category] = 1;
  //   }
  // }, {});

  return (
    <div className="flex items-start gap-10 mt-5">
      <div className="w-1/5 pr-5 border-black/20 border-r-2 sticky top-0">
        {/* <FilterInfo totalItems={products.length} itemCounts={{}} />
        <ColorFilters />
        <Categories />
        <PriceFilter defMaxPrice={maxPrice} /> */}
      </div>

      <Products products={products} />
    </div>
  );
};

export default HomeContainerCopy;
