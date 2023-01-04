import { createSlice } from "@reduxjs/toolkit";
import { ICart } from "types/type";
import {
    addItemToCart,
    decreaseCartItem,
    deleteItemFromCart,
    emptyCart as emptyCartItems,
    handleAddon,
    handleCalculation,
    increaseCartItem,
    setInitialCartState,
} from "./actions";

export const initialState: ICart = {
    items: [],
    calculation: { price: 0, vat: 0, total: 0 },
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: addItemToCart,
        deleteItem: deleteItemFromCart,
        increaseItem: increaseCartItem,
        decreaseItem: decreaseCartItem,
        emptyCart: emptyCartItems,
        updateAddon: handleAddon,
        updateCalculation: handleCalculation,
        setInitialCart: setInitialCartState,
    },
});

export const {
    addItem,
    deleteItem,
    increaseItem,
    decreaseItem,
    emptyCart,
    updateAddon,
    updateCalculation,
    setInitialCart,
} = cartSlice.actions;
export default cartSlice.reducer;
