import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
//simula clique do usuário
import Increment from ".";

describe("<Increment />", () => {
  test("Verificar se valor inicial = 0", () => {
    render(<Increment />);

    expect(
      screen.getByRole("heading", { level: 1, name: 0 })
    ).toBeInTheDocument();
  });

  test("Verificar se ao clicar o valor altera para 1", () => {
    render(<Increment />);

    // const event = userEvent.setup();

    const button = screen.getByRole("button");

    userEvent.click(button);

    expect(screen.getByText("1")).toBeInTheDocument();
  });
});
