export const productList = [
  {
    name: "nameTest",
    tag: "tagTest",
    price: 120,
    imgSrc: "imgSrcTest",
    quantity: 2,
  },
  {
    name: "nameTest2",
    tag: "tagTest2",
    price: 53,
    imgSrc: "imgSrcTest2",
    quantity: 1,
  },
];

export const toggleCart = jest.fn();
export const addProduct = jest.fn();
export const updateQuantity = jest.fn();
export const removeAll = jest.fn();

export const productListTotal = 293;
