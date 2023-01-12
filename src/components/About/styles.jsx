import styled from "styled-components";

export const Container = styled.div`
    
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 3.5rem;
    width: 100%;
    background-color: #404040;
`;

export const IconMenu = styled.button`
    width: 50px;
    height: 50px;
    background-color: transparent;
    border: none;
    outline: 0;
    cursor: pointer;
`;

export const IconImg = styled.img`
    width: 32px;
    height: 32px;
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
    color: #000;
    border: none;
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

export const LoginBtn = styled.button`
    background-color: transparent;
    border: none;
    outline: 0;
    cursor: pointer;
`;

export const Login = styled.p`
    color: #48CBE8;
`;

export const RegisterBtn = styled.button`
    background-color: transparent;
    outline: 0;
    border-color: #48CBE8;
    border-radius: 50px;
    width: 120px;
    height: 32px;
    border-style: solid;
    cursor: pointer;
`;

export const Register = styled.p`
    color: #48CBE8;
`;

export const Main = styled.main`
    display: flex;
    flex-direction: row;
`;

export const Body = styled.section`
  background-color: #515151; 
  width: 100%;
`;