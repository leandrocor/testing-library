import { render, screen, within } from "@testing-library/react";
import App from "./App";

test('Renderizo h2 con wording "Project COR"', () => {
  render(<App />);

  const queryResult = screen.getByText(/project cor/i);
  expect(queryResult).toBeInTheDocument();
});

test("Renderizo 3 elementos list item", () => {
  render(<App />);

  const queryResult = document.querySelectorAll("li");
  expect(queryResult).toHaveLength(3);
});

test("No tiene que existir un botón", () => {
  render(<App />);

  const queryResult = screen.queryByRole("button");
  expect(queryResult).toBeNull();
});

test("Debe existir un h1", () => {
  render(<App />);

  const queryResult = document.querySelector("h1");
  expect(queryResult).toBeInTheDocument();
});

test("Existe un elemento con testid 'my-element'", () => {
  render(<App />);

  const queryResult = screen.getByTestId("my-element");
  expect(queryResult).toBeInTheDocument();
});

test("Renderizo texto 'Project COR' en el elemento h2", () => {
  render(<App />);
  const paragraph = document.querySelector("h2");

  within(paragraph).getByText(/subtitle/i);
});
