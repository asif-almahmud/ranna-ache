import { createSlice } from "@reduxjs/toolkit";
import { Cart } from "../types/type";
import {
  addItemToCart,
  decreaseCartItem,
  deleteItemFromCart,
  emptyCart,
  increaseCartItem,
} from "./actions";

const initialState: Cart = { cartItems: [], totalPrice: 0 };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: addItemToCart,
    deleteItem: deleteItemFromCart,
    increaseItem: increaseCartItem,
    decreaseItem: decreaseCartItem,
    empty: emptyCart,
  },
});

export const { addItem, deleteItem, increaseItem, decreaseItem, empty } =
  cartSlice.actions;
export default cartSlice.reducer;
