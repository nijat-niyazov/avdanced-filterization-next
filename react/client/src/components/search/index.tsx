import { ChangeEvent, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDebounced } from "../hooks";

const SearchInput = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("query") || "");

  const debounced = useDebounced(search, 500);

  useEffect(() => {
    debounced ? searchParams.set("query", debounced) : searchParams.delete("query");
    setSearchParams(searchParams, {
      replace: true,
    });
  }, [debounced]);

  return (
    <input
      onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
      type="text"
      value={search}
      className="p-2 rounded-md"
      placeholder="query"
    />
  );
};

export default SearchInput;
