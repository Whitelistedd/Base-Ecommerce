/* eslint-disable @typescript-eslint/no-explicit-any */

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import {
  Container,
  HomeContainer,
  HomeProduct,
  Next,
  Prev,
  ProductsLoading,
  StyledSwiper,
} from '../assets/Products-styles'
import { Navigation, Pagination } from 'swiper'
import { ProductDataType, filtersType } from 'types/GlobalTypes.model'
import React, { useMemo, useState } from 'react'

import { Failed } from 'components/Failed/Failed'
import { Product } from './Product'
import { ProductsProps } from '../types/Products'
import { SwiperSlide } from 'swiper/react'
import { useMediaQuery } from '@mui/material'

export const Products: React.FC<ProductsProps> = ({
  className,
  HomePage,
  products,
  status,
}) => {
  const LaptopQuery = useMediaQuery('(max-width:1200px)')
  const TabletQuery = useMediaQuery('(max-width:869px)')
  const PhoneQuery = useMediaQuery('(max-width:685px)')

  /* если продукты все еще загружаются, тогда он покажет этот компонент загрузки */
  if (status === 'loading') {
    return <ProductsLoading />
  }

  if (status === 'error') {
    return <Failed />
  }

  return (
    <>
      {/* если страница не является домашней страницей, будут показаны все продукты, если это домашняя страница, будут показаны только первые 4 */}
      {!HomePage ? (
        <Container className={className}>
          {products.map((item: ProductDataType) => (
            <Product item={item} key={item._id} />
          ))}
        </Container>
      ) : (
        products && (
          <HomeContainer>
            <StyledSwiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={
                PhoneQuery ? 1 : TabletQuery ? 2 : LaptopQuery ? 3 : 4
              }
              pagination={{
                enabled: true,
              }}
              navigation={{
                enabled: true,
                nextEl: '.next',
                prevEl: '.prev',
              }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <Prev className="prev">
                <ChevronLeft />
              </Prev>
              {!HomePage
                ? products.map((item: ProductDataType) => (
                    <Product item={item} key={item._id} />
                  ))
                : products &&
                  products?.slice(0, 6).map((item: ProductDataType) => (
                    <SwiperSlide key={item._id}>
                      <HomeProduct item={item} key={item._id} />
                    </SwiperSlide>
                  ))}
              <Next className="next">
                <ChevronRight />
              </Next>
            </StyledSwiper>
          </HomeContainer>
        )
      )}
    </>
  )
}
