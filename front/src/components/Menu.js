import React from 'react';
import { Link } from "react-router-dom";
import '../css/Menu.css'



export default class Menu extends React.Component{
    render(){
        return(
                <nav className="navbar navbar-expand-lg navbar-light menu" >
                    <Link to="/" className="navbar-brand">
                        <img src={require('../img/logo.png').default } alt="logo full stack eletro" width="150px"/>
                    </Link>
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
        
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item active">
                                <Link to='/produtos'  className="nav-link text-white">Nossos Produtos</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/lojas" className="nav-link text-white">Nossos Lojas</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/contato" className="nav-link text-white">Fale Conosco</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
        );
    }
}