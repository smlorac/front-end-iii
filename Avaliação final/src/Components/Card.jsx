import { useState, useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";
import styles from "./Card.css";

const Card = (props) => {
  const { dentista } = props;

  const { theme } = useContext(ThemeContext);

  const [storageFavs, setStorageFavs] = useState(() =>
    JSON.parse(localStorage.getItem("favorites") || "[]")
  );

  const isFav = storageFavs.includes(dentista);

  const handleFav = () => {
    if (!isFav) {
      const newStorageFav = [...storageFavs, dentista];
      setStorageFavs(newStorageFav);
      localStorage.setItem("favorites", JSON.stringify(newStorageFav));
    } else {
      const newStorageFav = storageFavs.filter(
        (matriculaSalva) => matriculaSalva !== dentista
      );
      setStorageFavs(newStorageFav);
      localStorage.setItem("favorites", JSON.stringify(newStorageFav));
    }
  };

  return (
    <>
      <div
        className={theme === "light" ? `card` : `card dark`}
        data-testid="card"
      >
        <img
          className="card-img-top"
          src="/images/doctor.jpg"
          alt="doctor placeholder"
        />
        <div className={`card-body ${styles.CardBody}`}>
          <a href={`/dentist/${dentista.matricula}`}>
            <h5 className={`card-title ${styles.title}`}>
              {dentista.nome} {dentista.sobrenome}
            </h5>
          </a>
          <button style={{ fontSize: "12px" }} onClick={handleFav}>
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
