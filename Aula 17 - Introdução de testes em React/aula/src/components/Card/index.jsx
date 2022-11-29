const Card = (props) => {
  const { nome = "-", profissao = "-" } = props;

  return (
    <>
      <h2>Nome: {nome}</h2>
      <p>Profissão: {profissao}</p>
    </>
  );
};

export default Card;
