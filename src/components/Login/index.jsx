import {
    ContainerPageLogin,
    ContainerPopUpLogin,
    TextTitleLogin,
    FormLogin,
    LabelLogin,
    InputLogin,
    BtnEnterLogin,
    BtnClose,
    ContainerInput,
    ForgotPass,
    ImgLogin,
} from "./styles";
import ImageLogin from "../../assets/userlogin.png";
import axios from "axios";
import { React, useState, useEffect, useRef, useContext } from "react";
import IconHide from "../../assets/hide.png";
import IconView from "../../assets/view.png";
import AuthContext from "../../context/AuthProvider"


export default function PopUpLogin(onClosed) {
    const { setAuth } = useContext(AuthContext);
    const emailRef = useRef();
    const erroRef = useRef();
    const [accessToken, setAccessToken] = useState('');
    const [showPass, setShowPass] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(false);
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
                setAccessToken(response?.data?.accessToken);
                console.log(response);
            }).catch(function(error){
                console.log(email, password);
            if(!error?.response){
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
            
            setAuth({email, password, accessToken});
            setEmail('');
            setPassword('');
            setSuccess(true);
        

    };

    return (
        <>
            {success ? (<h1>SUCESSO!</h1>) : (

                <ContainerPageLogin>
                    <ContainerPopUpLogin>
                        <BtnClose onClick={onClosed}>X</BtnClose>
                        <ImgLogin src={ImageLogin} />
                        <TextTitleLogin>Faça seu Login</TextTitleLogin>
                        <FormLogin>
                            <ContainerInput>
                                <LabelLogin>E-mail</LabelLogin>
                                <InputLogin
                                    type="text"
                                    value={email}
                                    ref={emailRef}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                />
                                <LabelLogin>Senha</LabelLogin>
                                <InputLogin
                                    type="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    required
                                />
                            </ContainerInput>
                            <BtnEnterLogin type="submit" onClick={handleSubmit}>Enviar</BtnEnterLogin>
                        </FormLogin>
                        <ForgotPass>Esqueci minha senha</ForgotPass>
                    </ContainerPopUpLogin>
                </ContainerPageLogin>)}
        </>
    );
}