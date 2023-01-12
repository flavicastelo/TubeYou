import { useNavigate } from "react-router-dom";

import {
    HomeImgOpen,
    VideosImgOpen,
    AboutImgOpen,
    ContainerNavBarOpen,
    ContainerItemOpen,
    ItemBtnOpen,
    TextItemOpen
} from "./styles";
import AboutOpen from "../../assets/about.png";
import HomeIconOpen from "../../assets/home.png";
import VideosOpen from "../../assets/videos.png";

export default function NavBarOpen() {
    const navigation = useNavigate();
    return (
        <ContainerNavBarOpen>
            <ContainerItemOpen>
                <ItemBtnOpen onClick={() => navigation("/")}>
                    <HomeImgOpen src={HomeIconOpen} alt="Icone de página inicial" />
                    <TextItemOpen>Início</TextItemOpen>
                </ItemBtnOpen>
            </ContainerItemOpen>
            <ContainerItemOpen>
                <ItemBtnOpen onClick={() => navigation("/videos")}>
                    <VideosImgOpen src={VideosOpen} alt="Icone de videos" />
                    <TextItemOpen>Vídeos</TextItemOpen>
                </ItemBtnOpen>
            </ContainerItemOpen>
            <ContainerItemOpen>
                <ItemBtnOpen onClick={() => navigation("/about")}>
                    <AboutImgOpen src={AboutOpen} alt="Icone de sobre o canal" />
                    <TextItemOpen>Sobre</TextItemOpen>
                </ItemBtnOpen>
            </ContainerItemOpen>
        </ContainerNavBarOpen>
    );
}