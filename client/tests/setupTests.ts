// import React from "react";
import "@testing-library/jest-dom";

// const mockCreateElement = React.createElement;

// jest.mock('styled-components', () => {
//   const styledMock = jest.fn();
//   styledMock.attrs = () => jest.fn();

//   const styled = () => styledMock;

//   const mockDiv = jest.fn((props) => mockCreateElement('div', props, props.children));
//   styled.div = () => mockDiv;

//   return {
//     __esModule: true,
//     default: styled,
//   };
// });

// jest.mock("styled-components", () => {
//   const mock = () => jest.fn(() => ({}));
//   mock.button = jest.fn((props) =>
//     mockCreateElement("button", props, props.children)
//   );
//   mock.div = () =>
//     jest.fn((props) => mockCreateElement("div", props, props.children));
//   mock.li = () =>
//     jest.fn((props) => mockCreateElement("li", props, props.children));
//   mock.a = () =>
//     jest.fn((props) => mockCreateElement("a", props, props.children));
//   mock.section = () =>
//     jest.fn((props) => mockCreateElement("section", props, props.children));
//   mock.ul = () =>
//     jest.fn((props) => mockCreateElement("ul", props, props.children));
//   mock.nav = () =>
//     jest.fn((props) => mockCreateElement("nav", props, props.children));
//   mock.header = () =>
//     jest.fn((props) => mockCreateElement("header", props, props.children));
//   return {
//     __esModule: true,
//     styled: mock,
//     css: jest.fn(),
//     createGlobalStyle: jest.fn(),
//   };
// });
