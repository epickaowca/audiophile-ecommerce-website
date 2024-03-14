export type Product = {
  productName: string;
  productTag: string;
  price: number;
  imgSrc: string;
  quantity: number;
};

export type UpdateQuantityProps = {
  quantity: number;
  productTag: string;
};

export type ContextType = {
  isCartOpen: boolean;
  toggleCart: (props: "open" | "close") => void;
  addProduct: (payload: Product) => void;
  updateQuantity: (payload: UpdateQuantityProps) => void;
  productList: Product[];
};
