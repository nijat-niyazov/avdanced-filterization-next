import { ProductType } from "@/constants/types";
import { useTranslations } from "next-intl";
import { Item } from "..";

const Products = ({ products }: { products: ProductType[] }) => {
  const t = useTranslations("");

  return products.length > 0 ? (
    <ul className="grid grid-cols-1 md:grid-cols-2 flex-1 gap-10 place-items-center">
      {products.map((product) => (
        <Item product={product} key={product.id} />
      ))}
    </ul>
  ) : (
    <h2 className="text-4xl font-extrabold">{t("nothing_found")}</h2>
  );
};

export default Products;
