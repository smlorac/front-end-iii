import { useContext, useState } from "react";
import alert from "../Services/alert";
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
      alert.fire({
        icon: "info",
        text: "O nome deve conter mais que 5 letras",
      });
    } else {
      alert.fire({
        icon: "success",
        text: `Obrigada, ${form.nomeCompleto}, logo entraremos em contato por email`,
      });

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
            <div className="form-group">
              <label htmlFor="nomeCompleto">Nome completo</label>
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
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className={`form-control ${styles.inputSpacing}`}
                type="email"
                class="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Digite seu email"
                defaultValue={form.email}
                required
              />
              <small id="emailHelp" class="form-text text-muted">
                Não se preocupe, não compartilharemos seu email com ninguém.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="assunto">Assunto</label>
              <textarea
                className={`form-control ${styles.inputSpacing}`}
                class="form-control"
                id="assunto"
                rows="3"
                placeholder="Descreva o assunto de seu interesse"
                defaultValue={form.assunto}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-danger">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contato;
