import React from 'react';
import ChooserTimeout from "./ChooserTimeout";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";


describe("example unit tests for hook based components", () => {


  beforeEach(() => {
    render(<ChooserTimeout />);
  });

test("component rendered first with empty items", async () => {
  expect(screen.getByText("Selected:")).toBeInTheDocument();
  expect(screen.getByTestId("items")).toBeEmptyDOMElement();

  const el = await screen.findByText(/strawberry/i);
  
  expect(el).toBeInTheDocument();
  expect(screen.getByText("apple")).toBeInTheDocument();

});

});
