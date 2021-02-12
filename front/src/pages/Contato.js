import React from 'react';
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import '../css/Contato.css';
import axios from "axios";

export default class Contato extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nome:'',
            msg: '',
            comentarios:[]
        }

        this.setComentario = this.setComentario.bind(this);
        this.getInput = this.getInput.bind(this);
        this.getComentarios = this.getComentarios.bind(this);
    }


    componentDidMount(){
        this.getComentarios();
    }

    getComentarios(){
        fetch("http://localhost:5002/comentarios")
        // fetch("http://localhost/react/api/index.php?tabela=comentarios")
        .then(( response ) => response.json())
        .then(( responseJson ) =>
        {
            this.setState({
                comentarios: responseJson
            });
        })
    }

    setComentario(e){
        axios.post(`http://localhost:5002/comentario/`, { nome: this.state.nome, msg: this.state.msg })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
        // fetch("http://localhost:5002/comentario/",//nosql
        // fetch("http://localhost:5001/comentario/"+this.state.nome+"/"+this.state.msg,//nosql
        // fetch("http://localhost/react/api/setComentario.php?nome="+this.state.nome+"&msg="+this.state.msg,
        //  {mode:"no-cors"});
        // e.preventDefault();
        // fetch("http://localhost:5002/comentario/",
        // {
        //     method: 'post',
        //     headers: {
        //       'Accept': 'application/json, text/plain, */*',
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({nome: this.state.nome, msg: this.state.msg})
        //   })
        // .then(res=>res.json())
            // .then(res => console.log(res));
    }

       
    getInput(e){
        let nam = e.target.name;
        let val = e.target.value;
        this.setState({[nam]: val});
    }

    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 p-0">
                        <Menu />
                    </div>
                </div>
                <div className="row ">
                    <div className="col-sm-12 mt-10 p-0 mx-0 justify-content-center ">
                        <h2 className="mt-3">Fale Conosco</h2>
                    </div>
                </div>
                <div className="row mt-10">
                    <div className="col-sm-6 d-flex justify-content-center">
                            <img src={ require('../img/email.png').default } alt="icone de email" width="50px"/>
                            <p>fullstack@eletro.com</p>
                    </div>
                    <div className="col-sm-6 d-flex  justify-content-center">
                            <img src={ require('../img/wpp.png').default }  alt="icone de whatsapp" width="50px"/>
                            <p>21 4932-4564</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm">

                        <form id="frmContato"  onSubmit={this.setComentario} className=" m-4">
                            
                            <div className="form-row justify-content-center">
                                <div className="col-7 form ">
                                    
                                    <div className="form-group">
                                        <label htmlFor="nome">Nome:</label>
                                        <input type="text" id="nome" name="nome" onChange={this.getInput} className="form-control"/>
                                    </div>
                        
                                    <div className="form-group">
                                        <label htmlFor="msg">Mensagem:</label>
                                        <textarea type="text"  id="msg" name="msg" onChange={this.getInput} className="form-control"></textarea>
                                    </div>
                                    
                                    <input type="submit" value="Enviar" className="btn btn-danger"/>
                                </div>
                            </div>

                        </form>

                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                    <h5>Comentários</h5>
                    <div className="table-responsive ">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Comentário</th>
                                    <th scope="col">Data de Comentário</th>
                                </tr>
                            </thead>
                            <tbody>
                                { 
                                    this.state.comentarios.map(
                                    comentario => 
                                    {
                                        return( 
                                            <tr>
                                                <th scope="row" >{comentario.id_contato}</th>
                                                <td>{comentario.nome}</td>
                                                <td>{comentario.msg}</td>
                                                <td>{comentario.data_cadastro}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                        
                        
                        
                        {/* <h5>Comentários</h5>
                        { this.state.comentarios.map(
                                    comentario => 
                                    {
                                        console.log(this.state.comentario);
                                        if(this.state.comentarios === null){
                                            return <h3>Não há comentários cadastrados.</h3>
                                        }else{
                                            return <Comentario data = { comentario }/>
                                        }
                                    }
                                )} */}
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 p-0">
                        <Footer img='pagamento.jpg' title="Formas de Pagamento"  footer="Recode Pro"/>
                    </div>
                </div>
            </div>
        );
    }
}
