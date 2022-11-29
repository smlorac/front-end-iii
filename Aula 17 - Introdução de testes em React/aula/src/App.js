import Card from "./components/Card";
import Increment from "./components/Increment";

const App = () => {
  const user = {
    nome: "Caroline Machado",
    profissao: "linda",
  };

  return (
    <>
      <h1>Hello World </h1>

      {/* <Card nome={user.nome} profissao={user.profissao}/> */}
      <Card {...user} />

      <Increment />
    </>
  );
};

export default App;
