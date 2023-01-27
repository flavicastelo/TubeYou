import React, { useState } from "react";
import api from "../../../utils/api";
import CardVideo from "../CardVideo";
import HeaderComponent from "../Header";
import { BodyVideos, ContainerVideos, DivVideos, MainVideos } from "./styles";
import { useEffect } from "react";

export default function Videos() {
    const [videos, setVideos] = useState([]);

    const getVideos = async () => {
        const token = localStorage.getItem('token');

        try {
            const response = await api.get("/videos", `Bearer ${token}`);
            const data = response.data;
            setVideos(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getVideos();
    }, []);


    return (
        <ContainerVideos>
            <HeaderComponent />
            <MainVideos>
                <DivVideos></DivVideos>
                <BodyVideos>
                    {videos.length === 0 ? <h1>Carregando...</h1> : (
                        videos.map((video) => {
                            return <CardVideo video={video} />
                        })
                    )}
                </BodyVideos>
            </MainVideos>
        </ContainerVideos>
    );
}