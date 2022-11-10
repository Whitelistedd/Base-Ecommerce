import { Swiper } from 'swiper/react'
import { devices } from 'data/MediaQueries'
import styled from '@emotion/styled'

export const Arrows = styled.span`
  display: inline-block;
  width: 50%;
  padding-top: 20px;
`

export const StyledSwiper = styled(Swiper)`
  margin-top: 20px;
  .swiper-slide {
    height: auto;
  }
`

export const ReviewsWrap = styled.div``

export const Desc = styled.p`
  font-size: 0.9em;
  opacity: 0.7;
  margin: 0px;
`

export const Details = styled.div``

export const Container = styled.div`
  width: 100%;
  padding: 0 165px;

  @media only screen and (max-width: 1400px) {
    padding: 0 125px;
  }

  @media only screen and (max-width: ${devices.Desktop}px) {
    padding: 0 80px;
  }
  @media only screen and (max-width: ${devices.Laptop}px) {
    padding: 0 70px;
  }
  @media only screen and (max-width: ${devices.Tablet}px) {
    padding: 0 30px;
  }
`
