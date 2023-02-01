import {React, useState} from "react";
import {  BtnEdit, ContainerPage, ContainerPopUp, LinkVideos, TxtPopUp } from "./styles";

export default function PopUpUser({isOpen, user}) {
    return(isOpen) ? (
        <ContainerPage>
            <ContainerPopUp>
                {user.length === 0 ? "Vazio" : (
                    <>
                     <TxtPopUp>{user.name}</TxtPopUp>
                    <TxtPopUp>@{user.channel}</TxtPopUp>
                    <LinkVideos>Seus vídeos</LinkVideos>
                    <BtnEdit>Editar informações do canal</BtnEdit>
                    </>
                   
                    
                )}
                {isOpen.children}
            </ContainerPopUp>
        </ContainerPage>
    ) : null;
}