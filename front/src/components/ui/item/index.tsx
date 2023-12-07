import { ProductType } from "@/constants";
import Image from "next/image";

const Item = ({ product }: { product: ProductType }) => {
  return (
    <li>
      <div className="flex flex-col">
        <Image
          width={465}
          height={420}
          src={product.src}
          alt={product.name}
          className="object-cover md:w-[465px] md:h-[420px] mb-4"
        />
        <ul>
          <li className="text-xl font-bold">{product.name}</li>
          <li className="text-lg mb-3">{product.color}</li>
          <li className="text-base">${product.price / 100}</li>
        </ul>
      </div>
    </li>
  );
};

export default Item;
