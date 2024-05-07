import { getVat, modifiers, priceWithComma } from "../index";

//getVat
it("getVat should return correct value", () => {
  expect(getVat(100)).toBe(23);
});

//modifiers
it("modifiers should correctly add modifier class", () => {
  expect(modifiers({ baseClass: "linkItem", modifier: true && "red" })).toBe(
    "linkItem linkItem--red"
  );
});

it("modifiers should correctly add array of modifiers", () => {
  expect(
    modifiers({ baseClass: "linkItem", modifier: true && ["red", "underline"] })
  ).toBe("linkItem linkItem--red linkItem--underline");
});

it("modifiers shouldn't add class if condition is false", () => {
  expect(modifiers({ baseClass: "linkItem", modifier: false && "red" })).toBe(
    "linkItem"
  );
});

//priceWithComma
it("priceWithComma should correctly format price", () => {
  expect(priceWithComma(536432.43)).toBe("536,432.43");
});
