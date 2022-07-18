import React from "react";
import styled from "styled-components";
import { Left } from "./Left/Left";
import { Center } from "./Center/Center";
import { Right } from "./Right/Right";
import { devices } from "../../data";
import { Copyright } from "./Copyright/Copyright";

export const Footer = React.memo(() => {
  return (
    <Container>
      <Info>
        <Left />
        <Center />
        <Right />
      </Info>
      <Copyright />
    </Container>
  );
});

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  letter-spacing: 0.12em;
  padding: 0 80px;
  @media (max-width: 1134px) {
    flex-direction: column;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  letter-spacing: 0.12em;
  margin-top: 50px;
  padding: 75px 0 42px;
  flex-direction: column;
  border: solid 1px #efefef;

  @media only screen and (max-width: ${devices.Tablet}px) {
    ${Info} {
      padding: 0 30px;
      gap: 2em;
    }
  }
`;
