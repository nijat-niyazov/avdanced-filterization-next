import { NextRequest } from "next/server";
import items from "./products.json";
const url = "https://jsonplaceholder.typicode.com/todos";

export async function GET(request: NextRequest, { params: { slug } }: { params: { slug: string } }) {
  const id = request.url.split("/").pop() || slug;

  try {
    /* -------------------------------- Fetching -------------------------------- */
    const res = await fetch(url);
    await res.json();

    /* ---------------------------------- Items --------------------------------- */
    const data = items;
    const matchedProduct = data.find(({ id }) => id === slug);

    /* ----------------------------- Artifical delay ---------------------------- */
    await new Promise((resolve) => setTimeout(resolve, 2500));

    const response = !matchedProduct ? { status: 404, message: "Didn't found for this id" } : { status: 200, data: matchedProduct };
    return Response.json(response);
  } catch (error) {
    console.log(error);
    return error;
  }
}
