import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const colors = ["white", "blue", "brown", "purple", "orange", "yellow", "gold", "pink", "gray", "black", "silver", "green", "red"];
const Colors = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selecteds = searchParams.get("colors")?.split(",");

  const [selectedColors, setSelectedColors] = useState<string[]>(selecteds || []);

  function handleAdd(color: string) {
    const alreadyAdded = selectedColors.includes(color);

    const newColors = alreadyAdded ? [...selectedColors.filter((s) => s !== color)] : [...selectedColors, color];

    newColors.length ? searchParams.set("colors", newColors.join(",")) : searchParams.delete("colors");

    setSearchParams(searchParams, {
      replace: true,
    });

    setSelectedColors(newColors);
  }

  function handleReset() {
    setSelectedColors([]);
    searchParams.delete("colors");
    setSearchParams(searchParams);
  }

  return (
    <div className="text-white">
      <h3 className="text-xl  font-bold">Colors</h3>
      <ul className="grid gap-2 text-xl">
        {colors.map((color) => (
          <li key={color} className="flex items-center gap-3">
            <input
              onChange={(e) => handleAdd(e.target.value)}
              checked={selectedColors.includes(color.charAt(0).toUpperCase() + color.slice(1))}
              value={color.charAt(0).toUpperCase() + color.slice(1)}
              id={color}
              type="checkbox"
              className="w-5 h-5 accent-pink-500 accent"
            />
            <label htmlFor={color}>{color.charAt(0).toUpperCase() + color.slice(1)}</label>
          </li>
        ))}
      </ul>
      <button onClick={handleReset} className="bg-pink-500  font-bold w-full p-2 rounded-md mt-3">
        Reset
      </button>
    </div>
  );
};

export default Colors;
