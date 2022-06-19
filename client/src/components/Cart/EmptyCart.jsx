import { Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const EmptyCart = () => {
  return (
    <EmptyContainer>
      <Typography
        sx={{
          fontSize: 15,
          color: "#979696",
          letterSpacing: ".2em",
          fontWeight: "700",
        }}
      >
        ВАША КОРЗИНА ПУСТА
      </Typography>
      <Link to={"/products/all"}>
        <StyledButton>ДОБАВИТЬ ПРОДУКТЫ</StyledButton>
      </Link>
    </EmptyContainer>
  );
};

const StyledButton = styled.button`
  padding: 0.7em 1.7em;
  outline: none;
  border: none;
  background-color: rgb(40, 40, 40);
  color: white;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  height: 49px;
  letter-spacing: 3px;
  opacity: 1;
  transition: 400ms ease;
  &:hover {
    opacity: 0.9;
    transition: 400ms ease;
    cursor: pointer;
  }
`;

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
`;
