import { screen } from "@testing-library/react";
import { Footer } from "./index";
import { render } from "../../../../tests/render";

it("should render Footer", async () => {
  render(<Footer />);
  const description = screen.getByText(
    "Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week."
  );
  const copyrights = screen.getByText("Copyright 2024. All Rights Reserved");
  expect(description).toBeInTheDocument();
  expect(copyrights).toBeInTheDocument();
});
