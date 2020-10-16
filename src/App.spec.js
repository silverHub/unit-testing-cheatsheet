import App from "./App";
import { render, fireEvent, screen } from "@testing-library/react";
//import "@testing-library/jest-dom/extend-expect";

//describe("example unit tests for hook based components", () => {

/*
  beforeEach(() => {
    render(<App />);
  });
*/
test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});

test("component rendered first with empty items", () => {
  render(<App />);
  expect(screen.getByText("Select your choice")).toBeInTheDocument();
});

//});
