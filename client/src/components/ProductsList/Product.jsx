import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { devices } from '../../data';

export const Product = ({ item }) => {
  const [hoveredStatus, setHoveredStatus] = useState(false);

  return (
    <StyledLink
      onMouseEnter={() => setHoveredStatus(true)}
      onMouseLeave={() => setHoveredStatus(false)}
      images={item.img}
      to={`/product/${item._id}`}
    >
      <Image
        className="Image"
        src={hoveredStatus ? item.img[1] : item.img[0]}
      />
      <Title>{item.title}</Title>
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

const Image = styled.img`
  min-width: 300px;
  max-width: 300px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledLink = styled(Link)`
  color: black;
  display: flex;
  gap: 0.5em;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: 500ms ease;
  flex-direction: column;
  text-decoration: none;
  padding: 1em;

  height: 100%;
  @media only screen and (max-width: ${devices.mobile}px) {
    min-width: 300px;
  }
`;
