import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const sizes = ["xs", "s", "m", "l", "xl"];
const Sizes = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selecteds = searchParams.get("size")?.split(",");
  const [selectedSizes, setSelectedSizes] = useState<string[]>(selecteds || []);

  function handleAdd(size: string) {
    const alreadyAdded = selectedSizes.includes(size);

    const newSizes = alreadyAdded ? [...selectedSizes.filter((s) => s !== size)] : [...selectedSizes, size];

    newSizes.length ? searchParams.set("size", newSizes.join(",")) : searchParams.delete("size");

    setSearchParams(searchParams, {
      replace: true,
    });

    setSelectedSizes(newSizes);
  }

  function handleReset() {
    setSelectedSizes([]);
    searchParams.delete("size");
    setSearchParams(searchParams);
  }

  return (
    <div className="text-white">
      <h3 className="text-xl  font-bold">Sizes</h3>
      <ul className="grid gap-2 text-xl">
        {sizes.map((size) => (
          <li key={size} className="flex items-center gap-3">
            <input
              onChange={() => handleAdd(size)}
              checked={selectedSizes.includes(size)}
              id={size}
              value={size}
              type="checkbox"
              className="w-5 h-5 accent-pink-500 accent"
            />
            <label htmlFor={size}>size {size}</label>
          </li>
        ))}
      </ul>
      <button onClick={handleReset} className="bg-pink-500  font-bold w-full p-2 rounded-md mt-3">
        Reset
      </button>
    </div>
  );
};

export default Sizes;
