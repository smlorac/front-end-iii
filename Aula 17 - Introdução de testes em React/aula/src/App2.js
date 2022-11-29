import { useState, useCallback, useMemo, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [numero, setNumero] = useState(0);

  // async function getUsers() {
  //   const res = await fetch("https://api.com.users/all");
  // }

  //pra ela ser criada apenas uma vez
  const getUsers = useCallback(async () => {
    const res = await fetch("https://api.com.users/all");
  }, []);
  //esse é o recomendado sempre que for chamar algum request da API, evitando chamadas desnecessárias ao servidor

  useEffect(() => {
    getUsers();
  }, [getUsers]);
  //podemos usar como dependência para ele chamar de novo a API quando for redeclarada

  const handleName = useCallback((e) => {
    setName(e.target.value);
  }, []);
  //passamos a função que queremos o cache e quando vamos querer que ela seja redeclarada

  // const handleName = (e) => setName(e.target.value);
  //cada vez quem um componente fosse renderizado, criaria a função de novo, gerando problema de performance
  //para, isso usamos um hook que faz uma espécie de cache

  const incrementValue = () => {
    setNumero(numero + 1);
  };

  // const data = Array(33_000_000).fill({ foo: "bar" });
  //cria um array com 33 milhões de valores, deixando a performance zoadissima (cada vez que ele renderiza a página ele cria um novo array)

  const data = useMemo(() => Array(33_000_000).fill({ foo: "bar" }), []);
  //agora ele armazena na memória e não cria de novo, melhorando a performance

  return (
    <>
      {name}
      <input value={name} onChange={(e) => handleName(e)} />
      <button onClick={incrementValue}>Incrementar</button>
      {numero}
      {/* {data.map((item) => console.log(item))} */}
    </>
  );
}

export default App2;
