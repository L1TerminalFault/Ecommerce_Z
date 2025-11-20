import { create, StoreApi, UseBoundStore } from "zustand";

type Product = {
  _id: string;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
};

export const useProductStore: UseBoundStore<
  StoreApi<{
    currentProduct: Product;
    cart: Product[];
    setCurrentProduct: (value: Product) => void;
    setCart: (value: Product[]) => void;
  }>
> = create((set) => ({
  currentProduct: {
    _id: "",
    title: "",
    price: 0.0,
    image: "",
    description: "",
    category: "",
  },
  cart: [],
  setCurrentProduct: (value: Product): void =>
    set((): { currentProduct: Product } => ({ currentProduct: value })),
  setCart: (value: Product[]): void =>
    set((): { cart: Product[] } => ({ cart: value })),
}));
