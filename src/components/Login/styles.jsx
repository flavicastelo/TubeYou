import styled from "styled-components";

export const ContainerPageLogin = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(to right top, #000000, #0e0d0c, #171615, #1e1d1b, #242522);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const  ContainerPopUpLogin = styled.div`
    position: relative;
    width: 30%;
    height: auto;
    background-color: #fff;
    border-radius: 10px;
    margin: 0 auto;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 2rem;
`;


export const ImgLogin = styled.img`
    height: 50px;
`;

export const  TextTitleLogin = styled.h1`
    color: #81589e;
    margin-bottom: 1rem;
`;

export const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
`;

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1rem;
    position: relative;
`;


export const InputLogin = styled.input`
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
export const BtnEnterLogin = styled.button`
    background-color: #B57EDC;
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

export const LinkPage = styled.button`
    background-color: transparent;
    outline: 0;
    border: none;
    cursor: pointer;
    color: #B57EDC;
`;

export const ContainerLinkPage = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-top: 2rem;
    width: 50%;
`;

export const ForgotPass = styled.button`
    background-color: transparent;
    outline: 0;
    border: none;
    cursor: pointer;
    color: #81589e;
    margin-top: 1rem;
`;

export const Marker = styled.p`
    color: #242522;
`;
export const SpanIconView = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const ContainerIconView = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

export const IconView = styled.img`
   width: 24px;
   position: absolute;
   right: 0.2rem;
   top: 0.2rem;
`;

export const BtnIconView = styled.button`
    background-color: transparent;
    border: none;
    outline: 0;
    cursor: pointer;
`;