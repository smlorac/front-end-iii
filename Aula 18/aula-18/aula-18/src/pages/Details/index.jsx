import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProduct();
  }, []);

  async function getProduct() {
    try {
      const res = await api.get(`/products/${id}`);
      setProduct(res.data);
    } catch (e) {
      console.log("erro ao buscar produto");
    }finally{
      setLoading(false);
    }
  }

  if (loading){
    return <div>Carregando...</div>
  }

  if (!product._id){
    return <div>produto não encontrado</div>
  }

  return (
    <>
      <h1>{product.name}</h1>
      <img src={product.image}></img>
      <p>{product.manufacturer}</p>
      <p>{product.description}</p>
      <h2>{product.price}</h2>
    </>
  );
};

export default Details;
