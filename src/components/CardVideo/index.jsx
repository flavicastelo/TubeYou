import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../utils/api";
import { ChannelName, ContainerCard, ContainerInfo, DatePost, Thumbnail, TitleVideo, Views } from "./styles";


export default function CardVideo({ video }) {
  const navigation = useNavigate();


  function click(video) {
    navigation("/videos/expanded");
    localStorage.setItem("idVideo", video._id);
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
      {video.length === 0 ? <h1>Carregando...</h1> : (


        <ContainerCard onClick={() => click(video)} key={video._id}>
          <Thumbnail src={video.thumbnail} />
          <TitleVideo>
            {video.title}
          </TitleVideo>
          <ChannelName>
            Canal
          </ChannelName>
          <ContainerInfo>
            <Views>{video.views} visualizações</Views>
            <DatePost>Postado em {dateFormat(video.createdAt)}</DatePost>
          </ContainerInfo>
        </ContainerCard>

      )}

    </>


  );
}