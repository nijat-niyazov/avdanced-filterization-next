import { fetchItems } from "@/services/api";
import { ProductType } from "@/utils/types";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

type Response = { data: ProductType[]; maxPrice: number };

const useGetData = (key: string, options?: any): UseQueryResult<Response> => {
  const [searchParams] = useSearchParams();
  const fetcher = () => fetchItems(searchParams.toString());

  return useQuery({
    queryKey: [key, searchParams.toString()],
    queryFn: fetcher,
    ...options,
    staleTime: 1000 * 60 * 5,
  });
};

export default useGetData;
