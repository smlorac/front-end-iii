import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Routes/Home";
import Login from "./Routes/Login";
import Detail from "./Routes/Detail";
import Contato from "./Routes/Contato";
import Destacados from "./Routes/Destacados";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dentist/:matricula" element={<Detail />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/destacados" element={<Destacados />} />
        {/* TODO adicionar rota para NOT FOUND */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
