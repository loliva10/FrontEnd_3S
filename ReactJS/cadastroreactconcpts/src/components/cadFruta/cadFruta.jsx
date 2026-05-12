import { useState } from "react";
import "./cadFruta.css"

function CadFruta() {
    // states, funções e variáveis

    // states do formulário
    const [fruta, setFruta] = useState("") // cria um state string vazia
    const [quantidade, setQuantidade] = useState("")
    const [arrFrutas, setArrFrutas] = useState([

        { id: 1, nome: "Abacaxi", quantidade: 10 },
        { id: 2, nome: "Mamão", quantidade: 20 },
    ]) // cria um state array vazio

    function Cadastrar(e) {
        e.preventDefault(); // evita o submit do formulário
        alert("Função Cadastrar OK!")
        // cadastra os dados no state
        setArrFrutas([...arrFrutas, { id: Date.now(), nome: fruta, quantidade: quantidade }]);

        limparFormulario() // Após cadastrar, limpar os dados do formulário
        return false;
    }

    // Limpa os states
    function limparFormulario () {
        setFruta("")
        setQuantidade(0)
    }

    // Adicione mais um campo para cadastro da quantidade de frutas
    // Cadastre a fruta com a quantidade
    return (
        <section className="sessao-cadastro">
            <h1>Cadastro</h1>
            <form action="" method="post" onSubmit={Cadastrar}>
                <fieldset className="cadastro">
                    <label htmlFor="fruta" className="cadastro__rotulo">Digite o nome da Fruta</label>
                    <input type="text" id="fruta" className="cadastro__entrada" onChange={(e) =>
                        setFruta(e.target.value)
                    } />
                    <label htmlFor="quantidade" className="cadastro__rotulo">Digite a quantidade</label>
                    <input type="number" id="quantidade" className="cadastro__entrada" onChange={(e) =>
                        setQuantidade(e.target.value)
                    } />
                    <button className="cadastro__btn-cadastrar">Cadastrar</button>
                    <br />
                    <label htmlFor="">{fruta}</label>
                </fieldset>
            </form>
            <ul className="listagem">
                {arrFrutas.map((f) => {
                    return <li key={f.id}>Fruta: {f.nome} | Quantidade: {f.quantidade}</li>;
                })}
            </ul>
        </section>
    );
}

export default CadFruta