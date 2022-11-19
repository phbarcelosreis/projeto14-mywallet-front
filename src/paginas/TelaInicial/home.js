import styled from "styled-components";
import Logout from "../../assets/images/logout.png"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../app";


const App = styled.div`
    box-sizing: border-box;
    width: 375px;
    height: 667px;
    background: #8C11BE;
    display: flex;
    flex-direction: column;
    padding: 25px 25px 16px 24px;
    & .header {
        display: flex;
        width: 100%;
        height: 31px;
        align-items: center;
        justify-content: space-between;
    } & h1{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;

    } & .logout{
        height: 24px;
        width: 23px;
        cursor: pointer;
    } & .payScreen{
        margin-top: 22px;
        width: 326px;
        height: 446px;
        background: #FFFFFF;
        border-radius: 5px;
    } & .payScreen h1{
        color: black;
    }   
`

const List = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 23px 12px 10px 12px;
    & .entry{
        display: flex;
        justify-content: space-between;
    } & h1{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
    } & .dateName{
        display: flex;
        gap: 5px;
    } & .balance{
        height: 390px;
        align-items: flex-end;
        display: flex;
        justify-content: space-between;
    } & .balance h1:nth-child(1){
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #000000;
    } & .balance h1:nth-child(2){
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;
        color: #03AC00;
    }

`


function Home() {

    const { token } = useContext(UserContext);

    const user = "Pedro";
    const teste = ["oi"];

    const navegar = useNavigate();

    function Testes(e) {
        e.preventDefault();
        navegar("/")
    }

    if(token !== null){
        return (

            <App>
                <div className="header">
                    <h1>Olá, {user}</h1>
                    <img onClick={Testes} className="logout" src={Logout} alt="LogoutIcon" />
                </div>
                <div className="payScreen">
                    <div>
                        {teste.length === 0 ?
                            <h1>Não há registros de entrada ou saída</h1> :
                            teste.map(() =>
                                <List>
                                    <div className="entry">
                                        <div className="dateName">
                                            <h1>
                                                23/10
                                            </h1>
                                            <h1>
                                                Almoçar
                                            </h1>
                                        </div>
                                        <h1 className="value">
                                            23,30
                                        </h1>
                                    </div>
                                    <div className="balance">
                                        <h1>
                                            SALDO
                                        </h1>
                                        <h1>
                                            {21 + 23}
                                        </h1>
                                    </div>
                                </List>
                            )
                        }
                    </div>
                </div>
    
            </App>
    
        )
    }



}

export default Home;