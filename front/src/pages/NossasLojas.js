import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Loja from '../components/Loja';
import '../css/Loja.css';

export default class NossasLojas extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 p-0">
                        <Menu />
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-sm-12 mt-10 ">
                        <h2 className="mt-3">Nossas Lojas</h2>        
                    </div>
                </div>

                <div className="row mt-5">
                        <Loja nome="Rio de Janeiro" rua="Rua Luigi Galvani, 70" andar="4" bairro="Centro" telefone="(21) 4004-4044"/>  
                        <Loja nome="São Paulo" rua="Rua Joanes Petroni, 102" andar="6" bairro="Centro" telefone="(21) 3005-6522"/>  
                        <Loja nome="Santa Catarina" rua="Rua Louvre Senior, 920" andar="2" bairro="Centro" telefone="(21) 3658-1287"/>  
                </div>
                <div className="row">
                    <div className="col-sm-12 mt-5 p-0">
                      <Footer img='pagamento.jpg' title="Formas de Pagamento"  footer="Recode Pro"/>
                    </div>
                </div>
            </div>
        );
    }
}