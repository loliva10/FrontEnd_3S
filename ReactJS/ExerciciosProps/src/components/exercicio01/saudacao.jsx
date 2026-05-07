import "./saudacao.css";

const Saudacao = ({nome}) => {
    return (
        <p className="saudacao">Olá, {nome}! Seja bem-vindo(a) amigo(a)!</p>
    );
}

export default Saudacao;