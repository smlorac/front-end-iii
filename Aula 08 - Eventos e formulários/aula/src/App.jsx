import { useRef, useState } from "react";

const App = () => {
  //const inputRef = useRef(null);
  //escolhendo os elementos sem usar os selectby

  const [nomes, setNomes] = useState([]);
  
  const [valueInput, setValueInput] = useState("");
  //estados pra guardar oq o usuário digita

  const [errorInput, setErrorInput] = useState("");

  const [isChecked, setIsChecked] = useState(false);
  //padrão é true marcado, false desmarcado

  const handleSubmit = (event) => {
    //o normal de formulário é atualizar a página depois de enviado, podemos usar um evento pra não ocorrer isso
    event.preventDefault();
    //console.log(event)
    //console.log(inputRef)
    //alert(inputRef.current.value);

    if (valueInput.trim()) {

      setNomes([...nomes, valueInput])

      setErrorInput("");
      setValueInput("");
      //alert("formulário ok");
    } else {
      setErrorInput("Digite um nome no campo");
    }
  };

  return (
    <div style={isChecked ? { background: "purple" } : {}}>
      {/* <h1>{valueInput}</h1> */}
      {/* <h1>{isChecked.toString()}</h1> */}
      {/* nao aparece nada pq é true/false e isso nao é texto, as duas exclamacoes fazem isso ou usar toString  */}

    {
      nomes.map((nome) => {
        return <p>{`${nome},`}</p>
      })
    }
      
      <form onSubmit={handleSubmit}>
        {/* <input ref={inputRef}/> */}
        {/* aqui é nao controlado */}
        <input
          value={valueInput}
          onChange={(event) => {
            //console.log(event.target.value)
            setValueInput(event.target.value);
          }}
        />
        {/* aqui é controlado */}
        <label>
          Quer cor?
          <input
            value={isChecked}
            type="checkbox"
            onChange={(event) => {
              setIsChecked(event.target.checked);
            }}
          />
        </label>
        <p>{errorInput}</p>
        <input type="submit" />
      </form>
    </div>
  );
};

export default App;

//Uncontrolled
//Controlled
