import { screen, waitFor } from "@testing-library/react";
import { render } from "@tests/render";
import { ProductGallery } from "./index";
import { getProductGallery } from "./services/gallery";

const mockedGetProductGallery = getProductGallery as jest.Mock<any>;

jest.mock("./components/ImgLarge", () => ({
  ImgLarge: jest.fn(() => <div data-testId="ImgLarge"></div>),
}));

jest.mock("./components/ImgSmall", () => ({
  ImgSmall: jest.fn(() => <div data-testId="ImgSmall"></div>),
}));

jest.mock("./services/gallery");

it("displays image components", async () => {
  render(<ProductGallery />);
  await waitFor(async () => {
    expect(screen.getByTestId("ImgSmall")).toBeInTheDocument();
    expect(screen.getByTestId("ImgLarge")).toBeInTheDocument();
  });
});

it("displays Error page", async () => {
  mockedGetProductGallery.mockRejectedValue({});
  render(<ProductGallery />);
  await waitFor(async () => {
    expect(screen.getByText("error loading product")).toBeInTheDocument();
  });
});
