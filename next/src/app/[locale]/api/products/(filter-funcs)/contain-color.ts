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

export default containColors;
