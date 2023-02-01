import React, { useState } from "react";
import api from "../../../utils/api";
import CardVideo from "../CardVideo";
import HeaderComponent from "../Header";
import { BodyVideosUser, ContainerVideosUser, DivVideosUser, MainVideosUser } from "./styles";
import { useEffect } from "react";

export default function VideosUser() {
    const [videos, setVideos] = useState([]);

    const getVideos = async () => {
        const id = localStorage.getItem('_id');

        try {
            const response = await api.get("/videos");
            const videos = video => video.idUser === id;
            const data = response.data;
            const videoUser = data.filter(videos) ;
            setVideos(videoUser);
            console.log(videos);
            
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getVideos();
    }, []);
    
    return (
        <ContainerVideosUser>
            <HeaderComponent />
            <MainVideosUser>
                <DivVideosUser></DivVideosUser>
                <BodyVideosUser>
                    {videos.length === 0 ? <h1>Sem vídeos no momento</h1> : (
                        videos.map((video) => {
                            return <CardVideo video={video} />
                        })
                    )}
                </BodyVideosUser>
            </MainVideosUser>
        </ContainerVideosUser>
    );
}