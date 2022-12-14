import mockAxios from "jest-mock-axios";

import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import DetailCard from "../components/DetailCard";
import AuthProvider from "../providers/AuthContext";

afterEach(() => {
  mockAxios.reset();
});

describe("<DetailCard/>", () => {
  test("Valida se o CSS do tema dark na div está correto", () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <DetailCard />
        </AuthProvider>
      </BrowserRouter>
    );

    const tema = screen.getByTestId("detailCardDiv");

    expect(tema).toHaveClass("dark");
    expect(tema).toHaveStyle({ backgroundColor: 31313196 });
  });

  test("Valida se o CSS do tema dark no button está correto", () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <DetailCard />
        </AuthProvider>
      </BrowserRouter>
    );

    const tema = screen.getByTestId("detailCardButton");

    expect(tema).toHaveClass("btn-dark");
    expect(tema).toHaveStyle({ backgroundColor: 31313196 });
  });
});
