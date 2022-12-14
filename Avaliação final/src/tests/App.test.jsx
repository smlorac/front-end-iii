import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

describe("<App/>", () => {
  test("Valida se o tema inicial é o dark", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const tema = screen.getByTestId("app");

    expect(tema).toHaveClass("dark");
  });
});
