import React from "react";
import { ChannelName, ContainerCard, ContainerInfo, DatePost, Thumbnail, TitleVideo, Views } from "./styles";
import api from "../../../utils/api";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function CardVideoRecent() {
  const [videos, setVideos] = useState([]);
  const [channel, setChannel] = useState('');

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

  const getChannel = async () => {
    const token = localStorage.getItem('token');
    const id = [];

    videos.map((video) => {
      id.push(video.idUser);
    });

    videos.map(async (video) => {
      if (id === video.idUser) {
        try {
          const response = await api.get(`/users/${id}`, `Bearer ${token}`);
          const data = response.data;
          setChannel(data);
        } catch (error) {
          console.log(error);
        }
      }
    })


  }
  useEffect(() => {
    getChannel();
  }, []);


  //inverter o array para exibir primeiro os ultimos adicionados
  let videosRecents = [];
  for (let index = 0; index < videos.length; index++) {
    videosRecents.push(videos[index]);
  }
  videosRecents.reverse();

  //RESOLVER BUG: MENOS DE 3 VIDEOS QUEBRA
  let videosHome = [];
  for (let i = 0; i < 3; i++) {
    videosHome.push(videosRecents[i]);
  }

  function dateFormat(createdAt) {
    var data = new Date(createdAt),
      dia = data.getDate(createdAt).toString(),
      diaF = (dia.length == 1) ? '0' + dia : dia,
      mes = (data.getMonth(createdAt) + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
      mesF = (mes.length == 1) ? '0' + mes : mes,
      anoF = data.getFullYear(createdAt);
    return diaF + "/" + mesF + "/" + anoF;
  }
  return (
    <>
      {videos.length === 0 ? <h1>Carregando...</h1> : (

        videosHome.map((video) => (
          <ContainerCard key={video._id}>
            <Thumbnail src={video.thumbnail} />
            <TitleVideo>
              {video.title}
            </TitleVideo>
            <ChannelName>
              {channel.channel}
            </ChannelName>
            <ContainerInfo>
              <Views>5 visualizações</Views>
              <DatePost>Postado em {dateFormat(video.createdAt)}</DatePost>
            </ContainerInfo>
          </ContainerCard>
        ))
      )}

    </>


  );
}