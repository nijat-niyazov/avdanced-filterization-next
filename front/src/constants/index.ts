const makeArray = (array: string[]) =>
  array.map((item) => ({ label: item, name: item, value: item }));

export const colors = makeArray([
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
]);

export const categories = makeArray(["Bag", "Shoes", "Jackets"]);

export type ProductType = {
  name: string;
  color: string[];
  price: number;
  category: string;
  src: string;
};

export type OptionType = {
  name: string;
  label: string;
  value: string;
};
