import "./perfil.css";

const Perfil = ({nome, idade, profissao}) => {
    return (
        <div className="perfil">
            <p>
                Nome: {nome} <br />
                Idade: {idade} anos <br />
                Profissão: {profissao}
            </p>
        </div>
    );
}

export default Perfil