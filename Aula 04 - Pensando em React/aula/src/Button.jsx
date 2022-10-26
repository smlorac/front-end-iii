function Botao(props){

    console.log(props)

    // const botaozinho = () => alert("Vai se foder")

    //podemos fazer um objeto props também


    return(
        <button onClick={props.clique} style={{backgroundColor:props.color}}>{props.name}</button>
    )
}

export default Botao;

//principio SOLID, fazer uma coisa só em uma classe -> single responsability