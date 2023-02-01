import styled from "styled-components";

export const Container = styled.div`
    
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.5rem;
    width: 100%;
    background-color: #0e0d0c;
    padding: 1rem;
`;

export const BtnLogo = styled.button`
    background-color: transparent;
    border: none;
    outline: 0;
    cursor: pointer;
`;

export const Logo = styled.img`
    height: 60px;
`;
export const FormSearch = styled.form`
    display: flex;
    align-items: center;
    position: relative;
`;

export const Search = styled.input`
    height: 32px;
    width: 430px;
    border-radius: 50px;
    background-color: #FFF;
    color: #0e0d0c;
    border: none;
    padding: 1rem;
    &:focus{
        outline: 2px solid #B57EDC;
    }
`;

export const LupBtn = styled.button`
    background-color: transparent;
    border: none;
    outline: 0;
    cursor: pointer;
    width: 24px;
    height: 24px;
`;
export const LupIcon = styled.img`
    width: 24px;
    position: absolute;
    top: 0.3rem;
    right: 2rem;
`;

export const AdcVideo = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 120px;
    background-color: transparent;
    outline: 0;
    cursor: pointer;
    border: none;
    height: 32px;
    margin-right: 1rem;
    color: #B57EDC;
`;

export const ImgAdcVideo = styled.img`
    height: 32px;
`;

export const ContainerLinks = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const LoginBtn = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 120px;
    background-color: transparent;
    outline: 0;
    cursor: pointer;
    border: none;
    width: 120px;
    height: 32px;
    margin-right: 1rem;
    color: #B57EDC;
   
`;

export const ImgLogin = styled.img`
    height: 18px;
    margin-left: 0.2rem;
`;

export const Login = styled.p`
    
    width: 40px;
`;

export const RegisterBtn = styled.button`
    background-color: transparent;
    outline: 0;
    border-color: #B57EDC;
    border-radius: 50px;
    width: 120px;
    height: 32px;
    border-style: solid;
    cursor: pointer;
    color: #B57EDC;
    &:hover{
        background-color: #B57EDC;
        color: #FFF;
    }
`;

export const Register = styled.p`
    
`;

export const Main = styled.main`
    display: flex;
    flex-direction: row;
`;

export const Body = styled.section`
  background-color: #515151; 
  width: 100%;
`;

export const BtnUser = styled.button`
    background-color: transparent;
    outline: 0;
    cursor: pointer;
    border: none;
    color: #B57EDC;
`;

export const Imguser = styled.img`
    width: 32px;
`;

