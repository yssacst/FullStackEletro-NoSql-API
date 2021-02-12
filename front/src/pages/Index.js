// import Footer from "../components/Footer";
// import Menu from "../components/Menu";
// import Carrosel from "../components/Carrosel";
import '../css/Index.css';

import {lazy, Suspense} from 'react';

const Carrosel = lazy(() => import('../components/Carrosel'));
const Footer = lazy(() => import('../components/Footer'));
const Menu = lazy(() => import('../components/Menu'));



function Index(){
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 p-0">
                <Suspense fallback={ <p>Carregando...</p> }>
                    <Menu />
                </Suspense>
                </div>
            </div>
            <div className="row ">
                <div className="col-sm-12 mt-10 p-0 mx-0 justify-content-center ">
                
                    <h1>Seja bem vindo(a)!</h1>
                    
                    <Suspense fallback={ <p>Carregando...</p> }>
                         <Carrosel img1={require('../img/blackfriday.webp').default} img2={require('../img/ofertageladeira.jpg').default} img3={require('../img/ofertafogao.jpg').default} />
                    </Suspense>

                    <p>Aqui em nossa loja, programadores tem desconto nos produtos para sua casa!</p>  
                </div>
            </div>

          <div className="row">
                <div className="col-sm-12 p-0">
                <Suspense fallback={ <p>Carregando...</p> }>
                    <Footer img='pagamento.jpg' title="Formas de Pagamento"  footer="Recode Pro"/>
                </Suspense>
                </div>
            </div>
        </div>
    );
}

export default Index;