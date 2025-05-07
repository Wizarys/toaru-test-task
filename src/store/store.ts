import { configureStore } from "@reduxjs/toolkit";
import testReducer from "./slices/testSlice";
import cartReducer from "../enteties/CartList/model/cartSlice";
import { shopApi } from "../shared/api/api";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [shopApi.reducerPath]: shopApi.reducer,
      cart: cartReducer,
      test: testReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(shopApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
