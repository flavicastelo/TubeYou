import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
import {  BtnEdit, ContainerPage, ContainerPopUp, LinkVideos, TxtPopUp } from "./styles";

export default function PopUpUser({isOpen, user}) {
    const navigate = useNavigate();
    return(isOpen) ? (
        <ContainerPage>
            <ContainerPopUp>
                {user.length === 0 ? "Vazio" : (
                    <>
                     <TxtPopUp>{user.name}</TxtPopUp>
                    <TxtPopUp>@{user.channel}</TxtPopUp>
                    <LinkVideos onClick={() => navigate("/videos/user")}>Seus vídeos</LinkVideos>
                    <BtnEdit >Editar informações do canal</BtnEdit>
                    </>
                   
                    
                )}
                {isOpen.children}
            </ContainerPopUp>
        </ContainerPage>
    ) : null;
}