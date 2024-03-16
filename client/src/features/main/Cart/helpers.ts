export const returnVat = (price: number) => {
  return Math.ceil(price * 0.23);
};
