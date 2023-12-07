"use client";

import { Arrow } from "@/components/ui";
import { OptionType } from "@/constants";
import { useNavigations } from "@/hooks";
import { setQuery } from "@/utils/setQuery";
import { ChangeEvent, useState } from "react";

const useMultipleFilter = (
  param: string,
  header: string,
  options: OptionType[]
) => {
  const { router, searchParams, pathname } = useNavigations();

  const optionsOnUrl = searchParams.get(param)?.split(",") ?? [];

  const [filteredOptions, setfilteredOptions] = useState(optionsOnUrl);

  const onColorChange = (color: string, checked: boolean) => {
    let selectedOptions = [...filteredOptions];

    checked
      ? selectedOptions.push(color)
      : (selectedOptions = selectedOptions.filter(
          (selectedColor) => selectedColor !== color
        ));

    const url = setQuery(
      param,
      selectedOptions.length > 0 ? selectedOptions : null,
      searchParams
    );

    router.push(pathname + "?" + url);

    setfilteredOptions(selectedOptions);
  };

  const onClear = () => {
    setfilteredOptions([]);

    const url = setQuery(param, null, searchParams);
    router.push(pathname + "?" + url);
  };

  const [show, setShow] = useState(false);

  const toggleShow = () => setShow((prev) => !prev);

  const hasFilters = filteredOptions.length > 0 && show;

  return (
    <div className=" font-medium mt-5 pb-5 border-b-2 border-gray-400/40">
      <div className="flex items-center justify-between">
        <button
          onClick={toggleShow}
          style={{
            color: show ? "#7C3AED" : "#000",
          }}
          className="font-bold text-start text-lg mb-3 hover:text-purple-500 flex-1"
        >
          {header}
        </button>

        <div className="flex items-center gap-3">
          <button
            className="text-sm border-[1px] border-black/30 px-3 py-1 rounded-md transition-opacity duration-100 dark:bg-white dark:text-black"
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

      <ul
        style={{
          maxHeight: show ? "400px" : "0px",
          overflowY: "scroll",
          transition: "max-height 0.1s ease-in-out",
        }}
      >
        {options.map((field, key) => (
          <li key={key} className="mb-1 flex items-center">
            <label htmlFor={field.name} className="ml-3 order-1">
              {field.label}
            </label>

            <input
              type="checkbox"
              id={field.name}
              name={field.name}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                onColorChange(field.value, e.target.checked)
              }
              checked={filteredOptions.includes(field.value)}
              className="w-4 h-4"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default useMultipleFilter;
