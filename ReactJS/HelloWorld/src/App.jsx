import './App.css';
import Titulo from './components/title/title';
import Paragrafo from './components/paragrafo/paragrafo'; 

function App() {
  return  (
    <>
      <Titulo textoTitulo="Bem Vindo, sou o título"/>
      <Titulo textoTitulo="Eu sou outro título"/>
      <Paragrafo textoParagrafo="Lorem Ipsun dolor!!"/>
    </>
  );
}

export default App;
// Cria um componente title
