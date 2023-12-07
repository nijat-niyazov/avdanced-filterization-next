export const setQuery = (
  key: string,
  value: string | string[] | null,
  searchParams: any
) => {
  const params = new URLSearchParams(searchParams);

  if (value) {
    const setTo = Array.isArray(value) ? value.join(",") : value;

    params.set(key, setTo);
  } else {
    params.delete(key);
  }

  return params.toString();
};
