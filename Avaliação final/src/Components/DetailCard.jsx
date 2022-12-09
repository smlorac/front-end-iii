import { useEffect, useState, useContext } from "react";
import ScheduleFormModal from "./ScheduleFormModal";
import styles from "./DetailCard.module.css";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Providers/AuthContext";

import api from "../Services/api";

const DetailCard = () => {
  const { matricula } = useParams();
  const [dentista, setDentista] = useState({});

  const { userData } = useContext(AuthContext);

  const { token } = userData;

  useEffect(() => {
    //Nesse useEffect, você vai fazer um fetch na api passando o
    //id do dentista que está vindo do react-router e carregar os dados em algum estado
    getDentista();
  }, []);

  async function getDentista() {
    // FIXME erro 403 no navegador e 404 no postman
    try {
      const res = await api.get(`/dentista/${matricula}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDentista(res.data);
    } catch (e) {
      console.log("erro ao buscar dentista");
    }
  }

  // TODO tratamento para quando não encontra dentista

  return (
    //As instruções que estão com {''} precisam ser
    //substituídas com as informações que vem da api
    <>
      <h1>
        Informação sobre {dentista.nome} {dentista.sobrenome}{" "}
      </h1>
      <section className="card col-sm-12 col-lg-6 container">
        {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
        <div className={`card-body row`}>
          <div className="col-sm-12 col-lg-6">
            <img
              className="card-img-top"
              src="/images/doctor.jpg"
              alt="doctor placeholder"
            />
          </div>
          <div className="col-sm-12 col-lg-6">
            <ul className="list-group">
              <li className="list-group-item">Nome: {dentista.nome}</li>
              <li className="list-group-item">
                Sobrenome: {dentista.sobrenome}
              </li>
              <li className="list-group-item">
                Matrícula: {dentista.matricula}
              </li>
            </ul>
            <div className="text-center">
              {/* //Na linha seguinte deverá ser feito um teste se a aplicação
              // está em dark mode e deverá utilizado o css correto */}
              <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className={`btn btn-light ${styles.button}`}
              >
                Marcar consulta
              </button>
            </div>
          </div>
        </div>
      </section>
      <ScheduleFormModal />
    </>
  );
};

export default DetailCard;
