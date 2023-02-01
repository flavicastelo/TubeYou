import {
    ContainerPageRegister,
    ContainerPopUpRegister,
    TextTitleRegister,
    FormRegister,
    InputRegister,
    BtnEnterRegister,
    ContainerInput,
    BtnIconPassView,
    SpanIconPassView,
    IconPassView,
    ContainerLink,
    BtnLink,
} from "./styles";

import IconHide from "../../assets/hide.png";
import IconView from "../../assets/view.png";
import { React, useState, useEffect } from "react";
import axios from "axios";
import { Marker } from "../Login/styles";
import { useNavigate } from "react-router-dom"; 

export default function PopUpRegister() {
    const navigation = useNavigate();
    
    const [showPass, setShowPass] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [name, setName] = useState('');
    const [channel, setChannel] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [photo, setPhoto] = useState('');
    const [passVerify, setPassVerify] = useState(false);

    useEffect(() => {
        console.log(passVerify);
    }, [passVerify])


    useEffect(() => {
        if (password.length > 0) {
            if (password == confirmPass) {
                setPassVerify(true);
            } else {
                console.log("passVerify");
                setPassVerify(false);
            }
        }

    }, [password, confirmPass]);

    const handleShowPass = () => {
        const visibility = !showPass;
        setShowPass(visibility);
    }
    const handleShowConfirm = () => {
        const visibility = !showConfirm;
        setShowConfirm(visibility);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name: name,
            channel: channel,
            email: email,
            password: password,
            photo: photo,
        }
        if (passVerify) {
            axios.post('http://localhost:3000/api/register', data).then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.error(error);
            })

        }
        navigation("/");
    };


    return (
        <ContainerPageRegister>
            <ContainerPopUpRegister>
                <TextTitleRegister>Faça seu Cadastro</TextTitleRegister>
                <FormRegister>
                    <ContainerInput>
                        <InputRegister
                            placeholder="Digite seu nome de usuário"
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)} />
                    </ContainerInput>
                    <ContainerInput>
                    <InputRegister
                        placeholder="Digite o nome do canal"
                        type="text"
                        value={channel}
                        onChange={e => setChannel(e.target.value)} />
                    </ContainerInput>
                    <ContainerInput>
                    <InputRegister
                        placeholder="Digite seu e-mail"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                    </ContainerInput>
                   
                    <ContainerInput>
                        <InputRegister
                            placeholder="Digite sua senha"
                            type={showPass ? "text" : "password"}
                            required
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <SpanIconPassView>
                            <BtnIconPassView type="button" onClick={handleShowPass}>
                                <IconPassView src={showPass ? IconView : IconHide} />
                            </BtnIconPassView>
                        </SpanIconPassView>
                    </ContainerInput>
                    <ContainerInput>
                        <InputRegister
                            placeholder="Confirme sua senha"
                            type={showConfirm ? "text" : "password"}
                            required
                            value={confirmPass} onChange={e => setConfirmPass(e.target.value)}
                        />
                        <SpanIconPassView>
                            <BtnIconPassView type="button" onClick={handleShowConfirm}>
                                <IconPassView src={showConfirm ? IconView : IconHide} />
                            </BtnIconPassView>
                        </SpanIconPassView>
                    </ContainerInput>
                    <ContainerInput>
                        <InputRegister
                            placeholder="Adicione a url da sua foto"
                            type="text"
                            value={photo}
                            onChange={e => setPhoto(e.target.value)} />
                    </ContainerInput>
                    <BtnEnterRegister type="submit" onClick={handleSubmit}>Enviar</BtnEnterRegister>
                </FormRegister>
                <ContainerLink>
                    <BtnLink onClick={() => navigation("/")}>Página Inicial</BtnLink>
                    <Marker> | </Marker>
                    <BtnLink onClick={() => navigation("/login")}>Entrar</BtnLink>
                </ContainerLink>
            </ContainerPopUpRegister>
        </ContainerPageRegister>
    );
}