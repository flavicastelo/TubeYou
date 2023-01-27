import React, {useState} from "react";
import {
  Container,
  Main,
  Body,
  Div,
} from "./styles";

import HeaderComponent from "../Header";
import CardVideoRecent from "../CardVideoRecent";

export default function Home() {
  
  return (
    <Container>
      <HeaderComponent />
      <Main>
        <Div></Div>
        <Body>
          <CardVideoRecent />
        </Body>
      </Main>
    </Container>

  );
}