import { 
    ContainerPageRegister, 
    ContainerPopUpRegister,
    TextTitleRegister,
    FormRegister,
    LabelRegister,
    InputRegister,
    BtnEnterRegister,
    BtnClose,
    ContainerInput,
 } from "./styles";

export default function PopUpRegister(onClosed) {
    return(
        <ContainerPageRegister>
            <ContainerPopUpRegister>  
                <BtnClose onClick={onClosed}>X</BtnClose>
                <TextTitleRegister>Faça seu Cadastro</TextTitleRegister>
                <FormRegister>
                    <ContainerInput>
                    <LabelRegister>Nome</LabelRegister>
                    <InputRegister type="text"/>
                    <LabelRegister>E-mail</LabelRegister>
                    <InputRegister type="text"/>
                    <LabelRegister>Senha</LabelRegister>
                    <InputRegister type="password"/>
                    <LabelRegister>Confirmar a senha</LabelRegister>
                    <InputRegister type="password"/>
                    </ContainerInput>
                    <BtnEnterRegister>Enviar</BtnEnterRegister>
                </FormRegister>
            </ContainerPopUpRegister>
        </ContainerPageRegister>
    );
}