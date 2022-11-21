import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const App = styled.div`
    box-sizing: border-box;
    width: 375px;
    height: 667px;
    background: #8C11BE;
    display: flex;
    flex-direction: column;
    padding: 25px 24px 0px 24px;
    & h1{

        width: 168px;
        height: 31px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
        margin-bottom: 40px;
    }
`

const Buttons  = styled.form`
    gap: 13px;
    display: flex;
    flex-direction: column;
    & input{
        box-sizing: border-box;
        padding: 15px 16px;
        width: 326px;
        height: 58px;
        background: #FFFFFF;
        border-radius: 5px;
        border: none;
    } & button{
        width: 326px;
        height: 46px;
        background: #A328D6;
        border-radius: 5px;
        border: none;
        cursor:pointer;
    } & h2{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;
    } & input::placeholder{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #000000;
    }
`

function Entrada() {

    const [value, setValue] = useState();
    const [description, setDescription] = useState("");

    const Api = "http://localhost:5000/entry"
    const navegar = useNavigate();

    const email = localStorage.getItem("email");
    const emailOBJ = JSON.parse(email);

    function Postar(){

        const balance = {
            value,
            description,
            email: emailOBJ
        }

        const promessa = axios.post(Api, balance);
        promessa.then(() => navegar("/home"));
        promessa.catch((err) => console.log(err.data))

    }

    function Cadastrar(e){
        e.preventDefault();
        Postar();
    }

    return (
        <App>
            <h1>
                Nova Entrada
            </h1>
            <Buttons onSubmit={Cadastrar}>
                <input onChange={(e) => setValue(e.target.value)} type="text" placeholder="Valor" />
                <input onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Descrição" />
                <button type="submit"><h2>Salvar Entrada</h2></button>
            </Buttons>
        </App>
    )

}

export default Entrada;