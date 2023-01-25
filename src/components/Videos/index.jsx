import React, {useState} from "react";
import {
  Container,
  Main,
  Body,
  Div,
} from "./styles";

import HeaderComponent from "../Header";
import RegisterVideo from "../RegisterVideo";

export default function Videos() {
  
  return (
    <Container>
      <HeaderComponent />
      <Main>
        <Div></Div>
        <Body>
          <RegisterVideo />
        </Body>
      </Main>
    </Container>

  );
}