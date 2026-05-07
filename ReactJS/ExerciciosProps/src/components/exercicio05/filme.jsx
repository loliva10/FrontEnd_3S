import "./filme.css";

const Filme = ({titulo, ano, genero, nota}) => {
    return (
        <p className="filme">
            Título: {titulo} <br />
            Ano: {ano} <br />
            Gênero: {genero} <br />
            Nota: {nota.toFixed(2)}
        </p>
    );
}

export default Filme