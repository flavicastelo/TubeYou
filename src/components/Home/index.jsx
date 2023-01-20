import React, {useState} from "react";
import {
  Container,
  Main,
  Body,
  Div,
} from "./styles";

import HeaderComponent from "../Header";

export default function Home() {
  
  return (
    <Container>
      <HeaderComponent />
      <Main>
        <Div></Div>
        <Body>
          INICIO
        </Body>
      </Main>
    </Container>

  );
}