"use client";
import { Arrow } from "@/components/ui";
import { useDebounced, useNavigations, useSearchRouting } from "@/hooks";
import { ChangeEvent, useState } from "react";

const PriceFilter = ({ defMaxPrice, title }: { defMaxPrice: number; title: string }) => {
  const { searchParams } = useNavigations();

  const initialMax = searchParams.get("maxPrice") ?? defMaxPrice;
  const [maxPrice, setMaxPrice] = useState(initialMax);

  const debouncedMax = useDebounced(maxPrice.toString());

  useSearchRouting(maxPrice !== defMaxPrice ? debouncedMax.toString() : null, "maxPrice");

  const initialMin = searchParams.get("minPrice") ?? 0;
  const [minPrice, setMinPrice] = useState(initialMin);

  const debouncedMin = useDebounced(minPrice);

  useSearchRouting(minPrice !== 0 ? debouncedMin.toString() : null, "minPrice");

  const [show, setShow] = useState(false);
  const toggleShow = () => setShow((prev) => !prev);

  const hasFilters = (minPrice !== 0 || maxPrice !== defMaxPrice) && show;

  const onClear = () => {
    setMaxPrice(defMaxPrice);
    setMinPrice(0);
  };

  return (
    <div className=" font-medium mt-5 pb-5 border-b-0 border-gray-400/40">
      <div className="flex items-center justify-between">
        <button onClick={toggleShow} className="font-bold text-start text-lg mb-3 hove:text-purple-500 flex-1">
          {title}
        </button>

        <div className="flex items-center gap-3">
          <button
            className="text-sm border-[1px] border-black/30 px-3 py-1 rounded-md transition-opacity duration-100"
            onClick={onClear}
            type="button"
            style={{
              opacity: hasFilters ? 1 : 0,
              pointerEvents: hasFilters ? "auto" : "none",
            }}
          >
            Clear
          </button>

          <Arrow show={show} />
        </div>
      </div>

      <div
        style={{
          maxHeight: show ? "300px" : "0",
        }}
        className="flex gap-3 items-center overflow-hidden transition-all duration-100"
      >
        <div>
          <label htmlFor="min">Min</label> <br />
          <input
            id="min"
            type="text"
            value={minPrice}
            className="p-3 rounded-lg border-2 border-black/20 w-full outline-none"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setMinPrice(parseInt(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="max">Max</label> <br />
          <input
            id="max"
            type="text"
            value={maxPrice}
            className="p-3 rounded-lg border-2 border-black/20 w-full outline-none"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setMaxPrice(parseInt(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
