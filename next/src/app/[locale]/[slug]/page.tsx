import { ProductType } from "@/constants/types";
import { getOneItem } from "@/services/api";
import { useLocale } from "next-intl";
import Image from "next/image";

const images = [
  "https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg",
  "https://www.royal-mer.com/wp-content/uploads/2022/05/RoyalMer-PE22-SALOMON-ANCRE-ELECTRICO-882A4552-939x1024.jpg",
  "https://threadheads.com/cdn/shop/files/HideThePainHarold-CustomDesign-Mockup_2e627725-7d34-43d5-ac86-f5c66a684cf6.jpg?v=1696219540&width=2048",
  "https://image.uniqlo.com/UQ/ST3/eu/imagesgoods/465186/item/eugoods_62_465186.jpg",
];

const CategoryPage = async ({ params: { slug } }: { params: { slug: string } }) => {
  const locale = useLocale() as "en" | "tr";

  const { data }: { data: ProductType } = await getOneItem(locale, slug);

  return (
    <div className="flex items-start justify-between my-10 px-20">
      <Image src={data.src} alt={"yes"} width={400} height={400} className="w-[400px] h-[400px] object-cover" />

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
