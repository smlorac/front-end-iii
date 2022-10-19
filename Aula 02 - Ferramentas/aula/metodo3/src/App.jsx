import jiggly from "./039.png"

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <p>Teste teste teste</p>
      <img src={jiggly} alt="Imagem do Jigglypuff" />
    </div>
  );
}

// export default App;

import "./style.css"

//metodos de utilizar funcoes (onde um componente é uma funcao)
//mistura do JS com HTML se chama JSX
//tudo que for JS precisa de chaves para ser injetado
function NomeDaFuncao() {

  const nome = "Carol";

  return (
    <>
      <h1 style={{color: 'blue'}}>Olá de novo, {nome}</h1>
      {/* nao é boa pratica colocar CSS dentro de JSX */}
      <p className="texto">lalalalalalalallalalallalaallallalallalallallajjjjjjjjjjdsajdkjaskdasjkdsbhjfasdbasdbj</p>
    </>
  );
}

//export default NomeDaFuncao;
export {App, NomeDaFuncao}

const MinhaFuncao = () => {};
