"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const useNavigations = () => {
  const router = useRouter();
  const searchParams = useSearchParams()!;
  const pathname = usePathname();

  return { router, searchParams, pathname };
};

export default useNavigations;
