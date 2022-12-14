import { useContext, useEffect, useState } from "react";
import api from "../services/api";
import styles from "./ScheduleForm.module.css";

import { AuthContext } from "../providers/AuthContext";
import { ThemeContext } from "../providers/ThemeProvider";
import alert from "../services/alert";

const ScheduleForm = () => {
  const { userData } = useContext(AuthContext);
  const { token } = userData;

  const { theme } = useContext(ThemeContext);

  const [dentistas, setDentistas] = useState([]);
  const [pacientes, setPacientes] = useState([]);

  const [dataHoraConsulta, setDataHoraConsulta] = useState("");
  const [dentistaForm, setDentistaForm] = useState("");
  const [pacienteForm, setPacienteForm] = useState("");

  useEffect(() => {
    //Nesse useEffect, você vai fazer um fetch na api buscando TODOS os dentistas
    //e pacientes e carregar os dados em 2 estados diferentes
    getDentistas();
    getPacientes();
  }, []);

  const handleSubmit = (event) => {
    //Nesse handlesubmit você deverá usar o preventDefault,
    event.preventDefault();
    //obter os dados do formulário e enviá-los no corpo da requisição
    //para a rota da api que marca a consulta
    //lembre-se que essa rota precisa de um Bearer Token para funcionar.
    //Lembre-se de usar um alerta para dizer se foi bem sucedido ou ocorreu um erro
    postConsulta();
  };

  async function getDentistas() {
    try {
      const res = await api.get("/dentista", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setDentistas(res.data);
    } catch (e) {
      console.log("erro ao buscar todos os dentistas");
    }
  }

  async function getPacientes() {
    try {
      const res = await api.get("/paciente", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setPacientes(res.data.body);
    } catch (e) {
      console.log("erro ao buscar todos os pacientes");
    }
  }

  async function postConsulta() {
    const data = {
      paciente: {
        matricula: pacienteForm,
      },
      dentista: {
        matricula: dentistaForm,
      },
      dataHoraAgendamento: dataHoraConsulta,
    };

    console.log(pacienteForm);
    console.log(dentistaForm);
    console.log(data);

    try {
      await api.post("/consulta", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // alert("consulta agendada!");
      alert.fire({
        icon: "success",
        title: "Sua consulta foi agendada",
      });
    } catch (e) {
      // alert("erro ao agendar a consulta");
      alert.fire({
        icon: "error",
        title: "Ocorreu um erro ao agendar sua consulta, tente novamente",
      });
    }
  }

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div
        className={
          theme === "light"
            ? `text-center container`
            : `text-center container dark`
        }
      >
        <form onSubmit={handleSubmit}>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="dentist" className="form-label">
                Dentista
              </label>
              <select
                className="form-select"
                name="dentist"
                id="dentist"
                value={dentistaForm}
                onChange={(e) => setDentistaForm(e.target.value)}
              >
                <option value="none" selected>
                  -
                </option>
                {/*Aqui deve ser feito um map para listar todos os dentistas*/}
                {dentistas.map((dentista) => (
                  <option key={dentista.matricula} value={dentista.matricula}>
                    {`${dentista.nome} ${dentista.sobrenome}`}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="patient" className="form-label">
                Paciente
              </label>
              <select
                className="form-select"
                name="patient"
                id="patient"
                value={pacienteForm}
                onChange={(e) => setPacienteForm(e.target.value)}
              >
                <option value="none" selected>
                  -
                </option>
                {/*Aqui deve ser feito um map para listar todos os pacientes*/}
                {pacientes.map((paciente) => (
                  <option key={paciente.matricula} value={paciente.matricula}>
                    {`${paciente.nome} ${paciente.sobrenome}`}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-12">
              <label htmlFor="appointmentDate" className="form-label">
                Data e hora da consulta
              </label>
              <input
                className="form-control"
                id="appointmentDate"
                name="appointmentDate"
                type="datetime-local"
                value={dataHoraConsulta}
                onChange={(e) => setDataHoraConsulta(e.target.value)}
              />
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
            <button
              className={
                theme === "light"
                  ? `btn btn-light ${styles.button}`
                  : `btn btn-dark ${styles.button}`
              }
              type="submit"
            >
              Marcar consulta
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ScheduleForm;
