import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const PriceFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const min = +(searchParams.get("minPrice") as string);
  const max = +(searchParams.get("maxPrice") as string);
  const [minPrice, setMinPrice] = useState(min ?? 0);
  const [maxPrice, setMaxPrice] = useState(max ?? 0);

  function handleMinPriceChange(e: React.ChangeEvent<HTMLInputElement>) {
    setMinPrice(parseInt(e.target.value));
    searchParams.set("minPrice", e.target.value);
    setSearchParams(searchParams, {
      replace: true,
    });
  }

  function handleMaxPriceChange(e: React.ChangeEvent<HTMLInputElement>) {
    setMaxPrice(parseInt(e.target.value));
    searchParams.set("maxPrice", e.target.value);
    setSearchParams(searchParams, {
      replace: true,
    });
  }

  return (
    <div>
      <h3 className="text-xl text-white font-bold">Price</h3>
      <div className="mt-2">
        <input onChange={handleMinPriceChange} value={minPrice} type="text" className="p-2 rounded-md w-full" placeholder="min" />
        <input onChange={handleMaxPriceChange} value={maxPrice} type="text" className="p-2 rounded-md w-full mt-2" placeholder="max" />
      </div>
    </div>
  );
};

export default PriceFilter;
