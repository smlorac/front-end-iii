import styles from "./styles.module.css";

const CityList = ({ item }) => {
  const { country, city, population, color } = item;

  return (
    <li style={{background: color}} className={styles.city_list}>
      <h2>{city}</h2>
      <p>População: {population}</p>
    </li>
  );
};

export default CityList;
