import { Loading } from 'components/States/Loading/Loading'
import { Product } from '../components/Product'
import { Swiper } from 'swiper/react'
import styled from '@emotion/styled'

export const Container = styled.div`
  padding: 20px;
  width: 100%;
  grid-gap: 2em;
  grid-template-rows: repeat(auto, auto);
`

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0em 5em;
  position: relative;

  @media only screen and (max-width: 684px) {
    padding: 0em 2em;
  }
`

export const HomeProduct = styled(Product)`
  padding: 0px;
  flex: 1;
  max-width: 300px;
  min-width: 100px;
  width: 100%;
  height: 100%;
  .ProductInfo {
    max-width: 300px;
    min-width: 100px;
    width: 100%;
    height: 100%;
    flex: 1;
  }

  @media only screen and (max-width: 685px) {
    max-width: 400px;
    .ProductInfo {
      max-width: 400px;
    }
  }
`

export const StyledSwiper = styled(Swiper)`
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  flex-direction: column;
  position: static !important;

  .swiper-slide {
    display: flex;
    justify-content: center;
    overflow: visible;
    height: 100%;
  }

  .swiper-wrapper {
    overflow: visible;
    position: none;
    width: 100%;
  }

  .swiper-button-disabled {
    display: none;
  }

  img {
    width: 100%;
  }

  .swiper-pagination {
    display: none;
    position: unset;
  }

  @media only screen and (max-width: 685px) {
    .swiper-pagination {
      display: block;
    }
  }

  @media only screen and (max-width: 685px) {
    .swiper-pagination {
      display: block;
    }
  }
`

export const ProductsLoading = styled(Loading)`
  width: 100%;
`

export const Prev = styled.p`
  margin-top: -60px;
  background: white;
  box-shadow: 0px 0px 5px #0000007d;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  svg {
    width: 40px;
    height: 40px;
    color: #616060a7;
  }
  z-index: 1000;
  position: absolute;
  left: 25px;
  right: auto;
  transition: 300ms ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }

  @media only screen and (max-width: 685px) {
    display: none;
  }
`

export const Next = styled(Prev)`
  left: auto;
  right: 25px;
`
