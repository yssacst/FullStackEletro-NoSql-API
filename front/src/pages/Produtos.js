import React from 'react';
import CardProduto from '../components/CardProduto';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import '../css/Produtos.css'

export default class Produtos extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            produtos: [],
            categoria:'todos',
            categorias:[]
        }
        this.getCategoria = this.getCategoria.bind(this);
        this.exibirProdutos = this.exibirProdutos.bind(this);
    }
    
    componentDidMount(){
       this.exibirProdutos();
       this.exibirCategoria();
    }

    exibirProdutos(){
        fetch("http://localhost:5002/produtos")//noqsl
        // fetch("http://localhost/react/api/index.php?tabela=produtos")
        .then(( response ) => response.json())
        .then(( responseJson ) =>
        {
            this.setState({
                produtos: responseJson
            });
        })
    }
    
    exibirCategoria(){
        fetch("http://localhost:5002/categorias")//nosql
        // fetch("http://localhost/react/api/index.php?tabela=categorias")
        .then(( response ) => response.json())
        .then(( responseJson ) =>
        {
            this.setState({
                categorias: responseJson,
                categoria:'todos'
            });
        })
    }

    getCategoria(e){
        let categoria = e.target.value;
        console.log(categoria);

        if(categoria === 'todos'){
            this.setState({
                categoria:'todos'
            });

            this.exibirProdutos();
        }else{
            fetch("http://localhost:5002/categorias?tipo=" + categoria)//nosql


            // fetch("http://localhost:5002/categorias/" + categoria)//nosql
            // fetch("http://localhost/react/api/index.php?tabela=categorias&categoria=" + categoria)
            .then(( response ) => response.json())
            .then(( responseJson ) =>
            {
                this.setState({
                    produtos: responseJson,
                    categoria: categoria
                });
            })
        }
    }
    
    render(){
        return(
            <div className="container-fluid">
                
                <div className="row">
                    <div className="col-12 p-0">
                        <Menu />
                    </div>
                </div>
                
                <div className="row mt-10">
                    <div className="col-sm-12">
                        <h3 className="mt-3 mb-3">Produtos</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-3">
                        <div className="list-group">
                        { this.state.categorias.map(
                            categoria => 
                            {
                                return <button type="button" className="list-group-item list-group-item-action" value={categoria.chave} onClick={this.getCategoria } >{categoria.nome} ({categoria.qtd})</button>
                            })
                        }
                            <button type="button" className="list-group-item list-group-item-action" value='todos' onClick={this.getCategoria }>Todos</button> 

                         </div>
                    </div>

                    <div className="col-sm col-9 p-0">
                        { this.state.produtos.map(
                            produto => 
                            {
                                if(this.state.categoria === "todos"){
                                    return <CardProduto data = { produto }/>
                                }else{
                                    return <CardProduto data = { produto }/>
                                }
                            }
                        )}
                </div>
            </div>
                <div className="row">
                    <div className="col-12 p-0">
                    <Footer img='pagamento.jpg' title="Formas de Pagamento" footer="Recode Pro"/>
                    </div>
                </div>
            </div>
        );
    }

}