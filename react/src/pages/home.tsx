import FilterBar from "../components/fiilter-bar";
import Header from "../components/header";
import Products from "../components/products";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-700">
      <Header />

      <div className="flex">
        <FilterBar />
        <main className="grow">
          <Products />
        </main>
      </div>
    </div>
  );
};

export default HomePage;
