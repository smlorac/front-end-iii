import { useContext } from "react";
import { ProductsContext } from "../../../contexts/ProductsContext";

const Home = () => {
  const { products, error, loading } = useContext(ProductsContext);

  if (loading){
    return <h1>loading...</h1>
  }

  if (error){
    return <h1>Erro ao buscar produtos</h1>
  }

  return (
    <>
      {/* <h1>Hello Home</h1> */}
      {/* {loading && <h1>loading...</h1>}
      {error && <h1>Erro ao buscar produtos</h1>} */}
      {products.map((product) => (
        <p>{JSON.stringify(product)}</p>
      ))}
    </>
  );
};

export default Home;