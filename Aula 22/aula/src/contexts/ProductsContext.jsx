import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

import api from "../services/api";

export const ProductsContext = createContext({});

const ProductsProvider = (props) => {
  const [products, setProducts] = useState([]);

  const [error, setError] = useState(false);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    setLoading(true);
    try {
      api.get("/products");
    } catch (e) {
      console.log("erro ao buscar todos produtos");
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <ProductsContext.Provider value={{ products, error, loading }}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
