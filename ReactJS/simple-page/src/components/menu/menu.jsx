import "./menu.css";
import Cardperfil from "../cardperfil/cardperfil";

function Menu() {
    return (
        <nav className="mae">
        <a href="#" className="mae__filho">Home</a>
        <a href="#" className="mae__filho">Quem Somos</a>
        <a href="#" className="mae__filho">Contato</a>
        <a href="#" className="mae__filho mae__filho--sucess">Entrar</a>
        <a href="#" className="mae__filho mae__filho--button-default">Cadastrar</a>

        {/* colocar o cardperfil aqui!*/}
        <Cardperfil/>
    </nav> 
    );   
}

export default Menu;