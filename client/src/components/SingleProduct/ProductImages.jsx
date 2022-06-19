import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { createRef } from 'react';
import styled, { keyframes } from 'styled-components';

import { devices } from '../../data';
import { ProductImage } from './ProductImage';

export const ProductImages = ({ productInfo }) => {
  const [imgSelections, setImgSelections] = useState([true, false, false]);
  const [mainImage, setMainImage] = useState(productInfo?.img?.[0]);

  const handleImageSelection = (img, selectionNumber) => {
    setMainImage(img);
    setImgSelections((prev) => {
      const newState = prev.map(
        (selection, index) => (selection = index === selectionNumber)
      );
      return newState;
    });
  };
  return (
    <ImageContainer>
      <ImageGroup>
        {productInfo?.img?.map((image, index) => (
          <ProductImage
            key={image}
            img={image}
            active={imgSelections[index] === true}
            selectionNumber={index}
            handleClick={handleImageSelection}
          />
        ))}
      </ImageGroup>
      <Image
        alt={"MEN'S QUARTER ZIP HOODIE"}
        src={mainImage || productInfo?.img?.[0]}
      />
    </ImageContainer>
  );
};

const fadein = keyframes`
0% { opacity: 0; }
25% { opacity: 1; }
`;

const Image = styled.img`
  width: 100%;
  height: 60vh;
  object-fit: cover;
  background-color: #f4fbfd;
  padding: 5px;
  animation-name: ${fadein};
  animation-duration: 8s;
  animation-iteration-count: 1;
`;

const ImageGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
  @media only screen and (max-width: ${devices.Desktop}px) {
    width: 50%;
    ${Image} {
      height: 70%;
      width: 70%;
    }
  }
  @media only screen and (max-width: ${devices.Tablet}px) {
    flex-direction: column;
    gap: 0.2em;
    margin-top: 4em;
    display: none;

    ${ImageGroup} {
      flex-direction: row;
      justify-content: space-between;
    }
    ${Image} {
      max-width: 98%;
      max-height: 60vh;
    }
  }
`;
