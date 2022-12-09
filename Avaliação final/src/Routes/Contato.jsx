import { useState } from "react";

const Contato = () => {
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
    }

    alert(
      `Obrigada, ${form.nomeCompleto}, entraremos em contato assim que possível via email`
    );
    // TODO utilizar template de validação

    cleanForm();
  }

  function cleanForm() {
    setForm({ nomeCompleto: "", email: "", assunto: "" });
  }

  return (
    <>
      <h1>Entre em contato com a gente</h1>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="nomeCompleto">Nome completo</label>
          <input
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
    </>
  );
};

export default Contato;
