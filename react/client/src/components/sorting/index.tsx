import { ChangeEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";

const sortelements = [
  { label: "Sort by", value: "" },
  { label: "Price asc", value: "priceAsc" },
  { label: "Price desc", value: "priceDesc" },

  { label: "Less popular", value: "lessPopular" },
  { label: "Most popular", value: "MostPopular" },
];

const SortInput = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState(searchParams.get("sort") || "");

  function handleSort(e: ChangeEvent<HTMLSelectElement>) {
    setSortBy(e.target.value);
    e.target.value ? searchParams.set("sort", e.target.value) : searchParams.delete("sort");
    setSearchParams(searchParams, {
      replace: true,
    });
  }

  return (
    <select value={sortBy} onChange={handleSort} name="sort" className="w-40 p-2 rounded-md">
      {sortelements.map((element, i) => (
        <option className={element.value == sortBy ? "font-bold bg-pink-500 text-white" : ""} key={i} value={element.value}>
          {element.label}
        </option>
      ))}
    </select>
  );
};

export default SortInput;
