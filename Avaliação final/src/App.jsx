import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import { ThemeContext } from "./Providers/ThemeProvider";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar a classe dark ou light */}
      <div className={theme === "light" ? `app light` : `app dark`}>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
