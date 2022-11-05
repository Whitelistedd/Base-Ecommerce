import { Loading } from 'components/Loading/Loading'
import { Product } from '../components/Product'
import { Swiper } from 'swiper/react'
import styled from 'styled-components'

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

  @media only screen and (max-width: 684px) {
    padding: 0em 2em;
  }
  /* grid-gap: 2em;
  grid-template-rows: repeat(auto, auto); */
`

export const HomeProduct = styled(Product)`
  padding: 0px;

  @media only screen and (max-width: 1467px) {
    .ProductInfo {
      min-width: 250px;
      max-width: 250px;
    }
  }

  @media only screen and (max-width: 1250px) {
    .ProductInfo {
      min-width: 200px;
      max-width: 200px;
    }
  }

  @media only screen and (max-width: 995px) {
    .ProductInfo {
      min-width: 300px;
      max-width: 300px;
    }
  }

  @media only screen and (max-width: 781px) {
    .ProductInfo {
      min-width: 250px;
      max-width: 250px;
    }
  }

  @media only screen and (max-width: 684px) {
    .ProductInfo {
      width: 60vw;
      max-width: 60vw;
      height: 100%;
    }
    padding: 0em 2em;
  }
`

export const StyledSwiper = styled(Swiper)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: static;

  .swiper-slide {
    display: flex;
    justify-content: center;
    overflow: visible;
  }

  .swiper-wrapper {
    overflow: visible;
    position: none;
    width: 100%;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: black !important;
    background: white;
    top: 40%;
    border-radius: 50%;
    width: 44px;
    box-shadow: 0px 0px 10px black;
    &::after {
      font-size: 1em;
    }
  }

  .swiper-button-next {
    right: -30px;
  }

  img {
    width: 100%;
  }

  .swiper-pagination {
    display: none;
  }

  @media only screen and (max-width: 475px) {
    .swiper-pagination {
      display: block;
      bottom: -85vw;
    }
  }

  @media only screen and (max-width: 415px) {
    .swiper-pagination {
      display: block;
      bottom: -380px;
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
    width: 30px;
    height: 30px;
    color: #616060a7;
  }
  z-index: 1000;
  position: absolute;
  left: 25px;
  right: auto;

  @media only screen and (max-width: 474px) {
    display: none;
  }
`

export const Next = styled(Prev)`
  left: auto;
  right: 25px;
`
