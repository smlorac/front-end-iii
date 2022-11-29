import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import api from "../../services/api";
import "./styles.css";

const Home = () => {
  const [products, setProducts] = useState([]);

  const [idProduct, setIdProduct] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    manufacturer: "",
    image: "",
  });

  useEffect(() => {
    getProducts();
  }, []);

  async function postProducts() {
    try {
      //poderia desetruturar também
      //const {name, price, description, manufacturer, image} = formData
      //e depois só chamar os parâmetros
      await api.post("/products", {
        name: formData.name,
        price: formData.price,
        description: formData.description,
        manufacturer: formData.manufacturer,
        image: formData.image,
      });

      getProducts();
      emptyForm();
    } catch (e) {
      console.log("erro ao criar novo produto");
    }
  }

  function submitForm() {
    if (idProduct) {
      updateProduct();
    } else {
      postProducts();
    }
  }

  async function getProducts() {
    try {
      const res = await api.get("/products");
      // console.log(res.data);
      setProducts(res.data);
    } catch (e) {
      console.log("erro ao buscar todos os produtos");
    }
  }

  function emptyForm() {
    setFormData({
      name: "",
      description: "",
      price: "",
      manufacturer: "",
      image: "",
    });
  }

  async function editProduct(product) {
    try {
      setFormData({
        name: product.name,
        description: product.description,
        price: product.price,
        manufacturer: product.manufacturer,
        image: product.image,
      });

      setIdProduct(product._id);
    } catch (e) {
      console.log("erro ao editar produto");
    }
  }

  async function updateProduct() {
    try {
      await axios.put(`/products/${idProduct}`, {
        name: formData.name,
        description: formData.description,
        price: formData.price,
        manufacturer: formData.manufacturer,
        image: formData.image,
      });

      emptyForm();
      setIdUser("");
      getProducts();
    } catch (e) {
      console.log("erro ao atualizar produto");
    }
  }

  async function removeProduct(id) {
    try {
      await axios.delete(`/products/${id}`);
      getProducts();
    } catch (e) {
      console.log("erro ao excluir produto");
    }
  }

  return (
    <div className="container">
      {/* {JSON.stringify(formData)} */}
      <form>
        <h2>Cadastrar Produto</h2>
        <input
          placeholder="Nome"
          value={formData.name}
          onChange={(event) =>
            setFormData({ ...formData, name: event.target.value })
          }
        />
        <input
          placeholder="Preço"
          value={formData.price}
          onChange={(event) =>
            setFormData({ ...formData, price: event.target.value })
          }
        />
        <input
          placeholder="Fabricante"
          value={formData.manufacturer}
          onChange={(event) =>
            setFormData({ ...formData, manufacturer: event.target.value })
          }
        />
        <input
          placeholder="Image"
          value={formData.image}
          onChange={(event) =>
            setFormData({ ...formData, image: event.target.value })
          }
        />
        <textarea
          placeholder="Descrição"
          value={formData.description}
          onChange={(event) =>
            setFormData({ ...formData, description: event.target.value })
          }
        />
        <button type="button" onClick={submitForm}>
          Salvar
        </button>
      </form>

      <div className="products">
        <h1>Produtos</h1>

        <div className="content">
          <a />
          {products.map((product) => (
            <div>
              <Link
                key={product._id}
                className="container-item"
                to={`/details/${product._id}`}
              >
                <img src={product.image}></img>
                <p>{product.price}</p>
                <p>{product.name}</p>
              </Link>
              <button onClick={() => removeProduct(product._id)}>Apagar</button>
              <button onClick={() => editProduct(product)}>Editar</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
