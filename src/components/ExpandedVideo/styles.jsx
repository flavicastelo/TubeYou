import styled from "styled-components";

export const ContainerExpanded = styled.div`
    background-color: #292828;
`;

export const VideoExpanded = styled.iframe`
   width: 682px;
   height: 384px;
`;

export const MainExpanded = styled.main`
    min-height: 100vh;
    display: flex;
`;

export const BodyExpanded = styled.body`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 2rem;
    margin: 0.5rem auto;
    background-color: #FFF;
    border-radius: 20px;
`;

export const DivExpanded = styled.div`
    background-color: #0e0d0c;
    display: flex;
    width: 3.8rem;
    min-height: 100vh;
    flex-direction: column;
    align-items: center;
    padding: 1.1rem;
`;

export const DivTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 682px;
    margin-top: 1rem;
`;

export const TitleExpanded = styled.h2`
    
`;

export const DivInfos = styled.div`
    display: flex;
    width: 682px;
    gap: 2rem;
    margin-top: 0.5rem;
`;

export const ChannelExpanded = styled.p`
    color: #B57EDC;
    font-weight: bold;
    margin-top: 0.5rem;
`;

export const ViewsExpanded = styled.p`
    font-style: italic;
`;

export const DatePostExpanded = styled.p`
    font-style: italic;
`;

export const LikeBtn = styled.button`
    background-color: transparent;
    outline: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    color: #B57EDC;
    border: none;
`;

export const ImgLike = styled.img`
    width: 24px;
`;

export const CountLike = styled.p`
    
`;

export const DescriptionDiv = styled.div`
    width: 682px;
    margin-top: 0.5rem;
    background-color: #b57edc65;
    padding: 0.4rem;
    border-radius: 5px;
`;


export const DescriptionTxt = styled.p`
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const InputMostrarMais = styled.input`
    display:none;
    position:absolute;
    left:-1000px;
    &:checked + p {
        white-space:normal;
    }
    &:checked + p + label{
        display: none;
    }
`;

export const LabelMostrarMais = styled.label`
    color:#7d5799;
    margin:0;
`;
