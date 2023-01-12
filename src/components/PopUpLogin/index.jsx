import { 
    ContainerPageLogin, 
    ContainerPopUpLogin,
    TextTitleLogin,
    FormLogin,
    LabelLogin,
    InputLogin,
    BtnEnterLogin,
    BtnClose,
    ContainerInput,
    ForgotPass,
    ImgLogin,
 } from "./styles";
import ImageLogin from "../../assets/userlogin.png"

export default function PopUpLogin(onClosed) {
    return(
        <ContainerPageLogin>
            <ContainerPopUpLogin>  
                <BtnClose onClick={onClosed}>X</BtnClose>
                <ImgLogin src={ImageLogin}/>
                <TextTitleLogin>Faça seu Login</TextTitleLogin>
                <FormLogin>
                    <ContainerInput>
                    <LabelLogin>Usuário</LabelLogin>
                    <InputLogin type="text"/>
                    <LabelLogin>Senha</LabelLogin>
                    <InputLogin type="password"/>
                    <LabelLogin>Confirmar a senha</LabelLogin>
                    <InputLogin type="password"/>
                    </ContainerInput>
                    <BtnEnterLogin>Enviar</BtnEnterLogin>
                </FormLogin>
                <ForgotPass>Esqueci minha senha</ForgotPass>
            </ContainerPopUpLogin>
        </ContainerPageLogin>
    );
}