import React from 'react';
import '../css/Produtos.css';

export default class cardProduto extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="boxProduto text-center">
                <div className="card">
                    <img className="card-img-top" src={require('../img/'+this.props.data.nome_imagem).default} alt={ "Imagem da " + this.props.data.descricao} />
                    <div className="card-header">
                        <p>{this.props.data.descricao}</p>
                    </div>
                    <div className="card-body">
                        <p><small><strike>R$ {this.props.data.preco}</strike></small></p>
                        <h5 className="text-danger">R$ {this.props.data.preco_venda}</h5>
                    </div>
                </div>
            </div>
        );
    }
}
