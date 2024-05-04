import {
  productList,
  productListTotal,
} from "../../../../../../tests/constants";
import {
  getQuantityUpdatedList,
  getTotal,
  isProductAlreadyAdded,
} from "../utils";

it("getQuantityUpdatedList updates quantity of chosen item", () => {
  const updatedProductList = getQuantityUpdatedList(productList, {
    quantity: 5,
    tag: productList[0].tag,
  });
  expect(updatedProductList[0].quantity).toBe(5);
});

it("getTotal returns total amount", () => {
  expect(getTotal(productList)).toBe(productListTotal);
});

it("isProductAlreadyAdded returns boolean", () => {
  expect(isProductAlreadyAdded(productList[0], productList)).toBe(true);
});
