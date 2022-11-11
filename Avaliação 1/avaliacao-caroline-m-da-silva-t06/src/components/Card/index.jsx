import "./Card.css";

const Card = (props) => {

  //console.log(props);
  return (
    <div className="card" style={{backgroundColor: props.cor}}>
      <h2>{props.nome}</h2>
      <h3>{props.casa}</h3>
      <img src={props.url} alt={props.nome} />
    </div>
  )
};

export default Card;
