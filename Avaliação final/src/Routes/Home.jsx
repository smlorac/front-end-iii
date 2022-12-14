import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import Card from "../components/Card";
import { AuthContext } from "../providers/AuthContext";

import api from "../services/api";

const Home = () => {
  const [dentistas, setDentistas] = useState([]);

  const { userData } = useContext(AuthContext);

  const { token } = userData;

  useEffect(() => {
    //Nesse useEffect, deverá ser obtido todos os dentistas da API
    //Armazena-los em um estado para posteriormente fazer um map
    //Usando o componente <Card />
    getDentistas();
  }, []);

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

  return (
    <>
      <h1>Home</h1>
      <div className="card-grid container">
        {dentistas.map((dentista) => {
          return <Card dentista={dentista} key={dentista.matricula}/>;
        })}
      </div>
    </>
  );
};

export default Home;
