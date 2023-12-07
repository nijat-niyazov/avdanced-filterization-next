import { ProductType } from "@/constants";
import { Item } from "..";

const Products = ({ products }: { products: ProductType[] }) => {
  return products.length > 0 ? (
    <ul className="grid grid-cols-1 md:grid-cols-2 flex-1 gap-10 place-items-center">
      {products.map((product, i) => (
        <Item product={product} key={i} />
      ))}
    </ul>
  ) : (
    <h2 className="text-4xl font-extrabold">Nothing has found</h2>
  );
};

export default Products;
