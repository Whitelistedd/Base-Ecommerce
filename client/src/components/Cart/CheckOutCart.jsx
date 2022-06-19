import Badge from '@mui/material/Badge';
import React from 'react';
import styled from 'styled-components';

import { devices } from '../../data';

export const CheckOutCart = ({ cart, shipping }) => {
  return (
    <CheckOut>
      <CheckoutWrap>
        {cart.products.map((item, index) => (
          <CartItems key={index}>
            <Item>
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
          </CartItems>
        ))}
        <CostWrap>
          <CostItem>
            <CostTitle>Subtotal</CostTitle>
            <Price>₽{cart.total}</Price>
          </CostItem>
          <CostItem>
            <CostTitle>Shipping</CostTitle>
            <Price>₽{shipping}</Price>
          </CostItem>
        </CostWrap>
        <CostItem>
          <TotalTitle>Total</TotalTitle>
          <TotalCost>₽{cart.total + shipping}</TotalCost>
        </CostItem>
      </CheckoutWrap>
    </CheckOut>
  );
};

const CheckoutWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  gap: 2em;
`;

const CostWrap = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #e1e1e1;
  border-bottom: 1px solid #e1e1e1;
  padding: 1em 0em;
  gap: 0.5em;
`;
const CostItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CartItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
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

const CostTitle = styled.p`
  font-size: 14px;
  margin: 0px;
  color: rgb(83, 83, 83);
`;

const Price = styled.p`
  color: rgb(50, 50, 50);
  font-weight: 600;
  margin: 0px;
  font-size: 15px;
`;

const TotalTitle = styled.p`
  color: rgb(83, 83, 83);
  margin: 0px;
`;

const TotalCost = styled.p`
  font-weight: 500;
  margin: 0px;
  font-size: 20px;
`;

const CheckOut = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: 4em;
  padding-left: 4em;
  background: #fafafa;
  @media only screen and (max-width: ${devices.Laptop}px) {
    ${CheckoutWrap} {
      width: 90%;
    }
    ${Image} {
      width: 6vw;
    }
  }
  @media only screen and (max-width: ${devices.Tablet}px) {
    padding: 4em 0em 0em 0em;
    height: 50vh;
    background-color: white;
    align-items: center;
    ${Image} {
      width: 8vw;
    }
    ${CheckoutWrap} {
      width: 80%;
    }
  }
`;
