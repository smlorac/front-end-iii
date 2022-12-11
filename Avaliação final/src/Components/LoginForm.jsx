import { useState } from "react";
import api from "../Services/api";
import styles from "./Form.css";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthContext";
import { ThemeContext } from "../Providers/ThemeProvider";

// TODO adicionar validações (2)
// TODO tornar essa a página inicial
const LoginForm = () => {
  const navigate = useNavigate();

  const { theme } = useContext(ThemeContext);

  const { fillUserData } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    //Nesse handlesubmit você deverá usar o preventDefault,
    e.preventDefault();
    //enviar os dados do formulário e enviá-los no corpo da requisição
    //para a rota da api que faz o login /auth
    //lembre-se que essa rota vai retornar um Bearer Token e o mesmo deve ser salvo
    //no localstorage para ser usado em chamadas futuras
    //Com tudo ocorrendo corretamente, o usuário deve ser redirecionado a página principal,com react-router
    //Lembre-se de usar um alerta para dizer se foi bem sucedido ou ocorreu um erro
    auth();
  };

  async function auth() {
    try {
      const res = await api.post("/auth", {
        username,
        password,
      });

      navigate("/home");

      fillUserData({
        token: res.data.token,
      });
    } catch (e) {
      console.log("erro de autenticação");
    }
  }

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div
        className={
          theme === "light"
            ? `text-center card container ${styles.card}`
            : `text-center card dark container ${styles.card}`
        }
      >
        <div className={`card-body ${styles.CardBody}`}>
          <form onSubmit={handleSubmit}>
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Nome de usuário"
              name="login"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Senha"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="btn btn-primary" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
