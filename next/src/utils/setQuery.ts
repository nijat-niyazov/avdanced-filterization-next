export const setQuery = (key: string, value: string | null, searchParams: any) => {
  const params = new URLSearchParams(searchParams);

  value ? params.set(key, value) : params.delete(key);

  return params.toString();
};
