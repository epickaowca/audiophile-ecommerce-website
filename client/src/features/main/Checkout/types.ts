export type FormInput = {
  name: string;
  email: string;
  address: string;
  zip: string;
  city: string;
  country: string;
  phoneNumber: string;
  paymentMethod: "e-money" | "cash";
  "e-MoneyNumber": string;
  "e-MoneyPIN": string;
};
