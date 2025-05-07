"use client";
import { useGetProductsQuery } from "@/shared/api/api";
import ProductCard from "@/enteties/ProductCard/ui/ProductCard";

interface Props {
  children?: React.ReactNode;
}

const ProductsList: React.FC<Props> = () => {
  const { data, error, isLoading } = useGetProductsQuery("");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{JSON.stringify(error)}</div>;

  return (
    <div className="grid grid-cols-4 gap-4">
      {data
        ? data.map((product) => <ProductCard key={product.id} {...product} />)
        : null}
    </div>
  );
};

export default ProductsList;
