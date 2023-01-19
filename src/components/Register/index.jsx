import {
    ContainerPageRegister,
    ContainerPopUpRegister,
    TextTitleRegister,
    FormRegister,
    LabelRegister,
    InputRegister,
    BtnEnterRegister,
    BtnClose,
    ContainerInput,
    ContainerIconPassView,
    BtnIconPassView,
    SpanIconPassView,
    IconPassView,
} from "./styles";

import IconHide from "../../assets/hide.png";
import IconView from "../../assets/view.png";
import { React, useState, useEffect } from "react";
import axios from "axios";

export default function PopUpRegister(onClosed = () => {}) {
    const [showPass, setShowPass] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [name, setName] = useState('');
    const [channel, setChannel] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
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
        }
        if (passVerify) {
            axios.post('http://localhost:3000/api/register', data).then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.error(error);
            })

        }
    };


    return (
        <ContainerPageRegister>
            <ContainerPopUpRegister>
                <BtnClose onClick={onClosed}>X</BtnClose>
                <TextTitleRegister>Faça seu Cadastro</TextTitleRegister>
                <FormRegister>
                    <ContainerInput>
                        <LabelRegister>Nome de Usuário</LabelRegister>
                        <InputRegister type="text" value={name} onChange={e => setName(e.target.value)} />
                        <LabelRegister>Nome do Canal</LabelRegister>
                        <InputRegister type="text" value={channel} onChange={e => setChannel(e.target.value)} />
                        <LabelRegister>E-mail</LabelRegister>
                        <InputRegister type="email" value={email} onChange={e => setEmail(e.target.value)} />
                        <LabelRegister>Senha</LabelRegister>
                        <ContainerIconPassView>
                            <InputRegister
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
                        </ContainerIconPassView>
                        <LabelRegister>Confirmar a senha</LabelRegister>
                        <ContainerIconPassView>
                            <InputRegister
                                type={showConfirm ? "text" : "password"}
                                required
                                value={confirmPass} onChange={e => setConfirmPass(e.target.value)}
                            />
                            <SpanIconPassView>
                                <BtnIconPassView type="button" onClick={handleShowConfirm}>
                                    <IconPassView src={showConfirm ? IconView : IconHide} />
                                </BtnIconPassView>
                            </SpanIconPassView>
                        </ContainerIconPassView>

                    </ContainerInput>
                    <BtnEnterRegister type="submit" onClick={handleSubmit}>Enviar</BtnEnterRegister>
                </FormRegister>
            </ContainerPopUpRegister>
        </ContainerPageRegister>
    );
}