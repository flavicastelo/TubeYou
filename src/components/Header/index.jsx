import React, { useState } from "react";
import {
  Header,
  Logo,
  FormSearch,
  LupBtn,
  Search,
  LupIcon,
  LoginBtn,
  Login,
  RegisterBtn,
  Register,
  BtnLogo,
  ContainerLinks,
  ImgLogin
} from "./styles";

import LogoImg from "../../assets/logo.png";
import Lup from "../../assets/lup.png";
import { useNavigate } from "react-router-dom";
import IconLogin from "../../assets/loginIcon.png";
import MenuHamburger from "../MenuHamburguer";

export default function HeaderComponent() {
  const navigation = useNavigate();
  const [isOpen, setIsOpen] = useState(false);


  return (
    <Header>
      <MenuHamburger />

      <BtnLogo onClick={() => navigation("/")}>
        <Logo src={LogoImg} alt="Logo do TubeYou" />
      </BtnLogo>

      <FormSearch>
        <Search placeholder="Buscar" />
        <LupBtn type="submit">
          <LupIcon src={Lup} />
        </LupBtn>
      </FormSearch>

      <ContainerLinks>
        <LoginBtn onClick={() => navigation("/login")}>
          <Login>Entrar</Login>
          <ImgLogin src={IconLogin} />
        </LoginBtn>
        <RegisterBtn onClick={() => navigation("/register")}>
          <Register>Cadastre-se</Register>
        </RegisterBtn>

      </ContainerLinks>


    </Header>
  );

}
