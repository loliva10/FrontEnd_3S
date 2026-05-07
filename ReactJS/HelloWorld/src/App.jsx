import './App.css';
import Paragrafo from "./components/paragrafo/paragrafo";
import Title from "./components/title/title";

function App() {
  return (
    <>
      <Title nome="Luis" sobrenome="Oliva" texto="Bem vindo, sou o título"/>
      <Title texto="Eu sou o titulo"/>
      <Paragrafo textoParagrafo="Este é o texto do paragráfo"/>
    </>   
  );
}

export default App;