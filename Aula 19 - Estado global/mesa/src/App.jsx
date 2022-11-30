import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import LanguageProvider from "./providers/LanguageProvider";

function App() {
  // const [language, setLanguage] = useState(languages.english);

  // const handleChangeLA = () => {
  //   setLanguage(() => {
  //     //DICA: Função que troca um idioma por outro (ao clicar no botão)
  //   });
  // };

  return (
    <div className="App">
      <>
        {/*  DICA: Adicione o provider LanguageContext */}
        <LanguageProvider>
          <Navbar />
          <Body />
        </LanguageProvider>
      </>
    </div>
  );
}

export default App;
