import { ProductType } from ".";

const Product = ({ product }: { product: ProductType }) => {
  return (
    <li className="grid gap-3 border-b-2 border-white p-2">
      <img src={product.src} className="w-full h-80 object-cover" alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <p>{product.category}</p>
    </li>
  );
};

export default Product;
