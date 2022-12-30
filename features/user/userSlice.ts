import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "types/type";

// name: string;
//   address: string;
//   phone: string;

export const initialState: IUser = {
  name: "",
  address: "",
  phone: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state: IUser, action: PayloadAction<IUser>) => {
      let user = {
        name: action.payload.name,
        address: action.payload.address,
        phone: action.payload.phone,
      };
      state = user;
    },
  },
});

export const { createUser } = userSlice.actions;
export default userSlice.reducer;
