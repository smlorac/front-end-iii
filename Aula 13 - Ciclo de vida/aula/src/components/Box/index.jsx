import { useEffect } from "react";

const Box = () => {

    useEffect(() => {
        () => console.log("o componente foi desmontado");
        //para rolar apenas depois de desmontar
    }, []);
    //funcao que vai ser executada e quando vai ser executada

    return(
        <div>
            <h1>Essa box está sendo mostrada</h1>
        </div>
    );
};

export default Box;