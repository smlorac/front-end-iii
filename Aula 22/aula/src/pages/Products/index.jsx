import { Outlet } from "react-router-dom";
import { useContext } from "react";

import { ProductsContext } from "../../contexts/ProductsContext";

const Products = () => {

  const {nome} = useContext(ProductsContext);

  return (
    <>
      <header>Header Products</header>
      <div>
        <Outlet/>
        <h2>Olá, {nome}</h2>
      </div>
      <footer>Footer Products</footer>
    </>
  );
};

export default Products;
