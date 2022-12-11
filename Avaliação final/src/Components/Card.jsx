import { useContext } from "react";
import { ThemeContext } from "../Providers/ThemeProvider";
import styles from "./Card.module.css";


// TODO criar modo de lidar com os favoritos
const Card = (props) => {
  const { dentista } = props;

  const {theme} = useContext(ThemeContext);

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div className={theme === "light" ? `card` : `card dark`}>
        <img
          className="card-img-top"
          src="/images/doctor.jpg"
          alt="doctor placeholder"
        />
        {/* FIXME cards estão mto grandes pra página */}
        <div className={`card-body ${styles.CardBody}`}>
          {/* Na linha seguinte o link deverá utilizar a matricula, nome e sobrenome do dentista
          que vem da API */}
          <a href={`/dentist/${dentista.matricula}`}>
            <h5 className={`card-title ${styles.title}`}>
              {dentista.nome} {dentista.sobrenome}
            </h5>
          </a>
          <button style={{ fontSize: "12px" }} value={dentista.matricula}>
            <img
              src="/images/star.png"
              alt="icone de estrela"
              style={{ width: "30px" }}
            />
            Adicionar aos favoritos
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
