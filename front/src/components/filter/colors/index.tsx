"use client";

import { OptionType } from "@/constants/types";
import { useMultipleFilter } from "@/hooks/";

function ColorFilters({
  param,
  title,
  options,
}: {
  param: string;
  title: string;
  options: OptionType[];
}) {
  return useMultipleFilter(param, title, options);
}

export default ColorFilters;
