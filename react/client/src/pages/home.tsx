import { useGetData } from "@/components/hooks";
import { ProductType } from "@/utils/types";
import FilterBar from "../components/fiilter-bar";
import Header from "../components/header";
import Products from "../components/products";

const HomePage = () => {
  const { isPending, data, error } = useGetData("products");

  if (error) {
    return (
      <h3 className="text-3xl font-bold bg-black/80 text-white min-h-screen flex items-center justify-center">Something went wrong...</h3>
    );
  }

  return (
    <div className="min-h-screen bg-gray-700">
      <Header />

      <div className="flex">
        <FilterBar maxPrice={data?.maxPrice!} />
        <main className="grow">
          <Products isPending={isPending} products={data?.data as ProductType[]} />
        </main>
      </div>
    </div>
  );
};

export default HomePage;
