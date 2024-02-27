import { mainURL } from "@/utils/constants";

async function fetchData(endpoint: string, paramsString: string, token?: string | undefined) {
  const fullURL = `${mainURL}/${endpoint}?${paramsString}`;

  const headers: { [key: string]: string } = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers.Authorization = token;
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  try {
    const res = await fetch(fullURL);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export const fetchItems = (paramsString: string, token?: string) => fetchData("items", paramsString, token);
