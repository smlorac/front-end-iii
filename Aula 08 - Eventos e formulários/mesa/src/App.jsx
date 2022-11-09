import { useState } from "react";

const App = () => {

  const [pessoas, setPessoas] = useState([]);

  const [nomes, setNomes] = useState("");
  const [idades, setIdades] = useState("");
  const [personagens, setPersonagens] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setPessoas([...pessoas, nomes, idades, personagens])
    setNomes("")
    setIdades("")
    setPersonagens("")

    console.log(pessoas);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Nome completo</label>
        <input
          type="text"
          name="nomeCompleto"
          id="nomeCompleto"
          value={nomes}
          onChange={(event) => setNomes(event.target.value)}
        />
        <label>Idade</label>
        <input
          type="text"
          name="idade"
          id="idade"
          value={idades}
          onChange={(event) => setIdades(event.target.value)}
        />
        <label>Personagem favorito do Naruto</label>
        <input
          type="text"
          name="naruto"
          id="naruto"
          value={personagens}
          onChange={(event) => setPersonagens(event.target.value)}
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default App;
