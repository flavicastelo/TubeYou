import styled from "styled-components";


export const ContainerCard = styled.div`
    display: flex;
    width: 340px;
    height: 300px;
    background-color: #FFF;
    /* background-image: linear-gradient(to right top, #ca9fe9, #c597e6, #c08fe3, #ba86df, #b57edc); */
    border-radius: 20px;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0.5rem;
    align-items: center;
    box-shadow: 0.5rem 0.5rem #b57edc;
`;

export const Thumbnail = styled.img`
    width: 320px;
    height: 180px;
    border-radius: 20px;
    align-self: center;
`;



export const ContainerInfo = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 1rem;
    width: 320px;
`;

export const TitleVideo = styled.h3`
        text-align: justify;
        padding: 0 0.5rem;
        line-height: 16px;
`;

export const ChannelName = styled.p`
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #1f1e1e;
    text-align: left;
    margin-left: 0.5rem;
`;

export const DivChannel = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: start;
`;

export const Views = styled.p`
    font-style: normal;
    font-weight: 200;
    font-size: 14px;
    line-height: 16px;
    color: #1f1e1e;
    margin-left: 0.5rem;
`;

export const DatePost = styled.p`
    font-style: normal;
    font-weight: 200;
    font-size: 14px;
    line-height: 16px;
    color: #1f1e1e;
    margin-right: 0.5rem;
`;

export const ImgChannel = styled.img`
    width: 32px;
    height: 32px;
    border: 1px solid #b57edc;
    border-radius: 50%;
`;