import type { PayloadAction } from "@reduxjs/toolkit";
import { ICart, ICartItem } from "../../types/type";
import { initialState } from "./cartSlice";

// id: string;
//   name: string;
//   price: number;
//   quantity: number;
//   vat: number;
//   addon: {
//     name: string;
//     price: number;
//   };

const addItemToCart = (state: ICart, action: PayloadAction<ICartItem>) => {
  let newItem = {
    id: action.payload.id,
    name: action.payload.name,
    price: action.payload.price,
    quantity: action.payload.quantity,
    vat: action.payload.vat,
    addon: {
      name: action.payload.name,
      price: action.payload.price,
    },
  };

  state.items.push(newItem);
};

const deleteItemFromCart = (
  state: ICart,
  action: PayloadAction<{ id: string }>
) => {
  let id = action.payload.id;

  state.items = state.items.filter((item) => item.id !== id);
};

const increaseCartItem = (
  state: ICart,
  action: PayloadAction<{ id: string }>
) => {
  let id = action.payload.id;

  state.items = state.items.map((item) => {
    if (item.id === id) {
      return { ...item, quantity: item.quantity + 1 };
    } else {
      return item;
    }
  });
};

const decreaseCartItem = (
  state: ICart,
  action: PayloadAction<{ id: string }>
) => {
  let id = action.payload.id;

  state.items = state.items.map((item) => {
    if (item.id === id) {
      return { ...item, quantity: item.quantity - 1 };
    } else {
      return item;
    }
  });
};

const emptyCart = (
  state: ICart
  // action: PayloadAction<{}>
) => {
  state = initialState;
};

const handleAddon = (
  state: ICart,
  action: PayloadAction<{ id: string; addonName: string; addonPrice: number }>
) => {
  let id = action.payload.id;
  let addonName = action.payload.addonName;
  let addonPrice = action.payload.addonPrice;

  state.items = state.items.map((item) => {
    if (item.id === id) {
      return { ...item, addon: { name: addonName, price: addonPrice } };
    } else {
      return item;
    }
  });
};

const handleCalculation = (state: ICart) => {
  state.calculation.price = state.items.reduce((priceSum, item) => {
    return priceSum + item.addon.price * item.quantity;
  }, 0);
  state.calculation.vat = state.calculation.price * 0.05;
  state.calculation.total = state.calculation.price + state.calculation.vat;
};

export {
  addItemToCart,
  deleteItemFromCart,
  increaseCartItem,
  decreaseCartItem,
  emptyCart,
  handleAddon,
  handleCalculation,
};
