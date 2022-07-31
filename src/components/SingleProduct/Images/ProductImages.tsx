import React from 'react'
import { useState } from 'react'
import styled, { keyframes } from 'styled-components'

import { devices } from '../../../data'
import { ProductImage } from './ProductImage'
import {
  handleImageSelectionType,
  ProductImagesProps,
} from './ProductImages.model'

export const ProductImages: React.FC<ProductImagesProps> = ({
  productInfo,
}) => {
  const [imgSelections, setImgSelections] = useState([true, false, false])
  const [mainImage, setMainImage] = useState(productInfo?.img?.[0])

  /* изменить основное изображение на изображение, по которому щелкнул пользователь */
  const handleImageSelection: handleImageSelectionType = (
    img,
    selectionNumber
  ) => {
    setMainImage(img)
    setImgSelections((prev) => {
      const newState = prev.map(
        (selection, index) => (selection = index === selectionNumber)
      )
      return newState
    })
  }
  return (
    <ImageContainer>
      <ImageGroup>
        {productInfo?.img?.map((image: string, index: number) => (
          <ProductImage
            key={image}
            img={image}
            active={imgSelections[index] === true}
            selectionNumber={index}
            handleClick={handleImageSelection}
          />
        ))}
      </ImageGroup>
      <MainImage
        alt={productInfo?.title}
        src={mainImage || productInfo?.img?.[0]}
      />
    </ImageContainer>
  )
}

const fadein = keyframes`
0% { opacity: 0; }
25% { opacity: 1; }
`

const MainImage = styled.img`
  width: 430px;
  height: 60vh;
  object-fit: cover;
  padding: 5px;
  transition: 300ms;
  animation-name: ${fadein};
  animation-duration: 8s;
`

const ImageGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
  height: 100%;
  @media only screen and (max-width: ${devices.Desktop}px) {
    width: 50%;
    ${MainImage} {
      height: 70%;
      width: 70%;
    }
  }
  @media only screen and (max-width: ${devices.Laptop}px) {
    flex-direction: column;
    gap: 0.2em;
    margin-top: 4em;
    display: none;

    ${ImageGroup} {
      flex-direction: row;
      justify-content: space-between;
    }
    ${MainImage} {
      max-width: 98%;
      max-height: 60vh;
    }
  }
`
