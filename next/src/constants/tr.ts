export const makeArray = (array: { label: string; value: string }[]) =>
  array.map(({ label, value }) => ({
    label,
    name: label,
    value: value.toLowerCase(),
  }));

export const trColors = [
  "Siyah",
  "Mavi",
  "Kahverengi",
  "Altın",
  "Gri",
  "Yeşil",
  "Turuncu",
  "Pembe",
  "Mor",
  "Kırmızı",
  "Gümüş",
  "Beyaz",
  "Sarı",
];

export const categories = ["Çantalar", "Ayakkabılar", "Ceketler"];
