import "./App.css";
import Saudacao from "./components/exercicio01/saudacao";
import Produto from "./components/exercicio02/produto";
import Perfil from "./components/exercicio03/perfil";
import Botao from "./components/exercicio04/botao";
import Filme from "./components/exercicio05/filme";
import Aluno from "./components/exercicio06/aluno";
import MyComponent from "./components/children/mycomponent";
import Contato from "./components/exercicio08/contato";
import { Card } from "./components/exercicio07/card";
import Jogo from "./components/exercicio09/jogo";
import ItemLoja from "./components/exercicio10/itemloja";
import Pessoa from "./components/desafio/pessoa";

import img1 from "./assets/react.svg";
import img2 from "./assets/vite.svg";

const App = () => {
  const pessoas = [
    {
      id: 1,
      nome: "Luis Oliva",
      idade: 17,
      profissao: "Engenheiro de Software"
    },
    {
      id: 2,
      nome: "Beatriz Yusmy",
      idade: 18,
      profissao: "Médica"
    },
  ]

  const contatos = [
    {
      id: 1,
      nome: "Luis Oliva",
      telefone: 11985853772,
      email: "lfernandooliva@icloud.com"
    },
    {
      id: 2,
      nome: "Beatriz Yusmy",
      telefone: 11983828240,
      email: "beatrizyusmi467@gmail.com"
    },
  ]

  const pessoa = [
    {
      id: 1,
      nome: "Luis",
      idade: 17,
      cidade: "São Paulo",
      foto: img1
    },

    {
      id: 2,
      nome: "Beatriz",
      idade: 18,
      cidade: "Rio de Janeiro",
      foto: img2
    }
  ];

  return (
    <>
      {/* 01 */}
      <Saudacao nome="Luis" />

      {/* 02 */}
      <Produto
        nome="iPhone 17 Pro Max"
        preco={7890.35}
        descricao="Celular de última geração"
      />

      {/* 03 */}
      {
        pessoas.map((p) => {
          return <Perfil
            key={p.id}
            nome={p.nome}
            idade={p.idade}
            profissao={p.profissao}
          />
        })
      }

      {/* 04 */}
      <Botao texto="Cadastrar!" cor="green" />
      <Botao texto="Excluir" cor="red" />

      {/* 05 */}
      <Filme
        titulo="Velozes e Furiosos 9"
        ano={2017}
        genero="Ação"
        nota={9.922}
      />

      {/* 06 */}
      <Aluno
        nome="Luis Oliva"
        curso="Desenvolvimento de Sistemas"
      />

      {/* 07 */}
      <Card>
        <Botao texto="Cadastrar!" cor="green" />
        <Botao texto="Excluir" cor="red" />
        <p>Lorem Ipsum dolor</p>
      </Card>

      {/* 08 */}
      {
        contatos.map((c) => (
          <Contato
            key={c.id}
            nome={c.nome}
            telefone={c.telefone}
            email={c.email}
          />
        ))
      }

      {/* 09 */}
      <Jogo
        nome="Red Dead Redemption 2"
        plataforma="PS5"
        preco={299.950}
      />

      {/* 10 */}
      <ItemLoja
        nome="Notebook Gamer"
        preco={4500}
        categoria="Tecnologia"
        estoque={10}
      />

      {/* desafio */}
      {
        pessoa.map((p) => (
          <Pessoa
            key={p.id}
            nome={p.nome}
            idade={p.idade}
            cidade={p.cidade}
            foto={p.foto}
          />
        ))
      }
    </>
  );
}

export default App;