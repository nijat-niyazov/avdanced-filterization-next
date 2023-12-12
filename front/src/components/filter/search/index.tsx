"use client";

import { useDebounced, useNavigations, useSearchRouting } from "@/hooks";
import React, { useRef, useState } from "react";

const Search = ({
  placeholder: passedPlaceholder,
}: {
  placeholder: string;
}) => {
  const { searchParams } = useNavigations();

  const [inputValue, setInputValue] = useState<string>(
    searchParams.get("query") ?? ""
  );

  const debouncedValue = useDebounced(inputValue) as string;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(event.target.value);

  useSearchRouting(debouncedValue, "query");

  // const text = useTypingEffect("Hello World!", 500);

  // const [placeHolders, setPlaceHolders] = useState<string[]>(["Apple","Samsung"]);
  // const [test, setTest] = useState<number>(0);
  // const [textIndex, setInputIndex] = useState<number>(0);
  // const [placeHolderIndex, setPlaceHolderIndex] = useState<number>(0);

  // let placeHolder = "";
  const inputRef = useRef<HTMLInputElement>(null);

  // const currentPlaceHolder = placeHolders[placeHolderIndex];
  // const speed = 250;
  // useEffect(() => {
  //   // const placeHolders = inputRef.current
  //   //   ?.getAttribute("data-placeholder")
  //   //   ?.split(",") as string[];

  //   function typeWriter() {
  //     if (textIndex < currentPlaceHolder.length) {
  //       placeHolder += currentPlaceHolder.charAt(textIndex);
  //       inputRef.current?.setAttribute("placeholder", placeHolder);
  //       setInputIndex((prev) => prev++);
  //       setTimeout(typeWriter, speed);
  //       return
  //     }

  //     if (placeHolderIndex < placeHolders.length - 1) {
  //       console.log("artdi");
  //       setTest(placeHolderIndex);
  //       setPlaceHolderIndex((prev) => prev++);
  //       placeHolder = "";
  //       setInputIndex(0);
  //     } else {
  //       console.log("restart");
  //       setPlaceHolderIndex(0);
  //       placeHolder = "";
  //       setInputIndex(0);
  //     }
  //   }
  //   // typeWriter();
  // }, [test]);

  return (
    <>
      <div className="flex items-center">
        <input
          type="text"
          id="yoxlada"
          ref={inputRef}
          value={inputValue}
          onChange={handleChange}
          placeholder={passedPlaceholder}
          data-placeholder={"Apple, Samsung, Xiaomi, Huawei"}
          className="p-2 outline-none border-b-2 border-gray-200 focus:border-purple-400 flex-1 yoxlada"
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
    </>
  );
};

export default Search;
