"use client";
import { useCallback } from "react";
import {
  useGetProductImageQuery,
  useGetSingleProductQuery,
} from "@/shared/api/api";
import { useAppDispatch } from "@/shared/hooks/storeHooks";
import { add } from "@/enteties/CartList/model/cartSlice";

export type ProductItemProps = {
  id: string;
};

const ProductItem = ({ id }: ProductItemProps) => {
  const dispatch = useAppDispatch();
  const { data, error, isLoading } = useGetSingleProductQuery(id);
  const { data: image } = useGetProductImageQuery(id);

  const addToCart = useCallback(() => {
    if (data) dispatch(add(data.id.toString()));
  }, [dispatch, data]);

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>Not found</div>;
  if (error) return <div>{JSON.stringify(error)}</div>;

  return (
    <div className="p-5 max-w-[945px]">
      <h2 className="text-xl font-bold">{data.name}</h2>
      <div className="flex items-start gap-5 mt-4">
        <div className="x">
          {image ? (
            <img src={image ? image.image_url : ""} alt={image.image_name} />
          ) : (
            "Image placeholder"
          )}
          <div className="flex gap-3 mt-4">Images</div>
        </div>
        <div className="max-w-sm mx-auto bg-gray-100 p-6 rounded-2xl shadow-md">
          <div className="text-2xl font-semibold">
            17 990₽{" "}
            <span className="text-gray-500 text-base font-normal">за шт.</span>
          </div>
          <div className="mt-4">
            <p className="text-gray-700 font-medium">Размер</p>
            <div className="mt-2">
              <button className="px-4 py-2 border border-blue-500 text-blue-600 rounded-full">
                30см / 650гр.
              </button>
              <button className="px-4 py-2 mt-2 border border-gray-400 text-gray-600 rounded-full">
                40см / 1050гр. +300₽
              </button>
            </div>
          </div>
          <button
            className="mt-6 w-full bg-blue-600 text-white py-3 rounded-full "
            onClick={addToCart}
          >
            В корзину за 17 990₽
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
