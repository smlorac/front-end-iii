import { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [inputs, setInputs] = useState({ nome: "", casa: "" });

  const [errors, setErrors] = useState([]);

  let arrayErrors = [];

  const submit = (event) => {
    event.preventDefault();
    //console.log(inputs);

    if (inputs.nome.length < 3) {
      arrayErrors.push("O nome deve ter, no mínimo, 3 caracteres");
      setErrors(...errors, arrayErrors);
    }

    if (/\s/.test(inputs.nome)) {
      arrayErrors.push("O nome não pode ter espaços em branco");
      setErrors(...errors, arrayErrors);
    }

    if (inputs.casa.length < 6) {
      arrayErrors.push("A casa deve ter, no mínimo, 6 caracteres");
      setErrors(...errors, arrayErrors);
    }

    //console.log(errors);

    setInputs({ ...inputs, nome: "", casa: "" });
  };

  return (
    <>
      <h1>Cards do Harry Potter</h1>
      <form onSubmit={submit}>
        <label>Nome </label>
        <input
          type="text"
          value={inputs.nome}
          onChange={(e) => {
            setInputs({ ...inputs, nome: e.target.value });
          }}
        />
        <label>Casa de Hogwarts </label>
        <input
          type="text"
          value={inputs.casa}
          onChange={(e) => {
            setInputs({ ...inputs, casa: e.target.value });
          }}
        />
        <input type="submit" />
      </form>
      <div>
        {errors.map((error, index) => <p key={`error-list-${index}`}>{error}</p>)}
      </div>
      <Card nome={inputs.nome} casa={inputs.casa} />
    </>
  );
};

export default App;
