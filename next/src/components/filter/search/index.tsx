"use client";

import { useDebounced, useNavigations, useSearchRouting } from "@/hooks";
import React, { Fragment, useState } from "react";

const Search = ({ placeholder }: { placeholder: string }) => {
  const { searchParams } = useNavigations();
  const [inputValue, setInputValue] = useState<string>(searchParams.get("query") ?? "");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value);

  const debouncedValue = useDebounced(inputValue) as string;
  useSearchRouting(debouncedValue, "query");

  return (
    <Fragment>
      <div className="flex items-center">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder={placeholder}
          className="p-2 outline-none border-b-2 border-gray-200 focus:border-purple-400 flex-1 yoxlada"
        />
        <button
          onClick={() => setInputValue("")}
          style={{ opacity: inputValue ? 1 : 0 }}
          className="border-none transition-opacity duration-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </Fragment>
  );
};

export default Search;
