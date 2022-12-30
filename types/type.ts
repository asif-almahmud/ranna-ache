export interface IUser {
  name: string;
  address: string;
  phone: string;
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
