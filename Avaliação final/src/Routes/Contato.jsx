import { useContext } from "react";
import { useState } from "react";

import styles from "../Components/Form.css";

import { ThemeContext } from "../Providers/ThemeProvider";

const Contato = () => {
  const { theme } = useContext(ThemeContext);

  const [form, setForm] = useState({
    nomeCompleto: "",
    email: "",
    assunto: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (form.nomeCompleto.length < 5) {
      alert("O nome deve conter mais que 5 letras");
      // TODO criar template para validações
    } else {
      alert(
        `Obrigada, ${form.nomeCompleto}, entraremos em contato assim que possível via email`
      );
      // TODO utilizar template de validação
      cleanForm();
    }
  }

  function cleanForm() {
    setForm({ nomeCompleto: "", email: "", assunto: "" });
  }

  return (
    <>
      <h1>Entre em contato com a gente</h1>
      <div
        className={
          theme === "light"
            ? `text-center card container ${styles.card}`
            : `text-center card dark container ${styles.card}`
        }
      >
        <div className={`card-body ${styles.CardBody}`}>
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <label for="nomeCompleto">Nome completo</label>
              <input
                className={`form-control ${styles.inputSpacing}`}
                type="text"
                class="form-control"
                id="nomeCompleto"
                aria-describedby="nomeCompletoHelp"
                placeholder="Digite seu nome completo"
                value={form.nomeCompleto}
                onChange={(e) => setForm({ nomeCompleto: e.target.value })}
                required
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                className={`form-control ${styles.inputSpacing}`}
                type="email"
                class="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Digite seu email"
                value={form.email}
                required
              />
              <small id="emailHelp" class="form-text text-muted">
                Não se preocupe, não compartilharemos seu email com ninguém.
              </small>
            </div>
            <div class="form-group">
              <label for="assunto">Assunto</label>
              <textarea
                className={`form-control ${styles.inputSpacing}`}
                class="form-control"
                id="assunto"
                rows="3"
                placeholder="Descreva o assunto de seu interesse"
                value={form.assunto}
                required
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contato;
