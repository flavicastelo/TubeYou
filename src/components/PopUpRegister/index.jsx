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
    ContainerIconPassView,
    BtnIconPassView,
    SpanIconPassView,
    IconPassView,
 } from "./styles";

import IconHide from "../../assets/hide.png";
import IconView from "../../assets/view.png";
import { useState } from "react";


export default function PopUpRegister(onClosed) {
    const [showPass, setShowPass] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const handleShowPass = () => {
        const visibility = !showPass;
        setShowPass(visibility);
    }
    const handleShowConfirm = () => {
        const visibility = !showConfirm;
        setShowConfirm(visibility);
    }

    return(
        <ContainerPageRegister>
            <ContainerPopUpRegister>  
                <BtnClose onClick={onClosed}>X</BtnClose>
                <TextTitleRegister>Faça seu Cadastro</TextTitleRegister>
                <FormRegister>
                    <ContainerInput>
                    <LabelRegister>Nome de Usuário</LabelRegister>
                    <InputRegister type="text"/>
                    <LabelRegister>Nome do Canal</LabelRegister>
                    <InputRegister type="text"/>
                    <LabelRegister>E-mail</LabelRegister>
                    <InputRegister type="email"/>
                    <LabelRegister>Senha</LabelRegister>
                    <ContainerIconPassView>
                        <InputRegister 
                        type={showPass ? "text" : "password"}
                        required
                        />
                        <SpanIconPassView>
                            <BtnIconPassView type="button" onClick={handleShowPass}>
                                <IconPassView src={showPass ? IconView : IconHide}/>
                            </BtnIconPassView>
                        </SpanIconPassView>
                    </ContainerIconPassView>
                    <LabelRegister>Confirmar a senha</LabelRegister>
                    <ContainerIconPassView>
                        <InputRegister 
                        type={showConfirm ? "text" : "password"}
                        required
                        />
                        <SpanIconPassView>
                            <BtnIconPassView type="button" onClick={handleShowConfirm}>
                                <IconPassView src={showConfirm ? IconView : IconHide}/>
                            </BtnIconPassView>
                        </SpanIconPassView>
                    </ContainerIconPassView>
                    
                    </ContainerInput>
                    <BtnEnterRegister>Enviar</BtnEnterRegister>
                </FormRegister>
            </ContainerPopUpRegister>
        </ContainerPageRegister>
    );
}