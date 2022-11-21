import { Routes, Route } from "react-router-dom";
import Login from "./paginas/Login/login";
import Cadastro from "./paginas/Cadastro/cadastro"
import Home from "./paginas/TelaInicial/home"
import Entrada from "./paginas/Entrada/entrada"
import Saida from "./paginas/Saída/saida"


function Rotas() {

    return (

        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/sign-up" element={<Cadastro />} />
            <Route path="/home" element={<Home />} />
            <Route path="/entrada" element={<Entrada />} />
            <Route path="/saida" element={<Saida />} />
        </Routes>

    )

}

export default Rotas;