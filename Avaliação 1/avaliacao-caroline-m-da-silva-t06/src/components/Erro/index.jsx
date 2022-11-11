import "./Erro.css";

const Erro = (props) => {

  //console.log(props);
  return (
    <div id="erro">
      <p>{props.erro}</p>
    </div>
  )
};

export default Erro;
