import React from 'react'
import styled, { keyframes } from 'styled-components'
import Image from 'next/image'

import { devices } from '../../../data'
import { ProductImageProps } from './ProductImages.model'

const ProductImage: React.FC<ProductImageProps> = ({
  img,
  active,
  selectionNumber,
  handleClick,
  className,
}) => {
  return (
    <Container
      className={`${active ? 'active' : ''} ${className ? className : ''}`}
      onClick={() => {
        handleClick && handleClick(img, selectionNumber)
      }}
    >
      <ImageSelect layout="responsive" width={46} height={61} src={img} />
    </Container>
  )
}

const fadein = keyframes`
0% { opacity: 0; }
25% { opacity: 1; }
`

const ImageSelect = styled(Image)``

const Container = styled.div`
  min-width: 80px;
  min-height: 80px;
  width: 4vw;
  object-fit: contain;
  transition: 300ms ease;
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
`

export { ProductImage }
