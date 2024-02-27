import { ProductType } from "@/utils/types";
import { ReactNode } from "react";
import Product from "./Proc";

const Products = ({ isPending, products }: { isPending: boolean; products: ProductType[] }) => {
  let content: ReactNode;

  if (isPending) {
    content = Array.from({ length: 6 }).map((_, index) => <ProductSkeleton key={index} />);
  } else {
    content = products.map((product, index) => <Product key={index} product={product} />);
  }

  return <ul className="text-white grid  grid-cols-3 px-20 py-5  rounded-md  gap-3">{content}</ul>;
};

export default Products;

function ProductSkeleton() {
  return (
    <li className="grid gap-3 border-b-2 border-white p-2  animate-pulse">
      <div className="w-full h-80 bg-gray-500 " />
      <div className="min-h-5 bg-gray-500 rounded-full" />
      <div className="min-h-5 bg-gray-500 rounded-full" />
      <div className="min-h-5 bg-gray-500 rounded-full" />
    </li>
  );
}
