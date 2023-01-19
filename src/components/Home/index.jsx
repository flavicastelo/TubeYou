import React, {useState} from "react";
import {
  Container,
  Header,
  IconMenu,
  IconImg,
  Logo,
  FormSearch,
  LupBtn,
  Search,
  LupIcon,
  LoginBtn,
  Login,
  RegisterBtn,
  Register,
  Main,
  Body,
  BtnLogo
} from "./styles";

import LogoImg from "../../assets/logo.png";
import Lup from "../../assets/lup.png";
import MenuIcon from "../../assets/menu-hamburger.png";
import NavBar from "../Navbar";
import NavBarOpen from "../NavBarOpen";
import { useNavigate } from "react-router-dom";
import PopUpLogin from "../Login";
import PopUpRegister from "../Register";

export default function Home() {
  const navigation = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);
  const [isOpenRegister, setIsOpenRegister] = useState(false);

  return (
    <Container>
      <Header>
        <IconMenu onClick={() => setIsOpen(!isOpen)}>
          <IconImg src={MenuIcon} alt="Icone de menu hamburguer" />
        </IconMenu>
        <BtnLogo onClick={() => navigation("/")}>
        <Logo src={LogoImg} alt="Logo do TubeYou" />
        </BtnLogo>
        <FormSearch>
          <Search />
          <LupBtn type="submit">
            <LupIcon src={Lup} />
          </LupBtn>
        </FormSearch>
        <LoginBtn onClick={() => navigation("/login")}>
          <Login>Entrar</Login>
        </LoginBtn>
       
        <RegisterBtn onClick={() => navigation("/register")}>
          <Register>Cadastre-se</Register>
        </RegisterBtn>
        
      </Header>
      <Main>
        {isOpen ? <NavBarOpen /> : <NavBar />}
      
        <Body>
          INICIO
        </Body>
        
      </Main>
    </Container>

  );
}