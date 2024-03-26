export type Product = {
  name: string;
  tag: string;
  price: number;
  imgSrc: string;
  quantity: number;
};

export type UpdateQuantityProps = {
  quantity: number;
  tag: string;
};

export type ContextType = {
  isCartOpen: boolean;
  toggleCart: (props: "open" | "close") => void;
  addProduct: (payload: Product) => void;
  updateQuantity: (payload: UpdateQuantityProps) => void;
  removeAll: () => void;
  productList: Product[];
};
