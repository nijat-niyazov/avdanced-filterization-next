import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Product from "./Proc";

export type ProductType = {
  name: string;
  color: string[];
  price: number;
  category: string;
  src: string;
  visited: number;
};

const Products = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());
    const hasParams = Object.keys(params).length;

    const url = "http://localhost:3001/items";
    const mainURl = new URL(url);

    if (hasParams) {
      for (const [key, value] of Object.entries(params)) {
        mainURl.searchParams.set(key, value);
      }
    }

    fetch(mainURl)
      .then((res) => res.json())
      .then((json) => setProducts(json.data));
  }, [searchParams]);

  return (
    <ul className="text-white grid  grid-cols-3 px-20 py-5  rounded-md  gap-3">
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </ul>
  );
};

export default Products;
