export interface IUser {
    name: string | null;
    address: string | null;
    // email: string | null;
    phone: string | null;
}

export interface ICalculation {
    price: number;
    vat: number;
    total: number;
}

export interface ICart {
    items: CartItems;
    calculation: ICalculation;
}

export type CartItems = ICartItem[];

export interface IAddon {
    name: string;
    price: number;
    is_default: boolean;
    is_selected: boolean;
}

export type Addons = IAddon[];

export type ItemId = string | number;

export interface ICartItem {
    id: ItemId;
    name: string;
    price: number;
    quantity_available: number;
    quantity_selected: number;
    image: string;
    vat: number;
    addons: Addons;
}

export interface IItemForPayload {
    id: ItemId;
    name: string;
    price: number;
    quantity: number;
    vat: number;
    addon: {
        name: string;
        price: number;
    };
}

export interface IPayload {
    customer: {
        name: string | null;
        address: string | null;
        phone: string | null;
    };
    calculation: {
        price: number;
        vat: number;
        total: number;
    };
    items: IItemForPayload[];
}
