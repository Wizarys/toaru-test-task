import {
  useGetProductImageQuery,
  useGetVariationsQuery,
} from "@/shared/api/api";

export type Product = {
  category_id: number;
  description: string;
  id: number;
  name: string;
};

export type ProductImage = {
  id: number;
  image_name: string;
  image_url: string;
  product_id: number;
};

export type Variation = {
  id: number;
  price: number;
  product_id: number;
  stock: number;
};

export type Category = {
  id: number;
  name: string;
  parent_id: number;
};

const ProductCard: React.FC<Product> = ({ name, id }) => {
  const { data } = useGetProductImageQuery(id.toString());
  const { data: variations = [] } = useGetVariationsQuery(
    `?filter={"product_id":${id}}`,
  );

  const priceFrom = Math.min(...variations.map((x) => x.price));

  return (
    <div className="max-w-80 bg-white rounded-lg border border-gray-200 shadow-md">
      <div className="p-4">
        <div>
          <img
            className="rounded-t-lg"
            src={data ? data.image_url : "no-image"}
            alt="Изображение товара"
          />
          <div className="flex space-x-2 mb-2">
            <span className="bg-blue-500 text-white text-sm px-2 py-1 rounded">
              Игрушка
            </span>
            <span className="bg-green-500 text-white text-sm px-2 py-1 rounded">
              Мартышка
            </span>
          </div>
        </div>
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-600">
          от <span className="text-xl font-bold">{priceFrom} ₽</span>
        </p>
        <p className="text-gray-400 line-through">200 ₽</p>
        <p className="text-red-500 font-semibold">-50%</p>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Добавить в корзину
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
