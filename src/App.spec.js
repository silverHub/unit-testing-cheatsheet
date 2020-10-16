import React from 'react';
import App from "./App";
import { render, fireEvent, screen } from "@testing-library/react";


describe("example unit tests for hook based components", () => {


  beforeEach(() => {
    render(<App />);
  });

test("component rendered first with empty items", () => {
  expect(screen.getByText("Select your choice")).toBeInTheDocument();
  expect(screen.getByText("Selected:")).toBeInTheDocument();
  
});

});
