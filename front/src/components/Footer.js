import '../css/Footer.css';

function Footer(props){
    {/* <div className="row">
        <div className="col-sm-12 text-center text-danger"><h4>{props.title}</h4></div>
        <div className="col-sm-12 text-center"><img src={ require('../img/'+props.img).default } width="300px" alt="Formas de pagamento"/></div>
        <div className="col-sm-12 text-center text-monospace"><span>&copy; {props.footer}</span></div>
    </div> */}
    return(  
        <footer className="rodape">
            <p className="formaDePagamento">{props.title}</p>
            <img className="mb-5" src={ require('../img/'+props.img).default } width="300px" alt="Formas de pagamento"/>
            <p className="copyFooter">&copy; {props.footer}</p>
        </footer>
    );
}

export default Footer;