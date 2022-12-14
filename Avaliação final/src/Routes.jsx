import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Detail from "./routes/Detail";
import Contato from "./routes/Contato";
import Destacados from "./routes/Destacados";
import NotFound from "./routes/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dentist/:matricula" element={<Detail />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/destacados" element={<Destacados />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
