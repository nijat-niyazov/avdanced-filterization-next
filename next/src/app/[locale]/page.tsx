import HomeContainer from "@/containers/home";
import { getAllItems } from "@/libs";
import { useLocale } from "next-intl";

type HomePageProps = {
  searchParams: { [key: string]: string };
};

export default async function Home({ searchParams }: HomePageProps) {
  const locale = useLocale() as "en" | "tr";

  const [{ data, maxPrice }] = await Promise.all([getAllItems(locale, searchParams)]);

  return <HomeContainer products={data} maxPrice={maxPrice} />;
}
