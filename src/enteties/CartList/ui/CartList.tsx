"use client";
import { useAppSelector } from "@/shared/hooks/storeHooks";
import { useGetProductsQuery } from "@/shared/api/api";
import { Minus, Plus, Trash } from "lucide-react";

const CartList = () => {
  const items = useAppSelector((state) => state.cart.items);
  const { data, error, isLoading } = useGetProductsQuery(
    `?filter={"id":[${items.join(",")}]}`,
  );

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>Not found</div>;
  if (error) return <div>{JSON.stringify(error)}</div>;

  return (
    <div className="cart max-w-[910px]">
      <div className="flex border rounded-2xl border-[#AEC2EA] p-5 gap-10 bg-white z-1 relative">
        <div>Xiaomi</div>
        <div>
          <p>Стоимость корзины</p>
          <span className="font-bold">1 185 000 ₽</span>
        </div>
        <div>
          <button className="text-center bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full">
            Оформить
          </button>
        </div>
      </div>
      <div className="border border-t-0 rounded-xl border-[#AEC2EA] p-5 pt-10 gap-10 -translate-y-[20px]">
        <div className="flex items-center gap-4 p-4 bg-white w-full">
          <img src="/.png" alt="" className="w-20 h-20" />

          <div className="flex flex-col flex-grow">
            <h3 className="text-lg">Смартфон Xiaomi Redmi Note 8 Pro</h3>
            <p className="text-gray-300 text-sm">6/128GB, белый</p>
            <div className="flex items-center mt-2">
              <span className="text-blue-600 border border-blue-600 px-2 py-1 text-xs rounded-lg">
                120 шт.
              </span>
              <span className="text-red-600 bg-red-100 px-2 py-1 text-xs rounded-lg">
                за 12:48:35
              </span>
              <p className="text-sm text-gray-700 mt-1 px-2">
                Куплено: <span className="font-semibold">150 шт.</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center border border-[#AEC2EA] rounded-full px-3 py-1">
              <button onClick={() => {}} className="p-1 text-gray-400">
                <Minus size={16} />
              </button>
              <span className="mx-2 text-lg">{""}</span>
              <button onClick={() => {}} className="p-1 text-gray-400">
                <Plus size={16} />
              </button>
            </div>
            <p className="text-l font-bold">от 350 000 ₽</p>
          </div>

          <button className="text-gray-400 hover:text-gray-700">
            <Trash size={20} />
          </button>
        </div>
      </div>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default CartList;
