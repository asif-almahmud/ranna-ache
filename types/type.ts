export type User = {
  name: string;
  address: string;
  phone: string;
};

export type Calculation = {
  price: number;
  vat: number;
  total: number;
};

export type Cart = {
  items: CartItems;
  calculation: Calculation;
};

export type CartItems = ICartItem[];

export interface ICartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  vat: number;
  addon: {
    name: string;
    price: number;
  };
}
