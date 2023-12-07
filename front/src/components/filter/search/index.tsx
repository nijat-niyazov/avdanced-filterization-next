"use client";

import { useDebounced, useNavigations, useSearchRouting } from "@/hooks";
import React, { useState } from "react";

const Search = () => {
  const { searchParams } = useNavigations();

  const [inputValue, setInputValue] = useState<string>(
    searchParams.get("query") ?? ""
  );

  const debouncedValue = useDebounced(inputValue) as string;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(event.target.value);

  useSearchRouting(debouncedValue, "query");

  return (
    <div className="flex items-center">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search..."
        className="p-2 outline-none border-b-2 border-gray-200 focus:border-purple-400 flex-1"
      />
      <button
        onClick={() => setInputValue("")}
        style={{
          opacity: inputValue ? 1 : 0,
        }}
        className="border-none transition-opacity duration-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default Search;
