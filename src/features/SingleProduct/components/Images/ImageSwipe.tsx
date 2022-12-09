import "swiper/swiper-bundle.css"

import { EffectFade, Navigation } from 'swiper'
import {
  StyledProductImage,
  StyledSwiper,
} from '../../assets/Images/ImageSwipe-styles'

import { ImageSwipeProps } from '../../types/ProductImages.model'
import React from 'react'
import { SwiperSlide } from 'swiper/react'

/* компонент для пролистывания изображений для мобильных устройств */

export const ImageSwipe: React.FC<ImageSwipeProps> = ({ productInfo }) => {
  return (
    <StyledSwiper
      modules={[Navigation, EffectFade]}
      navigation={true}
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
