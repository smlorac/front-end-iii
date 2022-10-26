import ItemList from "./components/ItemList";
import { carros } from "./mock/carros";

function App() {
  return (
    <ul>
      {
        carros.map(carro => 
        // <li key={`list-car-${carro.id}`}>
        //   <h2>{carro.modelo}</h2>
        //   <h3>{carro.marca}</h3>
        //   <p>{carro.descricao}</p>
        //   {/* daria muito trabalho ir enfiando cada propriedade aqui, por isso criamos componentes */}
        // </li>
        <ItemList key={`list-item-${carro.id}`} item={carro}/>
        )
      }
    </ul>
  )
}

export default App;
