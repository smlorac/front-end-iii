import { useState } from "react";
import { useEffect } from "react";
import Card from "../Components/Card";

import api from "../Services/api";

const Home = () => {
  const [dentistas, setDentistas] = useState([]);

  useEffect(() => {
    //Nesse useEffect, deverá ser obtido todos os dentistas da API
    //Armazena-los em um estado para posteriormente fazer um map
    //Usando o componente <Card />
    getDentistas();
  }, []);

  async function getDentistas() {
    try {
      const res = await api.get("/dentista");
    } catch (e) {
      console.log("erro ao buscar todos os dentistas");
    }
  }

  return (
    <>
      <h1>Home</h1>
      <div className="card-grid container">
        <Card />
      </div>
    </>
  );
};

export default Home;
