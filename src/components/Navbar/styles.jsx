import styled from "styled-components";

export const ContainerNavBar = styled.div`
    background-color: #0e0d0c;
    display: flex;
    width: 3.8rem;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    padding: 1.1rem;
    position: absolute;
    top: 3rem;
    left: 0;
`;

export const ContainerItem = styled.div`
    margin: 1rem 0;
`;

export const ItemBtn = styled.button`
    background-color: transparent;
    border: none;
    outline: 0;
    cursor: pointer;
`;

export const HomeImg = styled.img`
    width: 32px;
    height: 32px;
`;

export const VideosImg = styled.img`
    width: 32px;
    height: 32px;
`;

export const AboutImg = styled.img`
    width: 32px;
    height: 32px;
`;

export const TextItem = styled.p`
    font-size: 10px;
    color: #FFF;
`;
