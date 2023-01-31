import { BodyExpanded, ChannelExpanded, ContainerExpanded, CountLike, DatePostExpanded, DescriptionDiv, DescriptionTxt, DivExpanded, DivInfos, DivTitle, ImgLike, InputMostrarMais, LabelMostrarMais, LikeBtn, MainExpanded, TitleExpanded, VideoExpanded, ViewsExpanded } from "./styles";
import React, { useState } from "react";
import api from "../../../utils/api";
import { useEffect } from "react";
import like from "../../assets/like.png";
import HeaderComponent from "../Header";

export default function ExpandedVideo() {
    const [videos, setVideos] = useState([]);

    const getVideo = async () => {
        const id = localStorage.setItem("idVideo", id);
        try {
            const response = await api.get(`/videos/${id}`);
            const data = response.data;
            setVideos(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getVideo();
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
    return (
        <ContainerExpanded>
            <HeaderComponent />
            <MainExpanded>
                <DivExpanded></DivExpanded>
                {videos ? (
                    <BodyExpanded>
                        <VideoExpanded src="https://www.youtube.com/embed/ZLtBdpwg8tI" title="Curso React: Trabalhando com props - #05" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></VideoExpanded>
                        <DivTitle>
                            <TitleExpanded>Titulo do video</TitleExpanded>
                            <LikeBtn><ImgLike src={like} /><CountLike>60</CountLike></LikeBtn>
                        </DivTitle>
                        <ChannelExpanded>Nome do Canal</ChannelExpanded>
                        <DivInfos>
                            <ViewsExpanded>5 visualizações</ViewsExpanded>
                            <DatePostExpanded>Postado em xx/xx/xx</DatePostExpanded>
                        </DivInfos>
                        <DescriptionDiv>
                        <InputMostrarMais type="radio" name="mostrarmais" id="m1" />
                            <DescriptionTxt>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime adipisci deserunt culpa ex maiores alias perspiciatis modi dolor impedit hic consequuntur eaque cupiditate, nostrum optio, ipsum labore odit quia, exercitationem itaque? Maiores accusantium explicabo eveniet obcaecati necessitatibus neque beatae similique molestiae repellat optio. Minima delectus quod accusamus dignissimos pariatur id ratione recusandae sunt nostrum. Fugit totam deserunt, quos suscipit eveniet id deleniti officiis soluta? Harum dolores voluptate repellendus sed odit sit itaque, obcaecati libero dolorem, inventore fugiat quae neque veniam quidem dolorum maxime exercitationem mollitia suscipit. Excepturi nostrum natus voluptas odit dicta amet molestiae labore. Corrupti fugiat id vitae aliquid.</DescriptionTxt>
                            <LabelMostrarMais for="m1">Mostrar mais</LabelMostrarMais>
                        </DescriptionDiv>
                    </BodyExpanded>
                ) : <h1>Esse vídeo não existe!</h1>}
            </MainExpanded>
        </ContainerExpanded>
    );
}
