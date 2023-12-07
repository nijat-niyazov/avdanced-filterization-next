"use client";

import { categories } from "@/constants";
import { useMultipleFilter } from "@/hooks";

const Categories = () => {
  return useMultipleFilter("categories", "Categories", categories);
};

export default Categories;
