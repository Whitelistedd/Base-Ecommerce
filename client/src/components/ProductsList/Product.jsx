import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import { devices } from "../../data";

export const Product = ({ item }) => {
  const [hoveredStatus, setHoveredStatus] = useState(false);
  return (
    <StyledLink
      onMouseEnter={() => setHoveredStatus(true)}
      onMouseLeave={() => setHoveredStatus(false)}
      images={item.img}
      to={`/product/${item._id}`}
    >
      {/* если пользователь наводит курсор на изображение, он покажет второе изображение продукта, а если нет, то покажет первое */}
      {!hoveredStatus && (
        <Image
          className="Image"
          src={item.img[0]}
          alt={item.title}
          inStock={item.inStock}
        />
      )}
      {hoveredStatus && (
        <Image className="Image" src={item.img[1]} inStock={item.inStock} />
      )}
      <Title>{item.title}</Title>
      {/* если товар распродан, появится это сообщение */}
      {!item.inStock && <SoldOut>Sold Out</SoldOut>}
    </StyledLink>
  );
};

const Title = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 1px;
  text-align: center;
`;

const SoldOut = styled(Title)`
  color: #ff0000;
`;

const unFade = keyframes`
  0% {
    opacity: 0%
  }
  100% {
    opacity: 100%
  }
`;

const Image = styled.img`
  min-width: 300px;
  max-width: 300px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: ${unFade} 200ms linear;
  ${(props) =>
    !props.inStock
      ? `
  filter: grayscale(0.5) brightness(60%); 
  `
      : ``}
`;

const StyledLink = styled(Link)`
  color: black;
  display: flex;
  gap: 0.5em;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  text-decoration: none;
  padding: 1em;
  box-shadow: 0px 0px 0px black;
  border-radius: 10px;
  height: 100%;
  @media only screen and (max-width: ${devices.mobile}px) {
    min-width: 300px;
  }
`;
