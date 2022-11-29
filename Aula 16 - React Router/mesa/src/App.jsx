import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home"
import Contact from "./Contact"
import Beer from "./Beer"

function App() {
  return (
   <div>
      <h1>Mais do que bebidas, vamos celebrar o encontro!!</h1> 
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>Home</Route>
        <Route path="/contact" element={<Contact />}>Contact</Route>
        <Route path="/beer/:id" element={<Beer />}>Beer</Route>
      </Routes>
      </BrowserRouter>
   </div>
  )
}

export default App