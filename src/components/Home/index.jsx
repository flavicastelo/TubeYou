import React, {useState} from "react";
import {
  Container,
  Main,
  Body,
  Div,
} from "./styles";

import HeaderComponent from "../Header";
import CardVideo from "../CardVideo";

export default function Home() {
  
  return (
    <Container>
      <HeaderComponent />
      <Main>
        <Div></Div>
        <Body>
          <CardVideo />
        </Body>
      </Main>
    </Container>

  );
}