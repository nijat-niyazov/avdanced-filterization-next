import { NextRequest } from "next/server";
import { containColors, matchesQuery, priceRange } from "./(filter-funcs)";
import items from "./products.json";

const url = "https://jsonplaceholder.typicode.com/todos";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const params = Object.fromEntries(searchParams.entries());

  try {
    const res = await fetch(url);
    const data = await res.json();

    const filtered = applyFilters(params);

    return Response.json({ data: filtered }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}

type Product = {
  name: string;
  color: string[];
  price: number;
  category: string;
  src: string;
  visited: string;
};

/* --------------------------------- Helpers --------------------------------- */

/* -------------------------------- Filtering ------------------------------- */

function applyFilters({ colors, query, minPrice, maxPrice, sort }: any) {
  /* ---------------- Skip products that don't match the filter --------------- */
  const products = items;
  const filteredProducts: Product[] = [];

  for (const product of products) {
    if (!matchesQuery(query, product.name)) continue;
    if (!containColors(colors, product.color)) continue;
    if (!priceRange(product.price, "greater", maxPrice)) continue;
    if (!priceRange(product.price, "less", minPrice)) continue;

    filteredProducts.push(product);
  }

  const sortedProducts = filteredProducts.sort((a, b) => {
    switch (sort) {
      case "priceAsc":
        return a.price - b.price;
      case "priceDesc":
        return b.price - a.price;
      case "lessPopular":
        return +a.visited - +b.visited;
      case "morePopular":
        return +b.visited - +a.visited;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return sortedProducts;
}
