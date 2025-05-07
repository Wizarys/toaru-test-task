import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/store/store";
import { getLocalStore } from "next-persist";

interface CartState {
  items: string[];
}

const initialState: CartState = {
  items: [],
};

const persistedState = getLocalStore("cart", initialState);

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` выводит тип state из `initialState`
  initialState: persistedState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.items.push(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart.items;

export default cartSlice.reducer;
