import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import App from "./App";

beforeAll(() => {
  window.scrollTo = jest.fn();
});

test("renders Project Brahman homepage", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(
    screen.getByRole("heading", { name: /^project brahman$/i, level: 1 })
  ).toBeInTheDocument();
});
