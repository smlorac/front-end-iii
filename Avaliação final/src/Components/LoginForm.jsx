import { useState, useContext } from "react";
import api from "../services/api";
import alert from "../services/alert";
import styles from "./Form.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthContext";
import { ThemeContext } from "../providers/ThemeProvider";

const LoginForm = () => {
  const navigate = useNavigate();

  const { theme } = useContext(ThemeContext);

  const { fillUserData } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    auth();
  };

  async function auth() {
    validateLogin();

    try {
      const res = await api.post("/auth", {
        username,
        password,
      });

      navigate("/home");

      fillUserData({
        token: res.data.token,
      });

      setError(false);
    } catch (e) {
      console.log("erro de autenticação");
      if (error) {
        alert.fire({
          icon: "error",
          title: "Erro ao fazer login, verifique suas informações",
        });
      }
    }
  }

  const validateLogin = () => {
    if (username.includes(" ")) {
      alert.fire({
        title: "O nome de usuário não deve conter espaços",
      });
      setError(true);
    }

    if (username.length < 5 || username.length > 15) {
      alert.fire({
        title: "O nome de usuário deve ter entre 5 e 15 letras",
      });
      setError(true);
    }
  };

  return (
    <>
      <div
        className={
          theme === "light"
            ? `text-center card container ${styles.card}`
            : `text-center card dark container ${styles.card}`
        }
        data-testid="login"
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
            <button className="btn btn-danger" type="submit">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
