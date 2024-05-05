export const getProductGallery = jest.fn(() =>
  Promise.resolve({
    img: { micro: "" },
    img2: { micro: "" },
    img3: { micro: "" },
  })
);
