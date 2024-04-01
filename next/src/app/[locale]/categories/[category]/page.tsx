const CategoryPage = async ({ params: { category } }: { params: { category: string } }) => {
  // const { data }: { data: ProductType[] } = await getItemsWithFetch({    query: category,  });

  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <h2 className="text-6xl font-extrabold block mb-3">{/* founded {data.length} for query {category} */}</h2>
    </div>
  );
};

export default CategoryPage;
