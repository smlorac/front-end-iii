import { useState, useLayoutEffect, useEffect } from "react";

import Box from "./components/Box";

const App = () => {

  const [count, setCount] = useState(0);
  const [visibleBox, setVisibleBox] = useState(true);

  // setCount(count+1);
  //aqui é um loop infinito, fica renderizando pra sempre 
  // ciclo de vida: inicialização -> montagem -> atualização -> desmontagem 

  useLayoutEffect(() => {console.log("executei a montagem após mudanças no DOM")}, []);
  //funcao e um array de dependências
  console.log("executei a inicialização");

  //o mais comum, só depoid do componente renderizar aparece
  useEffect(() => {
    setCount(count+1);
    console.log("executei após a montagem do componente")}, []);

    useEffect(() => {
      () => () => console.log("teste do array do useeffect");
  }, [visibleBox]);
  //sem a matriz ele ocorreria sempre que tivesse qlq alteração

  return (
    <>
    {console.log("executei a inicialização dentro do componente")}
    {visibleBox ? <Box/> : null}
    <button onClick={() => {setVisibleBox(!visibleBox)}}>Handle box</button>
    <h1>{count}</h1>
    {/* <button onClick={() => setCount(count+1)}>Handle count</button> */}
    </>
  );
};

export default App;