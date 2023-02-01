import React, { useEffect, useState } from "react";
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
  ImgAdcVideo,
  Imguser,
  BtnUser,
} from "./styles";

import LogoImg from "../../assets/logo.png";
import Lup from "../../assets/lup.png";
import { useNavigate } from "react-router-dom";
import IconLogin from "../../assets/loginIcon.png";
import MenuHamburger from "../MenuHamburguer";
import { isLogged, logout } from "../../../utils/auth";
import AdcVideoImg from "../../assets/adc-video.png";
import UserImg from "../../assets/user.png";
import api from "../../../utils/api";
import PopUpUser from "../PopUpUser";

export default function HeaderComponent() {
  const navigation = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState('');

  const handleLogout = () => {
    logout();
    navigation("/");
    console.log(isLogged);
    window.location.reload();
  }
  
  const getUser = async () => {
    const id = localStorage.getItem("_id");
    try {
      const response =  await api.get(`users/${id}`);
      const data = response.data;
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getUser();
  }, []);

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
        {isLogged ? <AdcVideo onClick={() => navigation("/videos")}><ImgAdcVideo src={AdcVideoImg} /></AdcVideo> : null}
        {isLogged ? <BtnUser onClick={() => setIsOpen(!isOpen)}><Imguser src={user.photo ? user.photo : UserImg} /></BtnUser> : null}
        <PopUpUser isOpen={isOpen} user={user}/>
        {isLogged ? <LoginBtn onClick={handleLogout}>Sair</LoginBtn> : <LoginBtn onClick={() => navigation("/login")}>
          <Login>Entrar</Login>
          <ImgLogin src={IconLogin} />
        </LoginBtn>}
        {isLogged ?
          null : <RegisterBtn onClick={() => navigation("/register")}>
            <Register>Cadastre-se</Register>
          </RegisterBtn>
        }


      </ContainerLinks>


    </Header>
  );

}
