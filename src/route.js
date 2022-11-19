import { Routes, Route } from "react-router-dom";
import Login from "./paginas/Login/login";
import Cadastro from "./paginas/Cadastro/cadastro"
import Home from "./paginas/TelaInicial/home"


function Rotas() {

    return (

        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/sign-up" element={<Cadastro />} />
            <Route path="/home" element={<Home />} />
        </Routes>

    )

}

export default Rotas;