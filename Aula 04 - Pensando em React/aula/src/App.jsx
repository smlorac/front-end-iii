import Button from './Button'

function App() {

  const botaozinho = () => alert("Você me clicou");

  const botaozao = () => alert("Obrigada")

  return (
    <>
      <h1>Oi Carol!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deserunt
        sapiente, eos dolorum vel dolores ratione laborum libero beatae error
        velit ad tenetur, similique atque officiis ullam molestiae modi illum.
      </p>
      {/* <button onClick={botaozinho}>Duvido você me apertar</button> */}
      {/* prop com nome name */}
      <Button name="Aperte aqui" color="purple" clique={botaozao}/>
      <Button name="Duvido você me apertar" color = "gray" clique={botaozinho}/>
    </>
  );
}

export default App;
