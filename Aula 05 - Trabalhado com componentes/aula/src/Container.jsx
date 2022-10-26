function Container(props){
    return(
        <div style={{background:'black', color:'white'}}>
            {/* <h1>{props.title}</h1> */}
            {props.children}
        </div>
    )
}

export default Container;

/*dados isolados você usa props, para estilização pode usar children (ou seja tu passa como filho oq precisa mudar)
nesse caso posso ter um container com foto e titulo e outro só com texto
*/