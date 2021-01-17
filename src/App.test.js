import { render, screen, within } from "@testing-library/react";
import App from "./App";

/* 
  Queries
  Docu: https://testing-library.com/docs/queries/about
*/

/*
  Métodos de afirmación
  Docu: https://testing-library.com/docs/guide-disappearance/#asserting-elements-are-not-present
  
  - toBeInTheDocument
  - toHaveLength
  - toBeNull
*/

test("Renderizo texto 'Learn React' en anchor tag.", () => {
  render(<App />);

  /* 
    Utilizo una de las expresiones de expresión regular.
    Docu: https://testing-library.com/docs/react-testing-library/cheatsheet#text-match-options
  */
  const queryResult = screen.getByText(/learn react/i);
  expect(queryResult).toBeInTheDocument();
});

test("Renderizo texto 'Project COR' en el elemento con data-testid='app-title'", () => {
  render(<App />);
  const paragraph = screen.getByTestId("app-title");

  /* 
    Utilizo within para buscar dentro de un elemento en particular.
    Docu: https://testing-library.com/docs/dom-testing-library/api-within
  */
  within(paragraph).getByText("Project COR");
});

test("Renderizo tres elementos con data-testid='manzanas'", () => {
  render(<App />);

  const queryResult = screen.queryAllByTestId("manzanas");
  expect(queryResult).toHaveLength(3);
});

test("Renderizo 4 list item", () => {
  render(<App />);

  const queryResult = document.querySelectorAll("li");
  expect(queryResult).toHaveLength(4);
});
