import { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [inputs, setInputs] = useState({ nome: "", casa: "" });

  const submit = (event) => {
    event.preventDefault();
    console.log(inputs);
    setInputs({...inputs, nome: "", casa: ""});
    let isSubmitted = true;
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
            setInputs({...inputs, nome: e.target.value});
          }}
        />
        <label>Casa de Hogwarts </label>
        <input
          type="text"
          value={inputs.casa}
          onChange={(e) => {
            setInputs({...inputs, casa: e.target.value});
          }}
        />
        <input type="submit" />
      </form>
      <Card nome={inputs.nome} casa={inputs.casa}/>
    </>
  );
};

export default App;
