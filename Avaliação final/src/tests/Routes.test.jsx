import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Routes from "../Routes";

describe("<Routes/>", () => {
  test("Valida se o tema inicial é o dark", () => {
    render(
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    );

    const tema = screen.getByTestId("routes");

    expect(tema).toHaveClass("dark");
  });
});
