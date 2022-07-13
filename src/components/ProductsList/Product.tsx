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
      onMouseEnter={() => setHoveredStatus(true)}
      onMouseLeave={() => setHoveredStatus(false)}
    >
      <StyledLink images={item.img} href={`/product/${item._id}`}>
        <InfoContainer inStock={item.inStock}>
          {/* если пользователь наводит курсор на изображение, он покажет второе изображение продукта, а если нет, то покажет первое */}
          {!hoveredStatus ? (
            <StyledImage
              className="Image"
              src={item.img[0]}
              layout="responsive"
              width={300}
              height={400}
              alt={item.title}
            />
          ) : (
            <StyledImage
              className="Image"
              src={item.img[1]}
              layout="responsive"
              width={300}
              height={400}
            />
          )}
          <Title>{item.title}</Title>
          {/* если товар распродан, появится это сообщение */}
          {!item.inStock && <SoldOut>Sold Out</SoldOut>}
        </InfoContainer>
      </StyledLink>
    </Container>
  )
}

const Title = styled.p`
  font-size: 16px;
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
    opacity: 0%
  }
  100% {
    opacity: 100%
  }
`

const StyledImage = styled(Image)``

const InfoContainer = styled.div<{ inStock: boolean }>`
  min-width: 300px;
  max-width: 300px;
  height: 100%;
  width: 100%;
  object-fit: cover;
  animation: ${unFade} 200ms linear;

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

  &:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: ${devices.Phone}px) {
    min-width: 300px;
  }
`
