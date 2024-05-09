import { screen } from "@testing-library/react";
import { Footer } from "./index";
import { render } from "@tests/render";

jest.mock("../Header", () => ({
  NavList: jest.fn(() => <div data-testId="NavList"></div>),
}));

it("displays description", async () => {
  render(<Footer />);
  expect(
    screen.getByText(
      "Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week."
    )
  ).toBeInTheDocument();
});

it("displays copyrights", async () => {
  render(<Footer />);
  expect(
    screen.getByText("Copyright 2024. All Rights Reserved")
  ).toBeInTheDocument();
});

it("displays social icons", async () => {
  render(<Footer />);
  expect(screen.getByAltText("facebook")).toBeInTheDocument();
  expect(screen.getByAltText("twitter")).toBeInTheDocument();
  expect(screen.getByAltText("instagram")).toBeInTheDocument();
});

it("displays nav list", async () => {
  render(<Footer />);
  expect(screen.getByTestId("NavList")).toBeInTheDocument();
});
