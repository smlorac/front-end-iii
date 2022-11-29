import { useParams } from "react-router-dom"

const Details = () => {

    const params = useParams();
    //podemos desestruturar tbm 

    return(
        <>
        <h1>Hello Details Page</h1>
        <h2>{JSON.stringify(params)}</h2>
        <h3>{JSON.stringify(params.nome)}</h3>
        </>
    )
}

export default Details