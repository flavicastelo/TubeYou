import {
    ContainerPageEdit,
    ContainerPopUpEdit,
    TextTitleEdit,
    FormEdit,
    InputEdit,
    BtnEnterEdit,
    ContainerInputEdit,
    BtnIconPassView,
    SpanIconPassView,
    IconPassView,
    ContainerLink,
    BtnLink,
} from "./styles";

import IconHide from "../../assets/hide.png";
import IconView from "../../assets/view.png";
import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import api from "../../../utils/api";

export default function EditUser() {
    const navigation = useNavigate();
    
    const [showPass, setShowPass] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [photo, setPhoto] = useState('');
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
            photo: photo,
        }
        if (passVerify) {
            const id = localStorage.getItem('_id');
            const token = localStorage.getItem('token');
            try {
                const response = api.put(`users/update/${id}`, data, `Bearer ${token}`);
            } catch (error) {
                console.log(error);
            }

        }
        navigation("/");
        window.location.reload();
    };
  

    return (
        <ContainerPageEdit>
            <ContainerPopUpEdit>
                <TextTitleEdit>Edite suas informações</TextTitleEdit>
                <FormEdit>
                <ContainerInputEdit>
                        <InputEdit
                            placeholder="Adicionar Foto"
                            type="text"
                            value={photo}
                            onChange={e => setPhoto(e.target.value)} />
                    </ContainerInputEdit>
                    <ContainerInputEdit>
                        <InputEdit
                            placeholder="Digite seu nome de usuário"
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)} />
                    </ContainerInputEdit>
                    <ContainerInputEdit>
                    <InputEdit
                        placeholder="Digite o nome do canal"
                        type="text"
                        value={channel}
                        onChange={e => setChannel(e.target.value)} />
                    </ContainerInputEdit>
                    <ContainerInputEdit>
                    <InputEdit
                        placeholder="Digite seu e-mail"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                    </ContainerInputEdit>
                   
                    <ContainerInputEdit>
                        <InputEdit
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
                    </ContainerInputEdit>
                    <ContainerInputEdit>
                        <InputEdit
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
                    </ContainerInputEdit>
                    <BtnEnterEdit type="submit" onClick={handleSubmit}>Enviar</BtnEnterEdit>
                </FormEdit>
                <ContainerLink>
                    <BtnLink onClick={() => navigation("/")}>Página Inicial</BtnLink>
                </ContainerLink>
            </ContainerPopUpEdit>
        </ContainerPageEdit>
    );
}