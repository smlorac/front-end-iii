import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { ThemeContext } from "./Providers/ThemeProvider";
import "./index.css";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      {/* FIXME body não fica escuro*/}
      <div className={theme === "light" ? `light` : `dark`} data-testid="app">
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
