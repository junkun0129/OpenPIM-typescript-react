import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userType } from "../../types/userTypes";

const initialState: userType = {
  id: 1,
  username: "john_doe",
  email: "john@example.com",
  firstName: "John",
  lastName: "Doe",
  role: "user",
};
export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    createUser: (state, action: PayloadAction<userType>) => {
      state = action.payload;
    },
  },
});
export const userReducer = userSlice.reducer;
export const { createUser } = userSlice.actions;
