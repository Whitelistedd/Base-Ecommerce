import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'

import React from 'react'
import styled from 'styled-components'
import { EffectFade, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { devices } from '../../../data'
import { ProductImage } from './ProductImage'
import { ImageSwipeProps } from './ProductImages.model'

/* компонент для пролистывания изображений для мобильных устройств */

export const ImageSwipe: React.FC<ImageSwipeProps> = ({ productInfo }) => {
  return (
    <StyledSwiper
      modules={[Navigation, EffectFade]}
      navigation
      speed={800}
      slidesPerView={1}
      loop
    >
      {productInfo?.img?.map((images, index) => (
        <SwiperSlide key={index}>
          <StyledProductImage img={images} selectionNumber={index} />
        </SwiperSlide>
      ))}
    </StyledSwiper>
  )
}

const StyledProductImage = styled(ProductImage)`
  width: 100%;
  span,
  img {
    object-fit: contain;
    height: 502px !important;
  }
`

const StyledSwiper = styled(Swiper)`
  display: none;
  width: 100%;
  height: 502px;

  .swiper-button-prev,
  .swiper-button-next {
    color: black !important;
  }

  img {
    width: 100%;
  }

  @media only screen and (max-width: ${devices.Tablet}px) {
    display: flex;
  }
`
