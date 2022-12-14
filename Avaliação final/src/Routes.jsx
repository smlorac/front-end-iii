import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import Detail from "./Routes/Detail";
import Contato from "./Routes/Contato";
import Destacados from "./Routes/Destacados";
import NotFound from "./Routes/NotFound";
import { ThemeContext } from "./Providers/ThemeProvider";

const AppRoutes = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div id="appRoutes" className={theme === "light" ? `light` : `dark`}>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dentist/:matricula" element={<Detail />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/destacados" element={<Destacados />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
