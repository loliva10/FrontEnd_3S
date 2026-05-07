import "./produto.css";

const Produto = ({nome, preco, descricao}) => {
    return (
        <div className="produto">
            <p>
                Produto: {nome} <br />
                Preço: R${preco.toFixed(2)} <br />
                Descrição: {descricao}
            </p>
        </div>
    );
}

export default Produto;