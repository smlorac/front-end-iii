//poderiamos ter colocado .test.js tamém
import { render, screen } from "@testing-library/react";
import App from "./App";

//poderia usar it() também
//descrição do teste e o segundo é a função que executa o teste
test("Verificar se o App.js está renderizando corretamente", () => {
    render(<App/>);

    const text = screen.getByText(/hello world/i);
    //usando regex, mas poderia ser também Hello World identico ao texto
    const tipo = screen.getByRole("heading", { name: "Hello World"});
    //testando tipo

    expect(text).toBeInTheDocument();
    expect(tipo).toBeInTheDocument();
});
