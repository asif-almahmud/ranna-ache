import type { PayloadAction } from "@reduxjs/toolkit";
import { Cart } from "../../types/type";

const addItemToCart = (
  state: Cart,
  action: PayloadAction<{
    id: string;
    title: string;
    description: string;
    count: number;
    price: number;
  }>
) => {
  let newItem = {
    id: action.payload.id,
    title: action.payload.title,
    description: action.payload.description,
    count: action.payload.count,
    price: action.payload.price,
  };

  state.cartItems.push(newItem);
};

const deleteItemFromCart = (
  state: Cart,
  action: PayloadAction<{ itemId: string }>
) => {
  let id = action.payload.itemId;

  state.cartItems = state.cartItems.filter((item) => item.id !== id);
};

const increaseCartItem = (
  state: Cart,
  action: PayloadAction<{ id: string }>
) => {
  let id = action.payload.id;

  state.cartItems = state.cartItems.map((item) => {
    if (item.id === id) {
      return { ...item, count: item.count + 1 };
    } else {
      return item;
    }
  });
};

const decreaseCartItem = (
  state: Cart,
  action: PayloadAction<{ id: string }>
) => {
  let id = action.payload.id;

  state.cartItems = state.cartItems.map((item) => {
    if (item.id === id) {
      return { ...item, count: item.count - 1 };
    } else {
      return item;
    }
  });
};

const emptyCart = (
  state: Cart
  // action: PayloadAction<{}>
) => {
  state = { cartItems: [], totalPrice: 0 };
};

export {
  addItemToCart,
  deleteItemFromCart,
  increaseCartItem,
  decreaseCartItem,
  emptyCart,
};
