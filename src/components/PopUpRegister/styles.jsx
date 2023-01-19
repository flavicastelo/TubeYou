import styled from "styled-components";

export const ContainerPageRegister = styled.div`
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

export const ContainerPopUpRegister = styled.div`
    position: relative;
    width: 30%;
    height: auto;
    background-image: linear-gradient(to right top, #48cbe8, #3ad3eb, #2adbed, #1be3ed, #12ebeb);
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

export const ImgRegister = styled.img`
    height: 50px;
`;

export const TextTitleRegister = styled.h1`
    color: #FFF;
    margin-bottom: 1rem;
`;

export const FormRegister = styled.form`
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
export const LabelRegister = styled.label`
    
`;

export const InputRegister = styled.input`
    border-radius: 6px;
    margin-bottom: 1rem;
    height: 32px;
    width: 100%;
    border: none;
`;
export const BtnEnterRegister = styled.button`
    background-color: #FFF;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    width: 50px;
    height: 24px;
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
`;

export const SpanIconPassView = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
`;