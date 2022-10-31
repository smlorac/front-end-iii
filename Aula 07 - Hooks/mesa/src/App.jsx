import { useState } from "react";

const App = () => {

  const [frutas, setFrutas] = useState([]);

  function addFruta() {
    setFrutas([...frutas, frutas.length + 1])
  }

  return(
    <>
    <ul>
      {
        frutas.map((fruta, index) => {
          return <li key={`fruit-list-${index}`}>{`A fruta ${fruta} foi adicionada na lista`}</li>
        })
      }
    </ul>
    <button onClick={addFruta}>Clique aqui</button>
    </>
  )
}

export default App;