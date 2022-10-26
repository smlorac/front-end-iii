import CityList from "./components/CityList";
import { cities } from "./mock/cities";

const App = () => {
  return (
    <ul>
      {cities.map((city) => {
        if (city.country == "BRA") {
          //console.log(city);
          return <CityList item={city} key={`city-item-${city.id}`}/>;
        }
      })}
    </ul>
  );
};

export default App;
