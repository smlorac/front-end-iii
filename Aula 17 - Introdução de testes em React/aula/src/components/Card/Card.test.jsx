import { render, screen } from "@testing-library/react";
import Card from ".";

describe("<Card/>", () => {
  test("Verificar se Card está sendo renderizado sem passagem de props", () => {
    render(<Card />);
    //screen.debug();
    //para verificar como está sendo renderizado o componente

    const nome = screen.getByText("Nome: -");
    const profissao = screen.getByText("Profissão: -");

    expect(nome).toBeInTheDocument();
    expect(profissao).toBeInTheDocument();
  });

  test("Verificar se Card está sendo renderizado com passagem de props", () => {
    const user = {
      nome: "Carol",
      profissao: "bela",
    };

    render(<Card {...user} />);

    const nome = screen.getByText(`Nome: ${user.nome}`);
    expect(nome).toBeInTheDocument();

    const profissao = screen.getByText(`Profissão: ${user.profissao}`);
    expect(profissao).toBeInTheDocument();
  });
});
