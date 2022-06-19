import { CopyrightOutlined } from '@mui/icons-material';
import { List, ListItemText, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

import { devices } from '../data';
import Payments from '../images/payments.svg';

export const Footer = () => {
  return (
    <Container>
      <Info>
        <Left>
          <Title>О магазине</Title>
          <Typography
            variant="p"
            letterSpacing={"normal"}
            fontSize={15}
            sx={{ color: "rgb(157, 157, 157)", mb: 1, mt: 1 }}
          >
            После того, как мы были разочарованы тем, что не смогли найти
            подходящие высококачественные предметы первой необходимости по
            разумной цене, мы решили взять дело в свои руки.
          </Typography>
          <Typography>Подписывайтесь на нас</Typography>
          <SocialContainer>
            <A href="https://vk.com/wear_base" target={"#blank"}>
              <i className="fa-brands fa-lg fa-vk"></i>
            </A>
            <A href="https://www.instagram.com/wear_base/" target={"#blank"}>
              <i className="fa-brands fa-lg fa-instagram"></i>
            </A>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Помощь</Title>
          <List
            sx={{
              mt: 1,
              color: "#9d9d9d",
              display: "flex",
              gap: 1,
              flexDirection: "column",
            }}
          >
            <ListItemText>FAQ</ListItemText>
            <ListItemText>Возвраты</ListItemText>
            <ListItemText>Инструкция по уходу</ListItemText>
            <ListItemText>Поддержка</ListItemText>
            <ListItemText>Условия</ListItemText>
          </List>
        </Center>
        <Right>
          <Title>Новостная рассылка</Title>
          <Typography
            sx={{
              mt: 3,
              mb: 2,
              fontSize: "15px",
              fontStyle: "normal",
              fontWeight: 400,
              color: "rgb(157, 157, 157)",
            }}
          >
            Подпишитесь, чтобы получать обновления, доступ к
            <br />
            эксклюзивные предложения и многое другое.
          </Typography>
          <Input placeholder="Введите ваш адрес электронной почты" />
        </Right>
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

const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 460px;
  line-height: 24px;
  gap: 1em;
  @media (max-width: 1134px) {
    flex-basis: 280px;
  }
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 auto;
  line-height: 24.75px;
  @media (max-width: 1134px) {
    margin-bottom: 5em;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 300px;
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const A = styled.a`
  color: black;
`;

const Title = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  height: 21.4375px;
  letter-spacing: 2.6px;
  line-height: 21.45px;
  color: rgb(69, 69, 69);
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

const Input = styled.input`
  display: block;
  padding: 12px 14px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 15px;
  outline: none;
  &:focus {
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
`;
