import { Add, Remove } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { devices } from "../../../data";

export const Quantity = React.memo(({ handleQuantity, quantity }) => {
  return (
    <Container>
      <Remove onClick={() => handleQuantity("remove")} />
      <Amount>{quantity}</Amount>
      <Add onClick={() => handleQuantity("add")} />
    </Container>
  );
});

const Amount = styled.span`
  font-size: 1.1em;
`;

const Container = styled.div`
  display: flex;
  gap: 0.5em;
  align-items: center;
  border: 1px solid #282828;
  flex: 1;
  height: 100%;
  color: #282828;
  font-size: 1em;
  svg {
    width: 1.7em;
    height: 1.7em;
    padding: 0.3em;
    &:hover {
      cursor: pointer;
    }
  }

  @media only screen and (max-width: ${devices.Desktop}px) {
    font-size: 13px;
  }

  @media only screen and (max-width: ${devices.Tablet}px) {
    width: 105px;
  }
`;
