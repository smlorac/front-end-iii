import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../Providers/ThemeProvider";
import styles from "./Card.css";

// TODO criar modo de lidar com os favoritos
const Card = (props) => {
  const { dentista } = props;

  const { theme } = useContext(ThemeContext);

  // const [favs, setFavs] = useState([]);
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
          <button
            style={{ fontSize: "12px" }}
            // onClick={() => addToFav(dentista.matricula)}
            onClick={handleFav}
          >
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
