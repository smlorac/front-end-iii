import { useContext } from "react";
import { MyContext } from "../../providers/MyProvider";
import { ThemeContext } from "../../providers/ThemeProvider";
import "./styles.css"


const Home = () => {

  // const dados = useContext(MyContext);
  const { nome, setNome, counter, incrementCount } = useContext(MyContext);

  const { theme, handleTheme } = useContext(ThemeContext);


  return (
    <>
    <div className={theme === "light" ? "bg_light" : "bg_dark"}>
      <h1>Hello {nome}</h1>
      <h2>{counter}</h2>
      {/* <p>{JSON.stringify(dados)}</p> */}
      {/* se eu mudar em Home, vai mudar na Dashboard também */}
      <input onChange={(e) => setNome(e.target.value)} />
      <button onClick={incrementCount}>Aumentar</button>
      <button onClick={handleTheme}>Alterar Tema</button>
      </div>
    </>
  );
};

export default Home;