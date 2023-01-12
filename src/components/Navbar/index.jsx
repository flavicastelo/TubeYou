import  { useNavigate } from "react-router-dom";
import {
    HomeImg,
    VideosImg,
    AboutImg,
    ContainerNavBar,
    ContainerItem,
    ItemBtn,
    TextItem
} from "./styles";

import About from "../../assets/about.png";
import HomeIcon from "../../assets/home.png";
import Videos from "../../assets/videos.png";

export default function NavBar() {
    const navigation = useNavigate();
    return (
        <ContainerNavBar>
            <ContainerItem>
                <ItemBtn onClick={() => navigation("/")}>
                    <HomeImg src={HomeIcon} alt="Icone de página inicial" />
                    <TextItem>Início</TextItem>
                </ItemBtn>
            </ContainerItem>
            <ContainerItem>
                <ItemBtn onClick={() => navigation("/videos")}>
                    <VideosImg src={Videos} alt="Icone de videos" />
                    <TextItem>Vídeos</TextItem>
                </ItemBtn>
            </ContainerItem>
            <ContainerItem>
                <ItemBtn onClick={() => navigation("/about")}>
                    <AboutImg src={About} alt="Icone de sobre o canal" />
                    <TextItem>Sobre</TextItem>
                </ItemBtn>
            </ContainerItem>
        </ContainerNavBar>
    );
}