import styled from "styled-components";

export const ContainerPageVideo = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(to right top, #242522, #2d2e2b, #363734, #3f403d, #494a46);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContainerPopUpVideo = styled.div`
    position: relative;
    width: 30%;
    height: auto;
    background-color: #0e0d0c;
    border-radius: 20px;
    margin: 0 auto;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 2rem;
`;

export const TextTitleVideo = styled.h1`
    color: #B57EDC;
    margin-bottom: 1rem;
    font-size: 24px;
`;

export const FormVideo = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
`;

export const ContainerInputVideo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1rem;
    position: relative;
`;

export const InputVideo = styled.input`
    background-color: #0e0d0c;
    color: #444343;
    font-size: 14px;
    padding-left: 1rem;
    width: 100%;
    border: none;
    border-radius: 4px;
    height: 32px;
    border: none;
    border-bottom: 1px solid #757575;
    &:focus {
        color: #757575;
        outline: none;
        border: none;
        border-bottom: 4px solid #B57EDC;
    }

`;
export const BtnEnterVideo = styled.button`
    background-color: #81589e;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    width: 100%;
    height: 32px;
    &:hover{
        background-color: transparent;
        border: 1px solid #B57EDC;
        color: #81589e;
    }
`;

export const SpanIconPassView = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContainerIconPassView = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

export const IconPassView = styled.img`
   width: 24px;
   position: absolute;
   right: 0.2rem;
   top: 0.2rem;
`;

export const BtnIconPassView = styled.button`
    background-color: transparent;
    border: none;
    outline: 0;
    cursor: pointer;
`;


export const BtnLink = styled.button`
    background-color: transparent;
    outline: 0;
    border: none;
    cursor: pointer;
    color: #B57EDC;
`;

export const BtnInicio = styled.button`
    background-color: transparent;
    outline: 0;
    border: none;
    cursor: pointer;
    color: #B57EDC;
    margin-top: 1rem;
`;

export const ContainerLink = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-top: 2rem;
    width: 50%;
`;

