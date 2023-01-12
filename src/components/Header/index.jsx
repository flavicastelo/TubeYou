import {
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
    BtnLogo
  } from "./styles";
import LogoImg from "../../assets/logo.png";
import Lup from "../../assets/lup.png";
import MenuIcon from "../../assets/menu-hamburger.png";
import PopUpLogin from "../PopUpLogin";
import PopUpRegister from "../PopUpRegister";

export default function HeaderComponent() {
    return (
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
        <LoginBtn onClick={() => setIsOpenPopUp(true)}>
          <Login>Entrar</Login>
        </LoginBtn>
        {isOpenPopUp ? <PopUpLogin /> : null}
        <RegisterBtn onClick={() => setIsOpenRegister(true)}>
          <Register>Cadastre-se</Register>
        </RegisterBtn>
        {isOpenRegister ? <PopUpRegister /> : null}
      </Header>
    );

}
