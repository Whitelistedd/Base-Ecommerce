import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";

export const Right = () => {
  return (
    <Container>
      <Title>Новостная рассылка</Title>
      <Typography
        sx={{
          mt: 3,
          mb: 2,
          fontSize: "15px",
          fontStyle: "normal",
          fontWeight: 400,
          color: "rgb(109, 109, 109)",
        }}
      >
        Подпишитесь, чтобы получать обновления, доступ к
        <br />
        эксклюзивные предложения и многое другое.
      </Typography>
      <Input placeholder="Введите ваш адрес электронной почты" />
    </Container>
  );
};

const Title = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  height: 21.4375px;
  letter-spacing: 2.6px;
  line-height: 21.45px;
  color: rgb(69, 69, 69);
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 300px;
`;
