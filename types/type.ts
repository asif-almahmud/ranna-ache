export type Cart = {
  cartItems: CartItems;
  totalPrice: number;
};

export type CartItems = ICartItem[];

export interface ICartItem {
  id: string;
  title: string;
  description: string;
  count: number;
  price: number;
}
