import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface TestState {
  value: number;
}

const initialState: TestState = {
  value: 0,
};

export const testSlice = createSlice({
  name: "counter",
  // `createSlice` выводит тип state из `initialState`
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = testSlice.actions;

export const selectCount = (state: RootState) => state.test.value;

export default testSlice.reducer;
