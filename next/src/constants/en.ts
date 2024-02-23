export const makeArray = (array: { label: string; value: string }[]) =>
  array.map(({ label, value }) => ({
    label,
    name: label,
    value: value.toLowerCase(),
  }));

export const colors = [
  "Black",
  "Blue",
  "Brown",
  "Gold",
  "Gray",
  "Green",
  "Orange",
  "Pink",
  "Purple",
  "Red",
  "Silver",
  "White",
  "Yellow",
];

export const categories = ["Bag", "Shoes", "Jackets"];
