import { BodyExpanded, ChannelExpanded, ContainerExpanded, CountLike, DatePostExpanded, DescriptionDiv, DescriptionTxt, DivExpanded, DivInfos, DivTitle, ImgLike, InputMostrarMais, LabelMostrarMais, LikeBtn, MainExpanded, TitleExpanded, VideoExpanded, ViewsExpanded } from "./styles";
import React, { useState } from "react";
import api from "../../../utils/api";
import { useEffect } from "react";
import likeImg from "../../assets/like.png";
import HeaderComponent from "../Header";

export default function ExpandedVideo() {
    const [videos, setVideos] = useState([]);
    const [counter, setCounter] = useState(0);
    const [viewsCount, setViewsCount] = useState(0);
    const [idUser, setIdUser] = useState('');
    const [channel, setChannel] = useState('');
    const [url, setUrl] = useState('');

    const getVideo = async () => {
        const id = localStorage.getItem("idVideo");
        try {
            const response = await api.get(`/videos/${id}`);
            const data = response.data;
            setVideos(data);
            setCounter(data.like);
            localStorage.setItem("idUser", data.idUser);
            setViewsCount(data.views + 1);
            putViews();
            setUrl(response.data.url.split("=")[1]);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getVideo();
    }, []);

    useEffect(() =>{
        console.log("urlUseEffect",url);
    }, [url]);

    const getChannel = async () => {
        const token = localStorage.getItem('token');
        const id = localStorage.getItem('idUser');
        try {
            const response = await api.get(`/users/${id}`);
            const data = response.data;
            setChannel(data.channel);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getChannel();
    }, []);

    const putViews = async () => {
        const data = {
            views: viewsCount,
        }
        const id = localStorage.getItem('idVideo');
        const token = localStorage.getItem('token');
        try {
            const response = await api.put(`videos/update/${id}`, data, `Bearer ${token}`);

        } catch (error) {
            console.log(error);
        }
    }
    // useEffect(() => {
    //     putViews();
    // }, []);

    const setLike = async () => {
        const data = {
            like: counter + 1,
        }
        console.log(data);
        const id = localStorage.getItem("idVideo");
        const token = localStorage.getItem('token');
        try {
            const response = await api.put(`/videos/update/${id}`, data, `Bearer ${token}`);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        setLike();
    }, []);

    function dateFormat(createdAt) {
        var data = new Date(createdAt),
            dia = data.getDate(createdAt).toString(),
            diaF = (dia.length == 1) ? '0' + dia : dia,
            mes = (data.getMonth(createdAt) + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
            mesF = (mes.length == 1) ? '0' + mes : mes,
            anoF = data.getFullYear(createdAt);
        return diaF + "/" + mesF + "/" + anoF;
    }
    console.log(videos);

    function countLikes() {
        setCounter(counter + 1);
        console.log("contador: ", counter);
        setLike();
    }
    return (
        <ContainerExpanded>
            <HeaderComponent />
            <MainExpanded>
                <DivExpanded></DivExpanded>
            
                {videos ? (
                    <BodyExpanded>
                        <VideoExpanded src={url && `https://www.youtube.com/embed/${url}`} allowfullscreen></VideoExpanded>
                        <DivTitle>
                            <TitleExpanded>{videos.title}</TitleExpanded>
                            <LikeBtn onClick={() => { countLikes() }}><ImgLike src={likeImg} /><CountLike>{counter}</CountLike></LikeBtn>
                        </DivTitle>
                        <ChannelExpanded>{channel}</ChannelExpanded>
                        <DivInfos>
                            <ViewsExpanded>{videos.views} visualizações</ViewsExpanded>
                            <DatePostExpanded>Postado em {dateFormat(videos.createdAt)}</DatePostExpanded>
                        </DivInfos>
                        <DescriptionDiv>
                            <InputMostrarMais type="radio" name="mostrarmais" id="m1" />
                            <DescriptionTxt>{videos.description}</DescriptionTxt>
                            <LabelMostrarMais for="m1">Mostrar mais</LabelMostrarMais>
                        </DescriptionDiv>
                    </BodyExpanded>
                ) : <h1>Esse vídeo não existe!</h1>}
            </MainExpanded>
        </ContainerExpanded>
    );
}
