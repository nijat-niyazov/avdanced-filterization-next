const mainURL = "http://localhost:3001";

const fetchItemsWithFetch = async (endPoint: string, params: { [key: string]: string }, token?: string | undefined) => {
  try {
    const url = new URL(endPoint, mainURL);

    console.log({ params });

    for (const [key, value] of Object.entries(params)) {
      url.searchParams.append(key, value);
    }

    console.log("url", url.toString());

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

export const getItemsWithFetch = async (params: { [key: string]: string }, token?: string | undefined) =>
  fetchItemsWithFetch("/items", params, token);

export const getTranslationMessagesWithFetch = async (params: { [key: string]: string }) => fetchItemsWithFetch("/translation", params);
