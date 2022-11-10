import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

import {
  Arrows,
  Container,
  Desc,
  Details,
  ReviewsWrap,
  StyledSwiper,
} from '../assets/Reviews-styles'
import { Autoplay, Navigation } from 'swiper'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Review } from './Review'
import { ReviewsProps } from '../types/Reviews'
import { Stars } from 'components/Elements/Stars/Stars'
import { devices } from 'data/MediaQueries'
import styled from '@emotion/styled'
import { useMediaQuery } from '@mui/material'
import { useReviewsList } from '../hooks/useReviews'

export const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  const Laptop = useMediaQuery('(max-width: 1000px)')

  const { data, error } = useReviewsList(reviews)

  const Phone = useMediaQuery('(max-width: 800px)')

  return (
    <Container>
      <Details>
        <Desc>Let customers speak for us</Desc>
        <Stars amount={5} />
        <Desc>They all love it!</Desc>
      </Details>
      <ReviewsWrap>
        <StyledSwiper
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          slidesPerView={Phone ? 1 : Laptop ? 2 : 3}
          navigation={{
            enabled: true,
            nextEl: '.next',
            prevEl: '.prev',
          }}
          autoplay={{
            delay: 5000,
          }}
          onSlideChange={() => console.log('slide change')}
        >
          {data?.map((review) => (
            <SwiperSlide>
              <Review
                title={review.title}
                desc={review.desc}
                stars={5}
                date={review.date}
                product={review.product}
              />
            </SwiperSlide>
          ))}
          <Arrows className="prev">
            <ChevronLeft sx={{ fontSize: 50, float: 'right' }} />
          </Arrows>
          <Arrows className="next">
            <ChevronRight sx={{ fontSize: 50 }} />
          </Arrows>
        </StyledSwiper>
      </ReviewsWrap>
    </Container>
  )
}
