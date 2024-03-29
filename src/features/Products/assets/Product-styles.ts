import Image from 'next/legacy/image'
import Link from 'next/link'
import { SerializedStyles } from '@emotion/react'
import styled from 'styled-components'

export const Title = styled.p`
  font-size: 0.75em;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 1px;
  text-align: center;
  margin: 1em 0em 0.3em 0em;
`

export const Price = styled(Title)`
  transform: translateY(50%);
  opacity: 0;
  transition: 300ms ease;
  margin: 0em;
`

export const SoldOut = styled(Title)`
  color: #ff0000;
`

export const Image1 = styled.div<{ css?: SerializedStyles }>``

export const Image2 = styled(Image1)`
  display: none;
`

export const StyledImage = styled(Image)`
  object-fit: cover;
`

export const InfoContainer = styled.div<{
  inStock: number
  hoveredStatus: boolean
}>`
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
    ${Price} {
      transform: translateY(0);
      opacity: 1;
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

export const StyledLink = styled(Link)<{ images: Array<string> }>``

export const Container = styled.div`
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

  .hover-3d {
    width: 100%;
    height: 100%;
  }
`
