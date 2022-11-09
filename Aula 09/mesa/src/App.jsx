import { useState } from "react";
import "./styles.css";

function App() {
  function handleSubmit(event) {
    event.preventDefault();

    if (disciplina == "database"){
      setDisciplina(disciplina);
      setQtdAluno(qntAluno + 1);
      setNota((notas) => [...notas, nota]);
      setMedia(nota/qntAluno);
    }
  }

  const [disciplina, setDisciplina] = useState("");
  const [nota, setNota] = useState(0);
  const [qntAluno, setQtdAluno] = useState(0);
  const [media, setMedia] = useState(0);

  return (
    <div className="container">
      <h1>Média de Alunos por Disciplina</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="container_input">
          <select onChange={(event) => {
            setDisciplina(event.target.value)
          }}>
            <option selected disabled>
              Selecione uma disciplina
            </option>
            <option value="database">Banco de Dados</option>
            <option value="backend">Desenvolvimento Backend</option>
            <option value="frontend">Desenvolvimento Frontend</option>
            <option value="devops">Devops</option>
          </select>
          <input value={nota} onChange={(event) => {
            setNota(event.target.value)
          }}/>
        </div>
        <input type="submit" value="Salvar" />
      </form>

      <div className="container">
        <table border="1" className="line_title">
          <thead>
            <tr>
              <th>Disciplina</th>
              <th>Quantidade de Alunos</th>
              <th>Média das notas dos alunos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Banco de Dados</td>
              <td>{qntAluno}</td>
              <td>{media}</td>
            </tr>

            <tr>
              <td>Desenvolvimento Frontend</td>
              <td>0</td>
              <td>0</td>
            </tr>

            <tr>
              <td>Desenolvimento Backend</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;