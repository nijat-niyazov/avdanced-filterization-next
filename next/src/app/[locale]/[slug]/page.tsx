import { ProductType } from "@/constants/types";
import { getItem } from "@/libs";
import { useLocale } from "next-intl";
import Image from "next/image";

const CategoryPage = async ({ params: { slug } }: { params: { slug: string } }) => {
  const locale = useLocale() as "en" | "tr";

  const { data }: { data: ProductType } = await getItem(locale, slug);

  return (
    <div className="flex items-start justify-between my-10 px-20">
      <Image src={data.src} alt={data.name} width={400} height={500} />

      <ul className="grid gap-4 text-2xl">
        <li>
          <span className="italic font-bold">Product name:</span> {data.name}
        </li>
        <li>
          <span className="italic font-bold">Colors: </span>
          {data.color.join(", ")}
        </li>
        <li>
          <span className="italic font-bold">Price: </span>${data.price}
        </li>
        <li>
          <span className="italic font-bold">Seen by:</span> {data.visited}
        </li>
        <li>
          <span className="italic font-bold">Category: </span>
          {data.category}
        </li>
      </ul>
    </div>
  );
};

export default CategoryPage;
