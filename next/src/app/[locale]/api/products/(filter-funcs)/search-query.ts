export function matchesQuery(query: string, productName: string) {
  return !query || productName.toLowerCase().includes(query.toLowerCase()) ? true : false;
}
