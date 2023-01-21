import 'swiper/swiper-bundle.css'

import {
  Arrows,
  Container,
  Desc,
  Details,
  ReviewsWrap,
  StyledSwiper,
} from '../assets/Reviews-styles'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import SwiperCore, { Navigation, Pagination } from 'swiper'

import { Review } from './Review'
import { ReviewsProps } from '../types/Reviews'
import { Stars } from '@/components/Elements/Stars'
import { SwiperSlide } from 'swiper/react'

SwiperCore.use([Navigation, Pagination])

export const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  return (
    <Container>
      <Details>
        <Desc>Let customers speak for us</Desc>
        <Stars amount={5} />
        <Desc>They all love it!</Desc>
      </Details>
      <ReviewsWrap>
        <StyledSwiper
          spaceBetween={10}
          breakpoints={{
            1000: {
              slidesPerView: 2,
            },

            0: {
              slidesPerView: 1,
            },
          }}
          slidesPerView={3}
          navigation={{
            nextEl: '.next',
            prevEl: '.prev',
          }}
          autoplay={{
            delay: 5000,
          }}
        >
          {reviews?.map((review) => (
            <SwiperSlide key={review._id}>
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
