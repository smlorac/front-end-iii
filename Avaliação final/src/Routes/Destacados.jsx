import { useContext, useEffect, useState } from "react";

import styles from "../Components/Card.css";
import { ThemeContext } from "../Providers/ThemeProvider";

const Destacados = () => {
  const { theme } = useContext(ThemeContext);

  const [localFavs, setLocalFavs] = useState([{}]);

  useEffect(() => {
    const data = localStorage.getItem("favorites");
    setLocalFavs(JSON.parse(data));
  }, []);

  return (
    <>
      {localFavs
        ? localFavs.map((fav) => (
            <div className={theme === "light" ? `card` : `card dark`}>
              <img
                className="card-img-top"
                src="/images/doctor.jpg"
                alt="doctor placeholder"
              />
              <div className={`card-body ${styles.CardBody}`}>
                <a href={`/dentist/${fav.matricula}`}>
                  <h5 className={`card-title ${styles.title}`}>
                    {fav.nome} {fav.sobrenome}
                  </h5>
                </a>
              </div>
            </div>
          ))
        : ""}
    </>
  );
};

export default Destacados;
