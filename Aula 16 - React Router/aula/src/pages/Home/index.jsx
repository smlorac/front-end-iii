import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();
    //essa função é importante para casos em que vc precisa mudar de página depois de alguma ação 

    function handleNavigate(){
        navigate("/contact")
    }

    const [nome, setNome] = useState("");

    return(
        <>
        <h1>Hello Home Page</h1>
        {/* não usamos <a></a> pra não perder a SPA */}
        <Link to="/contact">Ir para Contact</Link>
        <Link to={`/details/${nome}`}>Ir para Details</Link>

        <input type="text" onChange={(e) => setNome(e.target.value)}/>

        {/* outra forma de navegar */}
        <button onClick={handleNavigate}>ir para página de contato</button>
        </>
    )
}

export default Home;