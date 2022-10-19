import "./style.css";

function App() {
  return (
    <>
      <h1
      style={
        {
          color: 'purple',
        }
      }
      >Hello World!</h1>
      <button id="botaozinho" onClick={() => alert("ok")}>clique em mim</button>
    </>
  );
  //só podemos renderizar um elemento por vez, logo usamos um fragmento ou uma div
  //normalmente usamos div quando queremos estilizar elas
}

export default App;

// Ctrl + Shift + P => simple browser view
