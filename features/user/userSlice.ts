import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "types/type";

export const initialState: IUser = {
    name: null,
    address: null,
    email: null,
    phone: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        createUser: (state: IUser, action: PayloadAction<IUser>) => {
            return action.payload;
        },
    },
});

export const { createUser } = userSlice.actions;
export default userSlice.reducer;
