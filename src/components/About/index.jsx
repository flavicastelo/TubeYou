import React, {useState} from "react";
import {
  Container,
  Main,
  Body,
  Div,
} from "./styles";

import HeaderComponent from "../Header";

export default function About() {
  
  return (
    <Container>
      <HeaderComponent />
      <Main>
        <Div></Div>
        <Body>
          SOBRE
        </Body>
      </Main>
    </Container>

  );
}