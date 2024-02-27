import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const genders = ["man", "woman", "baby"];
const Genders = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selecteds = searchParams.get("gender") as string;
  const [selectedGender, setSelectedGender] = useState<string | null>(selecteds || null);

  function handleAdd(gender: string) {
    searchParams.set("gender", gender);

    setSearchParams(searchParams, {
      replace: true,
    });
    setSelectedGender(gender);
  }

  function handleReset() {
    setSelectedGender(null);
    searchParams.delete("gender");
    setSearchParams(searchParams);
  }

  return (
    <div className="text-white">
      <h3 className="text-xl  font-bold">Genders</h3>
      <ul className="grid gap-2 text-xl">
        {genders.map((gender) => (
          <li key={gender} className="flex items-center gap-3">
            <input
              className="w-5 h-5 accent-pink-500 accent"
              name="gender"
              onChange={() => handleAdd(gender)}
              checked={selectedGender === gender}
              id={gender}
              type="radio"
            />
            <label htmlFor={gender}>{gender}</label>
          </li>
        ))}
      </ul>
      <button onClick={handleReset} className="bg-pink-500  font-bold w-full p-2 rounded-md mt-3">
        Reset
      </button>
    </div>
  );
};

export default Genders;
