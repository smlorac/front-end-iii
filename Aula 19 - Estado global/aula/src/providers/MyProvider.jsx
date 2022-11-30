import { useState } from "react";
import { createContext } from "react";

export const MyContext = createContext({});
//inicializar com valores default

const MyProvider = ({ children }) => {

  const [nome, setNome] = useState([]);

  const [counter, setCounter] = useState(0);

  function incrementCount(){
    setCounter(counter+1);
  }

  return (
    <MyContext.Provider value={{ nome, setNome, counter, incrementCount }}>
      {/* só podemos passar um valor, mas ele pode ser um objeto, o legal do context é passar estados */}
      {children}
      {/* pegando os filhos */}
    </MyContext.Provider>
  );
};

export default MyProvider;
//essa é sempre a maneira de fazer context
