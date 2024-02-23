import { ProductType } from "@/constants/types";
import {
  useFormatter,
  useLocale,
  useMessages,
  useNow,
  useTimeZone,
  useTranslations,
} from "next-intl";
import Image from "next/image";

const Item = ({ product }: { product: ProductType }) => {
  const t = useTranslations(""); // group of json files
  const tColors = useTranslations("colors"); // group of json files
  const tCategories = useTranslations("categories"); // group of json files
  const format = useFormatter();
  const locale = useLocale(); // en||tr
  const messages = useMessages(); // json file
  const now = useNow(); // 2023-12-09T08:49:44.987Z
  const timeZone = useTimeZone(); // Asia/Baku

  // const keys = [];

  const items = ["HTML", "CSS", "JavaScript", "React", "NextJS"];

  let price = t(
    "currency.price",
    {
      price: product.price / 100,
    },
    {
      number: {
        currency: {
          style: "currency",
          currency: locale === "en" ? "USD" : "TRY",
        },
      },
    }
  );

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
          <li className="text-xl font-bold flex items-center justify-between">
            <span>{product.name}</span>
            <span className="italic font-medium">
              {t(`categories.${product.category}`)}
            </span>
          </li>

          <li className="text-lg mb-3">
            {product.color
              .map((color) => t(`colors.options.${color}.label`))
              .join(", ")}
          </li>
          <li className="text-base flex items-center justify-between">
            <span>{price}</span>
            <span className="text-sm">
              {t("visited", { count: product.visited })}
            </span>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default Item;
