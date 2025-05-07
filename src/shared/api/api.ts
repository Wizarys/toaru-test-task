import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  Product,
  ProductImage,
  Variation,
  Category,
} from "../../enteties/ProductCard/ui/ProductCard";

const API_BASE = "*Тут api эндпоинт который меня попросили удалить*";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE }),
  endpoints: (builder) => ({
    getSingleProduct: builder.query<Product, string>({
      query: (query) => `Products/${query}`,
    }),
    getProducts: builder.query<Array<Product>, string>({
      query: (query) => `Products/${query}`,
    }),
    getProductImage: builder.query<ProductImage, string>({
      query: (query) => `ProductImages/${query}`,
    }),
    getVariations: builder.query<Array<Variation>, string>({
      query: (query) => `ProductVariations/${query}`,
    }),
    getCategories: builder.query<Array<Category>, string>({
      query: (query) => `Categories/${query}`,
    }),
  }),
});

// Хуки генерируются на основе имен эндпоинтов
export const {
  useGetSingleProductQuery,
  useGetProductsQuery,
  useGetProductImageQuery,
  useGetVariationsQuery,
  useGetCategoriesQuery,
} = shopApi;
