import { useEffect, useState } from "react";
import axios from "axios";
import { createServer } from "miragejs";
//mirage é pra criar mock de api pra nao precisar utilizar libs externas para testes

createServer({
  routes() {
    this.get("api/users", () => [
      { id: "1", name: "Carol" },
      { id: "2", name: "Nico" },
      { id: "3", name: "Qualquer" },
    ]);
    this.post("api/users", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      attrs.id = Math.floor(Math.random() * 100);

      return { name: attrs };
    });
  },
});

const App = () => {
  const [posts, setPosts] = useState([]);

  async function getPostsByServer() {
    //é importante fazer o tratamento de exceções em funções async
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      //um dos pontos fracos do fetch é a conversão para JSON
      const responseJSON = await response.json();

      // console.log(response);
      // console.log(responseJSON);
      setPosts(responseJSON);
    } catch (error) {
      // alert("Houve um erro no request");
      console.log("Houve um erro no request");
    }
  }

  useEffect(() => {
    getPostsByServer();
  }, []);

  //agora vamos fazer com o axios

  const [users, setUsers] = useState([]);

  async function getUsers() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      // console.log(response);
      // console.log(response.data);
      setUsers(response.data);
    } catch (error) {
      console.log("Erro na requisição");
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  //outra forma de fazer, porém teriamos vários .then seguidos
  // function getUsersByServer(){
  //   fetch("https://jsonplaceholder.typicode.com/users").then((res) => .then(res.json()));
  // }

  const [usersMock, setUsersMock] = useState([]);

  useEffect(() => {
    getUserMock();
  }, []);

  async function getUserMock() {
    try {
      const users = await axios.get("http://127.0.0.1:5173/api/users");
      // console.log(users.data);
      setUsersMock(users.data);
    } catch (e) {
      console.log("erro no get do mock");
    }
  }

  async function newUserMock() {
    try {
      const res = await axios.post("http://127.0.0.1:5173/api/users", {
        name: "Mais um nome",
      });

      // console.log(res.data);
      getUserMock();
      console.log(usersMock);
    } catch (e) {
      console.log("erro no post do mock");
    }
  }

  async function newPost() {
    const postObject = {
      title: "testando POST",
      body: "oieeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      userId: 1,
    };

    try {
      await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        postObject
      );
      alert("Post criado");
      //nao aparece no front pois é uma API de testes
    } catch (error) {
      console.log("Erro ao criar novo post");
    }
  }

  return (
    <>
      {/* <button onClick={getPostsByServer}>Posts</button> */}
      {/* <button onClick={getUsersByServer}>Users</button> */}
      {/* <div>{posts.length > 0 ? JSON.stringify(posts) : "Carregando"}</div> */}
      {/* <div>{users.length > 0 ? JSON.stringify(users) : "Carregando"}</div> */}
      {/* <button onClick={newPost}>Novo post</button> */}
      <div>
        {usersMock.length > 0 ? JSON.stringify(usersMock) : "Carregando"}
      </div>
      <button onClick={newUserMock}>Novo user</button>
    </>
  );
};

export default App;
