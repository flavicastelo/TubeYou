import {
    ContainerPageLogin,
    ContainerPopUpLogin,
    TextTitleLogin,
    FormLogin,
    InputLogin,
    BtnEnterLogin,
    ContainerInput,
    LinkPage,
    ContainerLinkPage,
    ForgotPass,
    Marker,
    SpanIconView,
    BtnIconView,
    IconView
} from "./styles";
import axios from "axios";
import { React, useState, useEffect, useRef, useContext } from "react";
import IconHide from "../../assets/hide.png";
import IconViewImg from "../../assets/view.png";
import AuthContext from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { isLogged, login } from "../../../utils/auth";
import api from "../../../utils/api";

export default function PopUpLogin(onClosed) {
    const navigation = useNavigate();

    const { setAuth } = useContext(AuthContext);
    const emailRef = useRef();
    const erroRef = useRef();
    const [token, setToken] = useState('');
    const [showPass, setShowPass] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [erroMsg, setErroMsg] = useState('');

    useEffect(() => {
        emailRef.current.focus();
    }, []);
    useEffect(() => {
        setErroMsg('');
    }, [email, password]);

    const handleShowPass = () => {
        const visibility = !showPass;
        setShowPass(visibility);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            email: email,
            password: password,
        }

        axios.post('http://localhost:3000/api/auth/login', data,
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            }
        ).then(function (response) {
            setAuth({ email, password, token });
            setEmail('');
            setPassword('');
            login(response.data.token);
            localStorage.setItem('_id', response.data.response._id);
            navigation("/");
            window.location.reload();
        }).catch(function (error) {
            console.log(email, password);
            if (!error?.response) {
                setErroMsg('No Server Response');
            } else if (error.response?.status === 400) {
                setErroMsg('Missing Email or Password!');
            } else if (error.response?.status === 401) {
                setErroMsg('Unauthorized');
            } else {
                setErroMsg('Login Failed!');
            }
            erroRef.current.focus();
        });


    };
    return (
        <>
            <ContainerPageLogin>
                <ContainerPopUpLogin>
                    <TextTitleLogin>Faça seu Login</TextTitleLogin>
                    <FormLogin>
                        <ContainerInput>
                            <InputLogin
                                placeholder="Digite seu e-mail"
                                name="email"
                                type="text"
                                value={email}
                                ref={emailRef}
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                        </ContainerInput>
                        <ContainerInput>
                            <InputLogin
                                placeholder="Digite sua senha"
                                name="password"
                                type={showPass ? "text" : "password"}
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                            <SpanIconView>
                                <BtnIconView type="button" onClick={handleShowPass}>
                                    <IconView src={showPass ? IconViewImg : IconHide} />
                                </BtnIconView>
                            </SpanIconView>
                        </ContainerInput>
                        <BtnEnterLogin type="submit" onClick={handleSubmit}>Enviar</BtnEnterLogin>
                    </FormLogin>
                    <ForgotPass>Esqueci minha senha</ForgotPass>
                    <ContainerLinkPage>
                        <LinkPage onClick={() => navigation("/")}>Página Inicial</LinkPage>
                        <Marker> | </Marker>
                        <LinkPage onClick={() => navigation("/register")}>Cadastre-se</LinkPage>
                    </ContainerLinkPage>
                </ContainerPopUpLogin>
            </ContainerPageLogin>

        </>
    );
}