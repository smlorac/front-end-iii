import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import MyProvider from "./providers/MyProvider";
import ThemeProvider from "./providers/ThemeProvider";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <MyProvider>
          {/* tudo dentro dele são filhos dele */}
          <BrowserRouter>
            {/* pra aparecer em todas as páginas */}
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </BrowserRouter>
        </MyProvider>
      </ThemeProvider>
    </>
  );
};

export default App;

// const AllProvider = ({children}) => {
//   <ThemeProvider>
//     <MyProvider>{children}</MyProvider>
//   </ThemeProvider>
// };
//aí chama o all provider ali em cima ao invés dos dois aninhados
