import Container from './Container'
import ListaCompras from './ListaCompras';
import Text from './Text'

function App(){
  return(
    <>
    {/* <Container title="Titulo do container 1">
      <h1>Titulo do filho do container 1</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam nobis minima incidunt sequi repellat optio id accusantium excepturi! At velit animi ut inventore alias ipsum non. Labore fugit est rem!</p>
      <Text txt="Olaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaar"/>
      </Container>
      <Container title="Titulo do container 1"> */}
      {/* <h1>Titulo do filho do container 2</h1> */}
      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi suscipit nesciunt explicabo inventore dolorem. Nisi totam qui explicabo, dolorum autem nostrum. Perspiciatis magni porro illum dolorum obcaecati et necessitatibus quae.</p>
      </Container> */}
    {/* <Container title="Titulo do container 2"/>
    <Container title="Titulo do container 3"/> */}
    <Text txt="Lista de Compras"/>
    <ListaCompras/>
    </>
  )
}

export default App;