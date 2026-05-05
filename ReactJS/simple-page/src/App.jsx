import './App.css';

function App() {
  return (
    //<!-- block/bloco/componente -->
    <nav className="menu">
        <a href="#" className="menu__item">Home</a>
        <a href="#" className="menu__item">Quem Somos</a>
        <a href="#" className="menu__item">Contato</a>
        <a href="#" className="menu__item menu__item--sucess">Entrar</a>
        <a href="#" className="menu__item menu__item--button-default">Cadastrar</a>
    </nav>    
  );
}

export default App;