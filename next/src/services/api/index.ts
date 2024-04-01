import { mainURL } from "@/constants/urls";

function generatUrl(main: string, endPoint: string, params: { [key: string]: string }) {
  const queryString = new URLSearchParams(params).toString();

  return `${main}/${endPoint}?${queryString}`;
}

const fetchData = async (locale: "en" | "tr", endPoint: string, params: { [key: string]: string }, token?: string | undefined) => {
  const main = `${mainURL}/${locale}/api`;
  const fullURL = generatUrl(main, endPoint, params);

  const headers: { [key: string]: string } = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers.Authorization = token;
  }

  const res = await fetch(fullURL, {
    headers,
    method: "GET",
    next: { tags: ["next"] },
    cache: "no-cache",
  });

  const data = await res.json();
  return data;
};

export const getAllItems = (locale: "tr" | "en", params: { [key: string]: string }) => fetchData(locale, "products", params);

export const getOneItem = (locale: "tr" | "en", slug: string) => fetchData(locale, `products/${slug}`, {});

export const getTranslationMessagesWithFetch = (locale: "tr" | "en") => fetchData(locale, "translation", {});
