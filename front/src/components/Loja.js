function Loja(props){
    return(
        <div className="col-sm m-2">
            <h3>{props.nome}</h3>
            <p> {props.rua}</p>
            <p>{props.andar} &ordm;</p>
            <p>{props.bairro}</p>
            <p>{props.telefone}</p>   
        </div>
    );
}

export default Loja;