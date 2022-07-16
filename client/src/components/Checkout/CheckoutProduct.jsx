import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { devices } from "../../data";

export const CheckoutProduct = ({ item }) => {
  return (
    <Container>
      <Item>
        {/* компонент для отображения количества */}
        <Badge
          badgeContent={item.quantity}
          color="primary"
          sx={{
            ".MuiBadge-colorPrimary": { backgroundColor: "#808080" },
          }}
        >
          <Image src={item.img} />
        </Badge>
        <ItemInfo>
          <ItemName>{item.title}</ItemName>
          <ItemExtraInfo>
            {item.size} / {item.color}
          </ItemExtraInfo>
        </ItemInfo>
      </Item>
      <Price>₽{item.price * item.quantity}</Price>
    </Container>
  );
};

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

const Price = styled.p`
  color: rgb(50, 50, 50);
  font-weight: 600;
  margin: 0px;
  font-size: 15px;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

const ItemName = styled.p`
  font-weight: 700;
  font-size: 14px;
`;

const Image = styled.img`
  width: 4vw;
`;

const ItemExtraInfo = styled.p`
  font-size: 12px;
  color: grey;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: ${devices.Laptop}px) {
    ${Image} {
      width: 6vw;
    }
  }

  @media only screen and (max-width: ${devices.Tablet}px) {
    ${Image} {
      width: 8vw;
    }
  }
`;
