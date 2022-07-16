import React from "react";
import styled, { keyframes } from "styled-components";

import { devices } from "../../../data";

const ProductImage = ({ img, active, selectionNumber, handleClick }) => {
  return (
    <ImageSelect
      className={active ? "active" : ""}
      onClick={(event) => {
        handleClick(img, selectionNumber);
      }}
      src={img}
    />
  );
};

const fadein = keyframes`
0% { opacity: 0; }
25% { opacity: 1; }
`;

const ImageSelect = styled.img`
  width: 4vw;
  object-fit: contain;
  background-color: #f4fbfd;
  padding: 5px;
  animation-name: ${fadein};
  animation-duration: 8s;
  animation-iteration-count: 1;
  &:hover {
    cursor: pointer;
  }

  &.active {
    box-shadow: 0px 0px 0px 2px black;
  }
  @media only screen and (max-width: ${devices.Desktop}px) {
    width: 6vw;
  }
  @media only screen and (max-width: ${devices.Tablet}px) {
    height: 100%;
    object-fit: contain;
    &.active {
      box-shadow: 0px 0px 0px 0px transparent;
    }
  }
`;

export { ProductImage };