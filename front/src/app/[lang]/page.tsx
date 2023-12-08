import HomeContainer from "@/containers/home";
import { getItemsWithFetch } from "@/libs";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] };
}) {
  const { products, maxPrice } = await getItemsWithFetch(searchParams);

  return <HomeContainer products={products} maxPrice={maxPrice} />;

  // const promise =  getItemsWithFetch(searchParams);
  // return <HomeContainerCopy promise={promise} maxPrice={maxPrice} />;
}
