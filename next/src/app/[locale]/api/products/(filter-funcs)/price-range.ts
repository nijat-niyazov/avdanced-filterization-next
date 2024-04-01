export function priceRange(price: number, operator: "less" | "greater", value: number) {
  if (!price || (price > 0 && operator === "less") ? price < value : price > value) {
    return false;
  }

  return true;
}
