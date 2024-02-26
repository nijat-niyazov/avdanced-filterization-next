import { NextRequest, NextResponse } from "next/server";
import items from "./products.json";
const url = "https://jsonplaceholder.typicode.com/todos";

export async function GET(request: NextRequest, response: NextResponse) {
  const { searchParams } = new URL(request.url);
  const params = Object.fromEntries(searchParams.entries());

  try {
    /* -------------------------------- Fetching -------------------------------- */
    const res = await fetch(url);
    await res.json();

    /* ---------------------------------- Items --------------------------------- */
    const data = items;
    const maxPrice = Math.max(...data.map((item) => item.price));

    const filtered = applyFilters(params);

    /* ----------------------------- Artifical delay ---------------------------- */
    await new Promise((resolve) => setTimeout(resolve, 2500));

    return Response.json({ data: filtered, maxPrice }, { status: 200 });
  } catch (error) {
    console.log(error);
    return error;
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

function matchesQuery(query: string, productName: string) {
  return !query || productName.toLowerCase().includes(query.toLowerCase()) ? true : false;
}

function priceRange(price: number, operator: "less" | "greater", value: number) {
  if (!price || (price > 0 && operator === "less") ? price < value : price > value) {
    return false;
  }

  return true;
}

function containColors(colors: string, productColors: string[]) {
  if (!colors) return true;

  const colorsSet = new Set(colors.split(","));
  for (const color of productColors) {
    if (colorsSet.has(color)) {
      return true;
    }
  }

  return false;
}

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
