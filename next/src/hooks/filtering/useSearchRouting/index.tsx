"use client";

import { setQuery } from "@/utils/setQuery";
import { useEffect } from "react";
import { useNavigations } from "../..";

const useSearchRouting = (value: string | null, param: string) => {
  const { router, searchParams, pathname } = useNavigations();

  useEffect(() => {
    const url = setQuery(param, value, searchParams);
    router.push(pathname + "?" + url);
  }, [value, param]);
};

export default useSearchRouting;
