import { CopyrightOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Left } from "./Left/Left";
import { Center } from "./Center/Center";
import { Right } from "./Right/Right";
import { devices } from "../../data";
import Payments from "../../images/payments.svg";

export const Footer = () => {
  return (
    <Container>
      <Info>
        <Left />
        <Center />
        <Right />
      </Info>
      <Copyright>
        <CopyrightLeft>
          <CopyrightOutlined sx={{ fontSize: 15 }} />
          <Typography sx={{ fontSize: 13 }} variant="span">
            Volxen
          </Typography>
        </CopyrightLeft>
        <CopyrightRight>
          <Image src={Payments} />
        </CopyrightRight>
      </Copyright>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  letter-spacing: 0.12em;
  margin-top: 50px;
  padding: 75px 0 42px;
  flex-direction: column;
  border: solid 1px #efefef;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  letter-spacing: 0.12em;
  padding: 0 80px;
  @media (max-width: 1134px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 180px;
  height: 35px;
`;

const Copyright = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-top: 80px;
  padding: 0 80px;
  @media only screen and (max-width: ${devices.mobile}px) {
    flex-direction: column;
  }
`;

const CopyrightRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CopyrightLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
