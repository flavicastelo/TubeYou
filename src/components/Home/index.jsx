import React, { useState, useEffect } from "react";
import {
  Container,
  Main,
  Body,
  Div,
  TitleHome,
  ContainerCards,
  SectionHome,
} from "./styles";

import api from "../../../utils/api";
import HeaderComponent from "../Header";
import CardVideo from "../CardVideo";
import { ContainerCard } from "../CardVideo/styles";

export default function Home() {
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
    <Container>
      <HeaderComponent />
      <Main>
        <Div></Div>
        <Body>
          <SectionHome>
            <TitleHome>Vídeos Recentes</TitleHome>
            <ContainerCards>
              {videos.length === 0 ? <h1>Sem vídeos no momento</h1> : (
               videos.length < 3 ? 
                videosRecents.map((video) => {
                  return <CardVideo video={video} />
                }) : videosHome.map((video) => {
                  return <CardVideo video={video} />
                })
              )}
            </ContainerCards>
          </SectionHome>
          <SectionHome>
            <TitleHome>Mais curtidos</TitleHome>
            <ContainerCards>
            {videos.length === 0 ? <h1>Sem vídeos no momento</h1> : (
               videos.length < 3 ? 
                videosRecents.map((video) => {
                  return <CardVideo video={video} />
                }) : videosHome.map((video) => {
                  return <CardVideo video={video} />
                })
              )}
            </ContainerCards>
          </SectionHome>
        </Body>
      </Main>
    </Container>

  );
}