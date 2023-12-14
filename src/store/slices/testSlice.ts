import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type testSliceType = {
  testValue: string;
};

const initialState: testSliceType = {
  testValue: "test",
};

export const testSlice = createSlice({
  name: "testSlice",
  initialState,
  reducers: {
    createTest: (state, action: PayloadAction<testSliceType>) => {
      state.testValue = action.payload.testValue;
    },
  },
});
export const testReducer = testSlice.reducer;
export const { createTest } = testSlice.actions;
