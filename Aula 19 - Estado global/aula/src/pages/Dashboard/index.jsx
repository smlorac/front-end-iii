import { useContext } from "react";
import { MyContext } from "../../providers/MyProvider";

const Dashboard = () => {
  
  // const { nome, cidade } = useContext(MyContext);
  const { nome, setNome } = useContext(MyContext);


  return (
    <>
      {/* <Navbar /> */}
      <h1>Hello Dashboard</h1>
      <p>{nome}</p>
      {/* <p>{cidade}</p> */}
    </>
  );
};

export default Dashboard;
