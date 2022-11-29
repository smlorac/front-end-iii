import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/404";
import Details from "./pages/Details";

const RoutesConfig = () => {
  return (
    // como se fosse um fragmento, mas de rotas
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/details/:nome" element={<Details />}></Route>
        <Route path="*" element={<PageNotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesConfig;
