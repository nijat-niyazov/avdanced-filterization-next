import SearchInput from "../search";
import SortInput from "../sorting";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-10 bg-gray-500 px-10">
      <h3 className="text-3xl font-bold px-5 text-white">Filterization in React</h3>
      <div className="space-x-4">
        <SortInput />
        <SearchInput />
      </div>
    </header>
  );
};

export default Header;
