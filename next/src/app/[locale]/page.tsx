import HomeContainer from "@/containers/home";
import { getAllItems } from "@/libs";
import { useLocale } from "next-intl";

export default async function Home({ searchParams }: { searchParams: { [key: string]: string } }) {
  const locale = useLocale() as "en" | "tr";
  const [{ data, maxPrice }] = await Promise.all([getAllItems(locale, searchParams)]);

  return <HomeContainer products={data} maxPrice={maxPrice} />;
}
