import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Login from "../pages/login/login"
import CadastroFilme from "../pages/cadastroFilme/cadastroFilme"
import CadastroGenero from "../pages/cadastroGenero/cadastroGenero"

const Rotas = () => {
    return(
        <BrowserRouter>
            <nav>
                <Link to="/">Login</Link> {""}
                <Link to="/filme">Filmes</Link> {""}
                <Link to="/genero">Gêneros</Link> {""}
            </nav>
            <Routes>
                <Route element={<Login />} path="/" />
                <Route element={<CadastroFilme />} path="/filme" />
                <Route element={<CadastroGenero />} path="/genero" />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas