import styled from "styled-components";

export const ContainerPageLogin = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.3);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const  ContainerPopUpLogin = styled.div`
    position: relative;
    width: 30%;
    height: auto;
    background-color: #FFF;
    border-radius: 20px;
    margin: 0 auto;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 2rem;
`;

export const BtnClose = styled.button`
    position: absolute;
    background-color: transparent;
    border: none;
    outline: 0;
    cursor: pointer;
    right: 1rem;
    top: 1rem;
    font-size: 20px;
`;

export const ImgLogin = styled.img`
    height: 50px;
`;

export const  TextTitleLogin = styled.h1`
    color: #48CBE8;
    margin-bottom: 1rem;
`;

export const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
`;
export const LabelLogin = styled.label`
    
`;

export const InputLogin = styled.input`
    border-radius: 6px;
    margin-bottom: 1rem;
    height: 32px;
`;
export const BtnEnterLogin = styled.button`
    background-color: #48CBE8;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    width: 50px;
    height: 24px;
`;

export const ForgotPass = styled.button`
    background-color: transparent;
    outline: 0;
    border: none;
    cursor: pointer;
    margin-top: 1rem;
    color: #48CBE8;
`;