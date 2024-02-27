import Colors from "./colors";
import Genders from "./gender";
import PriceFilter from "./price";
import Sizes from "./sizes";

const FilterBar = ({ maxPrice }: { maxPrice: number }) => {
  return (
    <aside className="w-1/4 bg-gray-800 px-10 max-h-screen overflow-y-auto sticky top-0">
      <h3 className="text-2xl text-white font-bold">Filters</h3>
      <div className="space-y-10 ">
        <Colors />
        <PriceFilter maxPrice={maxPrice} />
        <Genders />
        <Sizes />
      </div>
    </aside>
  );
};

export default FilterBar;
