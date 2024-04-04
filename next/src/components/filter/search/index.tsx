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
          className="p-2 outline-none border-b-2 border-gray-200 focus:border-purple-400 flex-1  rounded-md"
        />
      </div>
    </Fragment>
  );
};

export default Search;
