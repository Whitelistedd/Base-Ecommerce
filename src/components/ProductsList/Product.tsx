import React, { useState } from 'react'
import Link from 'next/link'
import styled, { keyframes } from 'styled-components'
import Image from 'next/image'

import { devices } from '../../data'
import { ProductProps } from './ProductsList.model'

export const Product: React.FC<ProductProps> = ({ item }) => {
  const [hoveredStatus, setHoveredStatus] = useState(false)
  return (
    <Container
      className="Product"
      onMouseEnter={() => setHoveredStatus(true)}
      onMouseLeave={() => setHoveredStatus(false)}
    >
      <StyledLink images={item.img} href={`/product/${item._id}`}>
        <InfoContainer
          className="ProductInfo"
          hoveredStatus={hoveredStatus}
          inStock={item.inStock}
        >
          <Image1 className="ProductImage">
            {/* если пользователь наводит курсор на изображение, он покажет второе изображение продукта, а если нет, то покажет первое */}
            <StyledImage
              className="Image1"
              src={item.img[0]}
              layout="responsive"
              width={300}
              height={400}
              alt={item.title}
            />
          </Image1>
          <Image2 className="ProductImage">
            <StyledImage
              className="Image2"
              src={item.img[1]}
              layout="responsive"
              width={300}
              height={400}
            />
          </Image2>
          <Title>{item.title}</Title>
          {/* если товар распродан, появится это сообщение */}
          {!item.inStock && <SoldOut>Распродан</SoldOut>}
        </InfoContainer>
      </StyledLink>
    </Container>
  )
}

const Title = styled.p`
  font-size: 1em;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 1px;
  text-align: center;
`

const SoldOut = styled(Title)`
  color: #ff0000;
`

const unFade = keyframes`
 0% {
  opacity: 0;
 }
 100% {
  opacity: 1;
 }
`

const Image1 = styled.div`
  animation: 200ms ${unFade} linear;
`

const Image2 = styled(Image1)`
  display: none;
`

const StyledImage = styled(Image)``

const InfoContainer = styled.div<{ inStock: boolean; hoveredStatus: boolean }>`
  min-width: 300px;
  max-width: 300px;
  height: 100%;
  width: 100%;
  object-fit: cover;

  &:hover {
    ${Image1} {
      display: none;
    }
    ${Image2} {
      display: block;
    }
    cursor: pointer;
  }

  span {
    ${(props) =>
      !props.inStock
        ? `
  filter: grayscale(0.5) brightness(60%); 
  `
        : ``}
  }
`

const StyledLink = styled(Link)<{ images: Array<string> }>``

const Container = styled.div`
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

  @media only screen and (max-width: ${devices.Phone}px) {
    min-width: 300px;
  }
`
