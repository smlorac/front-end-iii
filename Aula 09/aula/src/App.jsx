import { useState } from "react";

const App = () => {
  const [numero, setNumero] = useState(0);

  // const [area, setArea] = useState("");
  //vamos fazer sem precisar criar vários hooks

  const [formData, setFormData] = useState({nome: "", area: ""});

  const aumentar = () => {
    // alert("botão ok");
    setNumero(numero + 10);
  };

  // const [nome, setNome] = useState("");

  const enviar = (event) => {
    event.preventDefault();
    // alert(nome + " é " + area);
    // setNome("");
  };

  return (
    <>
      <h1>Número atual: {numero}</h1>
      <button onClick={aumentar}>+10</button>
      <h1>Formulário</h1>
      <form onSubmit={enviar}>
        <label>Nome </label>
        <input
          type="text"
          value={formData.nome}
          onChange={(event) => {
            //console.log("tive um evento");
            //console.log(event.target.value)
            setFormData({...formData, nome: event.target.value});
          }}
        />
        {/* onchange lida com os eventos daquele input */}
        <select
          onChange={(event) => {
            setFormData({...formData, area: event.target.value});
          }}
        >
          <option value="frontend">Front End</option>
          <option value="backend">Back End</option>
          <option value="qa">QA</option>
        </select>
        <input type="submit" />
      </form>
      {formData.nome ? <h2>{`Olá, ${formData.nome}`}</h2> : null}
      {formData.area ? <h2>Área: {formData.area}</h2> : <span>Área ainda não foi escolhida</span>}
    </>
  );
};

export default App;
