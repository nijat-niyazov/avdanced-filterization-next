const FilterInfo = ({
  totalItems,
  itemCounts,
}: {
  totalItems: number;
  itemCounts: any;
}) => {
  return (
    <ul className="flex flex-col gap-2 font-medium mt-5 pb-5 border-b-2 border-gray-400/40">
      <li className="flex opacity-50  text-base justify-between">
        <span>Filters</span>
        <span>{totalItems} Products</span>
      </li>
      <li className="flex  justify-between">
        <span>Bags</span>
        <span>{itemCounts["bags"] ?? 0}</span>
      </li>
      <li className="flex  justify-between">
        <span>Shoes</span>
        <span>{itemCounts["shoes"] ?? 0}</span>
      </li>
      <li className="flex  justify-between">
        <span>Jackets</span>
        <span>{itemCounts["jackets"] ?? 0}</span>
      </li>
    </ul>
  );
};

export default FilterInfo;
