import { createContext, useState } from "react";
import EN from "../languages/english.json"
import PTBR from "../languages/portuguese.json"
import ES from "../languages/spanish.json"

export const languages = {
    english: {
        id: "EN",
        text: EN
    },
    portugues: {
        id: "PTBR",
        text: PTBR
    }, 
    spanish: {
        id: "ES",
        text: ES
    },
    /* DICA: Adicione os novos idiomas desejados */
};

export const LanguageContext = createContext({languages.english});

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState({languages.english});

  function handleLanguage() {
    if (english){
        setLanguage(english);
    } else if (portugues){
        setLanguage(portugues);
    } else if (spanish){
        setLanguage(spanish);
    }
  }

  return (
    <LanguageContext.Provider value={{ language, handleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;