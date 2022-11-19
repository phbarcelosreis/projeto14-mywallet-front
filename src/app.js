import Rotas from "./route";
import { createContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle";
import { useState } from "react";

export const UserContext = createContext({});

function App(){

    const [token, setToken] = useState(null);


    return(



        <Router>
            <UserContext.Provider value={{token, setToken}}>


                <GlobalStyle />

                <Rotas />

            </UserContext.Provider>
        </Router>
    )
}

export default App;