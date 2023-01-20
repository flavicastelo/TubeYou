import React, {useState} from "react";
import {
  Container,
  Main,
  Body,
  Div,
} from "./styles";

import HeaderComponent from "../Header";

export default function Videos() {
  
  return (
    <Container>
      <HeaderComponent />
      <Main>
        <Div></Div>
        <Body>
          VÍDEOS
        </Body>
      </Main>
    </Container>

  );
}