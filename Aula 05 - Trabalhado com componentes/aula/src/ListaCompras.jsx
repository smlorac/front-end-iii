const items = [
    {
        id:1,
        name: "Coca Cola",
        quantidade: 1,
        preco: 5.00
    },
    {
        id:2,
        name: "Banana",
        quantidade: 2,
        preco: 2.78
    },
    {
        id:3,
        name: "Doritos",
        quantidade: 1,
        preco: 8.99
    },
    {
        id:4,
        name: "Cenoura",
        quantidade: 2,
        preco: 0.79
    },
    {
        id:5,
        name: "Pastel",
        quantidade: 3,
        preco: 6.10
    }
]

function ListaCompras(){
    return(
        <ul>
            {/* <li>Coca Cola</li>
            <li>Banana</li>
            <li>Doritos</li>
            <li>Cenoura</li>
            <li>Pastel</li>
            <li>Lasanha</li> */}
            {/* <li>{items[0].name}</li>
            <li>{items[1].name}</li>
            <li>{items[2].name}</li>
            <li>{items[3].name}</li>
            precisamos fazer isso de forma dinâmica, pode ser com for, while, foreach, map */}
            {
                items.map(item => {

                const precoTotal = (item.quantidade * item.preco).toFixed(2);

                return <li key={item.id}>{item.name} - R${precoTotal}</li>
})
            }
        </ul>
    )
}

export default ListaCompras;