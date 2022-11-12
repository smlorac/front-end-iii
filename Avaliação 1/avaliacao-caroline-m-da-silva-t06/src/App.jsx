import { useState } from "react";
import Card from "./components/Card";
import Erro from "./components/Erro";
import "./App.css";

const App = () => {
  const [inputs, setInputs] = useState({
    nome: "",
    casa: "",
    url: "",
  });

  const [cards, setCards] = useState([
    { nome: "", casa: "", url: "", cor: "" },
  ]);

  const [cardErros, setCardsErros] = useState([
    { errosNome: "", errosCasa: "" },
  ]);

  const reset = () => {
    setInputs({ nome: "", casa: "", url: "" });
    setCardsErros([]);
  };

  console.log(inputs);

  const submit = (event) => {
    event.preventDefault();
    // console.log(inputs);

    // console.log(inputs.nome)
    // console.log(cardErros);

    if (inputs.nome.length < 3) {
      setCardsErros([
        ...cardErros,
        {
          errosNome: "O nome deve ter, no mínimo, 3 caracteres",
        },
      ]);
      return;
    }

    if (inputs.nome[0] == " ") {
      setCardsErros([
        ...cardErros,
        {
          errosNome: "O nome não pode começar com espaço em branco",
        },
      ]);
      return;
    }

    if (inputs.casa.length < 6) {
      setCardsErros([
        ...cardErros,
        {
          errosCasa: "A casa deve ter, no mínimo, 6 caracteres",
        },
      ]);
      return;
    }

    if (!/\d/.test(inputs.casa.split("")[0])) {
      setCardsErros([
        ...cardErros,
        {
          errosCasa:
            "A casa deve começar com um número, conforme o exemplo",
        },
      ]);
      return;
    }

    if (!(/(^|\W)grifinória($|\W)/i).test(inputs.casa) && !(/(^|\W)sonserina($|\W)/i).test(inputs.casa) && !(/(^|\W)corvinal($|\W)/i).test(inputs.casa) && !(/(^|\W)lufa-lufa($|\W)/i).test(inputs.casa)) {
      setCardsErros([
        ...cardErros,
        { errosCasa: "A casa ser uma das 4 citadas no exemplo" },
      ]);
      return;
    }

    // console.log(cardErros);

    //console.log(inputs.casa.startsWith("1"));

    if (inputs.casa.startsWith("1")) {
      setCards([
        ...cards,
        {
          nome: inputs.nome,
          casa: inputs.casa,
          url: inputs.url,
          cor: "maroon",
        },
      ]);
    } else if (inputs.casa.startsWith("2")) {
      setCards([
        ...cards,
        {
          nome: inputs.nome,
          casa: inputs.casa,
          url: inputs.url,
          cor: "darkGreen",
        },
      ]);
    } else if (inputs.casa.startsWith("3")) {
      setCards([
        ...cards,
        {
          nome: inputs.nome,
          casa: inputs.casa,
          url: inputs.url,
          cor: "darkBlue",
        },
      ]);
    } else if (inputs.casa.startsWith("4")) {
      setCards([
        ...cards,
        { nome: inputs.nome, casa: inputs.casa, url: inputs.url, cor: "gold" },
      ]);
    } else {
      setCards([
        ...cards,
        { nome: inputs.nome, casa: inputs.casa, url: inputs.url },
      ]);
    }

    setInputs({ ...inputs, nome: "", casa: "", url: "" });
    setCardsErros([]);
  };

  return (
    <>
      <h1>Formulário de Harry Potter</h1>
      <div id="area">
        <form onSubmit={submit} id="formulario" onReset={reset}>
          <fieldset>
            <legend>Crie cards com seus personagens favoritos de HP</legend>
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
                // console.log(e)
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
            <div id="botoes">
              <input className="btn" type="submit" />
              <input type="reset" className="btn" value="Limpar" />
            </div>
          </fieldset>
        </form>
      </div>
      <div>
        {cardErros.map((cardErro, index) => (
          <Erro erro={cardErro.errosNome} key={`error-name-list-${index}`} />
        ))}
        {cardErros.map((cardErro, index) => (
          <Erro erro={cardErro.errosCasa} key={`error-house-list-${index}`} />
        ))}
      </div>
      <div className="row">
        {cards
          .filter((card) => card.nome != "")
          .map((card, index) => (
            <Card
              nome={card.nome}
              casa={card.casa.slice(2)}
              key={`card-list-${index}`}
              url={card.url}
              cor={card.cor}
            />
          ))}
      </div>
    </>
  );
};

export default App;
