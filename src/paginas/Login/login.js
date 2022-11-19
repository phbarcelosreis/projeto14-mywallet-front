import styled from "styled-components";
import Logo from "../../assets/images/MyWallet.png"
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useState, useContext } from "react";
import { UserContext } from "../../app";


const App = styled.form`
    box-sizing: border-box;
    padding-top: 159px;
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
    } & > :nth-child(3), > :nth-child(4){
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

function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const Api = "http://localhost:5000/users";
    const navegar = useNavigate();
    const { setToken, token } = useContext(UserContext);

    function CheckLogIn() {

        const user = {
            email: email,
            password: senha
        }

        const promessa = axios.post(Api, user)
        promessa.then(
            (props) => {
                setToken(props.data._id);
                navegar("/home")
            }

        );
        promessa.catch((err)=> err.props);

    }

    function LogIn(props) {
        props.preventDefault();
        CheckLogIn();
    }

    return (
        <App onSubmit={LogIn}>
            <img src={Logo} alt="Logo" />
            <input onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" type="email" required />
            <input onChange={(e) => setSenha(e.target.value)} placeholder="Senha" type="password" required/>
            <button><h1>Entrar</h1></button>
            <Link to="/sign-up"><p>Primeira vez? Cadastre-se!</p></Link>
        </App>
    )


}

export default Login;