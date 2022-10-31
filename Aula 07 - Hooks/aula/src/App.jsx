import { useState } from "react";

const App = () => {

  const [numero, setNumero] = useState(0);
  //variavel que vc vai mudar e a funcao que vai atualizar ela (esquerda)
  //valor inicial da variavel 
  //é uma funcao assincrona

  //let numero = 0;

  const handleButton = () => {
    //alert("ok");
    // numero++;
    // console.log(numero)
    // setNumero(numero + 1);
    // setValores([...valores, numero + 1])
    // setValores((val) => [...val, 1]);
    setValores([...valores, 1]);
  }

  const [nome, setNome] = useState("Carol");

  const handleButton2 = () => {
    setNome("Caroline");
  }

  //const [valores, setValores] = useState([10, 20, 30, 40]);
  const [valores, setValores] = useState([]);
  
  return (
    <>
    <h1>{numero}</h1>
    {/* sem hook ele não renderiza as atualizações */}
    <button onClick={handleButton}>Me aperte</button>
    <button onClick={handleButton2}>Nâo me aperte</button>
    <h1>Meu nome é {nome}</h1>
    {
      valores.map((valor) => {
        return <h2>{valor}</h2>
      })
    }
    </>
  )
}

export default App;