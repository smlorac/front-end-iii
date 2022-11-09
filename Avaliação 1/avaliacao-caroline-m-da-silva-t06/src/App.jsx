import { useState } from "react";
import Card from "./components/Card";
import "./App.css";

const App = () => {
  const [inputs, setInputs] = useState({ nome: "", casa: "", url: "" });

  const [errors, setErrors] = useState([]);

  const [cards, setCards] = useState([{ nome: "", casa: "", url: "" }]);

  let arrayErrors = [];

  const submit = (event) => {
    event.preventDefault();
    // console.log(inputs);

    // console.log(inputs.nome)

    if (inputs.nome.length < 3) {
      arrayErrors.push("O nome deve ter, no mínimo, 3 caracteres");
      setErrors(...errors, arrayErrors);
      return;
    }

    if (inputs.nome[0] == " ") {
      arrayErrors.push("O nome não pode começar com espaço em branco");
      setErrors(...errors, arrayErrors);
      return;
    }

    if (inputs.casa.length < 6) {
      arrayErrors.push("A casa deve ter, no mínimo, 6 caracteres");
      setErrors(...errors, arrayErrors);
      return;
    }

    if (!/\d/.test(inputs.casa)) {
      arrayErrors.push("A casa deve conter um número");
      setErrors(...errors, arrayErrors);
      return;
    }
    //console.log(errors);

    setCards([
      ...cards,
      { nome: inputs.nome, casa: inputs.casa, url: inputs.url },
    ]);

    setInputs({ ...inputs, nome: "", casa: "", url: "" });
    setErrors([]);
  };

  return (
    <>
      <h1>Formulário de Harry Potter</h1>
      <div id="area">
        <form onSubmit={submit} id="formulario">
          <fieldset>
            <legend>Liste seus personagens favoritos de HP</legend>
            <label>Nome do personagem </label>
            <input
              className="nome"
              type="text"
              value={inputs.nome}
              onChange={(e) => {
                setInputs({ ...inputs, nome: e.target.value });
              }}
            />
            <label>
              Casa de Hogwarts (1 Grifinória, 2 Sonserina, 3 Corvinal, 4
              Lufa-Lufa)
            </label>
            <input
              className="casa"
              type="text"
              value={inputs.casa}
              onChange={(e) => {
                setInputs({ ...inputs, casa: e.target.value });
              }}
            />
            <label>URL da imagem do personagem </label>
            <input
              type="url"
              className="url"
              value={inputs.url}
              onChange={(e) => {
                setInputs({ ...inputs, url: e.target.value });
              }}
            />
            <input className="btn-submit" type="submit" />
          </fieldset>
        </form>
      </div>
      <div>
        {errors.map((error, index) => (
          <p id="erros" key={`error-list-${index}`}>
            {error}
          </p>
        ))}
      </div>
      <div className="row">
        <div className="card">
          {cards.map((card, index) => (
            <Card
              nome={card.nome}
              casa={card.casa.slice(2)}
              key={`card-list-${index}`}
              url={card.url}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
