"use client";

import { colors } from "@/constants";
import { useMultipleFilter } from "@/hooks/";

function ColorFilters() {
  return useMultipleFilter("colors", "Colors", colors);
}

export default ColorFilters;
