// const ItemList = (props) => {
//     return (
//         <li>
//             <h2>{props.item.modelo}</h2>
//         </li>
//     )
// }
//pra nao chamar dessa forma, podemos desestruturar

// const ItemList = ({item}) => {
//     return (
//         <li>
//             <h2>{item.modelo}</h2>
//         </li>
//     )
// }
//poderia até desestruturar mais criando a variavel item

import styles from "./styles.module.css";

const ItemList = ({ item }) => {
  const { marca, modelo, descricao, cor, img } = item;

  return (
    <li className={styles.item_list} style={{background: cor}}>
      {/* nesse caso podemos utilizar o css inline */}
      <h2>{modelo}</h2>
      <h3>{marca}</h3>
      <p>{descricao}</p>
      <img src={img} alt={`${marca} ${modelo}`}/>
    </li>
  );
};

export default ItemList;
