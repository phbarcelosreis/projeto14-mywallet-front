import styled from "styled-components";
import axios from "axios";
import Logo from "../../assets/images/MyWallet.png"
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

const App = styled.form`
    box-sizing: border-box;
    padding-top: 95px;
    width: 375px;
    height: 667px;
    background: #8C11BE;
    display: flex;
    flex-direction: column;
    align-items: center;
    & img{
        width: 147px;
        height: 30px;
    } & input{
        width: 326px;
        height: 58px;
        left: 25px;
        top: 233px;
        background: #FFFFFF;
        border-radius: 5px;
        border: none;
    } & > :nth-child(2){
        margin-top: 24px;
    } & > :nth-child(3), > :nth-child(4), > :nth-child(5), > :nth-child(6){
        margin-top: 13px;
    } & button{
        width: 326px;
        height: 46px;
        background: #A328D6;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        margin-bottom: 36px;
    } & h1{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;
    } & p{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
    }
`


function Cadastro() {

    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState();
    const [confirm, setConfirm] = useState();  

    const Api = "localhost/5000/users"
    const navegar = useNavigate();

    function Cadastrando(){

        if(password === confirm){
            const user = {
                email: email,
                name: user,
                password: password
            }
    
            const promessa = axios.post(Api, user);
            promessa.then(() => navegar("/"));
            promessa.catch((props) => alert(props.response.data.message));
        } else{
            alert("As senhas não coincidem! Por favor insira novamente!");
        }


    }




    function Cadastrar(props){
        props.preventDefault();
        Cadastrando();
    }

    return (
        <App onSubmit={Cadastrar}>
            <img src={Logo} alt="Logo" />
            <input onChange={(e) => setUser(e.target.value)} type="text" placeholder="Nome" required/>
            <input onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" type="email" required />
            <input onChange={(e) => setPassword(e.target.value)} placeholder="Senha" type="password" required/>
            <input onChange={(e) => setConfirm(e.target.value)} placeholder="Confirme a senha" type="password" required/>
            <button type="submit"><h1>Cadastrar</h1></button>
            <Link to="/"><p>Já tem uma conta? Entre agora!</p></Link>
        </App>
    )


}

export default Cadastro;