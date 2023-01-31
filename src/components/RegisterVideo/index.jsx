import { BtnEnterVideo, BtnInicio, ContainerInputVideo, ContainerPageVideo, ContainerPopUpVideo, FormVideo, InputVideo, TextTitleVideo } from "./styles";

import { React, useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import api from "../../../utils/api";

export default function RegisterVideo() {
    const navigation = useNavigate();
    const erroRef = useRef();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [postResult, setPostResult] = useState(null);
    const [erroMsg, setErroMsg] = useState('');
    const id = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');
        const idUser = localStorage.getItem('_id');

        const data = {

            title: title,
            url: url,
            description: description,
            thumbnail: thumbnail,
            idUser: idUser,

        }

        try {
            const response = await api.post("http://localhost:3000/api/videos/register", data, `Bearer ${token}`);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }

        navigation('/');


    };


    return (
        <ContainerPageVideo>
            <ContainerPopUpVideo>
                <TextTitleVideo>Cadastro de Vídeo do Canal</TextTitleVideo>
                <FormVideo>
                    <ContainerInputVideo>
                        <InputVideo
                            placeholder="Título do vídeo"
                            type="text"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                    </ContainerInputVideo>
                    <ContainerInputVideo>
                        <InputVideo
                            placeholder="Url do vídeo"
                            type="text"
                            value={url}
                            onChange={e => setUrl(e.target.value)}
                        />
                    </ContainerInputVideo>
                    <ContainerInputVideo>
                        <InputVideo
                            placeholder="Descrição do vídeo"
                            type="text"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </ContainerInputVideo>
                    <ContainerInputVideo>
                        <InputVideo
                            placeholder="Insira a url da Thumbnail do vídeo"
                            type="text"
                            value={thumbnail}
                            onChange={e => setThumbnail(e.target.value)}
                        />
                    </ContainerInputVideo>
                    <BtnEnterVideo type="submit" onClick={handleSubmit} >Enviar</BtnEnterVideo>
                </FormVideo>
                <BtnInicio onClick={() => navigation("/")}>Voltar ao Início</BtnInicio>
            </ContainerPopUpVideo>

        </ContainerPageVideo>
    );
}