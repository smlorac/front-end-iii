import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ThemeContext } from "./providers/ThemeProvider";

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
