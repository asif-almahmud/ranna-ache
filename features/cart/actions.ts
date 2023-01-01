import type { PayloadAction } from "@reduxjs/toolkit";
import { ICart, ICartItem, ItemId } from "../../types/type";
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
    if (
        state.items.filter((item) => item.id === action.payload.id).length === 0
    ) {
        const addons = action.payload.addons.map((addon) => {
            if (addon.is_default) {
                return { ...addon, is_selected: true };
            } else {
                return { ...addon, is_selected: false };
            }
        });
        state.items.push({ ...action.payload, quantity_selected: 1, addons });
    }
};

const deleteItemFromCart = (
    state: ICart,
    action: PayloadAction<{ id: ItemId }>
) => {
    let id = action.payload.id;

    state.items = state.items.filter((item) => item.id !== id);
};

const increaseCartItem = (
    state: ICart,
    action: PayloadAction<{ id: ItemId }>
) => {
    let id = action.payload.id;

    state.items = state.items.map((item) => {
        if (item.id === id) {
            return { ...item, quantity_selected: item.quantity_selected + 1 };
        } else {
            return item;
        }
    });
};

const decreaseCartItem = (
    state: ICart,
    action: PayloadAction<{ id: ItemId }>
) => {
    let id = action.payload.id;

    state.items = state.items.map((item) => {
        if (item.id === id) {
            return { ...item, quantity_selected: item.quantity_selected - 1 };
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
    action: PayloadAction<{ id: ItemId; addonName: string }>
) => {
    let id = action.payload.id;
    let addonName = action.payload.addonName;

    state.items = state.items.map((item) => {
        if (item.id === id) {
            let addons = item.addons.map((addon) => {
                if (addon.name === addonName) {
                    return { ...addon, is_selected: true };
                } else {
                    return { ...addon, is_selected: false };
                }
            });
            return { ...item, addons };
        } else {
            return item;
        }
    });
};

const handleCalculation = (state: ICart) => {
    state.calculation.price = state.items.reduce((priceSum, item) => {
        let selectedAddon = item.addons.filter((addon) => addon.is_selected)[0];
        return priceSum + selectedAddon.price * item.quantity_selected;
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
