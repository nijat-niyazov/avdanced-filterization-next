const mainURL = "http://localhost:3001";

const fetchItemsWithFetch = async (
  endPoint: string,
  params: { [key: string]: string | string[] },
  token?: string | undefined
) => {
  try {
    const url = new URL(endPoint, mainURL);

    const keys = params && Object.keys(params);

    keys &&
      keys.length > 0 &&
      keys.forEach((key) => {
        const value = params[key];

        url.searchParams.append(
          key,
          Array.isArray(value) ? value.join(",") : value
        );
      });

    const headers: { [key: string]: string } = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers.Authorization = token;
    }

    const res = await fetch(url.toString(), {
      headers,
      method: "GET",
      next: {
        tags: ["next"],
      },
      cache: "no-cache",
    });

    // console.log(res.url);

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getItemsWithFetch = async (
  params: { [key: string]: string | string[] },
  token?: string | undefined
) => fetchItemsWithFetch("/items", params, token);

export const getTranslationMessagesWithFetch = async (params: {
  [key: string]: string | string[];
}) => fetchItemsWithFetch("/translation", params);
