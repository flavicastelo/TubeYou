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
  ImgLogin,
  AdcVideo,
  ImgAdcVideo
} from "./styles";

import LogoImg from "../../assets/logo.png";
import Lup from "../../assets/lup.png";
import { useNavigate } from "react-router-dom";
import IconLogin from "../../assets/loginIcon.png";
import MenuHamburger from "../MenuHamburguer";
import { isLogged, logout } from "../../../utils/auth";
import AdcVideoImg from "../../assets/adc-video.png";

export default function HeaderComponent() {
  const navigation = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigation("/");
    console.log(isLogged);
    window.location.reload();
}

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
        {isLogged ? <AdcVideo onClick={ () => navigation("/videos")}><ImgAdcVideo src={AdcVideoImg} /></AdcVideo> : null}
      <ContainerLinks>
        {isLogged ? <LoginBtn onClick={handleLogout}>Sair</LoginBtn> : <LoginBtn onClick={() => navigation("/login")}>
          <Login>Entrar</Login>
          <ImgLogin src={IconLogin} />
        </LoginBtn>}
        {isLogged ?  null: <RegisterBtn onClick={() => navigation("/register")}>
          <Register>Cadastre-se</Register>
        </RegisterBtn> 
        }
        

      </ContainerLinks>


    </Header>
  );

}
