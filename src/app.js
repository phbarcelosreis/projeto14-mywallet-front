import Rotas from "./route";
import { createContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle";
import { useState } from "react";

function App(){

    return(



        <Router>



                <GlobalStyle />

                <Rotas />

        </Router>
    )
}

export default App;