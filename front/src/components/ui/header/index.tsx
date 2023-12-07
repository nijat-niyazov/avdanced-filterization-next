import { Search, SetLanguage, Sort } from "@/components/filter";
import { SelectTheme } from "..";

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b-2 pb-5 border-gray-700/30 w-full ">
      <h2 className="font-extrabold text-4xl">Filterization in Next14</h2>

      <div className="flex gap-10 items-center">
        <Search />
        <Sort />
        <SetLanguage />
        <SelectTheme />
      </div>
    </header>
  );
};

export default Header;
